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