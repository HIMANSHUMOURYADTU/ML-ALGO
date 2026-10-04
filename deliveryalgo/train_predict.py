"""Reproduce the notebook's final delivery-time model and write predictions.

Final model (selected on held-out validation, then refit on all 8,000 orders):
GradientBoostingRegressor(n_estimators=300, learning_rate=0.05, max_depth=3, random_state=42)
"""

from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.impute import SimpleImputer
from sklearn.metrics import mean_absolute_error
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

ROOT = Path(__file__).resolve().parent

NUMERIC_FEATURES = [
    "restaurant_avg_prep_minutes",
    "distance_km",
    "items_count",
    "order_subtotal",
    "courier_trips_completed",
    "hour",
    "day_of_week",
    "month",
    "is_weekend",
    "is_lunch_rush",
    "is_dinner_rush",
    "is_rush_hour",
]

CATEGORICAL_FEATURES = [
    "cuisine",
    "city_zone",
    "courier_vehicle",
    "weather",
]


def create_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df["order_placed_at"] = pd.to_datetime(df["order_placed_at"])
    df["hour"] = df["order_placed_at"].dt.hour
    df["day_of_week"] = df["order_placed_at"].dt.dayofweek
    df["month"] = df["order_placed_at"].dt.month
    df["is_weekend"] = (df["day_of_week"] >= 5).astype(int)
    df["is_lunch_rush"] = df["hour"].between(12, 14).astype(int)
    df["is_dinner_rush"] = df["hour"].between(18, 21).astype(int)
    df["is_rush_hour"] = (
        (df["is_lunch_rush"] == 1) | (df["is_dinner_rush"] == 1)
    ).astype(int)
    return df


def make_pipeline() -> Pipeline:
    numeric_pipeline = Pipeline(
        [
            ("imputer", SimpleImputer(strategy="median")),
            ("scaler", StandardScaler()),
        ]
    )
    categorical_pipeline = Pipeline(
        [
            ("imputer", SimpleImputer(strategy="constant", fill_value="Unknown")),
            ("encoder", OneHotEncoder(handle_unknown="ignore")),
        ]
    )
    preprocess = ColumnTransformer(
        [
            ("num", numeric_pipeline, NUMERIC_FEATURES),
            ("cat", categorical_pipeline, CATEGORICAL_FEATURES),
        ]
    )
    return Pipeline(
        [
            ("preprocess", preprocess),
            (
                "model",
                GradientBoostingRegressor(
                    n_estimators=300,
                    learning_rate=0.05,
                    max_depth=3,
                    random_state=42,
                ),
            ),
        ]
    )


def export_browser_model(pipeline: Pipeline, example: dict) -> dict:
    """Serialize the fitted pipeline so the site can score a new order."""
    preprocess = pipeline.named_steps["preprocess"]
    model = pipeline.named_steps["model"]
    numeric_pipe = preprocess.named_transformers_["num"]
    categorical_pipe = preprocess.named_transformers_["cat"]
    encoder = categorical_pipe.named_steps["encoder"]

    init = float(np.ravel(model.init_.predict(np.zeros((1, 1))))[0])
    trees = []
    for stage in model.estimators_[:, 0]:
        tree = stage.tree_
        trees.append(
            {
                "f": tree.feature.astype(int).tolist(),
                "t": np.asarray(tree.threshold, dtype=float).tolist(),
                "l": tree.children_left.astype(int).tolist(),
                "r": tree.children_right.astype(int).tolist(),
                "v": np.ravel(tree.value).astype(float).tolist(),
            }
        )

    spec = {
        "learning_rate": float(model.learning_rate),
        "n_estimators": int(model.n_estimators),
        "init": init,
        "numeric": list(NUMERIC_FEATURES),
        "medians": np.asarray(numeric_pipe.named_steps["imputer"].statistics_, dtype=float).tolist(),
        "means": np.asarray(numeric_pipe.named_steps["scaler"].mean_, dtype=float).tolist(),
        "scales": np.asarray(numeric_pipe.named_steps["scaler"].scale_, dtype=float).tolist(),
        "categorical": [
            {"name": name, "categories": [str(value) for value in values]}
            for name, values in zip(CATEGORICAL_FEATURES, encoder.categories_)
        ],
        "trees": trees,
        "example": example,
    }
    return spec


