from sklearn.linear_model import LogisticRegression
import joblib


def train_model(X_train, y_train):
    """
    Train a Logistic Regression model.

    Parameters:
        X_train: Training features
        y_train: Training labels

    Returns:
        Trained Logistic Regression model
    """

    model = LogisticRegression(
    random_state=42,
    max_iter=1000
)

    model.fit(X_train, y_train)

    return model


def save_model(model, model_path):
    """
    Save a trained model to disk.

    Parameters:
        model: Trained machine learning model
        model_path: Path where the model should be saved
    """

    joblib.dump(model, model_path)