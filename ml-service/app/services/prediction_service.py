from app.dependencies.model_loader import (
    get_model,
    get_scaler,
    get_encoder
)


def predict(patient_data):
    """
    Predict disease from patient data.

    Parameters:
        patient_data : Input features from the user

    Returns:
        Predicted disease name
    """

    model = get_model()
    scaler = get_scaler()
    encoder = get_encoder()

    # Scale incoming data
    patient_data_scaled = scaler.transform(patient_data)

    # Predict encoded class
    prediction = model.predict(patient_data_scaled)

    # Decode class label
    disease = encoder.inverse_transform(prediction)

    return disease[0]