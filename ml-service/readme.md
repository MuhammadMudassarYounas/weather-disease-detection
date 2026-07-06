Project Structure           ✅
Python Environment          ✅
Read Dataset                ✅
Data Inspection             ✅
Missing Values              ✅
Duplicate Removal           ✅
Feature Selection           ✅
Label Encoding              ✅
Train/Test Split            ✅
Logistic Regression         ✅
Model Training              ✅
First Prediction            ✅
Accuracy                    ✅
Evaluation                  ✅
Confusion Matrix            ✅


                train.py
                    │
                    ▼
             pipeline.py
                    │
 ┌──────────┬────────┴────────┬──────────┐
 ▼          ▼                 ▼          ▼
Load     Preprocess       Train      Evaluate
Dataset      │              │            │
             ▼              ▼            ▼
         Scale Data     Save Model   Metrics



                             Browser
                       │
                       ▼
              http://127.0.0.1:8000
                       │
                       ▼
                   Uvicorn
                       │
                       ▼
                  FastAPI App
                    (main.py)
                       │
                       ▼
              Prediction Router
               (prediction.py)
                       │
                       ▼
            Prediction Service
         (prediction_service.py)
                       │
                       ▼
             Model Loader
          (model_loader.py)
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Logistic     Standard      Label
      Regression    Scaler      Encoder