from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)


def evaluate_model(model, X_test, y_test):
    """
    Evaluate the trained machine learning model.

    Parameters:
        model : Trained machine learning model
        X_test : Scaled testing features
        y_test : True testing labels

    Returns:
        accuracy
        report
        matrix
    """

    # Generate predictions
    y_pred = model.predict(X_test)

    # Calculate evaluation metrics
    accuracy = accuracy_score(y_test, y_pred)

    report = classification_report(y_test, y_pred)

    matrix = confusion_matrix(y_test, y_pred)

    return accuracy, report, matrix