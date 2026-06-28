import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split

# Path to the project root folder
BASE_DIR = Path(__file__).resolve().parent.parent

# Path to the dataset
DATA_PATH = BASE_DIR / "data" / "weather_disease_data.csv"

# Read the dataset into a DataFrame
df = pd.read_csv(DATA_PATH)

print("=" * 50)
print("First 5 Rows")
print("=" * 50)
print(df.head())

print("\n")

print("=" * 50)
print("Dataset Shape")
print("=" * 50)
print(df.shape)

print("\n")

print("=" * 50)
print("Column Names")
print("=" * 50)
print(df.columns)

print("\n")

print("=" * 50)
print("Dataset Information")
print("=" * 50)
print(df.info())

print("\n")

print("=" * 50)
print("Summary Statistics")
print("=" * 50)
print(df.describe())

print("\n")

print("=" * 50)
print("Missing Values")
print("=" * 50)

print(df.isnull().sum())


print("\n")

print("=" * 50)
print("Duplicate Rows")
print("=" * 50)

duplicates = df.duplicated().sum()

print("Total Duplicate Rows:", duplicates)


print("\n")

print("=" * 50)
print("Removing Duplicate Rows")
print("=" * 50)

df.drop_duplicates(inplace=True)

print("New Dataset Shape:", df.shape)


print("\n")

print("=" * 50)
print("Separating Features and Target")
print("=" * 50)

X = df.drop("prognosis", axis=1)
y = df["prognosis"]

print("Features Shape :", X.shape)
print("Target Shape   :", y.shape)


#split the dataset into training and testing sets

print("\n")

print("=" * 50)
print("Splitting Dataset")
print("=" * 50)

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Training Features :", X_train.shape)
print("Testing Features  :", X_test.shape)
print("Training Target   :", y_train.shape)
print("Testing Target    :", y_test.shape)