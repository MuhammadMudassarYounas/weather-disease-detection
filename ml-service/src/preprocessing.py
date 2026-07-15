import pandas as pd

from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split


def remove_duplicates(df):
    """
    Remove duplicate rows from dataset.
    """
    return df.drop_duplicates()


def split_features_target(df):
    """
    Separate features and target.
    """

    X = df.drop("prognosis", axis=1)
    y = df["prognosis"]

    print("\n========== TRAINING COLUMNS ==========")
    print(list(X.columns))
    print("======================================\n")

    return X, y


def encode_target(y):
    """
    Encode target labels.
    """

    encoder = LabelEncoder()

    y_encoded = encoder.fit_transform(y)

    return y_encoded, encoder


def split_dataset(X, y):
    """
    Split dataset.
    """

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
        stratify=y
    )

    return X_train, X_test, y_train, y_test


def scale_features(X_train, X_test):
    """
    Scale features using StandardScaler.
    """

    scaler = StandardScaler()

    X_train_scaled = scaler.fit_transform(X_train)

    X_test_scaled = scaler.transform(X_test)

    return X_train_scaled, X_test_scaled, scaler