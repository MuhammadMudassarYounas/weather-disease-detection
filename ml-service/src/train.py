import pandas as pd
from pathlib import Path

from sklearn.metrics import accuracy_score
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Project root directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Dataset path
DATA_PATH = BASE_DIR / "data" / "weather_disease_data.csv"

# Read dataset
df = pd.read_csv(DATA_PATH)

# Remove duplicate rows
df.drop_duplicates(inplace=True)

# Separate input features and target
X = df.drop("prognosis", axis=1)
y = df["prognosis"]

# Create Label Encoder
label_encoder = LabelEncoder()

# Convert disease names into numbers
y = label_encoder.fit_transform(y)

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create Logistic Regression model
model = LogisticRegression(max_iter=1000)
# Train the machine learning model
model.fit(X_train, y_train)

print("Model trained successfully!")

# Predict diseases for test data
y_pred = model.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)

print(f"Model Accuracy: {accuracy:.2f}")

print("\nClassification Report")
print("=" * 60)

print(
    classification_report(
        y_test,
        y_pred,
        target_names=label_encoder.classes_
    )
)