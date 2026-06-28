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