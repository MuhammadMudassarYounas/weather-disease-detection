import joblib
from pathlib import Path


# Project root:
# ml-service/
BASE_DIR = Path(__file__).resolve().parents[2]

# models/
MODELS_DIR = BASE_DIR / "models"

MODEL_PATH = MODELS_DIR / "disease_model.pkl"
SCALER_PATH = MODELS_DIR / "scaler.pkl"
ENCODER_PATH = MODELS_DIR / "label_encoder.pkl"


# Load once when this module is imported
_model = joblib.load(MODEL_PATH)
_scaler = joblib.load(SCALER_PATH)
_encoder = joblib.load(ENCODER_PATH)


def get_model():
    """
    Return the loaded machine learning model.
    """
    return _model


def get_scaler():
    """
    Return the loaded StandardScaler.
    """
    return _scaler


def get_encoder():
    """
    Return the loaded LabelEncoder.
    """
    return _encoder
