window.METRICS = {
  "train_rows": 8000,
  "test_rows": 2000,
  "validation_rows": 1600,
  "baseline_mae": 7.6308,
  "final_validation_mae": 3.35345,
  "improvement_pct": 56.05,
  "target": {
    "mean": 32.049,
    "median": 31.0,
    "std": 11.145,
    "min": 8,
    "max": 139
  },
  "missing": {
    "train_courier_trips": 329,
    "train_weather": 228,
    "test_courier_trips": 75,
    "test_weather": 51
  },
  "predictions": {
    "count": 2000,
    "unique_orders": 2000,
    "missing": 0,
    "mean": 31.935,
    "median": 31.264,
    "min": 11.25,
    "max": 64.337
  },
  "comparison": [
    {
      "model": "Mean baseline",
      "mae": 7.6308,
      "role": "reference"
    },
    {
      "model": "Linear regression",
      "mae": 3.64506,
      "role": "benchmark"
    },
    {
      "model": "Random forest",
      "mae": 3.65987,
      "role": "benchmark"
    },
    {
      "model": "Gradient boosting",
      "mae": 3.35345,
      "role": "selected"
    },
    {
      "model": "Gradient boosting, tuned",
      "mae": 3.36462,
      "role": "rejected"
    }
  ],
  "importances": [
    {
      "feature": "distance_km",
      "importance": 0.471357
    },
    {
      "feature": "restaurant_avg_prep_minutes",
      "importance": 0.302291
    },
    {
      "feature": "courier_vehicle",
      "importance": 0.044222
    },
    {
      "feature": "order_subtotal",
      "importance": 0.036623
    },
    {
      "feature": "weather",
      "importance": 0.028687
    },
    {
      "feature": "courier_trips_completed",
      "importance": 0.025975
    },
    {
      "feature": "items_count",
      "importance": 0.024511
    },
    {
      "feature": "hour",
      "importance": 0.02323
    },
    {
      "feature": "is_rush_hour",
      "importance": 0.01329
    },
    {
      "feature": "day_of_week",
      "importance": 0.00798
    },
    {
      "feature": "month",
      "importance": 0.007336
    },
    {
      "feature": "cuisine",
      "importance": 0.005553
    },
    {
      "feature": "is_weekend",
      "importance": 0.002811
    },
    {
      "feature": "city_zone",
      "importance": 0.002692
    },
    {
      "feature": "is_dinner_rush",
      "importance": 0.001791
    },
    {
      "feature": "is_lunch_rush",
      "importance": 0.00165
    }
  ],
  "staged": [
    {
      "order_id": 703835,
      "actual": 42.0,
      "final_prediction": 41.9932,
      "distance_km": 6.5,
      "prep_minutes": 16.8,
      "hour": 21,
      "cuisine": "indian",
      "vehicle": "scooter",
      "weather": "clear",
      "trajectory": [
        {
          "trees": 1,
          "prediction": 32.5487,
          "abs_error": 9.4513
        },
        {
          "trees": 25,
          "prediction": 39.3208,
          "abs_error": 2.6792
        },
        {
          "trees": 50,
          "prediction": 41.0762,
          "abs_error": 0.9238
        },
        {
          "trees": 100,
          "prediction": 41.5005,
          "abs_error": 0.4995
        },
        {
          "trees": 150,
          "prediction": 41.4886,
          "abs_error": 0.5114
        },
        {
          "trees": 200,
          "prediction": 41.8471,
          "abs_error": 0.1529
        },
        {
          "trees": 250,
          "prediction": 41.8593,
          "abs_error": 0.1407
        },
        {
          "trees": 300,
          "prediction": 41.9932,
          "abs_error": 0.0068
        }
      ]
    },
    {
      "order_id": 704355,
      "actual": 21.0,
      "final_prediction": 23.4653,
      "distance_km": 2.3,
      "prep_minutes": 11.8,
      "hour": 23,
      "cuisine": "pizza",
      "vehicle": "bike",
      "weather": "clear",
      "trajectory": [
        {
          "trees": 1,
          "prediction": 31.8248,
          "abs_error": 10.8248
        },
        {
          "trees": 25,
          "prediction": 27.66,
          "abs_error": 6.66
        },
        {
          "trees": 50,
          "prediction": 26.5543,
          "abs_error": 5.5543
        },
        {
          "trees": 100,
          "prediction": 24.8948,
          "abs_error": 3.8948
        },
        {
          "trees": 150,
          "prediction": 23.9234,
          "abs_error": 2.9234
        },
        {
          "trees": 200,
          "prediction": 23.7628,
          "abs_error": 2.7628
        },
        {
          "trees": 250,
          "prediction": 23.5696,
          "abs_error": 2.5696
        },
        {
          "trees": 300,
          "prediction": 23.4653,
          "abs_error": 2.4653
        }
      ]
    },
    {
      "order_id": 702403,
      "actual": 137.0,
      "final_prediction": 30.1489,
      "distance_km": 2.6,
      "prep_minutes": 13.3,
      "hour": 12,
      "cuisine": "mexican",
      "vehicle": "scooter",
      "weather": "heavy_rain",
      "trajectory": [
        {
          "trees": 1,
          "prediction": 31.8248,
          "abs_error": 105.1752
        },
        {
          "trees": 25,
          "prediction": 27.8847,
          "abs_error": 109.1153
        },
        {
          "trees": 50,
          "prediction": 28.2443,
          "abs_error": 108.7557
        },
        {
          "trees": 100,
          "prediction": 29.0682,
          "abs_error": 107.9318
        },
        {
          "trees": 150,
          "prediction": 29.3409,
          "abs_error": 107.6591
        },
        {
          "trees": 200,
          "prediction": 29.8851,
          "abs_error": 107.1149
        },
        {
          "trees": 250,
          "prediction": 30.0578,
          "abs_error": 106.9422
        },
        {
          "trees": 300,
          "prediction": 30.1489,
          "abs_error": 106.8511
        }
      ]
    }
  ],
  "preview": [
    {
      "order_id": 700002,
      "predicted_minutes": 33.0132
    },
    {
      "order_id": 700007,
      "predicted_minutes": 30.8845
    },
    {
      "order_id": 700013,
      "predicted_minutes": 50.401
    },
    {
      "order_id": 700029,
      "predicted_minutes": 32.8703
    },
    {
      "order_id": 700030,
      "predicted_minutes": 35.5361
    },
    {
      "order_id": 700040,
      "predicted_minutes": 35.4167
    },
    {
      "order_id": 700046,
      "predicted_minutes": 31.167
    },
    {
      "order_id": 700048,
      "predicted_minutes": 18.1584
    }
  ],
  "all_predictions": [
    {
      "order_id": 700002,
      "predicted_minutes": 33.01
    },
    {
      "order_id": 700007,
      "predicted_minutes": 30.88
    },
    {
      "order_id": 700013,
      "predicted_minutes": 50.4
    },
    {
      "order_id": 700029,
      "predicted_minutes": 32.87
    },
    {
      "order_id": 700030,
      "predicted_minutes": 35.54
    },
    {
      "order_id": 700040,
      "predicted_minutes": 35.42
    },
    {
      "order_id": 700046,
      "predicted_minutes": 31.17
    },
    {
      "order_id": 700048,
      "predicted_minutes": 18.16
    },
    {
      "order_id": 700054,
      "predicted_minutes": 35.26
    },
    {
      "order_id": 700059,
      "predicted_minutes": 27.45
    },
    {
      "order_id": 700064,
      "predicted_minutes": 38.84
    },
    {
      "order_id": 700078,
      "predicted_minutes": 25.23
    },
    {
      "order_id": 700089,
      "predicted_minutes": 34.11
    },
    {
      "order_id": 700091,
      "predicted_minutes": 30.35
    },
    {
      "order_id": 700092,
      "predicted_minutes": 34.95
    },
    {
      "order_id": 700094,
      "predicted_minutes": 44.92
    },
    {
      "order_id": 700114,
      "predicted_minutes": 26.01
    },
    {
      "order_id": 700116,
      "predicted_minutes": 38.4
    },
    {
      "order_id": 700117,
      "predicted_minutes": 31.56
    },
    {
      "order_id": 700118,
      "predicted_minutes": 48.21
    },
    {
      "order_id": 700119,
      "predicted_minutes": 22.09
    },
    {
      "order_id": 700121,
      "predicted_minutes": 29.76
    },
    {
      "order_id": 700123,
      "predicted_minutes": 31.21
    },
    {
      "order_id": 700124,
      "predicted_minutes": 19.06
    },
    {
      "order_id": 700134,
      "predicted_minutes": 34.61
    },
    {
      "order_id": 700136,
      "predicted_minutes": 37.13
    },
    {
      "order_id": 700146,
      "predicted_minutes": 29.15
    },
    {
      "order_id": 700156,
      "predicted_minutes": 22.53
    },
    {
      "order_id": 700158,
      "predicted_minutes": 32.85
    },
    {
      "order_id": 700164,
      "predicted_minutes": 35.01
    },
    {
      "order_id": 700171,
      "predicted_minutes": 18.68
    },
    {
      "order_id": 700180,
      "predicted_minutes": 26.21
    },
    {
      "order_id": 700181,
      "predicted_minutes": 27.43
    },
    {
      "order_id": 700196,
      "predicted_minutes": 26.04
    },
    {
      "order_id": 700197,
      "predicted_minutes": 30.23
    },
    {
      "order_id": 700198,
      "predicted_minutes": 46.07
    },
    {
      "order_id": 700202,
      "predicted_minutes": 25.76
    },
    {
      "order_id": 700222,
      "predicted_minutes": 17.11
    },
    {
      "order_id": 700226,
      "predicted_minutes": 32.71
    },
    {
      "order_id": 700232,
      "predicted_minutes": 32.09
    },
    {
      "order_id": 700233,
      "predicted_minutes": 27.81
    },
    {
      "order_id": 700240,
      "predicted_minutes": 36.25
    },
    {
      "order_id": 700241,
      "predicted_minutes": 34.76
    },
    {
      "order_id": 700242,
      "predicted_minutes": 30.63
    },
    {
      "order_id": 700250,
      "predicted_minutes": 17.6
    },
    {
      "order_id": 700251,
      "predicted_minutes": 28.33
    },
    {
      "order_id": 700253,
      "predicted_minutes": 22.74
    },
    {
      "order_id": 700260,
      "predicted_minutes": 26.27
    },
    {
      "order_id": 700265,
      "predicted_minutes": 24.35
    },
    {
      "order_id": 700268,
      "predicted_minutes": 28.51
    },
    {
      "order_id": 700271,
      "predicted_minutes": 19.78
    },
    {
      "order_id": 700274,
      "predicted_minutes": 47.64
    },
    {
      "order_id": 700277,
      "predicted_minutes": 38.15
    },
    {
      "order_id": 700283,
      "predicted_minutes": 30.63
    },
    {
      "order_id": 700297,
      "predicted_minutes": 30.51
    },
    {
      "order_id": 700302,
      "predicted_minutes": 62.1
    },
    {
      "order_id": 700309,
      "predicted_minutes": 38.54
    },
    {
      "order_id": 700315,
      "predicted_minutes": 41.41
    },
    {
      "order_id": 700316,
      "predicted_minutes": 48.65
    },
    {
      "order_id": 700325,
      "predicted_minutes": 26.8
    },
    {
      "order_id": 700340,
      "predicted_minutes": 23.01
    },
    {
      "order_id": 700345,
      "predicted_minutes": 20.2
    },
    {
      "order_id": 700346,
      "predicted_minutes": 45.93
    },
    {
      "order_id": 700347,
      "predicted_minutes": 48.66
    },
    {
      "order_id": 700350,
      "predicted_minutes": 38.78
    },
    {
      "order_id": 700353,
      "predicted_minutes": 36.19
    },
    {
      "order_id": 700355,
      "predicted_minutes": 35.58
    },
    {
      "order_id": 700357,
      "predicted_minutes": 31.5
    },
    {
      "order_id": 700369,
      "predicted_minutes": 20.38
    },
    {
      "order_id": 700378,
      "predicted_minutes": 31.8
    },
    {
      "order_id": 700388,
      "predicted_minutes": 32.04
    },
    {
      "order_id": 700392,
      "predicted_minutes": 50.16
    },
    {
      "order_id": 700394,
      "predicted_minutes": 29.66
    },
    {
      "order_id": 700395,
      "predicted_minutes": 21.55
    },
    {
      "order_id": 700400,
      "predicted_minutes": 26.77
    },
    {
      "order_id": 700401,
      "predicted_minutes": 31.38
    },
    {
      "order_id": 700404,
      "predicted_minutes": 26.55
    },
    {
      "order_id": 700408,
      "predicted_minutes": 31.03
    },
    {
      "order_id": 700409,
      "predicted_minutes": 16.08
    },
    {
      "order_id": 700415,
      "predicted_minutes": 33.65
    },
    {
      "order_id": 700416,
      "predicted_minutes": 58.5
    },
    {
      "order_id": 700421,
      "predicted_minutes": 40.51
    },
    {
      "order_id": 700425,
      "predicted_minutes": 46.47
    },
    {
      "order_id": 700438,
      "predicted_minutes": 30.41
    },
    {
      "order_id": 700440,
      "predicted_minutes": 23.7
    },
    {
      "order_id": 700442,
      "predicted_minutes": 15.59
    },
    {
      "order_id": 700446,
      "predicted_minutes": 34.42
    },
    {
      "order_id": 700448,
      "predicted_minutes": 22.53
    },
    {
      "order_id": 700469,
      "predicted_minutes": 38.83
    },
    {
      "order_id": 700475,
      "predicted_minutes": 41.2
    },
    {
      "order_id": 700476,
      "predicted_minutes": 25.98
    },
    {
      "order_id": 700485,
      "predicted_minutes": 36.48
    },
    {
      "order_id": 700486,
      "predicted_minutes": 34.03
    },
    {
      "order_id": 700489,
      "predicted_minutes": 29.24
    },
    {
      "order_id": 700496,
      "predicted_minutes": 23.03
    },
    {
      "order_id": 700503,
      "predicted_minutes": 36.74
    },
    {
      "order_id": 700507,
      "predicted_minutes": 31.35
    },
    {
      "order_id": 700509,
      "predicted_minutes": 33.22
    },
    {
      "order_id": 700510,
      "predicted_minutes": 42.7
    },
    {
      "order_id": 700512,
      "predicted_minutes": 26.68
    },
    {
      "order_id": 700513,
      "predicted_minutes": 31.5
    },
    {
      "order_id": 700520,
      "predicted_minutes": 24.84
    },
    {
      "order_id": 700522,
      "predicted_minutes": 30.0
    },
    {
      "order_id": 700532,
      "predicted_minutes": 28.49
    },
    {
      "order_id": 700541,
      "predicted_minutes": 34.55
    },
    {
      "order_id": 700548,
      "predicted_minutes": 35.47
    },
    {
      "order_id": 700558,
      "predicted_minutes": 30.96
    },
    {
      "order_id": 700559,
      "predicted_minutes": 23.2
    },
    {
      "order_id": 700561,
      "predicted_minutes": 30.45
    },
    {
      "order_id": 700579,
      "predicted_minutes": 22.63
    },
    {
      "order_id": 700584,
      "predicted_minutes": 43.3
    },
    {
      "order_id": 700590,
      "predicted_minutes": 36.07
    },
    {
      "order_id": 700606,
      "predicted_minutes": 43.44
    },
    {
      "order_id": 700609,
      "predicted_minutes": 27.45
    },
    {
      "order_id": 700614,
      "predicted_minutes": 43.21
    },
    {
      "order_id": 700618,
      "predicted_minutes": 30.91
    },
    {
      "order_id": 700621,
      "predicted_minutes": 21.88
    },
    {
      "order_id": 700627,
      "predicted_minutes": 35.53
    },
    {
      "order_id": 700636,
      "predicted_minutes": 47.3
    },
    {
      "order_id": 700640,
      "predicted_minutes": 22.54
    },
    {
      "order_id": 700641,
      "predicted_minutes": 43.21
    },
    {
      "order_id": 700642,
      "predicted_minutes": 40.21
    },
    {
      "order_id": 700643,
      "predicted_minutes": 46.86
    },
    {
      "order_id": 700652,
      "predicted_minutes": 27.91
    },
    {
      "order_id": 700654,
      "predicted_minutes": 17.47
    },
    {
      "order_id": 700655,
      "predicted_minutes": 24.27
    },
    {
      "order_id": 700663,
      "predicted_minutes": 27.22
    },
    {
      "order_id": 700665,
      "predicted_minutes": 47.32
    },
    {
      "order_id": 700666,
      "predicted_minutes": 50.03
    },
    {
      "order_id": 700688,
      "predicted_minutes": 34.26
    },
    {
      "order_id": 700694,
      "predicted_minutes": 51.74
    },
    {
      "order_id": 700701,
      "predicted_minutes": 33.99
    },
    {
      "order_id": 700706,
      "predicted_minutes": 35.36
    },
    {
      "order_id": 700708,
      "predicted_minutes": 28.4
    },
    {
      "order_id": 700715,
      "predicted_minutes": 16.05
    },
    {
      "order_id": 700719,
      "predicted_minutes": 38.29
    },
    {
      "order_id": 700720,
      "predicted_minutes": 24.26
    },
    {
      "order_id": 700725,
      "predicted_minutes": 38.96
    },
    {
      "order_id": 700726,
      "predicted_minutes": 48.22
    },
    {
      "order_id": 700737,
      "predicted_minutes": 53.15
    },
    {
      "order_id": 700742,
      "predicted_minutes": 33.17
    },
    {
      "order_id": 700743,
      "predicted_minutes": 23.48
    },
    {
      "order_id": 700749,
      "predicted_minutes": 29.43
    },
    {
      "order_id": 700750,
      "predicted_minutes": 40.85
    },
    {
      "order_id": 700751,
      "predicted_minutes": 31.93
    },
    {
      "order_id": 700752,
      "predicted_minutes": 50.9
    },
    {
      "order_id": 700756,
      "predicted_minutes": 29.35
    },
    {
      "order_id": 700758,
      "predicted_minutes": 30.8
    },
    {
      "order_id": 700759,
      "predicted_minutes": 29.59
    },
    {
      "order_id": 700761,
      "predicted_minutes": 26.94
    },
    {
      "order_id": 700769,
      "predicted_minutes": 39.86
    },
    {
      "order_id": 700776,
      "predicted_minutes": 30.04
    },
    {
      "order_id": 700781,
      "predicted_minutes": 23.59
    },
    {
      "order_id": 700788,
      "predicted_minutes": 47.59
    },
    {
      "order_id": 700795,
      "predicted_minutes": 22.14
    },
    {
      "order_id": 700798,
      "predicted_minutes": 45.61
    },
    {
      "order_id": 700800,
      "predicted_minutes": 25.64
    },
    {
      "order_id": 700803,
      "predicted_minutes": 39.27
    },
    {
      "order_id": 700812,
      "predicted_minutes": 26.61
    },
    {
      "order_id": 700813,
      "predicted_minutes": 39.42
    },
    {
      "order_id": 700821,
      "predicted_minutes": 36.66
    },
    {
      "order_id": 700827,
      "predicted_minutes": 41.89
    },
    {
      "order_id": 700830,
      "predicted_minutes": 20.43
    },
    {
      "order_id": 700834,
      "predicted_minutes": 27.53
    },
    {
      "order_id": 700835,
      "predicted_minutes": 41.26
    },
    {
      "order_id": 700847,
      "predicted_minutes": 21.91
    },
    {
      "order_id": 700852,
      "predicted_minutes": 23.59
    },
    {
      "order_id": 700859,
      "predicted_minutes": 20.15
    },
    {
      "order_id": 700867,
      "predicted_minutes": 39.13
    },
    {
      "order_id": 700871,
      "predicted_minutes": 41.35
    },
    {
      "order_id": 700878,
      "predicted_minutes": 32.86
    },
    {
      "order_id": 700883,
      "predicted_minutes": 32.07
    },
    {
      "order_id": 700887,
      "predicted_minutes": 61.56
    },
    {
      "order_id": 700888,
      "predicted_minutes": 29.79
    },
    {
      "order_id": 700889,
      "predicted_minutes": 26.05
    },
    {
      "order_id": 700899,
      "predicted_minutes": 29.79
    },
    {
      "order_id": 700902,
      "predicted_minutes": 26.48
    },
    {
      "order_id": 700908,
      "predicted_minutes": 31.24
    },
    {
      "order_id": 700910,
      "predicted_minutes": 27.75
    },
    {
      "order_id": 700912,
      "predicted_minutes": 24.84
    },
    {
      "order_id": 700913,
      "predicted_minutes": 21.1
    },
    {
      "order_id": 700918,
      "predicted_minutes": 44.74
    },
    {
      "order_id": 700921,
      "predicted_minutes": 33.54
    },
    {
      "order_id": 700922,
      "predicted_minutes": 28.06
    },
    {
      "order_id": 700929,
      "predicted_minutes": 30.87
    },
    {
      "order_id": 700933,
      "predicted_minutes": 31.71
    },
    {
      "order_id": 700941,
      "predicted_minutes": 18.91
    },
    {
      "order_id": 700943,
      "predicted_minutes": 26.18
    },
    {
      "order_id": 700946,
      "predicted_minutes": 30.93
    },
    {
      "order_id": 700948,
      "predicted_minutes": 41.98
    },
    {
      "order_id": 700949,
      "predicted_minutes": 37.92
    },
    {
      "order_id": 700954,
      "predicted_minutes": 35.3
    },
    {
      "order_id": 700955,
      "predicted_minutes": 37.11
    },
    {
      "order_id": 700956,
      "predicted_minutes": 41.11
    },
    {
      "order_id": 700957,
      "predicted_minutes": 30.59
    },
    {
      "order_id": 700958,
      "predicted_minutes": 38.39
    },
    {
      "order_id": 700961,
      "predicted_minutes": 21.51
    },
    {
      "order_id": 700968,
      "predicted_minutes": 33.07
    },
    {
      "order_id": 700975,
      "predicted_minutes": 27.93
    },
    {
      "order_id": 700977,
      "predicted_minutes": 30.33
    },
    {
      "order_id": 700978,
      "predicted_minutes": 22.97
    },
    {
      "order_id": 700979,
      "predicted_minutes": 38.67
    },
    {
      "order_id": 700987,
      "predicted_minutes": 32.45
    },
    {
      "order_id": 701001,
      "predicted_minutes": 40.29
    },
    {
      "order_id": 701010,
      "predicted_minutes": 43.43
    },
    {
      "order_id": 701012,
      "predicted_minutes": 28.94
    },
    {
      "order_id": 701013,
      "predicted_minutes": 25.19
    },
    {
      "order_id": 701015,
      "predicted_minutes": 16.99
    },
    {
      "order_id": 701018,
      "predicted_minutes": 26.04
    },
    {
      "order_id": 701045,
      "predicted_minutes": 41.18
    },
    {
      "order_id": 701049,
      "predicted_minutes": 28.84
    },
    {
      "order_id": 701050,
      "predicted_minutes": 22.53
    },
    {
      "order_id": 701051,
      "predicted_minutes": 21.26
    },
    {
      "order_id": 701052,
      "predicted_minutes": 34.36
    },
    {
      "order_id": 701059,
      "predicted_minutes": 24.11
    },
    {
      "order_id": 701063,
      "predicted_minutes": 28.91
    },
    {
      "order_id": 701074,
      "predicted_minutes": 42.82
    },
    {
      "order_id": 701085,
      "predicted_minutes": 31.4
    },
    {
      "order_id": 701092,
      "predicted_minutes": 62.94
    },
    {
      "order_id": 701093,
      "predicted_minutes": 24.28
    },
    {
      "order_id": 701094,
      "predicted_minutes": 20.58
    },
    {
      "order_id": 701107,
      "predicted_minutes": 23.33
    },
    {
      "order_id": 701108,
      "predicted_minutes": 32.5
    },
    {
      "order_id": 701109,
      "predicted_minutes": 27.02
    },
    {
      "order_id": 701132,
      "predicted_minutes": 37.59
    },
    {
      "order_id": 701146,
      "predicted_minutes": 42.16
    },
    {
      "order_id": 701147,
      "predicted_minutes": 29.55
    },
    {
      "order_id": 701149,
      "predicted_minutes": 29.72
    },
    {
      "order_id": 701155,
      "predicted_minutes": 37.09
    },
    {
      "order_id": 701160,
      "predicted_minutes": 38.97
    },
    {
      "order_id": 701172,
      "predicted_minutes": 41.24
    },
    {
      "order_id": 701186,
      "predicted_minutes": 26.17
    },
    {
      "order_id": 701195,
      "predicted_minutes": 35.07
    },
    {
      "order_id": 701200,
      "predicted_minutes": 45.61
    },
    {
      "order_id": 701206,
      "predicted_minutes": 34.27
    },
    {
      "order_id": 701210,
      "predicted_minutes": 26.91
    },
    {
      "order_id": 701231,
      "predicted_minutes": 30.24
    },
    {
      "order_id": 701237,
      "predicted_minutes": 35.33
    },
    {
      "order_id": 701243,
      "predicted_minutes": 36.15
    },
    {
      "order_id": 701246,
      "predicted_minutes": 27.26
    },
    {
      "order_id": 701257,
      "predicted_minutes": 37.87
    },
    {
      "order_id": 701264,
      "predicted_minutes": 33.04
    },
    {
      "order_id": 701285,
      "predicted_minutes": 30.69
    },
    {
      "order_id": 701290,
      "predicted_minutes": 39.11
    },
    {
      "order_id": 701292,
      "predicted_minutes": 11.79
    },
    {
      "order_id": 701294,
      "predicted_minutes": 28.57
    },
    {
      "order_id": 701301,
      "predicted_minutes": 31.25
    },
    {
      "order_id": 701306,
      "predicted_minutes": 41.47
    },
    {
      "order_id": 701309,
      "predicted_minutes": 31.83
    },
    {
      "order_id": 701315,
      "predicted_minutes": 28.1
    },
    {
      "order_id": 701318,
      "predicted_minutes": 31.56
    },
    {
      "order_id": 701320,
      "predicted_minutes": 28.42
    },
    {
      "order_id": 701323,
      "predicted_minutes": 27.92
    },
    {
      "order_id": 701325,
      "predicted_minutes": 20.9
    },
    {
      "order_id": 701329,
      "predicted_minutes": 27.82
    },
    {
      "order_id": 701341,
      "predicted_minutes": 56.82
    },
    {
      "order_id": 701350,
      "predicted_minutes": 30.35
    },
    {
      "order_id": 701361,
      "predicted_minutes": 40.02
    },
    {
      "order_id": 701363,
      "predicted_minutes": 31.08
    },
    {
      "order_id": 701366,
      "predicted_minutes": 15.08
    },
    {
      "order_id": 701367,
      "predicted_minutes": 23.55
    },
    {
      "order_id": 701375,
      "predicted_minutes": 34.82
    },
    {
      "order_id": 701378,
      "predicted_minutes": 22.88
    },
    {
      "order_id": 701379,
      "predicted_minutes": 34.29
    },
    {
      "order_id": 701380,
      "predicted_minutes": 24.25
    },
    {
      "order_id": 701383,
      "predicted_minutes": 33.47
    },
    {
      "order_id": 701389,
      "predicted_minutes": 21.12
    },
    {
      "order_id": 701393,
      "predicted_minutes": 11.48
    },
    {
      "order_id": 701396,
      "predicted_minutes": 29.43
    },
    {
      "order_id": 701398,
      "predicted_minutes": 30.0
    },
    {
      "order_id": 701399,
      "predicted_minutes": 29.51
    },
    {
      "order_id": 701400,
      "predicted_minutes": 25.21
    },
    {
      "order_id": 701409,
      "predicted_minutes": 32.41
    },
    {
      "order_id": 701410,
      "predicted_minutes": 25.82
    },
    {
      "order_id": 701411,
      "predicted_minutes": 27.65
    },
    {
      "order_id": 701425,
      "predicted_minutes": 32.73
    },
    {
      "order_id": 701427,
      "predicted_minutes": 30.54
    },
    {
      "order_id": 701434,
      "predicted_minutes": 40.39
    },
    {
      "order_id": 701436,
      "predicted_minutes": 35.31
    },
    {
      "order_id": 701440,
      "predicted_minutes": 49.04
    },
    {
      "order_id": 701442,
      "predicted_minutes": 27.76
    },
    {
      "order_id": 701445,
      "predicted_minutes": 28.3
    },
    {
      "order_id": 701454,
      "predicted_minutes": 19.98
    },
    {
      "order_id": 701455,
      "predicted_minutes": 24.35
    },
    {
      "order_id": 701459,
      "predicted_minutes": 20.64
    },
    {
      "order_id": 701462,
      "predicted_minutes": 23.44
    },
    {
      "order_id": 701464,
      "predicted_minutes": 25.69
    },
    {
      "order_id": 701466,
      "predicted_minutes": 25.96
    },
    {
      "order_id": 701467,
      "predicted_minutes": 34.6
    },
    {
      "order_id": 701476,
      "predicted_minutes": 26.33
    },
    {
      "order_id": 701477,
      "predicted_minutes": 30.59
    },
    {
      "order_id": 701482,
      "predicted_minutes": 38.43
    },
    {
      "order_id": 701486,
      "predicted_minutes": 19.04
    },
    {
      "order_id": 701487,
      "predicted_minutes": 34.53
    },
    {
      "order_id": 701490,
      "predicted_minutes": 44.95
    },
    {
      "order_id": 701497,
      "predicted_minutes": 29.38
    },
    {
      "order_id": 701499,
      "predicted_minutes": 46.91
    },
    {
      "order_id": 701500,
      "predicted_minutes": 23.1
    },
    {
      "order_id": 701519,
      "predicted_minutes": 36.53
    },
    {
      "order_id": 701520,
      "predicted_minutes": 33.72
    },
    {
      "order_id": 701522,
      "predicted_minutes": 35.36
    },
    {
      "order_id": 701538,
      "predicted_minutes": 15.97
    },
    {
      "order_id": 701545,
      "predicted_minutes": 24.65
    },
    {
      "order_id": 701551,
      "predicted_minutes": 42.04
    },
    {
      "order_id": 701560,
      "predicted_minutes": 33.41
    },
    {
      "order_id": 701562,
      "predicted_minutes": 32.64
    },
    {
      "order_id": 701571,
      "predicted_minutes": 42.64
    },
    {
      "order_id": 701572,
      "predicted_minutes": 28.39
    },
    {
      "order_id": 701578,
      "predicted_minutes": 21.43
    },
    {
      "order_id": 701588,
      "predicted_minutes": 25.24
    },
    {
      "order_id": 701589,
      "predicted_minutes": 29.16
    },
    {
      "order_id": 701593,
      "predicted_minutes": 39.9
    },
    {
      "order_id": 701603,
      "predicted_minutes": 21.37
    },
    {
      "order_id": 701619,
      "predicted_minutes": 34.52
    },
    {
      "order_id": 701631,
      "predicted_minutes": 21.77
    },
    {
      "order_id": 701632,
      "predicted_minutes": 27.99
    },
    {
      "order_id": 701635,
      "predicted_minutes": 20.08
    },
    {
      "order_id": 701642,
      "predicted_minutes": 32.82
    },
    {
      "order_id": 701644,
      "predicted_minutes": 31.18
    },
    {
      "order_id": 701654,
      "predicted_minutes": 31.68
    },
    {
      "order_id": 701655,
      "predicted_minutes": 28.59
    },
    {
      "order_id": 701662,
      "predicted_minutes": 26.16
    },
    {
      "order_id": 701666,
      "predicted_minutes": 26.8
    },
    {
      "order_id": 701676,
      "predicted_minutes": 31.37
    },
    {
      "order_id": 701706,
      "predicted_minutes": 36.0
    },
    {
      "order_id": 701707,
      "predicted_minutes": 29.82
    },
    {
      "order_id": 701714,
      "predicted_minutes": 34.61
    },
    {
      "order_id": 701725,
      "predicted_minutes": 36.35
    },
    {
      "order_id": 701726,
      "predicted_minutes": 31.14
    },
    {
      "order_id": 701730,
      "predicted_minutes": 18.93
    },
    {
      "order_id": 701732,
      "predicted_minutes": 54.26
    },
    {
      "order_id": 701747,
      "predicted_minutes": 23.74
    },
    {
      "order_id": 701750,
      "predicted_minutes": 41.85
    },
    {
      "order_id": 701752,
      "predicted_minutes": 33.96
    },
    {
      "order_id": 701753,
      "predicted_minutes": 21.71
    },
    {
      "order_id": 701756,
      "predicted_minutes": 31.08
    },
    {
      "order_id": 701757,
      "predicted_minutes": 44.31
    },
    {
      "order_id": 701763,
      "predicted_minutes": 30.81
    },
    {
      "order_id": 701765,
      "predicted_minutes": 28.17
    },
    {
      "order_id": 701766,
      "predicted_minutes": 32.24
    },
    {
      "order_id": 701768,
      "predicted_minutes": 37.88
    },
    {
      "order_id": 701772,
      "predicted_minutes": 29.99
    },
    {
      "order_id": 701775,
      "predicted_minutes": 20.57
    },
    {
      "order_id": 701776,
      "predicted_minutes": 45.94
    },
    {
      "order_id": 701783,
      "predicted_minutes": 41.41
    },
    {
      "order_id": 701796,
      "predicted_minutes": 19.22
    },
    {
      "order_id": 701804,
      "predicted_minutes": 22.35
    },
    {
      "order_id": 701805,
      "predicted_minutes": 35.09
    },
    {
      "order_id": 701808,
      "predicted_minutes": 29.14
    },
    {
      "order_id": 701809,
      "predicted_minutes": 29.53
    },
    {
      "order_id": 701810,
      "predicted_minutes": 24.94
    },
    {
      "order_id": 701811,
      "predicted_minutes": 19.49
    },
    {
      "order_id": 701820,
      "predicted_minutes": 54.07
    },
    {
      "order_id": 701821,
      "predicted_minutes": 27.4
    },
    {
      "order_id": 701824,
      "predicted_minutes": 28.97
    },
    {
      "order_id": 701826,
      "predicted_minutes": 26.41
    },
    {
      "order_id": 701831,
      "predicted_minutes": 39.93
    },
    {
      "order_id": 701835,
      "predicted_minutes": 37.65
    },
    {
      "order_id": 701838,
      "predicted_minutes": 36.68
    },
    {
      "order_id": 701841,
      "predicted_minutes": 31.07
    },
    {
      "order_id": 701849,
      "predicted_minutes": 32.65
    },
    {
      "order_id": 701855,
      "predicted_minutes": 28.78
    },
    {
      "order_id": 701859,
      "predicted_minutes": 31.2
    },
    {
      "order_id": 701865,
      "predicted_minutes": 36.64
    },
    {
      "order_id": 701872,
      "predicted_minutes": 35.46
    },
    {
      "order_id": 701876,
      "predicted_minutes": 27.75
    },
    {
      "order_id": 701879,
      "predicted_minutes": 35.74
    },
    {
      "order_id": 701881,
      "predicted_minutes": 22.85
    },
    {
      "order_id": 701892,
      "predicted_minutes": 30.66
    },
    {
      "order_id": 701905,
      "predicted_minutes": 40.96
    },
    {
      "order_id": 701908,
      "predicted_minutes": 34.2
    },
    {
      "order_id": 701910,
      "predicted_minutes": 45.35
    },
    {
      "order_id": 701913,
      "predicted_minutes": 19.75
    },
    {
      "order_id": 701916,
      "predicted_minutes": 31.72
    },
    {
      "order_id": 701917,
      "predicted_minutes": 23.66
    },
    {
      "order_id": 701920,
      "predicted_minutes": 19.53
    },
    {
      "order_id": 701934,
      "predicted_minutes": 37.23
    },
    {
      "order_id": 701938,
      "predicted_minutes": 35.84
    },
    {
      "order_id": 701941,
      "predicted_minutes": 42.46
    },
    {
      "order_id": 701944,
      "predicted_minutes": 22.41
    },
    {
      "order_id": 701947,
      "predicted_minutes": 26.55
    },
    {
      "order_id": 701954,
      "predicted_minutes": 33.9
    },
    {
      "order_id": 701956,
      "predicted_minutes": 23.52
    },
    {
      "order_id": 701958,
      "predicted_minutes": 26.12
    },
    {
      "order_id": 701959,
      "predicted_minutes": 26.16
    },
    {
      "order_id": 701961,
      "predicted_minutes": 21.9
    },
    {
      "order_id": 701963,
      "predicted_minutes": 42.83
    },
    {
      "order_id": 701965,
      "predicted_minutes": 25.34
    },
    {
      "order_id": 701966,
      "predicted_minutes": 34.8
    },
    {
      "order_id": 701971,
      "predicted_minutes": 34.92
    },
    {
      "order_id": 701973,
      "predicted_minutes": 34.59
    },
    {
      "order_id": 701980,
      "predicted_minutes": 17.2
    },
    {
      "order_id": 701981,
      "predicted_minutes": 38.01
    },
    {
      "order_id": 701984,
      "predicted_minutes": 34.63
    },
    {
      "order_id": 701985,
      "predicted_minutes": 33.48
    },
    {
      "order_id": 701987,
      "predicted_minutes": 37.01
    },
    {
      "order_id": 701992,
      "predicted_minutes": 33.21
    },
    {
      "order_id": 701994,
      "predicted_minutes": 26.71
    },
    {
      "order_id": 701998,
      "predicted_minutes": 42.61
    },
    {
      "order_id": 702001,
      "predicted_minutes": 30.74
    },
    {
      "order_id": 702008,
      "predicted_minutes": 38.53
    },
    {
      "order_id": 702009,
      "predicted_minutes": 23.41
    },
    {
      "order_id": 702014,
      "predicted_minutes": 26.1
    },
    {
      "order_id": 702026,
      "predicted_minutes": 36.36
    },
    {
      "order_id": 702031,
      "predicted_minutes": 46.82
    },
    {
      "order_id": 702032,
      "predicted_minutes": 27.92
    },
    {
      "order_id": 702034,
      "predicted_minutes": 27.06
    },
    {
      "order_id": 702035,
      "predicted_minutes": 20.48
    },
    {
      "order_id": 702037,
      "predicted_minutes": 28.78
    },
    {
      "order_id": 702046,
      "predicted_minutes": 35.27
    },
    {
      "order_id": 702053,
      "predicted_minutes": 24.19
    },
    {
      "order_id": 702065,
      "predicted_minutes": 27.5
    },
    {
      "order_id": 702077,
      "predicted_minutes": 33.75
    },
    {
      "order_id": 702084,
      "predicted_minutes": 24.24
    },
    {
      "order_id": 702094,
      "predicted_minutes": 22.75
    },
    {
      "order_id": 702095,
      "predicted_minutes": 17.87
    },
    {
      "order_id": 702101,
      "predicted_minutes": 33.51
    },
    {
      "order_id": 702102,
      "predicted_minutes": 38.84
    },
    {
      "order_id": 702116,
      "predicted_minutes": 44.41
    },
    {
      "order_id": 702119,
      "predicted_minutes": 16.97
    },
    {
      "order_id": 702139,
      "predicted_minutes": 29.31
    },
    {
      "order_id": 702154,
      "predicted_minutes": 40.78
    },
    {
      "order_id": 702157,
      "predicted_minutes": 25.65
    },
    {
      "order_id": 702166,
      "predicted_minutes": 22.37
    },
    {
      "order_id": 702168,
      "predicted_minutes": 38.71
    },
    {
      "order_id": 702176,
      "predicted_minutes": 28.11
    },
    {
      "order_id": 702180,
      "predicted_minutes": 38.66
    },
    {
      "order_id": 702182,
      "predicted_minutes": 28.62
    },
    {
      "order_id": 702189,
      "predicted_minutes": 40.22
    },
    {
      "order_id": 702191,
      "predicted_minutes": 27.39
    },
    {
      "order_id": 702192,
      "predicted_minutes": 47.72
    },
    {
      "order_id": 702205,
      "predicted_minutes": 26.41
    },
    {
      "order_id": 702209,
      "predicted_minutes": 53.53
    },
    {
      "order_id": 702216,
      "predicted_minutes": 35.49
    },
    {
      "order_id": 702224,
      "predicted_minutes": 22.74
    },
    {
      "order_id": 702227,
      "predicted_minutes": 37.36
    },
    {
      "order_id": 702229,
      "predicted_minutes": 22.56
    },
    {
      "order_id": 702231,
      "predicted_minutes": 18.85
    },
    {
      "order_id": 702237,
      "predicted_minutes": 23.31
    },
    {
      "order_id": 702243,
      "predicted_minutes": 28.33
    },
    {
      "order_id": 702244,
      "predicted_minutes": 26.47
    },
    {
      "order_id": 702245,
      "predicted_minutes": 23.4
    },
    {
      "order_id": 702254,
      "predicted_minutes": 23.16
    },
    {
      "order_id": 702258,
      "predicted_minutes": 22.63
    },
    {
      "order_id": 702270,
      "predicted_minutes": 31.62
    },
    {
      "order_id": 702285,
      "predicted_minutes": 42.72
    },
    {
      "order_id": 702287,
      "predicted_minutes": 33.76
    },
    {
      "order_id": 702295,
      "predicted_minutes": 38.89
    },
    {
      "order_id": 702306,
      "predicted_minutes": 36.42
    },
    {
      "order_id": 702311,
      "predicted_minutes": 55.76
    },
    {
      "order_id": 702330,
      "predicted_minutes": 38.95
    },
    {
      "order_id": 702337,
      "predicted_minutes": 30.62
    },
    {
      "order_id": 702340,
      "predicted_minutes": 51.6
    },
    {
      "order_id": 702347,
      "predicted_minutes": 24.33
    },
    {
      "order_id": 702348,
      "predicted_minutes": 32.83
    },
    {
      "order_id": 702354,
      "predicted_minutes": 21.88
    },
    {
      "order_id": 702355,
      "predicted_minutes": 31.22
    },
    {
      "order_id": 702360,
      "predicted_minutes": 26.26
    },
    {
      "order_id": 702364,
      "predicted_minutes": 37.19
    },
    {
      "order_id": 702369,
      "predicted_minutes": 26.48
    },
    {
      "order_id": 702380,
      "predicted_minutes": 38.09
    },
    {
      "order_id": 702383,
      "predicted_minutes": 31.45
    },
    {
      "order_id": 702388,
      "predicted_minutes": 35.41
    },
    {
      "order_id": 702392,
      "predicted_minutes": 28.06
    },
    {
      "order_id": 702396,
      "predicted_minutes": 36.37
    },
    {
      "order_id": 702397,
      "predicted_minutes": 35.34
    },
    {
      "order_id": 702399,
      "predicted_minutes": 27.1
    },
    {
      "order_id": 702400,
      "predicted_minutes": 51.25
    },
    {
      "order_id": 702405,
      "predicted_minutes": 29.45
    },
    {
      "order_id": 702407,
      "predicted_minutes": 28.0
    },
    {
      "order_id": 702408,
      "predicted_minutes": 29.96
    },
    {
      "order_id": 702410,
      "predicted_minutes": 17.45
    },
    {
      "order_id": 702414,
      "predicted_minutes": 43.68
    },
    {
      "order_id": 702419,
      "predicted_minutes": 19.14
    },
    {
      "order_id": 702423,
      "predicted_minutes": 25.55
    },
    {
      "order_id": 702428,
      "predicted_minutes": 32.93
    },
    {
      "order_id": 702432,
      "predicted_minutes": 36.18
    },
    {
      "order_id": 702434,
      "predicted_minutes": 38.86
    },
    {
      "order_id": 702445,
      "predicted_minutes": 30.8
    },
    {
      "order_id": 702457,
      "predicted_minutes": 33.64
    },
    {
      "order_id": 702460,
      "predicted_minutes": 22.49
    },
    {
      "order_id": 702472,
      "predicted_minutes": 33.56
    },
    {
      "order_id": 702493,
      "predicted_minutes": 34.37
    },
    {
      "order_id": 702497,
      "predicted_minutes": 28.71
    },
    {
      "order_id": 702498,
      "predicted_minutes": 42.72
    },
    {
      "order_id": 702499,
      "predicted_minutes": 29.93
    },
    {
      "order_id": 702511,
      "predicted_minutes": 39.48
    },
    {
      "order_id": 702531,
      "predicted_minutes": 30.53
    },
    {
      "order_id": 702540,
      "predicted_minutes": 33.27
    },
    {
      "order_id": 702549,
      "predicted_minutes": 29.77
    },
    {
      "order_id": 702556,
      "predicted_minutes": 23.75
    },
    {
      "order_id": 702566,
      "predicted_minutes": 30.21
    },
    {
      "order_id": 702568,
      "predicted_minutes": 18.38
    },
    {
      "order_id": 702569,
      "predicted_minutes": 24.35
    },
    {
      "order_id": 702570,
      "predicted_minutes": 26.68
    },
    {
      "order_id": 702579,
      "predicted_minutes": 28.74
    },
    {
      "order_id": 702588,
      "predicted_minutes": 19.39
    },
    {
      "order_id": 702589,
      "predicted_minutes": 30.91
    },
    {
      "order_id": 702590,
      "predicted_minutes": 27.97
    },
    {
      "order_id": 702591,
      "predicted_minutes": 38.18
    },
    {
      "order_id": 702594,
      "predicted_minutes": 33.52
    },
    {
      "order_id": 702600,
      "predicted_minutes": 43.94
    },
    {
      "order_id": 702602,
      "predicted_minutes": 25.67
    },
    {
      "order_id": 702614,
      "predicted_minutes": 30.42
    },
    {
      "order_id": 702622,
      "predicted_minutes": 42.54
    },
    {
      "order_id": 702625,
      "predicted_minutes": 22.8
    },
    {
      "order_id": 702631,
      "predicted_minutes": 27.12
    },
    {
      "order_id": 702633,
      "predicted_minutes": 35.05
    },
    {
      "order_id": 702648,
      "predicted_minutes": 18.0
    },
    {
      "order_id": 702651,
      "predicted_minutes": 29.27
    },
    {
      "order_id": 702655,
      "predicted_minutes": 34.25
    },
    {
      "order_id": 702660,
      "predicted_minutes": 44.11
    },
    {
      "order_id": 702667,
      "predicted_minutes": 29.54
    },
    {
      "order_id": 702669,
      "predicted_minutes": 40.39
    },
    {
      "order_id": 702670,
      "predicted_minutes": 39.38
    },
    {
      "order_id": 702673,
      "predicted_minutes": 31.77
    },
    {
      "order_id": 702681,
      "predicted_minutes": 35.67
    },
    {
      "order_id": 702707,
      "predicted_minutes": 32.42
    },
    {
      "order_id": 702712,
      "predicted_minutes": 33.86
    },
    {
      "order_id": 702713,
      "predicted_minutes": 26.54
    },
    {
      "order_id": 702723,
      "predicted_minutes": 24.87
    },
    {
      "order_id": 702724,
      "predicted_minutes": 36.63
    },
    {
      "order_id": 702745,
      "predicted_minutes": 32.16
    },
    {
      "order_id": 702754,
      "predicted_minutes": 29.89
    },
    {
      "order_id": 702759,
      "predicted_minutes": 37.57
    },
    {
      "order_id": 702760,
      "predicted_minutes": 33.82
    },
    {
      "order_id": 702764,
      "predicted_minutes": 31.67
    },
    {
      "order_id": 702766,
      "predicted_minutes": 37.19
    },
    {
      "order_id": 702767,
      "predicted_minutes": 35.72
    },
    {
      "order_id": 702773,
      "predicted_minutes": 27.85
    },
    {
      "order_id": 702786,
      "predicted_minutes": 45.95
    },
    {
      "order_id": 702793,
      "predicted_minutes": 28.78
    },
    {
      "order_id": 702797,
      "predicted_minutes": 36.01
    },
    {
      "order_id": 702798,
      "predicted_minutes": 50.91
    },
    {
      "order_id": 702803,
      "predicted_minutes": 29.01
    },
    {
      "order_id": 702812,
      "predicted_minutes": 24.01
    },
    {
      "order_id": 702813,
      "predicted_minutes": 31.88
    },
    {
      "order_id": 702824,
      "predicted_minutes": 55.52
    },
    {
      "order_id": 702831,
      "predicted_minutes": 32.88
    },
    {
      "order_id": 702849,
      "predicted_minutes": 30.79
    },
    {
      "order_id": 702853,
      "predicted_minutes": 25.13
    },
    {
      "order_id": 702857,
      "predicted_minutes": 17.67
    },
    {
      "order_id": 702860,
      "predicted_minutes": 42.87
    },
    {
      "order_id": 702862,
      "predicted_minutes": 21.98
    },
    {
      "order_id": 702864,
      "predicted_minutes": 42.68
    },
    {
      "order_id": 702866,
      "predicted_minutes": 29.17
    },
    {
      "order_id": 702869,
      "predicted_minutes": 27.35
    },
    {
      "order_id": 702879,
      "predicted_minutes": 37.14
    },
    {
      "order_id": 702894,
      "predicted_minutes": 45.12
    },
    {
      "order_id": 702899,
      "predicted_minutes": 40.47
    },
    {
      "order_id": 702900,
      "predicted_minutes": 24.87
    },
    {
      "order_id": 702910,
      "predicted_minutes": 21.39
    },
    {
      "order_id": 702915,
      "predicted_minutes": 30.87
    },
    {
      "order_id": 702928,
      "predicted_minutes": 22.71
    },
    {
      "order_id": 702930,
      "predicted_minutes": 24.21
    },
    {
      "order_id": 702938,
      "predicted_minutes": 22.11
    },
    {
      "order_id": 702939,
      "predicted_minutes": 35.09
    },
    {
      "order_id": 702940,
      "predicted_minutes": 26.28
    },
    {
      "order_id": 702944,
      "predicted_minutes": 25.79
    },
    {
      "order_id": 702946,
      "predicted_minutes": 30.41
    },
    {
      "order_id": 702949,
      "predicted_minutes": 38.51
    },
    {
      "order_id": 702957,
      "predicted_minutes": 33.72
    },
    {
      "order_id": 702958,
      "predicted_minutes": 33.05
    },
    {
      "order_id": 702960,
      "predicted_minutes": 35.64
    },
    {
      "order_id": 702963,
      "predicted_minutes": 24.94
    },
    {
      "order_id": 702964,
      "predicted_minutes": 37.47
    },
    {
      "order_id": 702966,
      "predicted_minutes": 30.58
    },
    {
      "order_id": 702969,
      "predicted_minutes": 28.58
    },
    {
      "order_id": 702970,
      "predicted_minutes": 41.39
    },
    {
      "order_id": 702972,
      "predicted_minutes": 28.93
    },
    {
      "order_id": 702973,
      "predicted_minutes": 32.14
    },
    {
      "order_id": 702975,
      "predicted_minutes": 31.81
    },
    {
      "order_id": 702976,
      "predicted_minutes": 19.98
    },
    {
      "order_id": 702978,
      "predicted_minutes": 55.95
    },
    {
      "order_id": 702982,
      "predicted_minutes": 35.51
    },
    {
      "order_id": 702985,
      "predicted_minutes": 25.69
    },
    {
      "order_id": 702987,
      "predicted_minutes": 22.77
    },
    {
      "order_id": 702990,
      "predicted_minutes": 37.81
    },
    {
      "order_id": 702992,
      "predicted_minutes": 22.29
    },
    {
      "order_id": 702994,
      "predicted_minutes": 46.15
    },
    {
      "order_id": 703011,
      "predicted_minutes": 49.85
    },
    {
      "order_id": 703019,
      "predicted_minutes": 23.57
    },
    {
      "order_id": 703021,
      "predicted_minutes": 41.8
    },
    {
      "order_id": 703025,
      "predicted_minutes": 38.0
    },
    {
      "order_id": 703039,
      "predicted_minutes": 23.82
    },
    {
      "order_id": 703042,
      "predicted_minutes": 26.21
    },
    {
      "order_id": 703046,
      "predicted_minutes": 33.42
    },
    {
      "order_id": 703047,
      "predicted_minutes": 32.99
    },
    {
      "order_id": 703049,
      "predicted_minutes": 26.78
    },
    {
      "order_id": 703050,
      "predicted_minutes": 44.78
    },
    {
      "order_id": 703052,
      "predicted_minutes": 36.27
    },
    {
      "order_id": 703058,
      "predicted_minutes": 36.32
    },
    {
      "order_id": 703065,
      "predicted_minutes": 39.63
    },
    {
      "order_id": 703067,
      "predicted_minutes": 43.4
    },
    {
      "order_id": 703073,
      "predicted_minutes": 33.15
    },
    {
      "order_id": 703085,
      "predicted_minutes": 11.65
    },
    {
      "order_id": 703086,
      "predicted_minutes": 30.42
    },
    {
      "order_id": 703091,
      "predicted_minutes": 22.67
    },
    {
      "order_id": 703099,
      "predicted_minutes": 27.42
    },
    {
      "order_id": 703102,
      "predicted_minutes": 23.0
    },
    {
      "order_id": 703108,
      "predicted_minutes": 19.72
    },
    {
      "order_id": 703109,
      "predicted_minutes": 43.26
    },
    {
      "order_id": 703114,
      "predicted_minutes": 35.6
    },
    {
      "order_id": 703129,
      "predicted_minutes": 28.3
    },
    {
      "order_id": 703136,
      "predicted_minutes": 37.97
    },
    {
      "order_id": 703137,
      "predicted_minutes": 17.61
    },
    {
      "order_id": 703145,
      "predicted_minutes": 54.08
    },
    {
      "order_id": 703153,
      "predicted_minutes": 34.54
    },
    {
      "order_id": 703155,
      "predicted_minutes": 24.51
    },
    {
      "order_id": 703160,
      "predicted_minutes": 19.85
    },
    {
      "order_id": 703170,
      "predicted_minutes": 28.49
    },
    {
      "order_id": 703179,
      "predicted_minutes": 39.39
    },
    {
      "order_id": 703184,
      "predicted_minutes": 27.94
    },
    {
      "order_id": 703187,
      "predicted_minutes": 45.1
    },
    {
      "order_id": 703192,
      "predicted_minutes": 28.53
    },
    {
      "order_id": 703194,
      "predicted_minutes": 61.67
    },
    {
      "order_id": 703196,
      "predicted_minutes": 23.4
    },
    {
      "order_id": 703200,
      "predicted_minutes": 32.14
    },
    {
      "order_id": 703205,
      "predicted_minutes": 44.61
    },
    {
      "order_id": 703211,
      "predicted_minutes": 37.58
    },
    {
      "order_id": 703213,
      "predicted_minutes": 30.21
    },
    {
      "order_id": 703215,
      "predicted_minutes": 16.06
    },
    {
      "order_id": 703235,
      "predicted_minutes": 29.67
    },
    {
      "order_id": 703241,
      "predicted_minutes": 24.9
    },
    {
      "order_id": 703262,
      "predicted_minutes": 37.17
    },
    {
      "order_id": 703269,
      "predicted_minutes": 24.32
    },
    {
      "order_id": 703270,
      "predicted_minutes": 33.13
    },
    {
      "order_id": 703272,
      "predicted_minutes": 26.77
    },
    {
      "order_id": 703275,
      "predicted_minutes": 42.49
    },
    {
      "order_id": 703277,
      "predicted_minutes": 25.17
    },
    {
      "order_id": 703285,
      "predicted_minutes": 18.19
    },
    {
      "order_id": 703291,
      "predicted_minutes": 41.75
    },
    {
      "order_id": 703299,
      "predicted_minutes": 34.63
    },
    {
      "order_id": 703308,
      "predicted_minutes": 15.81
    },
    {
      "order_id": 703313,
      "predicted_minutes": 24.88
    },
    {
      "order_id": 703338,
      "predicted_minutes": 35.6
    },
    {
      "order_id": 703354,
      "predicted_minutes": 29.42
    },
    {
      "order_id": 703380,
      "predicted_minutes": 23.98
    },
    {
      "order_id": 703387,
      "predicted_minutes": 24.36
    },
    {
      "order_id": 703391,
      "predicted_minutes": 41.91
    },
    {
      "order_id": 703393,
      "predicted_minutes": 31.53
    },
    {
      "order_id": 703396,
      "predicted_minutes": 19.68
    },
    {
      "order_id": 703405,
      "predicted_minutes": 22.73
    },
    {
      "order_id": 703406,
      "predicted_minutes": 40.76
    },
    {
      "order_id": 703411,
      "predicted_minutes": 34.46
    },
    {
      "order_id": 703418,
      "predicted_minutes": 24.71
    },
    {
      "order_id": 703420,
      "predicted_minutes": 31.48
    },
    {
      "order_id": 703432,
      "predicted_minutes": 33.31
    },
    {
      "order_id": 703435,
      "predicted_minutes": 28.47
    },
    {
      "order_id": 703438,
      "predicted_minutes": 18.25
    },
    {
      "order_id": 703439,
      "predicted_minutes": 29.65
    },
    {
      "order_id": 703441,
      "predicted_minutes": 39.74
    },
    {
      "order_id": 703447,
      "predicted_minutes": 30.78
    },
    {
      "order_id": 703453,
      "predicted_minutes": 29.28
    },
    {
      "order_id": 703464,
      "predicted_minutes": 23.73
    },
    {
      "order_id": 703466,
      "predicted_minutes": 46.33
    },
    {
      "order_id": 703468,
      "predicted_minutes": 41.21
    },
    {
      "order_id": 703469,
      "predicted_minutes": 26.54
    },
    {
      "order_id": 703482,
      "predicted_minutes": 34.43
    },
    {
      "order_id": 703490,
      "predicted_minutes": 35.72
    },
    {
      "order_id": 703492,
      "predicted_minutes": 32.53
    },
    {
      "order_id": 703495,
      "predicted_minutes": 23.06
    },
    {
      "order_id": 703500,
      "predicted_minutes": 32.16
    },
    {
      "order_id": 703501,
      "predicted_minutes": 46.76
    },
    {
      "order_id": 703504,
      "predicted_minutes": 37.26
    },
    {
      "order_id": 703505,
      "predicted_minutes": 33.47
    },
    {
      "order_id": 703510,
      "predicted_minutes": 37.59
    },
    {
      "order_id": 703512,
      "predicted_minutes": 34.28
    },
    {
      "order_id": 703515,
      "predicted_minutes": 35.58
    },
    {
      "order_id": 703516,
      "predicted_minutes": 39.4
    },
    {
      "order_id": 703520,
      "predicted_minutes": 58.47
    },
    {
      "order_id": 703523,
      "predicted_minutes": 27.7
    },
    {
      "order_id": 703525,
      "predicted_minutes": 23.87
    },
    {
      "order_id": 703532,
      "predicted_minutes": 44.99
    },
    {
      "order_id": 703548,
      "predicted_minutes": 45.82
    },
    {
      "order_id": 703552,
      "predicted_minutes": 44.69
    },
    {
      "order_id": 703558,
      "predicted_minutes": 28.14
    },
    {
      "order_id": 703568,
      "predicted_minutes": 47.02
    },
    {
      "order_id": 703572,
      "predicted_minutes": 31.9
    },
    {
      "order_id": 703581,
      "predicted_minutes": 41.48
    },
    {
      "order_id": 703592,
      "predicted_minutes": 35.75
    },
    {
      "order_id": 703595,
      "predicted_minutes": 42.17
    },
    {
      "order_id": 703598,
      "predicted_minutes": 30.82
    },
    {
      "order_id": 703607,
      "predicted_minutes": 29.63
    },
    {
      "order_id": 703615,
      "predicted_minutes": 30.88
    },
    {
      "order_id": 703616,
      "predicted_minutes": 26.46
    },
    {
      "order_id": 703622,
      "predicted_minutes": 21.0
    },
    {
      "order_id": 703623,
      "predicted_minutes": 56.93
    },
    {
      "order_id": 703626,
      "predicted_minutes": 26.66
    },
    {
      "order_id": 703627,
      "predicted_minutes": 31.88
    },
    {
      "order_id": 703630,
      "predicted_minutes": 17.59
    },
    {
      "order_id": 703631,
      "predicted_minutes": 24.16
    },
    {
      "order_id": 703641,
      "predicted_minutes": 41.68
    },
    {
      "order_id": 703643,
      "predicted_minutes": 35.0
    },
    {
      "order_id": 703646,
      "predicted_minutes": 30.85
    },
    {
      "order_id": 703647,
      "predicted_minutes": 31.72
    },
    {
      "order_id": 703653,
      "predicted_minutes": 25.3
    },
    {
      "order_id": 703655,
      "predicted_minutes": 31.63
    },
    {
      "order_id": 703657,
      "predicted_minutes": 37.35
    },
    {
      "order_id": 703659,
      "predicted_minutes": 30.62
    },
    {
      "order_id": 703664,
      "predicted_minutes": 35.8
    },
    {
      "order_id": 703665,
      "predicted_minutes": 25.42
    },
    {
      "order_id": 703670,
      "predicted_minutes": 41.25
    },
    {
      "order_id": 703675,
      "predicted_minutes": 37.89
    },
    {
      "order_id": 703678,
      "predicted_minutes": 47.76
    },
    {
      "order_id": 703681,
      "predicted_minutes": 25.9
    },
    {
      "order_id": 703690,
      "predicted_minutes": 44.44
    },
    {
      "order_id": 703691,
      "predicted_minutes": 29.94
    },
    {
      "order_id": 703693,
      "predicted_minutes": 30.91
    },
    {
      "order_id": 703703,
      "predicted_minutes": 38.91
    },
    {
      "order_id": 703704,
      "predicted_minutes": 34.72
    },
    {
      "order_id": 703706,
      "predicted_minutes": 34.26
    },
    {
      "order_id": 703708,
      "predicted_minutes": 29.19
    },
    {
      "order_id": 703711,
      "predicted_minutes": 26.27
    },
    {
      "order_id": 703713,
      "predicted_minutes": 26.39
    },
    {
      "order_id": 703721,
      "predicted_minutes": 50.04
    },
    {
      "order_id": 703723,
      "predicted_minutes": 29.23
    },
    {
      "order_id": 703732,
      "predicted_minutes": 28.27
    },
    {
      "order_id": 703738,
      "predicted_minutes": 41.79
    },
    {
      "order_id": 703745,
      "predicted_minutes": 29.72
    },
    {
      "order_id": 703746,
      "predicted_minutes": 24.23
    },
    {
      "order_id": 703747,
      "predicted_minutes": 42.82
    },
    {
      "order_id": 703752,
      "predicted_minutes": 47.12
    },
    {
      "order_id": 703755,
      "predicted_minutes": 24.55
    },
    {
      "order_id": 703762,
      "predicted_minutes": 47.76
    },
    {
      "order_id": 703770,
      "predicted_minutes": 22.26
    },
    {
      "order_id": 703773,
      "predicted_minutes": 51.17
    },
    {
      "order_id": 703775,
      "predicted_minutes": 29.31
    },
    {
      "order_id": 703778,
      "predicted_minutes": 34.18
    },
    {
      "order_id": 703785,
      "predicted_minutes": 38.24
    },
    {
      "order_id": 703797,
      "predicted_minutes": 33.99
    },
    {
      "order_id": 703804,
      "predicted_minutes": 42.35
    },
    {
      "order_id": 703808,
      "predicted_minutes": 32.59
    },
    {
      "order_id": 703814,
      "predicted_minutes": 27.76
    },
    {
      "order_id": 703815,
      "predicted_minutes": 30.49
    },
    {
      "order_id": 703820,
      "predicted_minutes": 31.01
    },
    {
      "order_id": 703822,
      "predicted_minutes": 20.3
    },
    {
      "order_id": 703828,
      "predicted_minutes": 34.26
    },
    {
      "order_id": 703829,
      "predicted_minutes": 26.56
    },
    {
      "order_id": 703832,
      "predicted_minutes": 27.48
    },
    {
      "order_id": 703843,
      "predicted_minutes": 31.78
    },
    {
      "order_id": 703845,
      "predicted_minutes": 41.48
    },
    {
      "order_id": 703853,
      "predicted_minutes": 30.28
    },
    {
      "order_id": 703859,
      "predicted_minutes": 36.49
    },
    {
      "order_id": 703861,
      "predicted_minutes": 25.91
    },
    {
      "order_id": 703862,
      "predicted_minutes": 24.98
    },
    {
      "order_id": 703867,
      "predicted_minutes": 30.4
    },
    {
      "order_id": 703870,
      "predicted_minutes": 24.06
    },
    {
      "order_id": 703871,
      "predicted_minutes": 44.99
    },
    {
      "order_id": 703873,
      "predicted_minutes": 27.98
    },
    {
      "order_id": 703876,
      "predicted_minutes": 23.33
    },
    {
      "order_id": 703883,
      "predicted_minutes": 39.43
    },
    {
      "order_id": 703884,
      "predicted_minutes": 41.7
    },
    {
      "order_id": 703887,
      "predicted_minutes": 36.63
    },
    {
      "order_id": 703890,
      "predicted_minutes": 28.21
    },
    {
      "order_id": 703903,
      "predicted_minutes": 25.73
    },
    {
      "order_id": 703904,
      "predicted_minutes": 39.42
    },
    {
      "order_id": 703912,
      "predicted_minutes": 42.57
    },
    {
      "order_id": 703918,
      "predicted_minutes": 27.24
    },
    {
      "order_id": 703923,
      "predicted_minutes": 35.01
    },
    {
      "order_id": 703925,
      "predicted_minutes": 35.73
    },
    {
      "order_id": 703927,
      "predicted_minutes": 25.4
    },
    {
      "order_id": 703930,
      "predicted_minutes": 47.45
    },
    {
      "order_id": 703934,
      "predicted_minutes": 39.96
    },
    {
      "order_id": 703936,
      "predicted_minutes": 22.24
    },
    {
      "order_id": 703937,
      "predicted_minutes": 28.27
    },
    {
      "order_id": 703938,
      "predicted_minutes": 34.47
    },
    {
      "order_id": 703950,
      "predicted_minutes": 19.37
    },
    {
      "order_id": 703951,
      "predicted_minutes": 32.85
    },
    {
      "order_id": 703954,
      "predicted_minutes": 33.58
    },
    {
      "order_id": 703956,
      "predicted_minutes": 43.07
    },
    {
      "order_id": 703958,
      "predicted_minutes": 27.61
    },
    {
      "order_id": 703960,
      "predicted_minutes": 40.2
    },
    {
      "order_id": 703966,
      "predicted_minutes": 19.49
    },
    {
      "order_id": 703969,
      "predicted_minutes": 30.23
    },
    {
      "order_id": 703988,
      "predicted_minutes": 33.57
    },
    {
      "order_id": 704009,
      "predicted_minutes": 46.69
    },
    {
      "order_id": 704010,
      "predicted_minutes": 19.82
    },
    {
      "order_id": 704011,
      "predicted_minutes": 25.49
    },
    {
      "order_id": 704023,
      "predicted_minutes": 33.69
    },
    {
      "order_id": 704024,
      "predicted_minutes": 39.71
    },
    {
      "order_id": 704025,
      "predicted_minutes": 23.8
    },
    {
      "order_id": 704026,
      "predicted_minutes": 25.77
    },
    {
      "order_id": 704028,
      "predicted_minutes": 26.65
    },
    {
      "order_id": 704041,
      "predicted_minutes": 28.97
    },
    {
      "order_id": 704045,
      "predicted_minutes": 21.96
    },
    {
      "order_id": 704051,
      "predicted_minutes": 39.95
    },
    {
      "order_id": 704052,
      "predicted_minutes": 23.72
    },
    {
      "order_id": 704059,
      "predicted_minutes": 31.9
    },
    {
      "order_id": 704061,
      "predicted_minutes": 39.5
    },
    {
      "order_id": 704070,
      "predicted_minutes": 46.25
    },
    {
      "order_id": 704071,
      "predicted_minutes": 22.17
    },
    {
      "order_id": 704075,
      "predicted_minutes": 26.88
    },
    {
      "order_id": 704076,
      "predicted_minutes": 25.39
    },
    {
      "order_id": 704079,
      "predicted_minutes": 19.86
    },
    {
      "order_id": 704080,
      "predicted_minutes": 20.14
    },
    {
      "order_id": 704086,
      "predicted_minutes": 30.7
    },
    {
      "order_id": 704089,
      "predicted_minutes": 25.61
    },
    {
      "order_id": 704100,
      "predicted_minutes": 44.05
    },
    {
      "order_id": 704106,
      "predicted_minutes": 26.75
    },
    {
      "order_id": 704110,
      "predicted_minutes": 25.5
    },
    {
      "order_id": 704122,
      "predicted_minutes": 21.07
    },
    {
      "order_id": 704123,
      "predicted_minutes": 28.74
    },
    {
      "order_id": 704128,
      "predicted_minutes": 23.65
    },
    {
      "order_id": 704141,
      "predicted_minutes": 37.48
    },
    {
      "order_id": 704142,
      "predicted_minutes": 32.26
    },
    {
      "order_id": 704143,
      "predicted_minutes": 42.32
    },
    {
      "order_id": 704146,
      "predicted_minutes": 35.56
    },
    {
      "order_id": 704151,
      "predicted_minutes": 30.23
    },
    {
      "order_id": 704152,
      "predicted_minutes": 25.71
    },
    {
      "order_id": 704154,
      "predicted_minutes": 35.33
    },
    {
      "order_id": 704159,
      "predicted_minutes": 46.63
    },
    {
      "order_id": 704163,
      "predicted_minutes": 30.11
    },
    {
      "order_id": 704178,
      "predicted_minutes": 45.63
    },
    {
      "order_id": 704179,
      "predicted_minutes": 40.8
    },
    {
      "order_id": 704180,
      "predicted_minutes": 18.6
    },
    {
      "order_id": 704186,
      "predicted_minutes": 30.8
    },
    {
      "order_id": 704191,
      "predicted_minutes": 48.81
    },
    {
      "order_id": 704197,
      "predicted_minutes": 27.99
    },
    {
      "order_id": 704219,
      "predicted_minutes": 33.38
    },
    {
      "order_id": 704223,
      "predicted_minutes": 21.72
    },
    {
      "order_id": 704226,
      "predicted_minutes": 29.71
    },
    {
      "order_id": 704233,
      "predicted_minutes": 33.25
    },
    {
      "order_id": 704234,
      "predicted_minutes": 55.73
    },
    {
      "order_id": 704272,
      "predicted_minutes": 32.72
    },
    {
      "order_id": 704282,
      "predicted_minutes": 36.8
    },
    {
      "order_id": 704283,
      "predicted_minutes": 36.67
    },
    {
      "order_id": 704285,
      "predicted_minutes": 53.31
    },
    {
      "order_id": 704290,
      "predicted_minutes": 27.68
    },
    {
      "order_id": 704297,
      "predicted_minutes": 29.94
    },
    {
      "order_id": 704305,
      "predicted_minutes": 28.28
    },
    {
      "order_id": 704306,
      "predicted_minutes": 43.3
    },
    {
      "order_id": 704315,
      "predicted_minutes": 35.27
    },
    {
      "order_id": 704322,
      "predicted_minutes": 36.42
    },
    {
      "order_id": 704327,
      "predicted_minutes": 45.03
    },
    {
      "order_id": 704340,
      "predicted_minutes": 38.39
    },
    {
      "order_id": 704344,
      "predicted_minutes": 33.39
    },
    {
      "order_id": 704345,
      "predicted_minutes": 25.31
    },
    {
      "order_id": 704353,
      "predicted_minutes": 38.69
    },
    {
      "order_id": 704357,
      "predicted_minutes": 30.81
    },
    {
      "order_id": 704359,
      "predicted_minutes": 37.29
    },
    {
      "order_id": 704360,
      "predicted_minutes": 35.24
    },
    {
      "order_id": 704361,
      "predicted_minutes": 38.8
    },
    {
      "order_id": 704363,
      "predicted_minutes": 29.25
    },
    {
      "order_id": 704365,
      "predicted_minutes": 37.23
    },
    {
      "order_id": 704370,
      "predicted_minutes": 37.18
    },
    {
      "order_id": 704372,
      "predicted_minutes": 27.61
    },
    {
      "order_id": 704382,
      "predicted_minutes": 24.89
    },
    {
      "order_id": 704383,
      "predicted_minutes": 24.56
    },
    {
      "order_id": 704398,
      "predicted_minutes": 40.6
    },
    {
      "order_id": 704402,
      "predicted_minutes": 36.76
    },
    {
      "order_id": 704406,
      "predicted_minutes": 31.57
    },
    {
      "order_id": 704414,
      "predicted_minutes": 20.11
    },
    {
      "order_id": 704417,
      "predicted_minutes": 32.69
    },
    {
      "order_id": 704421,
      "predicted_minutes": 24.79
    },
    {
      "order_id": 704437,
      "predicted_minutes": 35.49
    },
    {
      "order_id": 704440,
      "predicted_minutes": 28.83
    },
    {
      "order_id": 704455,
      "predicted_minutes": 35.62
    },
    {
      "order_id": 704465,
      "predicted_minutes": 18.52
    },
    {
      "order_id": 704466,
      "predicted_minutes": 32.41
    },
    {
      "order_id": 704469,
      "predicted_minutes": 29.5
    },
    {
      "order_id": 704471,
      "predicted_minutes": 16.99
    },
    {
      "order_id": 704473,
      "predicted_minutes": 20.26
    },
    {
      "order_id": 704483,
      "predicted_minutes": 26.45
    },
    {
      "order_id": 704484,
      "predicted_minutes": 31.28
    },
    {
      "order_id": 704485,
      "predicted_minutes": 30.17
    },
    {
      "order_id": 704486,
      "predicted_minutes": 29.7
    },
    {
      "order_id": 704493,
      "predicted_minutes": 23.87
    },
    {
      "order_id": 704501,
      "predicted_minutes": 42.61
    },
    {
      "order_id": 704503,
      "predicted_minutes": 38.15
    },
    {
      "order_id": 704504,
      "predicted_minutes": 29.58
    },
    {
      "order_id": 704514,
      "predicted_minutes": 36.55
    },
    {
      "order_id": 704519,
      "predicted_minutes": 37.09
    },
    {
      "order_id": 704520,
      "predicted_minutes": 41.05
    },
    {
      "order_id": 704522,
      "predicted_minutes": 20.63
    },
    {
      "order_id": 704523,
      "predicted_minutes": 34.79
    },
    {
      "order_id": 704524,
      "predicted_minutes": 22.84
    },
    {
      "order_id": 704526,
      "predicted_minutes": 41.98
    },
    {
      "order_id": 704529,
      "predicted_minutes": 20.72
    },
    {
      "order_id": 704530,
      "predicted_minutes": 21.71
    },
    {
      "order_id": 704531,
      "predicted_minutes": 35.11
    },
    {
      "order_id": 704540,
      "predicted_minutes": 47.73
    },
    {
      "order_id": 704541,
      "predicted_minutes": 29.49
    },
    {
      "order_id": 704549,
      "predicted_minutes": 27.52
    },
    {
      "order_id": 704556,
      "predicted_minutes": 35.43
    },
    {
      "order_id": 704560,
      "predicted_minutes": 27.84
    },
    {
      "order_id": 704567,
      "predicted_minutes": 35.18
    },
    {
      "order_id": 704570,
      "predicted_minutes": 29.41
    },
    {
      "order_id": 704571,
      "predicted_minutes": 39.39
    },
    {
      "order_id": 704572,
      "predicted_minutes": 29.44
    },
    {
      "order_id": 704582,
      "predicted_minutes": 42.22
    },
    {
      "order_id": 704584,
      "predicted_minutes": 50.33
    },
    {
      "order_id": 704586,
      "predicted_minutes": 28.83
    },
    {
      "order_id": 704587,
      "predicted_minutes": 23.91
    },
    {
      "order_id": 704591,
      "predicted_minutes": 37.83
    },
    {
      "order_id": 704592,
      "predicted_minutes": 26.5
    },
    {
      "order_id": 704614,
      "predicted_minutes": 43.13
    },
    {
      "order_id": 704616,
      "predicted_minutes": 36.8
    },
    {
      "order_id": 704619,
      "predicted_minutes": 31.13
    },
    {
      "order_id": 704624,
      "predicted_minutes": 35.4
    },
    {
      "order_id": 704627,
      "predicted_minutes": 20.17
    },
    {
      "order_id": 704629,
      "predicted_minutes": 30.76
    },
    {
      "order_id": 704631,
      "predicted_minutes": 57.14
    },
    {
      "order_id": 704632,
      "predicted_minutes": 28.26
    },
    {
      "order_id": 704637,
      "predicted_minutes": 45.34
    },
    {
      "order_id": 704643,
      "predicted_minutes": 29.62
    },
    {
      "order_id": 704644,
      "predicted_minutes": 34.93
    },
    {
      "order_id": 704652,
      "predicted_minutes": 45.58
    },
    {
      "order_id": 704655,
      "predicted_minutes": 24.64
    },
    {
      "order_id": 704657,
      "predicted_minutes": 21.92
    },
    {
      "order_id": 704658,
      "predicted_minutes": 56.74
    },
    {
      "order_id": 704671,
      "predicted_minutes": 26.64
    },
    {
      "order_id": 704674,
      "predicted_minutes": 38.53
    },
    {
      "order_id": 704686,
      "predicted_minutes": 38.27
    },
    {
      "order_id": 704688,
      "predicted_minutes": 24.98
    },
    {
      "order_id": 704697,
      "predicted_minutes": 36.09
    },
    {
      "order_id": 704698,
      "predicted_minutes": 33.15
    },
    {
      "order_id": 704699,
      "predicted_minutes": 35.96
    },
    {
      "order_id": 704704,
      "predicted_minutes": 26.46
    },
    {
      "order_id": 704705,
      "predicted_minutes": 34.69
    },
    {
      "order_id": 704709,
      "predicted_minutes": 32.62
    },
    {
      "order_id": 704710,
      "predicted_minutes": 18.52
    },
    {
      "order_id": 704712,
      "predicted_minutes": 39.11
    },
    {
      "order_id": 704714,
      "predicted_minutes": 30.54
    },
    {
      "order_id": 704725,
      "predicted_minutes": 36.76
    },
    {
      "order_id": 704727,
      "predicted_minutes": 19.14
    },
    {
      "order_id": 704741,
      "predicted_minutes": 23.03
    },
    {
      "order_id": 704750,
      "predicted_minutes": 46.35
    },
    {
      "order_id": 704751,
      "predicted_minutes": 35.88
    },
    {
      "order_id": 704773,
      "predicted_minutes": 36.95
    },
    {
      "order_id": 704774,
      "predicted_minutes": 27.0
    },
    {
      "order_id": 704775,
      "predicted_minutes": 28.21
    },
    {
      "order_id": 704782,
      "predicted_minutes": 41.93
    },
    {
      "order_id": 704787,
      "predicted_minutes": 43.23
    },
    {
      "order_id": 704790,
      "predicted_minutes": 23.44
    },
    {
      "order_id": 704794,
      "predicted_minutes": 30.4
    },
    {
      "order_id": 704802,
      "predicted_minutes": 42.75
    },
    {
      "order_id": 704809,
      "predicted_minutes": 38.22
    },
    {
      "order_id": 704822,
      "predicted_minutes": 22.75
    },
    {
      "order_id": 704828,
      "predicted_minutes": 24.18
    },
    {
      "order_id": 704830,
      "predicted_minutes": 31.24
    },
    {
      "order_id": 704833,
      "predicted_minutes": 39.21
    },
    {
      "order_id": 704834,
      "predicted_minutes": 25.42
    },
    {
      "order_id": 704837,
      "predicted_minutes": 18.76
    },
    {
      "order_id": 704847,
      "predicted_minutes": 33.91
    },
    {
      "order_id": 704859,
      "predicted_minutes": 33.64
    },
    {
      "order_id": 704861,
      "predicted_minutes": 41.55
    },
    {
      "order_id": 704862,
      "predicted_minutes": 27.41
    },
    {
      "order_id": 704865,
      "predicted_minutes": 37.46
    },
    {
      "order_id": 704866,
      "predicted_minutes": 36.91
    },
    {
      "order_id": 704883,
      "predicted_minutes": 36.25
    },
    {
      "order_id": 704884,
      "predicted_minutes": 35.62
    },
    {
      "order_id": 704887,
      "predicted_minutes": 31.79
    },
    {
      "order_id": 704902,
      "predicted_minutes": 34.89
    },
    {
      "order_id": 704906,
      "predicted_minutes": 35.84
    },
    {
      "order_id": 704913,
      "predicted_minutes": 20.81
    },
    {
      "order_id": 704916,
      "predicted_minutes": 27.06
    },
    {
      "order_id": 704923,
      "predicted_minutes": 23.98
    },
    {
      "order_id": 704931,
      "predicted_minutes": 22.32
    },
    {
      "order_id": 704932,
      "predicted_minutes": 24.72
    },
    {
      "order_id": 704933,
      "predicted_minutes": 22.88
    },
    {
      "order_id": 704935,
      "predicted_minutes": 53.25
    },
    {
      "order_id": 704943,
      "predicted_minutes": 29.09
    },
    {
      "order_id": 704944,
      "predicted_minutes": 31.28
    },
    {
      "order_id": 704954,
      "predicted_minutes": 23.36
    },
    {
      "order_id": 704956,
      "predicted_minutes": 24.98
    },
    {
      "order_id": 704963,
      "predicted_minutes": 40.43
    },
    {
      "order_id": 704965,
      "predicted_minutes": 25.2
    },
    {
      "order_id": 704967,
      "predicted_minutes": 13.79
    },
    {
      "order_id": 704974,
      "predicted_minutes": 29.54
    },
    {
      "order_id": 704980,
      "predicted_minutes": 22.76
    },
    {
      "order_id": 704981,
      "predicted_minutes": 32.92
    },
    {
      "order_id": 704989,
      "predicted_minutes": 29.19
    },
    {
      "order_id": 704991,
      "predicted_minutes": 13.53
    },
    {
      "order_id": 704996,
      "predicted_minutes": 31.46
    },
    {
      "order_id": 704998,
      "predicted_minutes": 46.98
    },
    {
      "order_id": 704999,
      "predicted_minutes": 30.44
    },
    {
      "order_id": 705009,
      "predicted_minutes": 21.37
    },
    {
      "order_id": 705015,
      "predicted_minutes": 20.69
    },
    {
      "order_id": 705019,
      "predicted_minutes": 42.73
    },
    {
      "order_id": 705026,
      "predicted_minutes": 32.96
    },
    {
      "order_id": 705041,
      "predicted_minutes": 33.68
    },
    {
      "order_id": 705049,
      "predicted_minutes": 30.77
    },
    {
      "order_id": 705053,
      "predicted_minutes": 28.81
    },
    {
      "order_id": 705056,
      "predicted_minutes": 14.4
    },
    {
      "order_id": 705057,
      "predicted_minutes": 27.86
    },
    {
      "order_id": 705058,
      "predicted_minutes": 24.18
    },
    {
      "order_id": 705066,
      "predicted_minutes": 35.86
    },
    {
      "order_id": 705070,
      "predicted_minutes": 40.42
    },
    {
      "order_id": 705077,
      "predicted_minutes": 29.31
    },
    {
      "order_id": 705091,
      "predicted_minutes": 35.75
    },
    {
      "order_id": 705093,
      "predicted_minutes": 40.47
    },
    {
      "order_id": 705099,
      "predicted_minutes": 42.93
    },
    {
      "order_id": 705110,
      "predicted_minutes": 25.33
    },
    {
      "order_id": 705111,
      "predicted_minutes": 26.94
    },
    {
      "order_id": 705112,
      "predicted_minutes": 24.85
    },
    {
      "order_id": 705113,
      "predicted_minutes": 30.64
    },
    {
      "order_id": 705123,
      "predicted_minutes": 16.54
    },
    {
      "order_id": 705125,
      "predicted_minutes": 36.2
    },
    {
      "order_id": 705128,
      "predicted_minutes": 22.28
    },
    {
      "order_id": 705133,
      "predicted_minutes": 20.85
    },
    {
      "order_id": 705139,
      "predicted_minutes": 36.18
    },
    {
      "order_id": 705140,
      "predicted_minutes": 39.7
    },
    {
      "order_id": 705141,
      "predicted_minutes": 38.36
    },
    {
      "order_id": 705142,
      "predicted_minutes": 27.41
    },
    {
      "order_id": 705148,
      "predicted_minutes": 23.85
    },
    {
      "order_id": 705149,
      "predicted_minutes": 35.28
    },
    {
      "order_id": 705154,
      "predicted_minutes": 19.37
    },
    {
      "order_id": 705157,
      "predicted_minutes": 15.9
    },
    {
      "order_id": 705158,
      "predicted_minutes": 25.16
    },
    {
      "order_id": 705160,
      "predicted_minutes": 26.09
    },
    {
      "order_id": 705163,
      "predicted_minutes": 32.14
    },
    {
      "order_id": 705167,
      "predicted_minutes": 35.95
    },
    {
      "order_id": 705168,
      "predicted_minutes": 49.5
    },
    {
      "order_id": 705182,
      "predicted_minutes": 25.73
    },
    {
      "order_id": 705184,
      "predicted_minutes": 15.79
    },
    {
      "order_id": 705190,
      "predicted_minutes": 32.33
    },
    {
      "order_id": 705192,
      "predicted_minutes": 29.4
    },
    {
      "order_id": 705193,
      "predicted_minutes": 36.31
    },
    {
      "order_id": 705214,
      "predicted_minutes": 28.78
    },
    {
      "order_id": 705215,
      "predicted_minutes": 31.13
    },
    {
      "order_id": 705217,
      "predicted_minutes": 32.9
    },
    {
      "order_id": 705220,
      "predicted_minutes": 33.42
    },
    {
      "order_id": 705223,
      "predicted_minutes": 29.84
    },
    {
      "order_id": 705227,
      "predicted_minutes": 35.85
    },
    {
      "order_id": 705228,
      "predicted_minutes": 35.0
    },
    {
      "order_id": 705231,
      "predicted_minutes": 24.89
    },
    {
      "order_id": 705235,
      "predicted_minutes": 20.81
    },
    {
      "order_id": 705248,
      "predicted_minutes": 30.36
    },
    {
      "order_id": 705249,
      "predicted_minutes": 38.77
    },
    {
      "order_id": 705253,
      "predicted_minutes": 42.58
    },
    {
      "order_id": 705257,
      "predicted_minutes": 22.19
    },
    {
      "order_id": 705266,
      "predicted_minutes": 26.93
    },
    {
      "order_id": 705280,
      "predicted_minutes": 23.1
    },
    {
      "order_id": 705283,
      "predicted_minutes": 35.73
    },
    {
      "order_id": 705287,
      "predicted_minutes": 20.47
    },
    {
      "order_id": 705291,
      "predicted_minutes": 32.23
    },
    {
      "order_id": 705292,
      "predicted_minutes": 41.34
    },
    {
      "order_id": 705293,
      "predicted_minutes": 30.67
    },
    {
      "order_id": 705296,
      "predicted_minutes": 41.42
    },
    {
      "order_id": 705301,
      "predicted_minutes": 26.04
    },
    {
      "order_id": 705305,
      "predicted_minutes": 36.98
    },
    {
      "order_id": 705310,
      "predicted_minutes": 34.61
    },
    {
      "order_id": 705311,
      "predicted_minutes": 30.91
    },
    {
      "order_id": 705312,
      "predicted_minutes": 24.52
    },
    {
      "order_id": 705317,
      "predicted_minutes": 27.57
    },
    {
      "order_id": 705323,
      "predicted_minutes": 21.57
    },
    {
      "order_id": 705332,
      "predicted_minutes": 33.91
    },
    {
      "order_id": 705334,
      "predicted_minutes": 31.11
    },
    {
      "order_id": 705336,
      "predicted_minutes": 38.66
    },
    {
      "order_id": 705337,
      "predicted_minutes": 35.72
    },
    {
      "order_id": 705343,
      "predicted_minutes": 46.92
    },
    {
      "order_id": 705348,
      "predicted_minutes": 24.43
    },
    {
      "order_id": 705359,
      "predicted_minutes": 41.78
    },
    {
      "order_id": 705366,
      "predicted_minutes": 23.91
    },
    {
      "order_id": 705368,
      "predicted_minutes": 23.03
    },
    {
      "order_id": 705369,
      "predicted_minutes": 37.4
    },
    {
      "order_id": 705370,
      "predicted_minutes": 23.38
    },
    {
      "order_id": 705372,
      "predicted_minutes": 34.93
    },
    {
      "order_id": 705384,
      "predicted_minutes": 37.22
    },
    {
      "order_id": 705395,
      "predicted_minutes": 28.47
    },
    {
      "order_id": 705401,
      "predicted_minutes": 36.34
    },
    {
      "order_id": 705410,
      "predicted_minutes": 35.2
    },
    {
      "order_id": 705419,
      "predicted_minutes": 40.74
    },
    {
      "order_id": 705422,
      "predicted_minutes": 30.29
    },
    {
      "order_id": 705427,
      "predicted_minutes": 25.77
    },
    {
      "order_id": 705429,
      "predicted_minutes": 40.61
    },
    {
      "order_id": 705433,
      "predicted_minutes": 30.8
    },
    {
      "order_id": 705434,
      "predicted_minutes": 27.59
    },
    {
      "order_id": 705439,
      "predicted_minutes": 26.48
    },
    {
      "order_id": 705444,
      "predicted_minutes": 54.04
    },
    {
      "order_id": 705449,
      "predicted_minutes": 28.17
    },
    {
      "order_id": 705456,
      "predicted_minutes": 40.76
    },
    {
      "order_id": 705457,
      "predicted_minutes": 37.58
    },
    {
      "order_id": 705466,
      "predicted_minutes": 53.85
    },
    {
      "order_id": 705468,
      "predicted_minutes": 33.51
    },
    {
      "order_id": 705474,
      "predicted_minutes": 26.9
    },
    {
      "order_id": 705483,
      "predicted_minutes": 29.71
    },
    {
      "order_id": 705487,
      "predicted_minutes": 17.32
    },
    {
      "order_id": 705509,
      "predicted_minutes": 23.9
    },
    {
      "order_id": 705529,
      "predicted_minutes": 42.27
    },
    {
      "order_id": 705530,
      "predicted_minutes": 31.92
    },
    {
      "order_id": 705548,
      "predicted_minutes": 25.75
    },
    {
      "order_id": 705559,
      "predicted_minutes": 32.46
    },
    {
      "order_id": 705565,
      "predicted_minutes": 25.41
    },
    {
      "order_id": 705567,
      "predicted_minutes": 43.19
    },
    {
      "order_id": 705572,
      "predicted_minutes": 22.54
    },
    {
      "order_id": 705579,
      "predicted_minutes": 16.62
    },
    {
      "order_id": 705581,
      "predicted_minutes": 35.43
    },
    {
      "order_id": 705583,
      "predicted_minutes": 26.82
    },
    {
      "order_id": 705585,
      "predicted_minutes": 33.5
    },
    {
      "order_id": 705591,
      "predicted_minutes": 26.2
    },
    {
      "order_id": 705609,
      "predicted_minutes": 17.7
    },
    {
      "order_id": 705617,
      "predicted_minutes": 36.19
    },
    {
      "order_id": 705619,
      "predicted_minutes": 32.01
    },
    {
      "order_id": 705625,
      "predicted_minutes": 25.07
    },
    {
      "order_id": 705628,
      "predicted_minutes": 23.79
    },
    {
      "order_id": 705632,
      "predicted_minutes": 37.03
    },
    {
      "order_id": 705636,
      "predicted_minutes": 40.0
    },
    {
      "order_id": 705646,
      "predicted_minutes": 26.44
    },
    {
      "order_id": 705647,
      "predicted_minutes": 40.45
    },
    {
      "order_id": 705649,
      "predicted_minutes": 36.64
    },
    {
      "order_id": 705651,
      "predicted_minutes": 27.77
    },
    {
      "order_id": 705653,
      "predicted_minutes": 21.05
    },
    {
      "order_id": 705659,
      "predicted_minutes": 30.59
    },
    {
      "order_id": 705667,
      "predicted_minutes": 44.97
    },
    {
      "order_id": 705674,
      "predicted_minutes": 26.2
    },
    {
      "order_id": 705677,
      "predicted_minutes": 21.52
    },
    {
      "order_id": 705680,
      "predicted_minutes": 26.64
    },
    {
      "order_id": 705681,
      "predicted_minutes": 21.04
    },
    {
      "order_id": 705689,
      "predicted_minutes": 31.12
    },
    {
      "order_id": 705694,
      "predicted_minutes": 31.57
    },
    {
      "order_id": 705696,
      "predicted_minutes": 25.77
    },
    {
      "order_id": 705700,
      "predicted_minutes": 23.51
    },
    {
      "order_id": 705709,
      "predicted_minutes": 53.48
    },
    {
      "order_id": 705716,
      "predicted_minutes": 31.24
    },
    {
      "order_id": 705721,
      "predicted_minutes": 43.03
    },
    {
      "order_id": 705722,
      "predicted_minutes": 39.94
    },
    {
      "order_id": 705723,
      "predicted_minutes": 26.49
    },
    {
      "order_id": 705730,
      "predicted_minutes": 20.45
    },
    {
      "order_id": 705732,
      "predicted_minutes": 22.98
    },
    {
      "order_id": 705734,
      "predicted_minutes": 27.64
    },
    {
      "order_id": 705735,
      "predicted_minutes": 25.6
    },
    {
      "order_id": 705738,
      "predicted_minutes": 41.46
    },
    {
      "order_id": 705745,
      "predicted_minutes": 32.57
    },
    {
      "order_id": 705748,
      "predicted_minutes": 43.23
    },
    {
      "order_id": 705750,
      "predicted_minutes": 46.01
    },
    {
      "order_id": 705752,
      "predicted_minutes": 35.99
    },
    {
      "order_id": 705753,
      "predicted_minutes": 32.4
    },
    {
      "order_id": 705758,
      "predicted_minutes": 39.72
    },
    {
      "order_id": 705767,
      "predicted_minutes": 24.71
    },
    {
      "order_id": 705768,
      "predicted_minutes": 21.88
    },
    {
      "order_id": 705770,
      "predicted_minutes": 25.86
    },
    {
      "order_id": 705776,
      "predicted_minutes": 36.54
    },
    {
      "order_id": 705777,
      "predicted_minutes": 26.62
    },
    {
      "order_id": 705780,
      "predicted_minutes": 34.87
    },
    {
      "order_id": 705781,
      "predicted_minutes": 32.73
    },
    {
      "order_id": 705793,
      "predicted_minutes": 25.69
    },
    {
      "order_id": 705794,
      "predicted_minutes": 34.17
    },
    {
      "order_id": 705796,
      "predicted_minutes": 37.21
    },
    {
      "order_id": 705797,
      "predicted_minutes": 33.63
    },
    {
      "order_id": 705800,
      "predicted_minutes": 28.26
    },
    {
      "order_id": 705804,
      "predicted_minutes": 53.5
    },
    {
      "order_id": 705807,
      "predicted_minutes": 48.73
    },
    {
      "order_id": 705810,
      "predicted_minutes": 27.99
    },
    {
      "order_id": 705811,
      "predicted_minutes": 51.43
    },
    {
      "order_id": 705814,
      "predicted_minutes": 41.95
    },
    {
      "order_id": 705822,
      "predicted_minutes": 39.35
    },
    {
      "order_id": 705823,
      "predicted_minutes": 44.16
    },
    {
      "order_id": 705825,
      "predicted_minutes": 30.32
    },
    {
      "order_id": 705839,
      "predicted_minutes": 26.41
    },
    {
      "order_id": 705848,
      "predicted_minutes": 42.23
    },
    {
      "order_id": 705849,
      "predicted_minutes": 21.67
    },
    {
      "order_id": 705855,
      "predicted_minutes": 36.57
    },
    {
      "order_id": 705857,
      "predicted_minutes": 30.44
    },
    {
      "order_id": 705859,
      "predicted_minutes": 17.6
    },
    {
      "order_id": 705860,
      "predicted_minutes": 18.74
    },
    {
      "order_id": 705861,
      "predicted_minutes": 24.13
    },
    {
      "order_id": 705865,
      "predicted_minutes": 38.01
    },
    {
      "order_id": 705869,
      "predicted_minutes": 25.42
    },
    {
      "order_id": 705870,
      "predicted_minutes": 34.98
    },
    {
      "order_id": 705874,
      "predicted_minutes": 17.88
    },
    {
      "order_id": 705878,
      "predicted_minutes": 33.66
    },
    {
      "order_id": 705879,
      "predicted_minutes": 25.53
    },
    {
      "order_id": 705880,
      "predicted_minutes": 28.36
    },
    {
      "order_id": 705881,
      "predicted_minutes": 19.46
    },
    {
      "order_id": 705889,
      "predicted_minutes": 31.92
    },
    {
      "order_id": 705890,
      "predicted_minutes": 18.84
    },
    {
      "order_id": 705900,
      "predicted_minutes": 25.4
    },
    {
      "order_id": 705909,
      "predicted_minutes": 44.29
    },
    {
      "order_id": 705917,
      "predicted_minutes": 48.33
    },
    {
      "order_id": 705922,
      "predicted_minutes": 23.65
    },
    {
      "order_id": 705925,
      "predicted_minutes": 34.33
    },
    {
      "order_id": 705933,
      "predicted_minutes": 31.27
    },
    {
      "order_id": 705942,
      "predicted_minutes": 22.94
    },
    {
      "order_id": 705944,
      "predicted_minutes": 23.38
    },
    {
      "order_id": 705945,
      "predicted_minutes": 28.89
    },
    {
      "order_id": 705964,
      "predicted_minutes": 11.25
    },
    {
      "order_id": 705965,
      "predicted_minutes": 31.38
    },
    {
      "order_id": 705971,
      "predicted_minutes": 31.22
    },
    {
      "order_id": 705973,
      "predicted_minutes": 27.25
    },
    {
      "order_id": 705979,
      "predicted_minutes": 21.22
    },
    {
      "order_id": 705981,
      "predicted_minutes": 32.88
    },
    {
      "order_id": 705986,
      "predicted_minutes": 31.56
    },
    {
      "order_id": 705994,
      "predicted_minutes": 27.47
    },
    {
      "order_id": 705996,
      "predicted_minutes": 35.94
    },
    {
      "order_id": 706002,
      "predicted_minutes": 31.27
    },
    {
      "order_id": 706007,
      "predicted_minutes": 34.04
    },
    {
      "order_id": 706008,
      "predicted_minutes": 37.47
    },
    {
      "order_id": 706017,
      "predicted_minutes": 31.55
    },
    {
      "order_id": 706019,
      "predicted_minutes": 21.02
    },
    {
      "order_id": 706020,
      "predicted_minutes": 21.68
    },
    {
      "order_id": 706028,
      "predicted_minutes": 27.63
    },
    {
      "order_id": 706037,
      "predicted_minutes": 34.12
    },
    {
      "order_id": 706043,
      "predicted_minutes": 40.32
    },
    {
      "order_id": 706057,
      "predicted_minutes": 42.97
    },
    {
      "order_id": 706059,
      "predicted_minutes": 36.67
    },
    {
      "order_id": 706064,
      "predicted_minutes": 44.01
    },
    {
      "order_id": 706066,
      "predicted_minutes": 39.09
    },
    {
      "order_id": 706071,
      "predicted_minutes": 24.84
    },
    {
      "order_id": 706076,
      "predicted_minutes": 30.84
    },
    {
      "order_id": 706077,
      "predicted_minutes": 13.03
    },
    {
      "order_id": 706080,
      "predicted_minutes": 24.13
    },
    {
      "order_id": 706085,
      "predicted_minutes": 23.38
    },
    {
      "order_id": 706097,
      "predicted_minutes": 21.16
    },
    {
      "order_id": 706103,
      "predicted_minutes": 33.81
    },
    {
      "order_id": 706111,
      "predicted_minutes": 21.71
    },
    {
      "order_id": 706117,
      "predicted_minutes": 19.45
    },
    {
      "order_id": 706125,
      "predicted_minutes": 43.07
    },
    {
      "order_id": 706127,
      "predicted_minutes": 35.27
    },
    {
      "order_id": 706132,
      "predicted_minutes": 40.79
    },
    {
      "order_id": 706134,
      "predicted_minutes": 29.5
    },
    {
      "order_id": 706138,
      "predicted_minutes": 39.65
    },
    {
      "order_id": 706141,
      "predicted_minutes": 24.11
    },
    {
      "order_id": 706150,
      "predicted_minutes": 24.63
    },
    {
      "order_id": 706155,
      "predicted_minutes": 34.62
    },
    {
      "order_id": 706157,
      "predicted_minutes": 39.87
    },
    {
      "order_id": 706161,
      "predicted_minutes": 42.85
    },
    {
      "order_id": 706162,
      "predicted_minutes": 13.24
    },
    {
      "order_id": 706165,
      "predicted_minutes": 18.35
    },
    {
      "order_id": 706173,
      "predicted_minutes": 35.43
    },
    {
      "order_id": 706175,
      "predicted_minutes": 54.47
    },
    {
      "order_id": 706183,
      "predicted_minutes": 21.46
    },
    {
      "order_id": 706185,
      "predicted_minutes": 36.95
    },
    {
      "order_id": 706188,
      "predicted_minutes": 32.69
    },
    {
      "order_id": 706193,
      "predicted_minutes": 62.35
    },
    {
      "order_id": 706197,
      "predicted_minutes": 27.66
    },
    {
      "order_id": 706198,
      "predicted_minutes": 43.36
    },
    {
      "order_id": 706200,
      "predicted_minutes": 21.24
    },
    {
      "order_id": 706205,
      "predicted_minutes": 21.89
    },
    {
      "order_id": 706207,
      "predicted_minutes": 29.97
    },
    {
      "order_id": 706208,
      "predicted_minutes": 37.47
    },
    {
      "order_id": 706215,
      "predicted_minutes": 39.11
    },
    {
      "order_id": 706229,
      "predicted_minutes": 26.54
    },
    {
      "order_id": 706230,
      "predicted_minutes": 24.24
    },
    {
      "order_id": 706231,
      "predicted_minutes": 17.43
    },
    {
      "order_id": 706235,
      "predicted_minutes": 39.68
    },
    {
      "order_id": 706240,
      "predicted_minutes": 32.47
    },
    {
      "order_id": 706242,
      "predicted_minutes": 25.26
    },
    {
      "order_id": 706243,
      "predicted_minutes": 33.0
    },
    {
      "order_id": 706244,
      "predicted_minutes": 27.61
    },
    {
      "order_id": 706253,
      "predicted_minutes": 48.39
    },
    {
      "order_id": 706257,
      "predicted_minutes": 35.09
    },
    {
      "order_id": 706258,
      "predicted_minutes": 18.4
    },
    {
      "order_id": 706260,
      "predicted_minutes": 26.7
    },
    {
      "order_id": 706263,
      "predicted_minutes": 30.03
    },
    {
      "order_id": 706269,
      "predicted_minutes": 32.54
    },
    {
      "order_id": 706278,
      "predicted_minutes": 17.86
    },
    {
      "order_id": 706287,
      "predicted_minutes": 41.45
    },
    {
      "order_id": 706294,
      "predicted_minutes": 34.2
    },
    {
      "order_id": 706297,
      "predicted_minutes": 41.47
    },
    {
      "order_id": 706309,
      "predicted_minutes": 30.91
    },
    {
      "order_id": 706311,
      "predicted_minutes": 41.61
    },
    {
      "order_id": 706312,
      "predicted_minutes": 44.61
    },
    {
      "order_id": 706313,
      "predicted_minutes": 24.91
    },
    {
      "order_id": 706318,
      "predicted_minutes": 19.75
    },
    {
      "order_id": 706326,
      "predicted_minutes": 23.2
    },
    {
      "order_id": 706330,
      "predicted_minutes": 41.01
    },
    {
      "order_id": 706337,
      "predicted_minutes": 43.5
    },
    {
      "order_id": 706345,
      "predicted_minutes": 32.4
    },
    {
      "order_id": 706350,
      "predicted_minutes": 38.18
    },
    {
      "order_id": 706353,
      "predicted_minutes": 27.1
    },
    {
      "order_id": 706355,
      "predicted_minutes": 27.53
    },
    {
      "order_id": 706356,
      "predicted_minutes": 31.79
    },
    {
      "order_id": 706359,
      "predicted_minutes": 27.45
    },
    {
      "order_id": 706363,
      "predicted_minutes": 41.35
    },
    {
      "order_id": 706368,
      "predicted_minutes": 26.41
    },
    {
      "order_id": 706371,
      "predicted_minutes": 23.29
    },
    {
      "order_id": 706372,
      "predicted_minutes": 23.46
    },
    {
      "order_id": 706373,
      "predicted_minutes": 37.19
    },
    {
      "order_id": 706376,
      "predicted_minutes": 34.93
    },
    {
      "order_id": 706381,
      "predicted_minutes": 39.92
    },
    {
      "order_id": 706385,
      "predicted_minutes": 43.06
    },
    {
      "order_id": 706387,
      "predicted_minutes": 32.65
    },
    {
      "order_id": 706390,
      "predicted_minutes": 35.68
    },
    {
      "order_id": 706397,
      "predicted_minutes": 33.03
    },
    {
      "order_id": 706403,
      "predicted_minutes": 16.18
    },
    {
      "order_id": 706404,
      "predicted_minutes": 35.73
    },
    {
      "order_id": 706406,
      "predicted_minutes": 42.37
    },
    {
      "order_id": 706410,
      "predicted_minutes": 28.74
    },
    {
      "order_id": 706413,
      "predicted_minutes": 37.01
    },
    {
      "order_id": 706415,
      "predicted_minutes": 32.18
    },
    {
      "order_id": 706422,
      "predicted_minutes": 34.38
    },
    {
      "order_id": 706424,
      "predicted_minutes": 44.54
    },
    {
      "order_id": 706431,
      "predicted_minutes": 31.67
    },
    {
      "order_id": 706433,
      "predicted_minutes": 24.2
    },
    {
      "order_id": 706442,
      "predicted_minutes": 25.49
    },
    {
      "order_id": 706444,
      "predicted_minutes": 31.3
    },
    {
      "order_id": 706446,
      "predicted_minutes": 29.97
    },
    {
      "order_id": 706448,
      "predicted_minutes": 21.41
    },
    {
      "order_id": 706461,
      "predicted_minutes": 35.55
    },
    {
      "order_id": 706472,
      "predicted_minutes": 26.1
    },
    {
      "order_id": 706473,
      "predicted_minutes": 20.24
    },
    {
      "order_id": 706476,
      "predicted_minutes": 22.28
    },
    {
      "order_id": 706479,
      "predicted_minutes": 32.12
    },
    {
      "order_id": 706496,
      "predicted_minutes": 30.0
    },
    {
      "order_id": 706498,
      "predicted_minutes": 26.53
    },
    {
      "order_id": 706499,
      "predicted_minutes": 23.45
    },
    {
      "order_id": 706500,
      "predicted_minutes": 29.27
    },
    {
      "order_id": 706502,
      "predicted_minutes": 28.3
    },
    {
      "order_id": 706505,
      "predicted_minutes": 48.61
    },
    {
      "order_id": 706514,
      "predicted_minutes": 27.58
    },
    {
      "order_id": 706516,
      "predicted_minutes": 51.48
    },
    {
      "order_id": 706520,
      "predicted_minutes": 29.11
    },
    {
      "order_id": 706522,
      "predicted_minutes": 23.29
    },
    {
      "order_id": 706532,
      "predicted_minutes": 26.63
    },
    {
      "order_id": 706533,
      "predicted_minutes": 43.03
    },
    {
      "order_id": 706534,
      "predicted_minutes": 38.17
    },
    {
      "order_id": 706537,
      "predicted_minutes": 38.81
    },
    {
      "order_id": 706538,
      "predicted_minutes": 30.24
    },
    {
      "order_id": 706546,
      "predicted_minutes": 27.4
    },
    {
      "order_id": 706547,
      "predicted_minutes": 22.63
    },
    {
      "order_id": 706551,
      "predicted_minutes": 40.26
    },
    {
      "order_id": 706552,
      "predicted_minutes": 33.77
    },
    {
      "order_id": 706561,
      "predicted_minutes": 34.85
    },
    {
      "order_id": 706564,
      "predicted_minutes": 33.48
    },
    {
      "order_id": 706572,
      "predicted_minutes": 33.45
    },
    {
      "order_id": 706579,
      "predicted_minutes": 35.98
    },
    {
      "order_id": 706592,
      "predicted_minutes": 21.29
    },
    {
      "order_id": 706600,
      "predicted_minutes": 42.39
    },
    {
      "order_id": 706601,
      "predicted_minutes": 22.44
    },
    {
      "order_id": 706603,
      "predicted_minutes": 41.66
    },
    {
      "order_id": 706610,
      "predicted_minutes": 29.65
    },
    {
      "order_id": 706616,
      "predicted_minutes": 27.08
    },
    {
      "order_id": 706617,
      "predicted_minutes": 24.86
    },
    {
      "order_id": 706622,
      "predicted_minutes": 34.74
    },
    {
      "order_id": 706624,
      "predicted_minutes": 40.25
    },
    {
      "order_id": 706633,
      "predicted_minutes": 40.06
    },
    {
      "order_id": 706637,
      "predicted_minutes": 25.9
    },
    {
      "order_id": 706641,
      "predicted_minutes": 28.35
    },
    {
      "order_id": 706661,
      "predicted_minutes": 46.82
    },
    {
      "order_id": 706667,
      "predicted_minutes": 37.7
    },
    {
      "order_id": 706668,
      "predicted_minutes": 23.24
    },
    {
      "order_id": 706674,
      "predicted_minutes": 32.85
    },
    {
      "order_id": 706676,
      "predicted_minutes": 41.34
    },
    {
      "order_id": 706678,
      "predicted_minutes": 16.3
    },
    {
      "order_id": 706680,
      "predicted_minutes": 17.26
    },
    {
      "order_id": 706690,
      "predicted_minutes": 35.91
    },
    {
      "order_id": 706691,
      "predicted_minutes": 22.92
    },
    {
      "order_id": 706692,
      "predicted_minutes": 26.85
    },
    {
      "order_id": 706698,
      "predicted_minutes": 21.17
    },
    {
      "order_id": 706703,
      "predicted_minutes": 29.5
    },
    {
      "order_id": 706713,
      "predicted_minutes": 32.65
    },
    {
      "order_id": 706719,
      "predicted_minutes": 40.15
    },
    {
      "order_id": 706720,
      "predicted_minutes": 27.6
    },
    {
      "order_id": 706735,
      "predicted_minutes": 37.23
    },
    {
      "order_id": 706736,
      "predicted_minutes": 44.58
    },
    {
      "order_id": 706743,
      "predicted_minutes": 26.94
    },
    {
      "order_id": 706747,
      "predicted_minutes": 33.98
    },
    {
      "order_id": 706748,
      "predicted_minutes": 23.91
    },
    {
      "order_id": 706754,
      "predicted_minutes": 35.61
    },
    {
      "order_id": 706757,
      "predicted_minutes": 22.55
    },
    {
      "order_id": 706759,
      "predicted_minutes": 25.48
    },
    {
      "order_id": 706762,
      "predicted_minutes": 43.75
    },
    {
      "order_id": 706764,
      "predicted_minutes": 24.07
    },
    {
      "order_id": 706769,
      "predicted_minutes": 32.32
    },
    {
      "order_id": 706772,
      "predicted_minutes": 30.77
    },
    {
      "order_id": 706778,
      "predicted_minutes": 24.37
    },
    {
      "order_id": 706780,
      "predicted_minutes": 32.9
    },
    {
      "order_id": 706788,
      "predicted_minutes": 39.22
    },
    {
      "order_id": 706791,
      "predicted_minutes": 23.57
    },
    {
      "order_id": 706798,
      "predicted_minutes": 22.12
    },
    {
      "order_id": 706799,
      "predicted_minutes": 22.8
    },
    {
      "order_id": 706803,
      "predicted_minutes": 27.61
    },
    {
      "order_id": 706809,
      "predicted_minutes": 44.55
    },
    {
      "order_id": 706816,
      "predicted_minutes": 23.4
    },
    {
      "order_id": 706818,
      "predicted_minutes": 20.66
    },
    {
      "order_id": 706820,
      "predicted_minutes": 41.64
    },
    {
      "order_id": 706825,
      "predicted_minutes": 19.09
    },
    {
      "order_id": 706829,
      "predicted_minutes": 52.59
    },
    {
      "order_id": 706833,
      "predicted_minutes": 18.29
    },
    {
      "order_id": 706836,
      "predicted_minutes": 29.68
    },
    {
      "order_id": 706837,
      "predicted_minutes": 27.03
    },
    {
      "order_id": 706841,
      "predicted_minutes": 35.43
    },
    {
      "order_id": 706843,
      "predicted_minutes": 24.08
    },
    {
      "order_id": 706846,
      "predicted_minutes": 28.71
    },
    {
      "order_id": 706858,
      "predicted_minutes": 48.5
    },
    {
      "order_id": 706864,
      "predicted_minutes": 28.56
    },
    {
      "order_id": 706875,
      "predicted_minutes": 28.03
    },
    {
      "order_id": 706878,
      "predicted_minutes": 26.58
    },
    {
      "order_id": 706882,
      "predicted_minutes": 28.04
    },
    {
      "order_id": 706888,
      "predicted_minutes": 22.91
    },
    {
      "order_id": 706891,
      "predicted_minutes": 39.83
    },
    {
      "order_id": 706895,
      "predicted_minutes": 35.02
    },
    {
      "order_id": 706901,
      "predicted_minutes": 20.11
    },
    {
      "order_id": 706904,
      "predicted_minutes": 14.69
    },
    {
      "order_id": 706913,
      "predicted_minutes": 23.74
    },
    {
      "order_id": 706915,
      "predicted_minutes": 36.4
    },
    {
      "order_id": 706916,
      "predicted_minutes": 30.47
    },
    {
      "order_id": 706917,
      "predicted_minutes": 30.95
    },
    {
      "order_id": 706918,
      "predicted_minutes": 27.69
    },
    {
      "order_id": 706919,
      "predicted_minutes": 21.59
    },
    {
      "order_id": 706922,
      "predicted_minutes": 26.34
    },
    {
      "order_id": 706932,
      "predicted_minutes": 32.85
    },
    {
      "order_id": 706933,
      "predicted_minutes": 41.22
    },
    {
      "order_id": 706936,
      "predicted_minutes": 25.23
    },
    {
      "order_id": 706942,
      "predicted_minutes": 30.07
    },
    {
      "order_id": 706950,
      "predicted_minutes": 37.88
    },
    {
      "order_id": 706956,
      "predicted_minutes": 38.21
    },
    {
      "order_id": 706965,
      "predicted_minutes": 37.83
    },
    {
      "order_id": 706973,
      "predicted_minutes": 28.84
    },
    {
      "order_id": 706980,
      "predicted_minutes": 21.6
    },
    {
      "order_id": 706985,
      "predicted_minutes": 33.27
    },
    {
      "order_id": 706988,
      "predicted_minutes": 41.27
    },
    {
      "order_id": 706995,
      "predicted_minutes": 37.03
    },
    {
      "order_id": 706997,
      "predicted_minutes": 26.05
    },
    {
      "order_id": 707001,
      "predicted_minutes": 45.01
    },
    {
      "order_id": 707004,
      "predicted_minutes": 28.37
    },
    {
      "order_id": 707010,
      "predicted_minutes": 43.43
    },
    {
      "order_id": 707011,
      "predicted_minutes": 31.51
    },
    {
      "order_id": 707013,
      "predicted_minutes": 18.17
    },
    {
      "order_id": 707018,
      "predicted_minutes": 50.27
    },
    {
      "order_id": 707019,
      "predicted_minutes": 41.38
    },
    {
      "order_id": 707021,
      "predicted_minutes": 64.34
    },
    {
      "order_id": 707023,
      "predicted_minutes": 44.73
    },
    {
      "order_id": 707030,
      "predicted_minutes": 28.56
    },
    {
      "order_id": 707045,
      "predicted_minutes": 28.05
    },
    {
      "order_id": 707047,
      "predicted_minutes": 25.03
    },
    {
      "order_id": 707048,
      "predicted_minutes": 28.49
    },
    {
      "order_id": 707050,
      "predicted_minutes": 22.01
    },
    {
      "order_id": 707053,
      "predicted_minutes": 18.15
    },
    {
      "order_id": 707057,
      "predicted_minutes": 39.48
    },
    {
      "order_id": 707063,
      "predicted_minutes": 36.94
    },
    {
      "order_id": 707065,
      "predicted_minutes": 50.32
    },
    {
      "order_id": 707082,
      "predicted_minutes": 36.46
    },
    {
      "order_id": 707085,
      "predicted_minutes": 34.63
    },
    {
      "order_id": 707100,
      "predicted_minutes": 35.43
    },
    {
      "order_id": 707106,
      "predicted_minutes": 36.81
    },
    {
      "order_id": 707107,
      "predicted_minutes": 31.4
    },
    {
      "order_id": 707127,
      "predicted_minutes": 26.32
    },
    {
      "order_id": 707133,
      "predicted_minutes": 31.16
    },
    {
      "order_id": 707135,
      "predicted_minutes": 37.86
    },
    {
      "order_id": 707136,
      "predicted_minutes": 36.65
    },
    {
      "order_id": 707144,
      "predicted_minutes": 34.85
    },
    {
      "order_id": 707152,
      "predicted_minutes": 36.33
    },
    {
      "order_id": 707158,
      "predicted_minutes": 35.85
    },
    {
      "order_id": 707162,
      "predicted_minutes": 30.43
    },
    {
      "order_id": 707172,
      "predicted_minutes": 38.11
    },
    {
      "order_id": 707173,
      "predicted_minutes": 40.17
    },
    {
      "order_id": 707196,
      "predicted_minutes": 33.28
    },
    {
      "order_id": 707204,
      "predicted_minutes": 43.99
    },
    {
      "order_id": 707211,
      "predicted_minutes": 41.49
    },
    {
      "order_id": 707213,
      "predicted_minutes": 53.91
    },
    {
      "order_id": 707214,
      "predicted_minutes": 31.24
    },
    {
      "order_id": 707227,
      "predicted_minutes": 48.08
    },
    {
      "order_id": 707230,
      "predicted_minutes": 20.46
    },
    {
      "order_id": 707233,
      "predicted_minutes": 37.72
    },
    {
      "order_id": 707235,
      "predicted_minutes": 41.19
    },
    {
      "order_id": 707246,
      "predicted_minutes": 27.83
    },
    {
      "order_id": 707247,
      "predicted_minutes": 47.21
    },
    {
      "order_id": 707248,
      "predicted_minutes": 33.07
    },
    {
      "order_id": 707249,
      "predicted_minutes": 33.4
    },
    {
      "order_id": 707250,
      "predicted_minutes": 31.37
    },
    {
      "order_id": 707251,
      "predicted_minutes": 31.3
    },
    {
      "order_id": 707257,
      "predicted_minutes": 35.61
    },
    {
      "order_id": 707258,
      "predicted_minutes": 28.21
    },
    {
      "order_id": 707273,
      "predicted_minutes": 44.31
    },
    {
      "order_id": 707276,
      "predicted_minutes": 34.67
    },
    {
      "order_id": 707287,
      "predicted_minutes": 34.76
    },
    {
      "order_id": 707289,
      "predicted_minutes": 45.54
    },
    {
      "order_id": 707290,
      "predicted_minutes": 34.17
    },
    {
      "order_id": 707291,
      "predicted_minutes": 40.1
    },
    {
      "order_id": 707292,
      "predicted_minutes": 29.46
    },
    {
      "order_id": 707294,
      "predicted_minutes": 19.18
    },
    {
      "order_id": 707297,
      "predicted_minutes": 30.66
    },
    {
      "order_id": 707303,
      "predicted_minutes": 23.7
    },
    {
      "order_id": 707304,
      "predicted_minutes": 26.57
    },
    {
      "order_id": 707307,
      "predicted_minutes": 32.91
    },
    {
      "order_id": 707313,
      "predicted_minutes": 31.87
    },
    {
      "order_id": 707314,
      "predicted_minutes": 23.88
    },
    {
      "order_id": 707327,
      "predicted_minutes": 25.83
    },
    {
      "order_id": 707328,
      "predicted_minutes": 52.11
    },
    {
      "order_id": 707329,
      "predicted_minutes": 32.49
    },
    {
      "order_id": 707331,
      "predicted_minutes": 36.63
    },
    {
      "order_id": 707332,
      "predicted_minutes": 39.64
    },
    {
      "order_id": 707333,
      "predicted_minutes": 38.64
    },
    {
      "order_id": 707337,
      "predicted_minutes": 21.58
    },
    {
      "order_id": 707338,
      "predicted_minutes": 39.68
    },
    {
      "order_id": 707341,
      "predicted_minutes": 18.06
    },
    {
      "order_id": 707345,
      "predicted_minutes": 26.98
    },
    {
      "order_id": 707346,
      "predicted_minutes": 41.27
    },
    {
      "order_id": 707348,
      "predicted_minutes": 43.67
    },
    {
      "order_id": 707351,
      "predicted_minutes": 27.53
    },
    {
      "order_id": 707355,
      "predicted_minutes": 36.0
    },
    {
      "order_id": 707358,
      "predicted_minutes": 25.09
    },
    {
      "order_id": 707359,
      "predicted_minutes": 33.41
    },
    {
      "order_id": 707360,
      "predicted_minutes": 24.39
    },
    {
      "order_id": 707367,
      "predicted_minutes": 45.95
    },
    {
      "order_id": 707368,
      "predicted_minutes": 24.14
    },
    {
      "order_id": 707378,
      "predicted_minutes": 37.4
    },
    {
      "order_id": 707379,
      "predicted_minutes": 19.92
    },
    {
      "order_id": 707385,
      "predicted_minutes": 38.66
    },
    {
      "order_id": 707391,
      "predicted_minutes": 22.3
    },
    {
      "order_id": 707410,
      "predicted_minutes": 40.19
    },
    {
      "order_id": 707418,
      "predicted_minutes": 37.53
    },
    {
      "order_id": 707420,
      "predicted_minutes": 23.67
    },
    {
      "order_id": 707424,
      "predicted_minutes": 47.25
    },
    {
      "order_id": 707427,
      "predicted_minutes": 36.36
    },
    {
      "order_id": 707428,
      "predicted_minutes": 24.76
    },
    {
      "order_id": 707430,
      "predicted_minutes": 34.67
    },
    {
      "order_id": 707433,
      "predicted_minutes": 30.66
    },
    {
      "order_id": 707449,
      "predicted_minutes": 47.59
    },
    {
      "order_id": 707452,
      "predicted_minutes": 29.49
    },
    {
      "order_id": 707459,
      "predicted_minutes": 24.82
    },
    {
      "order_id": 707469,
      "predicted_minutes": 36.14
    },
    {
      "order_id": 707484,
      "predicted_minutes": 39.18
    },
    {
      "order_id": 707486,
      "predicted_minutes": 21.84
    },
    {
      "order_id": 707488,
      "predicted_minutes": 12.46
    },
    {
      "order_id": 707496,
      "predicted_minutes": 24.01
    },
    {
      "order_id": 707500,
      "predicted_minutes": 22.27
    },
    {
      "order_id": 707501,
      "predicted_minutes": 37.93
    },
    {
      "order_id": 707505,
      "predicted_minutes": 32.04
    },
    {
      "order_id": 707506,
      "predicted_minutes": 30.31
    },
    {
      "order_id": 707507,
      "predicted_minutes": 44.46
    },
    {
      "order_id": 707508,
      "predicted_minutes": 33.99
    },
    {
      "order_id": 707509,
      "predicted_minutes": 35.11
    },
    {
      "order_id": 707510,
      "predicted_minutes": 37.9
    },
    {
      "order_id": 707516,
      "predicted_minutes": 27.0
    },
    {
      "order_id": 707518,
      "predicted_minutes": 34.57
    },
    {
      "order_id": 707534,
      "predicted_minutes": 51.57
    },
    {
      "order_id": 707537,
      "predicted_minutes": 25.63
    },
    {
      "order_id": 707538,
      "predicted_minutes": 44.65
    },
    {
      "order_id": 707542,
      "predicted_minutes": 45.17
    },
    {
      "order_id": 707547,
      "predicted_minutes": 47.7
    },
    {
      "order_id": 707552,
      "predicted_minutes": 33.57
    },
    {
      "order_id": 707567,
      "predicted_minutes": 35.45
    },
    {
      "order_id": 707588,
      "predicted_minutes": 37.86
    },
    {
      "order_id": 707598,
      "predicted_minutes": 25.66
    },
    {
      "order_id": 707599,
      "predicted_minutes": 40.29
    },
    {
      "order_id": 707605,
      "predicted_minutes": 36.2
    },
    {
      "order_id": 707607,
      "predicted_minutes": 37.63
    },
    {
      "order_id": 707611,
      "predicted_minutes": 38.14
    },
    {
      "order_id": 707618,
      "predicted_minutes": 35.75
    },
    {
      "order_id": 707622,
      "predicted_minutes": 36.89
    },
    {
      "order_id": 707623,
      "predicted_minutes": 34.69
    },
    {
      "order_id": 707624,
      "predicted_minutes": 21.41
    },
    {
      "order_id": 707643,
      "predicted_minutes": 23.51
    },
    {
      "order_id": 707644,
      "predicted_minutes": 39.26
    },
    {
      "order_id": 707649,
      "predicted_minutes": 30.7
    },
    {
      "order_id": 707658,
      "predicted_minutes": 21.44
    },
    {
      "order_id": 707663,
      "predicted_minutes": 31.21
    },
    {
      "order_id": 707666,
      "predicted_minutes": 15.28
    },
    {
      "order_id": 707670,
      "predicted_minutes": 18.88
    },
    {
      "order_id": 707678,
      "predicted_minutes": 22.73
    },
    {
      "order_id": 707679,
      "predicted_minutes": 38.45
    },
    {
      "order_id": 707682,
      "predicted_minutes": 41.5
    },
    {
      "order_id": 707686,
      "predicted_minutes": 28.09
    },
    {
      "order_id": 707689,
      "predicted_minutes": 42.36
    },
    {
      "order_id": 707691,
      "predicted_minutes": 32.89
    },
    {
      "order_id": 707698,
      "predicted_minutes": 49.25
    },
    {
      "order_id": 707699,
      "predicted_minutes": 44.47
    },
    {
      "order_id": 707706,
      "predicted_minutes": 35.29
    },
    {
      "order_id": 707708,
      "predicted_minutes": 21.12
    },
    {
      "order_id": 707709,
      "predicted_minutes": 56.26
    },
    {
      "order_id": 707713,
      "predicted_minutes": 30.73
    },
    {
      "order_id": 707721,
      "predicted_minutes": 15.24
    },
    {
      "order_id": 707727,
      "predicted_minutes": 39.63
    },
    {
      "order_id": 707735,
      "predicted_minutes": 27.32
    },
    {
      "order_id": 707740,
      "predicted_minutes": 41.39
    },
    {
      "order_id": 707745,
      "predicted_minutes": 25.06
    },
    {
      "order_id": 707746,
      "predicted_minutes": 27.95
    },
    {
      "order_id": 707753,
      "predicted_minutes": 26.71
    },
    {
      "order_id": 707761,
      "predicted_minutes": 19.12
    },
    {
      "order_id": 707767,
      "predicted_minutes": 32.64
    },
    {
      "order_id": 707770,
      "predicted_minutes": 30.8
    },
    {
      "order_id": 707771,
      "predicted_minutes": 42.93
    },
    {
      "order_id": 707774,
      "predicted_minutes": 29.92
    },
    {
      "order_id": 707776,
      "predicted_minutes": 34.03
    },
    {
      "order_id": 707783,
      "predicted_minutes": 29.26
    },
    {
      "order_id": 707793,
      "predicted_minutes": 38.35
    },
    {
      "order_id": 707800,
      "predicted_minutes": 29.52
    },
    {
      "order_id": 707805,
      "predicted_minutes": 23.86
    },
    {
      "order_id": 707806,
      "predicted_minutes": 18.93
    },
    {
      "order_id": 707809,
      "predicted_minutes": 37.73
    },
    {
      "order_id": 707813,
      "predicted_minutes": 22.23
    },
    {
      "order_id": 707821,
      "predicted_minutes": 29.63
    },
    {
      "order_id": 707829,
      "predicted_minutes": 30.02
    },
    {
      "order_id": 707836,
      "predicted_minutes": 33.32
    },
    {
      "order_id": 707839,
      "predicted_minutes": 27.68
    },
    {
      "order_id": 707846,
      "predicted_minutes": 37.65
    },
    {
      "order_id": 707853,
      "predicted_minutes": 41.77
    },
    {
      "order_id": 707861,
      "predicted_minutes": 18.34
    },
    {
      "order_id": 707872,
      "predicted_minutes": 25.24
    },
    {
      "order_id": 707878,
      "predicted_minutes": 27.06
    },
    {
      "order_id": 707881,
      "predicted_minutes": 26.23
    },
    {
      "order_id": 707891,
      "predicted_minutes": 38.62
    },
    {
      "order_id": 707900,
      "predicted_minutes": 28.58
    },
    {
      "order_id": 707902,
      "predicted_minutes": 29.0
    },
    {
      "order_id": 707904,
      "predicted_minutes": 41.61
    },
    {
      "order_id": 707906,
      "predicted_minutes": 20.78
    },
    {
      "order_id": 707908,
      "predicted_minutes": 19.79
    },
    {
      "order_id": 707910,
      "predicted_minutes": 21.63
    },
    {
      "order_id": 707912,
      "predicted_minutes": 43.61
    },
    {
      "order_id": 707924,
      "predicted_minutes": 35.89
    },
    {
      "order_id": 707925,
      "predicted_minutes": 14.41
    },
    {
      "order_id": 707929,
      "predicted_minutes": 23.38
    },
    {
      "order_id": 707942,
      "predicted_minutes": 28.06
    },
    {
      "order_id": 707944,
      "predicted_minutes": 26.55
    },
    {
      "order_id": 707945,
      "predicted_minutes": 25.88
    },
    {
      "order_id": 707947,
      "predicted_minutes": 33.84
    },
    {
      "order_id": 707952,
      "predicted_minutes": 23.99
    },
    {
      "order_id": 707953,
      "predicted_minutes": 34.25
    },
    {
      "order_id": 707956,
      "predicted_minutes": 25.49
    },
    {
      "order_id": 707957,
      "predicted_minutes": 34.48
    },
    {
      "order_id": 707961,
      "predicted_minutes": 33.29
    },
    {
      "order_id": 707976,
      "predicted_minutes": 24.31
    },
    {
      "order_id": 707989,
      "predicted_minutes": 35.82
    },
    {
      "order_id": 707990,
      "predicted_minutes": 25.14
    },
    {
      "order_id": 707993,
      "predicted_minutes": 22.6
    },
    {
      "order_id": 707998,
      "predicted_minutes": 26.68
    },
    {
      "order_id": 708005,
      "predicted_minutes": 38.81
    },
    {
      "order_id": 708018,
      "predicted_minutes": 43.5
    },
    {
      "order_id": 708032,
      "predicted_minutes": 19.49
    },
    {
      "order_id": 708044,
      "predicted_minutes": 33.93
    },
    {
      "order_id": 708046,
      "predicted_minutes": 40.98
    },
    {
      "order_id": 708056,
      "predicted_minutes": 26.73
    },
    {
      "order_id": 708066,
      "predicted_minutes": 44.07
    },
    {
      "order_id": 708068,
      "predicted_minutes": 29.0
    },
    {
      "order_id": 708072,
      "predicted_minutes": 22.62
    },
    {
      "order_id": 708077,
      "predicted_minutes": 28.51
    },
    {
      "order_id": 708081,
      "predicted_minutes": 22.01
    },
    {
      "order_id": 708084,
      "predicted_minutes": 39.07
    },
    {
      "order_id": 708091,
      "predicted_minutes": 21.14
    },
    {
      "order_id": 708092,
      "predicted_minutes": 32.69
    },
    {
      "order_id": 708093,
      "predicted_minutes": 22.29
    },
    {
      "order_id": 708125,
      "predicted_minutes": 28.87
    },
    {
      "order_id": 708126,
      "predicted_minutes": 22.6
    },
    {
      "order_id": 708127,
      "predicted_minutes": 38.5
    },
    {
      "order_id": 708130,
      "predicted_minutes": 30.57
    },
    {
      "order_id": 708132,
      "predicted_minutes": 20.83
    },
    {
      "order_id": 708142,
      "predicted_minutes": 44.42
    },
    {
      "order_id": 708143,
      "predicted_minutes": 27.2
    },
    {
      "order_id": 708147,
      "predicted_minutes": 40.71
    },
    {
      "order_id": 708148,
      "predicted_minutes": 48.03
    },
    {
      "order_id": 708149,
      "predicted_minutes": 34.91
    },
    {
      "order_id": 708159,
      "predicted_minutes": 26.01
    },
    {
      "order_id": 708165,
      "predicted_minutes": 27.82
    },
    {
      "order_id": 708177,
      "predicted_minutes": 34.82
    },
    {
      "order_id": 708185,
      "predicted_minutes": 40.35
    },
    {
      "order_id": 708188,
      "predicted_minutes": 34.8
    },
    {
      "order_id": 708201,
      "predicted_minutes": 31.63
    },
    {
      "order_id": 708203,
      "predicted_minutes": 52.12
    },
    {
      "order_id": 708208,
      "predicted_minutes": 31.91
    },
    {
      "order_id": 708210,
      "predicted_minutes": 35.96
    },
    {
      "order_id": 708211,
      "predicted_minutes": 21.91
    },
    {
      "order_id": 708213,
      "predicted_minutes": 32.87
    },
    {
      "order_id": 708225,
      "predicted_minutes": 38.5
    },
    {
      "order_id": 708227,
      "predicted_minutes": 53.9
    },
    {
      "order_id": 708230,
      "predicted_minutes": 20.69
    },
    {
      "order_id": 708235,
      "predicted_minutes": 37.1
    },
    {
      "order_id": 708237,
      "predicted_minutes": 34.23
    },
    {
      "order_id": 708242,
      "predicted_minutes": 33.28
    },
    {
      "order_id": 708248,
      "predicted_minutes": 35.07
    },
    {
      "order_id": 708255,
      "predicted_minutes": 39.33
    },
    {
      "order_id": 708257,
      "predicted_minutes": 24.11
    },
    {
      "order_id": 708258,
      "predicted_minutes": 32.88
    },
    {
      "order_id": 708262,
      "predicted_minutes": 39.26
    },
    {
      "order_id": 708269,
      "predicted_minutes": 14.41
    },
    {
      "order_id": 708275,
      "predicted_minutes": 23.46
    },
    {
      "order_id": 708285,
      "predicted_minutes": 29.56
    },
    {
      "order_id": 708298,
      "predicted_minutes": 32.77
    },
    {
      "order_id": 708301,
      "predicted_minutes": 35.02
    },
    {
      "order_id": 708305,
      "predicted_minutes": 45.07
    },
    {
      "order_id": 708308,
      "predicted_minutes": 26.94
    },
    {
      "order_id": 708309,
      "predicted_minutes": 53.72
    },
    {
      "order_id": 708313,
      "predicted_minutes": 41.04
    },
    {
      "order_id": 708315,
      "predicted_minutes": 44.44
    },
    {
      "order_id": 708319,
      "predicted_minutes": 21.95
    },
    {
      "order_id": 708321,
      "predicted_minutes": 28.92
    },
    {
      "order_id": 708332,
      "predicted_minutes": 37.22
    },
    {
      "order_id": 708335,
      "predicted_minutes": 27.12
    },
    {
      "order_id": 708338,
      "predicted_minutes": 32.66
    },
    {
      "order_id": 708340,
      "predicted_minutes": 36.93
    },
    {
      "order_id": 708346,
      "predicted_minutes": 44.8
    },
    {
      "order_id": 708347,
      "predicted_minutes": 39.88
    },
    {
      "order_id": 708358,
      "predicted_minutes": 37.21
    },
    {
      "order_id": 708360,
      "predicted_minutes": 26.54
    },
    {
      "order_id": 708361,
      "predicted_minutes": 42.92
    },
    {
      "order_id": 708368,
      "predicted_minutes": 39.41
    },
    {
      "order_id": 708370,
      "predicted_minutes": 20.83
    },
    {
      "order_id": 708373,
      "predicted_minutes": 40.49
    },
    {
      "order_id": 708382,
      "predicted_minutes": 32.58
    },
    {
      "order_id": 708384,
      "predicted_minutes": 47.42
    },
    {
      "order_id": 708389,
      "predicted_minutes": 28.03
    },
    {
      "order_id": 708390,
      "predicted_minutes": 32.78
    },
    {
      "order_id": 708391,
      "predicted_minutes": 23.11
    },
    {
      "order_id": 708394,
      "predicted_minutes": 27.98
    },
    {
      "order_id": 708403,
      "predicted_minutes": 44.54
    },
    {
      "order_id": 708413,
      "predicted_minutes": 36.06
    },
    {
      "order_id": 708417,
      "predicted_minutes": 37.53
    },
    {
      "order_id": 708421,
      "predicted_minutes": 55.3
    },
    {
      "order_id": 708424,
      "predicted_minutes": 28.11
    },
    {
      "order_id": 708425,
      "predicted_minutes": 36.57
    },
    {
      "order_id": 708426,
      "predicted_minutes": 29.32
    },
    {
      "order_id": 708436,
      "predicted_minutes": 47.33
    },
    {
      "order_id": 708439,
      "predicted_minutes": 53.86
    },
    {
      "order_id": 708447,
      "predicted_minutes": 47.55
    },
    {
      "order_id": 708448,
      "predicted_minutes": 32.51
    },
    {
      "order_id": 708449,
      "predicted_minutes": 38.0
    },
    {
      "order_id": 708464,
      "predicted_minutes": 32.61
    },
    {
      "order_id": 708468,
      "predicted_minutes": 38.21
    },
    {
      "order_id": 708469,
      "predicted_minutes": 31.65
    },
    {
      "order_id": 708470,
      "predicted_minutes": 34.68
    },
    {
      "order_id": 708471,
      "predicted_minutes": 29.82
    },
    {
      "order_id": 708472,
      "predicted_minutes": 35.05
    },
    {
      "order_id": 708477,
      "predicted_minutes": 37.9
    },
    {
      "order_id": 708483,
      "predicted_minutes": 30.41
    },
    {
      "order_id": 708484,
      "predicted_minutes": 30.15
    },
    {
      "order_id": 708497,
      "predicted_minutes": 19.18
    },
    {
      "order_id": 708501,
      "predicted_minutes": 29.88
    },
    {
      "order_id": 708503,
      "predicted_minutes": 36.0
    },
    {
      "order_id": 708508,
      "predicted_minutes": 37.71
    },
    {
      "order_id": 708513,
      "predicted_minutes": 24.6
    },
    {
      "order_id": 708515,
      "predicted_minutes": 31.03
    },
    {
      "order_id": 708524,
      "predicted_minutes": 33.97
    },
    {
      "order_id": 708525,
      "predicted_minutes": 31.53
    },
    {
      "order_id": 708526,
      "predicted_minutes": 36.26
    },
    {
      "order_id": 708528,
      "predicted_minutes": 22.63
    },
    {
      "order_id": 708533,
      "predicted_minutes": 36.07
    },
    {
      "order_id": 708534,
      "predicted_minutes": 20.39
    },
    {
      "order_id": 708543,
      "predicted_minutes": 31.99
    },
    {
      "order_id": 708544,
      "predicted_minutes": 37.75
    },
    {
      "order_id": 708547,
      "predicted_minutes": 32.76
    },
    {
      "order_id": 708548,
      "predicted_minutes": 31.77
    },
    {
      "order_id": 708549,
      "predicted_minutes": 38.21
    },
    {
      "order_id": 708576,
      "predicted_minutes": 26.28
    },
    {
      "order_id": 708578,
      "predicted_minutes": 32.34
    },
    {
      "order_id": 708582,
      "predicted_minutes": 29.73
    },
    {
      "order_id": 708583,
      "predicted_minutes": 27.81
    },
    {
      "order_id": 708592,
      "predicted_minutes": 48.1
    },
    {
      "order_id": 708601,
      "predicted_minutes": 39.21
    },
    {
      "order_id": 708604,
      "predicted_minutes": 44.5
    },
    {
      "order_id": 708609,
      "predicted_minutes": 27.34
    },
    {
      "order_id": 708610,
      "predicted_minutes": 22.84
    },
    {
      "order_id": 708611,
      "predicted_minutes": 34.17
    },
    {
      "order_id": 708612,
      "predicted_minutes": 26.12
    },
    {
      "order_id": 708616,
      "predicted_minutes": 23.73
    },
    {
      "order_id": 708619,
      "predicted_minutes": 28.64
    },
    {
      "order_id": 708623,
      "predicted_minutes": 32.54
    },
    {
      "order_id": 708630,
      "predicted_minutes": 28.33
    },
    {
      "order_id": 708632,
      "predicted_minutes": 39.58
    },
    {
      "order_id": 708648,
      "predicted_minutes": 37.23
    },
    {
      "order_id": 708654,
      "predicted_minutes": 30.83
    },
    {
      "order_id": 708662,
      "predicted_minutes": 13.47
    },
    {
      "order_id": 708667,
      "predicted_minutes": 23.96
    },
    {
      "order_id": 708669,
      "predicted_minutes": 29.05
    },
    {
      "order_id": 708674,
      "predicted_minutes": 19.35
    },
    {
      "order_id": 708675,
      "predicted_minutes": 31.9
    },
    {
      "order_id": 708685,
      "predicted_minutes": 35.83
    },
    {
      "order_id": 708693,
      "predicted_minutes": 23.85
    },
    {
      "order_id": 708695,
      "predicted_minutes": 33.19
    },
    {
      "order_id": 708706,
      "predicted_minutes": 19.04
    },
    {
      "order_id": 708708,
      "predicted_minutes": 16.59
    },
    {
      "order_id": 708709,
      "predicted_minutes": 24.42
    },
    {
      "order_id": 708711,
      "predicted_minutes": 24.82
    },
    {
      "order_id": 708717,
      "predicted_minutes": 30.18
    },
    {
      "order_id": 708720,
      "predicted_minutes": 29.5
    },
    {
      "order_id": 708729,
      "predicted_minutes": 27.27
    },
    {
      "order_id": 708734,
      "predicted_minutes": 23.46
    },
    {
      "order_id": 708741,
      "predicted_minutes": 49.83
    },
    {
      "order_id": 708746,
      "predicted_minutes": 34.61
    },
    {
      "order_id": 708758,
      "predicted_minutes": 33.17
    },
    {
      "order_id": 708760,
      "predicted_minutes": 41.13
    },
    {
      "order_id": 708764,
      "predicted_minutes": 29.35
    },
    {
      "order_id": 708769,
      "predicted_minutes": 31.22
    },
    {
      "order_id": 708773,
      "predicted_minutes": 36.7
    },
    {
      "order_id": 708791,
      "predicted_minutes": 20.12
    },
    {
      "order_id": 708794,
      "predicted_minutes": 37.34
    },
    {
      "order_id": 708803,
      "predicted_minutes": 21.46
    },
    {
      "order_id": 708809,
      "predicted_minutes": 41.84
    },
    {
      "order_id": 708820,
      "predicted_minutes": 30.03
    },
    {
      "order_id": 708825,
      "predicted_minutes": 58.14
    },
    {
      "order_id": 708827,
      "predicted_minutes": 27.06
    },
    {
      "order_id": 708828,
      "predicted_minutes": 29.45
    },
    {
      "order_id": 708834,
      "predicted_minutes": 37.65
    },
    {
      "order_id": 708836,
      "predicted_minutes": 31.76
    },
    {
      "order_id": 708838,
      "predicted_minutes": 25.9
    },
    {
      "order_id": 708844,
      "predicted_minutes": 35.22
    },
    {
      "order_id": 708853,
      "predicted_minutes": 39.51
    },
    {
      "order_id": 708865,
      "predicted_minutes": 22.11
    },
    {
      "order_id": 708870,
      "predicted_minutes": 18.94
    },
    {
      "order_id": 708886,
      "predicted_minutes": 31.65
    },
    {
      "order_id": 708889,
      "predicted_minutes": 27.52
    },
    {
      "order_id": 708890,
      "predicted_minutes": 26.9
    },
    {
      "order_id": 708896,
      "predicted_minutes": 32.37
    },
    {
      "order_id": 708898,
      "predicted_minutes": 27.82
    },
    {
      "order_id": 708910,
      "predicted_minutes": 45.99
    },
    {
      "order_id": 708918,
      "predicted_minutes": 24.57
    },
    {
      "order_id": 708928,
      "predicted_minutes": 25.42
    },
    {
      "order_id": 708936,
      "predicted_minutes": 40.25
    },
    {
      "order_id": 708941,
      "predicted_minutes": 38.13
    },
    {
      "order_id": 708946,
      "predicted_minutes": 30.56
    },
    {
      "order_id": 708976,
      "predicted_minutes": 34.4
    },
    {
      "order_id": 708982,
      "predicted_minutes": 26.55
    },
    {
      "order_id": 708983,
      "predicted_minutes": 38.05
    },
    {
      "order_id": 708995,
      "predicted_minutes": 32.46
    },
    {
      "order_id": 708999,
      "predicted_minutes": 34.52
    },
    {
      "order_id": 709005,
      "predicted_minutes": 22.24
    },
    {
      "order_id": 709011,
      "predicted_minutes": 22.04
    },
    {
      "order_id": 709020,
      "predicted_minutes": 20.89
    },
    {
      "order_id": 709026,
      "predicted_minutes": 26.97
    },
    {
      "order_id": 709030,
      "predicted_minutes": 30.63
    },
    {
      "order_id": 709033,
      "predicted_minutes": 34.9
    },
    {
      "order_id": 709037,
      "predicted_minutes": 37.69
    },
    {
      "order_id": 709039,
      "predicted_minutes": 16.85
    },
    {
      "order_id": 709040,
      "predicted_minutes": 35.75
    },
    {
      "order_id": 709044,
      "predicted_minutes": 24.53
    },
    {
      "order_id": 709046,
      "predicted_minutes": 32.97
    },
    {
      "order_id": 709055,
      "predicted_minutes": 30.16
    },
    {
      "order_id": 709074,
      "predicted_minutes": 23.73
    },
    {
      "order_id": 709077,
      "predicted_minutes": 26.94
    },
    {
      "order_id": 709083,
      "predicted_minutes": 18.64
    },
    {
      "order_id": 709085,
      "predicted_minutes": 30.31
    },
    {
      "order_id": 709086,
      "predicted_minutes": 22.36
    },
    {
      "order_id": 709093,
      "predicted_minutes": 38.34
    },
    {
      "order_id": 709094,
      "predicted_minutes": 23.3
    },
    {
      "order_id": 709096,
      "predicted_minutes": 18.05
    },
    {
      "order_id": 709099,
      "predicted_minutes": 30.62
    },
    {
      "order_id": 709102,
      "predicted_minutes": 13.72
    },
    {
      "order_id": 709106,
      "predicted_minutes": 29.27
    },
    {
      "order_id": 709119,
      "predicted_minutes": 19.7
    },
    {
      "order_id": 709129,
      "predicted_minutes": 36.6
    },
    {
      "order_id": 709130,
      "predicted_minutes": 32.91
    },
    {
      "order_id": 709137,
      "predicted_minutes": 32.6
    },
    {
      "order_id": 709139,
      "predicted_minutes": 33.27
    },
    {
      "order_id": 709147,
      "predicted_minutes": 32.66
    },
    {
      "order_id": 709150,
      "predicted_minutes": 41.98
    },
    {
      "order_id": 709157,
      "predicted_minutes": 37.23
    },
    {
      "order_id": 709161,
      "predicted_minutes": 36.35
    },
    {
      "order_id": 709162,
      "predicted_minutes": 30.1
    },
    {
      "order_id": 709165,
      "predicted_minutes": 17.98
    },
    {
      "order_id": 709167,
      "predicted_minutes": 32.47
    },
    {
      "order_id": 709179,
      "predicted_minutes": 38.68
    },
    {
      "order_id": 709181,
      "predicted_minutes": 27.4
    },
    {
      "order_id": 709183,
      "predicted_minutes": 25.74
    },
    {
      "order_id": 709186,
      "predicted_minutes": 45.09
    },
    {
      "order_id": 709188,
      "predicted_minutes": 40.58
    },
    {
      "order_id": 709193,
      "predicted_minutes": 18.58
    },
    {
      "order_id": 709197,
      "predicted_minutes": 17.79
    },
    {
      "order_id": 709200,
      "predicted_minutes": 27.74
    },
    {
      "order_id": 709203,
      "predicted_minutes": 59.89
    },
    {
      "order_id": 709208,
      "predicted_minutes": 28.11
    },
    {
      "order_id": 709215,
      "predicted_minutes": 26.17
    },
    {
      "order_id": 709217,
      "predicted_minutes": 23.13
    },
    {
      "order_id": 709219,
      "predicted_minutes": 32.0
    },
    {
      "order_id": 709220,
      "predicted_minutes": 28.23
    },
    {
      "order_id": 709225,
      "predicted_minutes": 39.3
    },
    {
      "order_id": 709226,
      "predicted_minutes": 40.27
    },
    {
      "order_id": 709227,
      "predicted_minutes": 35.98
    },
    {
      "order_id": 709237,
      "predicted_minutes": 29.53
    },
    {
      "order_id": 709240,
      "predicted_minutes": 23.11
    },
    {
      "order_id": 709242,
      "predicted_minutes": 38.97
    },
    {
      "order_id": 709244,
      "predicted_minutes": 28.86
    },
    {
      "order_id": 709248,
      "predicted_minutes": 35.36
    },
    {
      "order_id": 709250,
      "predicted_minutes": 26.82
    },
    {
      "order_id": 709258,
      "predicted_minutes": 34.74
    },
    {
      "order_id": 709264,
      "predicted_minutes": 28.95
    },
    {
      "order_id": 709265,
      "predicted_minutes": 29.55
    },
    {
      "order_id": 709266,
      "predicted_minutes": 33.79
    },
    {
      "order_id": 709272,
      "predicted_minutes": 39.14
    },
    {
      "order_id": 709276,
      "predicted_minutes": 24.48
    },
    {
      "order_id": 709291,
      "predicted_minutes": 41.36
    },
    {
      "order_id": 709297,
      "predicted_minutes": 30.96
    },
    {
      "order_id": 709302,
      "predicted_minutes": 18.27
    },
    {
      "order_id": 709305,
      "predicted_minutes": 43.62
    },
    {
      "order_id": 709310,
      "predicted_minutes": 35.45
    },
    {
      "order_id": 709323,
      "predicted_minutes": 27.25
    },
    {
      "order_id": 709340,
      "predicted_minutes": 42.64
    },
    {
      "order_id": 709344,
      "predicted_minutes": 17.62
    },
    {
      "order_id": 709346,
      "predicted_minutes": 32.78
    },
    {
      "order_id": 709354,
      "predicted_minutes": 25.56
    },
    {
      "order_id": 709356,
      "predicted_minutes": 29.07
    },
    {
      "order_id": 709358,
      "predicted_minutes": 28.93
    },
    {
      "order_id": 709362,
      "predicted_minutes": 22.44
    },
    {
      "order_id": 709367,
      "predicted_minutes": 27.58
    },
    {
      "order_id": 709372,
      "predicted_minutes": 26.58
    },
    {
      "order_id": 709373,
      "predicted_minutes": 27.19
    },
    {
      "order_id": 709375,
      "predicted_minutes": 26.0
    },
    {
      "order_id": 709380,
      "predicted_minutes": 28.03
    },
    {
      "order_id": 709384,
      "predicted_minutes": 31.03
    },
    {
      "order_id": 709386,
      "predicted_minutes": 30.66
    },
    {
      "order_id": 709394,
      "predicted_minutes": 25.01
    },
    {
      "order_id": 709400,
      "predicted_minutes": 23.44
    },
    {
      "order_id": 709404,
      "predicted_minutes": 36.37
    },
    {
      "order_id": 709415,
      "predicted_minutes": 34.56
    },
    {
      "order_id": 709420,
      "predicted_minutes": 36.7
    },
    {
      "order_id": 709422,
      "predicted_minutes": 17.0
    },
    {
      "order_id": 709424,
      "predicted_minutes": 31.54
    },
    {
      "order_id": 709428,
      "predicted_minutes": 33.96
    },
    {
      "order_id": 709433,
      "predicted_minutes": 44.54
    },
    {
      "order_id": 709434,
      "predicted_minutes": 31.51
    },
    {
      "order_id": 709440,
      "predicted_minutes": 17.82
    },
    {
      "order_id": 709442,
      "predicted_minutes": 20.48
    },
    {
      "order_id": 709449,
      "predicted_minutes": 19.09
    },
    {
      "order_id": 709450,
      "predicted_minutes": 31.34
    },
    {
      "order_id": 709451,
      "predicted_minutes": 40.22
    },
    {
      "order_id": 709457,
      "predicted_minutes": 33.09
    },
    {
      "order_id": 709459,
      "predicted_minutes": 29.15
    },
    {
      "order_id": 709462,
      "predicted_minutes": 31.3
    },
    {
      "order_id": 709465,
      "predicted_minutes": 31.77
    },
    {
      "order_id": 709468,
      "predicted_minutes": 43.38
    },
    {
      "order_id": 709472,
      "predicted_minutes": 31.12
    },
    {
      "order_id": 709474,
      "predicted_minutes": 35.48
    },
    {
      "order_id": 709481,
      "predicted_minutes": 21.19
    },
    {
      "order_id": 709486,
      "predicted_minutes": 22.76
    },
    {
      "order_id": 709490,
      "predicted_minutes": 38.14
    },
    {
      "order_id": 709492,
      "predicted_minutes": 34.2
    },
    {
      "order_id": 709494,
      "predicted_minutes": 22.91
    },
    {
      "order_id": 709503,
      "predicted_minutes": 35.64
    },
    {
      "order_id": 709514,
      "predicted_minutes": 28.74
    },
    {
      "order_id": 709515,
      "predicted_minutes": 26.51
    },
    {
      "order_id": 709516,
      "predicted_minutes": 35.47
    },
    {
      "order_id": 709518,
      "predicted_minutes": 41.08
    },
    {
      "order_id": 709521,
      "predicted_minutes": 34.15
    },
    {
      "order_id": 709531,
      "predicted_minutes": 31.84
    },
    {
      "order_id": 709533,
      "predicted_minutes": 28.6
    },
    {
      "order_id": 709542,
      "predicted_minutes": 36.89
    },
    {
      "order_id": 709553,
      "predicted_minutes": 35.95
    },
    {
      "order_id": 709558,
      "predicted_minutes": 24.26
    },
    {
      "order_id": 709562,
      "predicted_minutes": 36.63
    },
    {
      "order_id": 709568,
      "predicted_minutes": 39.62
    },
    {
      "order_id": 709569,
      "predicted_minutes": 31.16
    },
    {
      "order_id": 709570,
      "predicted_minutes": 27.67
    },
    {
      "order_id": 709577,
      "predicted_minutes": 28.78
    },
    {
      "order_id": 709578,
      "predicted_minutes": 26.25
    },
    {
      "order_id": 709581,
      "predicted_minutes": 28.45
    },
    {
      "order_id": 709589,
      "predicted_minutes": 33.27
    },
    {
      "order_id": 709590,
      "predicted_minutes": 37.86
    },
    {
      "order_id": 709594,
      "predicted_minutes": 43.49
    },
    {
      "order_id": 709604,
      "predicted_minutes": 29.2
    },
    {
      "order_id": 709622,
      "predicted_minutes": 32.11
    },
    {
      "order_id": 709625,
      "predicted_minutes": 34.65
    },
    {
      "order_id": 709626,
      "predicted_minutes": 18.3
    },
    {
      "order_id": 709628,
      "predicted_minutes": 24.21
    },
    {
      "order_id": 709639,
      "predicted_minutes": 31.58
    },
    {
      "order_id": 709641,
      "predicted_minutes": 32.03
    },
    {
      "order_id": 709661,
      "predicted_minutes": 23.3
    },
    {
      "order_id": 709665,
      "predicted_minutes": 31.93
    },
    {
      "order_id": 709669,
      "predicted_minutes": 32.71
    },
    {
      "order_id": 709674,
      "predicted_minutes": 39.12
    },
    {
      "order_id": 709685,
      "predicted_minutes": 41.0
    },
    {
      "order_id": 709686,
      "predicted_minutes": 36.35
    },
    {
      "order_id": 709696,
      "predicted_minutes": 27.48
    },
    {
      "order_id": 709699,
      "predicted_minutes": 20.48
    },
    {
      "order_id": 709710,
      "predicted_minutes": 37.18
    },
    {
      "order_id": 709714,
      "predicted_minutes": 25.15
    },
    {
      "order_id": 709716,
      "predicted_minutes": 26.35
    },
    {
      "order_id": 709736,
      "predicted_minutes": 29.37
    },
    {
      "order_id": 709737,
      "predicted_minutes": 31.51
    },
    {
      "order_id": 709742,
      "predicted_minutes": 48.11
    },
    {
      "order_id": 709753,
      "predicted_minutes": 26.19
    },
    {
      "order_id": 709755,
      "predicted_minutes": 43.54
    },
    {
      "order_id": 709765,
      "predicted_minutes": 21.7
    },
    {
      "order_id": 709771,
      "predicted_minutes": 22.35
    },
    {
      "order_id": 709772,
      "predicted_minutes": 15.58
    },
    {
      "order_id": 709776,
      "predicted_minutes": 47.86
    },
    {
      "order_id": 709778,
      "predicted_minutes": 35.84
    },
    {
      "order_id": 709782,
      "predicted_minutes": 41.03
    },
    {
      "order_id": 709789,
      "predicted_minutes": 15.8
    },
    {
      "order_id": 709809,
      "predicted_minutes": 37.86
    },
    {
      "order_id": 709813,
      "predicted_minutes": 38.11
    },
    {
      "order_id": 709814,
      "predicted_minutes": 27.14
    },
    {
      "order_id": 709815,
      "predicted_minutes": 25.63
    },
    {
      "order_id": 709818,
      "predicted_minutes": 19.84
    },
    {
      "order_id": 709819,
      "predicted_minutes": 28.38
    },
    {
      "order_id": 709824,
      "predicted_minutes": 22.0
    },
    {
      "order_id": 709830,
      "predicted_minutes": 38.71
    },
    {
      "order_id": 709833,
      "predicted_minutes": 31.69
    },
    {
      "order_id": 709841,
      "predicted_minutes": 31.98
    },
    {
      "order_id": 709843,
      "predicted_minutes": 24.49
    },
    {
      "order_id": 709845,
      "predicted_minutes": 28.54
    },
    {
      "order_id": 709864,
      "predicted_minutes": 31.98
    },
    {
      "order_id": 709879,
      "predicted_minutes": 36.45
    },
    {
      "order_id": 709888,
      "predicted_minutes": 35.22
    },
    {
      "order_id": 709889,
      "predicted_minutes": 44.77
    },
    {
      "order_id": 709891,
      "predicted_minutes": 24.15
    },
    {
      "order_id": 709897,
      "predicted_minutes": 25.23
    },
    {
      "order_id": 709900,
      "predicted_minutes": 42.3
    },
    {
      "order_id": 709903,
      "predicted_minutes": 27.75
    },
    {
      "order_id": 709905,
      "predicted_minutes": 30.71
    },
    {
      "order_id": 709913,
      "predicted_minutes": 28.19
    },
    {
      "order_id": 709924,
      "predicted_minutes": 45.65
    },
    {
      "order_id": 709925,
      "predicted_minutes": 36.48
    },
    {
      "order_id": 709930,
      "predicted_minutes": 30.64
    },
    {
      "order_id": 709933,
      "predicted_minutes": 38.55
    },
    {
      "order_id": 709939,
      "predicted_minutes": 21.43
    },
    {
      "order_id": 709944,
      "predicted_minutes": 28.95
    },
    {
      "order_id": 709945,
      "predicted_minutes": 39.59
    },
    {
      "order_id": 709948,
      "predicted_minutes": 33.75
    },
    {
      "order_id": 709951,
      "predicted_minutes": 32.14
    },
    {
      "order_id": 709963,
      "predicted_minutes": 26.28
    },
    {
      "order_id": 709964,
      "predicted_minutes": 20.02
    },
    {
      "order_id": 709967,
      "predicted_minutes": 21.42
    },
    {
      "order_id": 709972,
      "predicted_minutes": 14.64
    },
    {
      "order_id": 709978,
      "predicted_minutes": 32.99
    },
    {
      "order_id": 709980,
      "predicted_minutes": 33.61
    },
    {
      "order_id": 709982,
      "predicted_minutes": 37.59
    },
    {
      "order_id": 709988,
      "predicted_minutes": 31.02
    },
    {
      "order_id": 709992,
      "predicted_minutes": 35.6
    },
    {
      "order_id": 709995,
      "predicted_minutes": 39.61
    }
  ]
};