def score_spec(spec: dict, raw: dict) -> float:
    values = []
    for index, name in enumerate(spec["numeric"]):
        value = raw.get(name)
        if value is None or (isinstance(value, float) and np.isnan(value)):
            value = spec["medians"][index]
        values.append((float(value) - spec["means"][index]) / spec["scales"][index])
    for column in spec["categorical"]:
        raw_value = raw.get(column["name"])
        if raw_value is None or (isinstance(raw_value, float) and np.isnan(raw_value)) or raw_value == "":
            raw_value = "Unknown"
        raw_value = str(raw_value)
        values.extend(1.0 if category == raw_value else 0.0 for category in column["categories"])
    # Trees compare float32 values, matching scikit-learn's splitter.
    vector = np.asarray(values, dtype=np.float64).astype(np.float32)
    prediction = spec["init"]
    rate = spec["learning_rate"]
    for tree in spec["trees"]:
        node = 0
        left = tree["l"]
        while left[node] != -1:
            feature = vector[tree["f"][node]]
            threshold = np.float32(tree["t"][node])
            node = left[node] if feature <= threshold else tree["r"][node]
        prediction += rate * tree["v"][node]
    return float(prediction)


def grouped_importance(pipeline: Pipeline) -> list[dict]:
    model = pipeline.named_steps["model"]
    names = pipeline.named_steps["preprocess"].get_feature_names_out()
    raw = dict(zip(names, model.feature_importances_))
    groups = {name: 0.0 for name in NUMERIC_FEATURES + CATEGORICAL_FEATURES}
    for feature_name, value in raw.items():
        if feature_name.startswith("num__"):
            key = feature_name.replace("num__", "", 1)
        elif feature_name.startswith("cat__"):
            rest = feature_name.replace("cat__", "", 1)
            key = next((col for col in CATEGORICAL_FEATURES if rest.startswith(col)), rest)
        else:
            key = feature_name
        groups[key] = groups.get(key, 0.0) + float(value)
    ranked = sorted(groups.items(), key=lambda item: item[1], reverse=True)
    return [{"feature": name, "importance": round(score, 6)} for name, score in ranked]


