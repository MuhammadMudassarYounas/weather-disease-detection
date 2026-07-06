import joblib


def load_model(model_path):
    """
    Load a trained machine learning model.

    Parameters:
        model_path : Path to the saved model

    Returns:
        Loaded model
    """

    return joblib.load(model_path)


def load_encoder(encoder_path):
    """
    Load the saved label encoder.

    Parameters:
        encoder_path : Path to the saved label encoder

    Returns:
        Loaded LabelEncoder
    """

    return joblib.load(encoder_path)


def load_scaler(scaler_path):
    """
    Load the saved StandardScaler.

    Parameters:
        scaler_path : Path to the saved scaler

    Returns:
        Loaded StandardScaler
    """

    return joblib.load(scaler_path)


def predict_disease(model, scaler, encoder, patient_data):
    """
    Predict disease from new patient data.

    Parameters:
        model : Trained ML model
        scaler : Trained StandardScaler
        encoder : LabelEncoder
        patient_data : New patient features

    Returns:
        Predicted disease name
    """

    # Scale incoming data
    patient_data_scaled = scaler.transform(patient_data)

    # Predict encoded class
    prediction = model.predict(patient_data_scaled)

    # Convert encoded class back to disease name
    disease = encoder.inverse_transform(prediction)

    return disease[0]