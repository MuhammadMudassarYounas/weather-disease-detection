from fastapi import FastAPI

from app.routers.prediction import router as prediction_router

app = FastAPI(
    title="Weather Disease Detection API",
    description="Production-ready Machine Learning API for disease prediction.",
    version="1.0.0",
)

# Register Prediction Router
app.include_router(prediction_router)

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Weather Disease Detection API is running successfully."
    }