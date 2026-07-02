import pandas as pd
from pathlib import Path

from sklearn.preprocessing import LabelEncoder

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

# Create Label Encoder object
label_encoder = LabelEncoder()

# Learn all disease classes
label_encoder.fit(y)

print("Classes Learned:")
print(label_encoder.classes_)

# Transform disease names into numbers
y_encoded = label_encoder.transform(y)

print("\nEncoded Labels (First 10):")
print(y_encoded[:10])

y_encoded = label_encoder.fit_transform(y)