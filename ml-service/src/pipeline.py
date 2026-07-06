from data_loader import load_dataset

from preprocessing import (
    remove_duplicates,
    split_features_target,
    encode_target,
    split_dataset,
    scale_features
)

from trainer import (
    train_model,
    save_model
)

from evaluator import evaluate_model

import joblib


def run_training_pipeline(
    model_path,
    encoder_path,
    scaler_path
):
    """
    Run the complete machine learning training pipeline.

    Parameters:
        model_path : Path to save trained model
        encoder_path : Path to save label encoder
        scaler_path : Path to save scaler

    Returns:
        accuracy
        classification report
        confusion matrix
    """

    # Load dataset
    df = load_dataset()

    # Remove duplicates
    df = remove_duplicates(df)

    # Split features and target
    X, y = split_features_target(df)

    # Encode target labels
    y_encoded, encoder = encode_target(y)

    # Split dataset
    X_train, X_test, y_train, y_test = split_dataset(
        X,
        y_encoded
    )

    # Scale features
    X_train_scaled, X_test_scaled, scaler = scale_features(
        X_train,
        X_test
    )

    # Train model
    model = train_model(
        X_train_scaled,
        y_train
    )

    # Evaluate model
    accuracy, report, matrix = evaluate_model(
        model,
        X_test_scaled,
        y_test
    )

    # Save artifacts
    save_model(model, model_path)

    joblib.dump(encoder, encoder_path)

    joblib.dump(scaler, scaler_path)

    return accuracy, report, matrix