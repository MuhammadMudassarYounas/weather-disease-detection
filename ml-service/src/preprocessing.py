import pandas as pd

from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split


def remove_duplicates(df):
    """
    Remove duplicate rows from dataset.
    """

    df = df.drop_duplicates()

    return df


def split_features_target(df):
    """
    Separate features and target.
    """

    X = df.drop("prognosis", axis=1)

    y = df["prognosis"]

    return X, y

def encode_target(y):
    """
    Encode target labels into numeric values.

    Parameters:
        y (pd.Series): Target column

    Returns:
        y_encoded (numpy.ndarray): Encoded labels
        label_encoder (LabelEncoder): Trained encoder
    """

    label_encoder = LabelEncoder()

    y_encoded = label_encoder.fit_transform(y)

    return y_encoded, label_encoder

def split_dataset(X, y):
    """
    Split dataset into training and testing sets.

    Parameters:
        X : Features
        y : Target

    Returns:
        X_train
        X_test
        y_train
        y_test
    """

    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )

    return X_train, X_test, y_train, y_test