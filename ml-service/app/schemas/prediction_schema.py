from pydantic import BaseModel


class PredictionRequest(BaseModel):
    """
    Input schema for disease prediction.
    """

    age: int
    gender: int
    temperature: float
    humidity: float
    fever: int
    cough: int


class PredictionResponse(BaseModel):
    """
    Response schema for disease prediction.
    """

    predicted_disease: str