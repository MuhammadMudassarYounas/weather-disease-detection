from pipeline import run_training_pipeline


MODEL_PATH = "models/disease_model.pkl"
ENCODER_PATH = "models/label_encoder.pkl"
SCALER_PATH = "models/scaler.pkl"


def main():
    """
    Entry point for model training.
    """

    accuracy, report, matrix = run_training_pipeline(
        MODEL_PATH,
        ENCODER_PATH,
        SCALER_PATH
    )

    print("\nTraining Completed Successfully!")

    print(f"\nAccuracy: {accuracy:.4f}")

    print("\nClassification Report:")
    print(report)

    print("\nConfusion Matrix:")
    print(matrix)


if __name__ == "__main__":
    main()