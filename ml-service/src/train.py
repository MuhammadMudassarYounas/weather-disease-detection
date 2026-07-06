import joblib
import pandas as pd
import matplotlib.pyplot as plt


from pathlib import Path

from sklearn.metrics import accuracy_score
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    ConfusionMatrixDisplay,
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


# Save trained model
MODEL_PATH = BASE_DIR / "models" / "disease_model.pkl"

joblib.dump(model, MODEL_PATH)

print(f"Model saved at: {MODEL_PATH}")

# Save Label Encoder
ENCODER_PATH = BASE_DIR / "models" / "label_encoder.pkl"

joblib.dump(label_encoder, ENCODER_PATH)

print(f"Encoder saved at: {ENCODER_PATH}")



print("\nClassification Report")
print("=" * 60)

print(
    classification_report(
        y_test,
        y_pred,
        target_names=label_encoder.classes_
    )
)

# Create confusion matrix
cm = confusion_matrix(y_test, y_pred)

# Display confusion matrix
disp = ConfusionMatrixDisplay(
    confusion_matrix=cm,
    display_labels=label_encoder.classes_
)

disp.plot(xticks_rotation=45)

plt.title("Disease Prediction Confusion Matrix")

plt.show()