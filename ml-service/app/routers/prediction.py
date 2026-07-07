from fastapi import APIRouter

from app.schemas.prediction_schema import (
    PredictionRequest,
    PredictionResponse,
)

from app.services.prediction_service import predict

router = APIRouter(
    prefix="/api/v1",
    tags=["Prediction"],
)


@router.post(
    "/predict",
    response_model=PredictionResponse,
)
def predict_disease(request: PredictionRequest):

    disease = predict(request)

    return PredictionResponse(
        predicted_disease=disease
    )