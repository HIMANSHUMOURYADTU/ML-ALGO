# Delivery Time Prediction

Predict how many minutes a food order will take, using only information that exists when the order is placed.

The selected model is a scikit-learn `GradientBoostingRegressor`. On a held-out 20% of the 8,000 labelled orders it reaches **3.35345 MAE**, against a mean-prediction baseline of **7.63080 MAE**. That is a **56%** reduction in absolute error. The same pipeline, refit on all 8,000 orders, writes one prediction for each of the 2,000 test orders in `predictions.csv`.

Open `index.html` for the visual walkthrough: the preprocessing pipeline, feature importances, model comparison, and the real tree-by-tree path from `staged_predict`.

## Result

| Model | Validation MAE (minutes) | Decision |
| --- | ---: | --- |
| Mean baseline | 7.63080 | Reference |
| Linear regression | 3.64506 | Benchmark |
| Random forest | 3.65987 | Benchmark |
| Gradient boosting | **3.35345** | Selected |
| Gradient boosting, grid search | 3.36462 | Rejected on the held-out set |

The validation MAE above was reproduced locally from `train_predict.py` on scikit-learn 1.7.1. Linear regression, random forest, PCA, and the grid-search numbers come from the notebook experiments.

Test labels are not in this bundle, so there is no test MAE. `predictions.csv` is the submission file.

## What the model is allowed to see

`delivery_minutes` is the target and is never a feature. `order_id` and `restaurant_id` are identifiers and are dropped. The raw timestamp `order_placed_at` is replaced by:

| Feature | Rule |
| --- | --- |
| `hour`, `day_of_week`, `month` | Taken from the timestamp |
| `is_weekend` | Saturday or Sunday |
| `is_lunch_rush` | Hour 12 through 14, inclusive |
| `is_dinner_rush` | Hour 18 through 21, inclusive |
| `is_rush_hour` | Lunch or dinner rush |

Numerical inputs are median-imputed and standardised. Categorical inputs (`cuisine`, `city_zone`, `courier_vehicle`, `weather`) use the fill token `Unknown`, then one-hot encoding with unknown categories ignored. Every transformer sits inside a pipeline fitted on training rows only.

Final estimator:

```python
GradientBoostingRegressor(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=3,
    random_state=42,
)
```

## What was tried and not kept

- Manual interactions (`items × prep`, `distance × rush`, `distance × prep`) raised the validation error relative to the plain feature set. They are not in the final model.
- PCA on `items_count` and `order_subtotal` landed near **3.4733 MAE** and was dropped.
- `GridSearchCV` (5-fold, negative MAE) preferred `learning_rate=0.08`, `max_depth=2`, `min_samples_leaf=1`, `n_estimators=400`, `subsample=1.0`. Best CV MAE was **3.51194**. The same held-out split scored **3.36462**, which is worse than 3.35345, so the untuned configuration was kept.

After that selection, the pipeline was refit on all 8,000 labelled orders and applied to the test file.

## Repository layout

```
deliveryalgo/
├── index.html              # project site
├── assets/                 # styles, behaviour, measured metrics
├── predictions.csv         # order_id, predicted_minutes
├── deliveries_train.csv    # 8,000 labelled orders
├── deliveries_test.csv     # 2,000 orders to score
├── analysis.ipynb          # exploratory notebook
├── train_predict.py        # reproduces the final model and CSV
└── requirements.txt
```

## Reproduce

```bash
pip install -r requirements.txt
python train_predict.py
```

The script prints the baseline MAE and the final validation MAE, then overwrites `predictions.csv` and `assets/metrics.js`.

Checked output from this environment:

- Train / validation split: 6,400 / 1,600 (`test_size=0.2`, `random_state=42`)
- Baseline MAE: 7.63080
- Final validation MAE: 3.35345
- `predictions.csv`: 2,000 rows, 2,000 unique `order_id`s, no missing predictions

## Error worth knowing

Validation order `702403` took 137 minutes. The model predicts about 30.1. Distance is 2.6 km and prep time is 13.3 minutes, so the order sits far outside the pattern the trees learned. A strong average MAE does not mean every order is close.
