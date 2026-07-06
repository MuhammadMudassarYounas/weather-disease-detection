from fastapi import APIRouter

from app.schemas.prediction_schema import (
    PredictionRequest,
    PredictionResponse
)

from app.services.prediction_service import predict


router = APIRouter()


@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict_disease(
    request: PredictionRequest
):
    """
    Predict disease from patient data.
    """

    disease = predict([
        [
            request.age,
            request.gender,
            request.temperature,
            request.humidity,
            request.fever,
            request.cough
        ]
    ])

    return PredictionResponse(
        predicted_disease=disease
    )