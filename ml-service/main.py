from fastapi import FastAPI

from app.routers.prediction import router as prediction_router


app = FastAPI(
    title="Weather Disease Detection API",
    description="Production-ready Machine Learning API for disease prediction.",
    version="1.0.0"
)


app.include_router(
    prediction_router,
    prefix="/api/v1",
    tags=["Prediction"]
)