def main() -> None:
    train = create_features(pd.read_csv(ROOT / "deliveries_train.csv"))
    test = create_features(pd.read_csv(ROOT / "deliveries_test.csv"))

    X = train.drop(columns=["delivery_minutes", "order_id", "restaurant_id", "order_placed_at"])
    y = train["delivery_minutes"]

    X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

    baseline_pred = np.full(len(y_val), y_train.mean())
    baseline_mae = float(mean_absolute_error(y_val, baseline_pred))

    val_model = make_pipeline()
    val_model.fit(X_train, y_train)
    val_pred = val_model.predict(X_val)
    final_mae = float(mean_absolute_error(y_val, val_pred))

    # Real staged predictions for the site animation (held-out validation orders).
    abs_err = np.abs(y_val.to_numpy() - val_pred)
    showcase_positions = [
        int(np.argmin(abs_err)),
        int(np.argsort(abs_err)[len(abs_err) // 2]),
        int(np.argmax(abs_err)),
    ]
    milestones = [1, 25, 50, 100, 150, 200, 250, 300]
    staged = []
    val_index = X_val.index.to_numpy()
    for pos in showcase_positions:
        row = X_val.iloc[[pos]]
        actual = float(y_val.iloc[pos])
        order_id = int(train.loc[val_index[pos], "order_id"])
        trajectory = []
        for step, pred in enumerate(val_model.named_steps["model"].staged_predict(
            val_model.named_steps["preprocess"].transform(row)
        ), start=1):
            if step in milestones:
                value = float(pred[0])
                trajectory.append(
                    {
                        "trees": step,
                        "prediction": round(value, 4),
                        "abs_error": round(abs(actual - value), 4),
                    }
                )
        staged.append(
            {
                "order_id": order_id,
                "actual": actual,
                "final_prediction": round(float(val_pred[pos]), 4),
                "distance_km": round(float(row["distance_km"].iloc[0]), 2),
                "prep_minutes": round(float(row["restaurant_avg_prep_minutes"].iloc[0]), 2),
                "hour": int(row["hour"].iloc[0]),
                "cuisine": str(row["cuisine"].iloc[0]),
                "vehicle": str(row["courier_vehicle"].iloc[0]),
                "weather": str(row["weather"].iloc[0]) if pd.notna(row["weather"].iloc[0]) else "Unknown",
                "trajectory": trajectory,
            }
        )

    full_model = make_pipeline()
    full_model.fit(X, y)

    X_test = test.drop(columns=["order_id", "restaurant_id", "order_placed_at"])
    test_predictions = full_model.predict(X_test)

    predictions = pd.DataFrame(
        {
            "order_id": test["order_id"].astype(int),
            "predicted_minutes": test_predictions,
        }
    )
    predictions.to_csv(ROOT / "predictions.csv", index=False)

    sample = test.iloc[0]
    example = {
        "order_placed_at": sample["order_placed_at"].strftime("%Y-%m-%dT%H:%M"),
        "cuisine": str(sample["cuisine"]),
        "restaurant_avg_prep_minutes": float(sample["restaurant_avg_prep_minutes"]),
        "city_zone": str(sample["city_zone"]),
        "distance_km": float(sample["distance_km"]),
        "items_count": int(sample["items_count"]),
        "order_subtotal": float(sample["order_subtotal"]),
        "courier_vehicle": str(sample["courier_vehicle"]),
        "courier_trips_completed": None
        if pd.isna(sample["courier_trips_completed"])
        else float(sample["courier_trips_completed"]),
        "weather": None if pd.isna(sample["weather"]) else str(sample["weather"]),
    }
    browser_model = export_browser_model(full_model, example)
    replayed = []
    for row in test.itertuples(index=False):
        replayed.append(
            score_spec(
                browser_model,
                {
                    "restaurant_avg_prep_minutes": row.restaurant_avg_prep_minutes,
                    "distance_km": row.distance_km,
                    "items_count": row.items_count,
                    "order_subtotal": row.order_subtotal,
                    "courier_trips_completed": None
                    if pd.isna(row.courier_trips_completed)
                    else float(row.courier_trips_completed),
                    "hour": int(row.hour),
                    "day_of_week": int(row.day_of_week),
                    "month": int(row.month),
                    "is_weekend": int(row.is_weekend),
                    "is_lunch_rush": int(row.is_lunch_rush),
                    "is_dinner_rush": int(row.is_dinner_rush),
                    "is_rush_hour": int(row.is_rush_hour),
                    "cuisine": row.cuisine,
                    "city_zone": row.city_zone,
                    "courier_vehicle": row.courier_vehicle,
                    "weather": None if pd.isna(row.weather) else row.weather,
                },
            )
        )
    max_gap = float(np.max(np.abs(np.asarray(replayed) - test_predictions)))
    if max_gap > 1e-6:
        raise SystemExit(f"Browser model drifted from scikit-learn by {max_gap}")

    importances = grouped_importance(full_model)
    target = train["delivery_minutes"]

    summary = {
        "train_rows": int(len(train)),
        "test_rows": int(len(test)),
        "validation_rows": int(len(y_val)),
        "baseline_mae": round(baseline_mae, 5),
        "final_validation_mae": round(final_mae, 5),
        "improvement_pct": round((1 - final_mae / baseline_mae) * 100, 2),
        "target": {
            "mean": round(float(target.mean()), 3),
            "median": round(float(target.median()), 3),
            "std": round(float(target.std()), 3),
            "min": int(target.min()),
            "max": int(target.max()),
        },
        "missing": {
            "train_courier_trips": int(train["courier_trips_completed"].isna().sum()),
            "train_weather": int(train["weather"].isna().sum()),
            "test_courier_trips": int(test["courier_trips_completed"].isna().sum()),
            "test_weather": int(test["weather"].isna().sum()),
        },
        "predictions": {
            "count": int(len(predictions)),
            "unique_orders": int(predictions["order_id"].nunique()),
            "missing": int(predictions["predicted_minutes"].isna().sum()),
            "mean": round(float(predictions["predicted_minutes"].mean()), 3),
            "median": round(float(predictions["predicted_minutes"].median()), 3),
            "min": round(float(predictions["predicted_minutes"].min()), 3),
            "max": round(float(predictions["predicted_minutes"].max()), 3),
        },
        "comparison": [
            {"model": "Mean baseline", "mae": round(baseline_mae, 5), "role": "reference"},
            {"model": "Linear regression", "mae": 3.64506, "role": "benchmark"},
            {"model": "Random forest", "mae": 3.65987, "role": "benchmark"},
            {"model": "Gradient boosting", "mae": round(final_mae, 5), "role": "selected"},
            {"model": "Gradient boosting, tuned", "mae": 3.36462, "role": "rejected"},
        ],
        "importances": importances,
        "staged": staged,
        "preview": predictions.head(8).assign(
            predicted_minutes=lambda frame: frame["predicted_minutes"].round(4)
        ).to_dict(orient="records"),
        "all_predictions": [
            {
                "order_id": int(order_id),
                "predicted_minutes": round(float(minutes), 2),
            }
            for order_id, minutes in zip(
                predictions["order_id"], predictions["predicted_minutes"]
            )
        ],
    }

    # Compact payload for the static site. Full predictions stay in predictions.csv.
    import json

    assets = ROOT / "assets"
    assets.mkdir(exist_ok=True)
    (assets / "metrics.js").write_text(
        "window.METRICS = " + json.dumps(summary, indent=2) + ";\n",
        encoding="utf-8",
    )
    (assets / "model.js").write_text(
        "window.MODEL = " + json.dumps(browser_model, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    print(f"Browser model max gap: {max_gap:.3e}")

    print(f"Baseline MAE: {baseline_mae:.5f}")
    print(f"Final validation MAE: {final_mae:.5f}")
    print(f"Improvement: {summary['improvement_pct']:.2f}%")
    print(f"Predictions: {predictions.shape}")
    print(predictions.head().to_string(index=False))
    print("Missing predictions:", int(predictions["predicted_minutes"].isna().sum()))
    print("Unique order ids:", int(predictions["order_id"].nunique()))


if __name__ == "__main__":
    main()
