from pydantic import BaseModel


class PredictionRequest(BaseModel):
    """
    Input schema for disease prediction.
    """

    # Patient Information
    age: int
    gender: int

    # Weather Information
    temperature: float
    humidity: float
    wind_speed: float

    # Symptoms
    nausea: int
    joint_pain: int
    abdominal_pain: int
    high_fever: int
    chills: int
    fatigue: int
    runny_nose: int
    pain_behind_the_eyes: int
    dizziness: int
    headache: int
    chest_pain: int
    vomiting: int
    cough: int
    shivering: int

    # Medical History
    asthma_history: int
    high_cholesterol: int
    diabetes: int
    obesity: int
    hiv_aids: int
    nasal_polyps: int
    asthma: int
    high_blood_pressure: int

    # Additional Symptoms
    severe_headache: int
    weakness: int
    trouble_seeing: int
    fever: int
    body_aches: int
    sore_throat: int
    sneezing: int
    diarrhea: int
    rapid_breathing: int
    rapid_heart_rate: int
    pain_behind_eyes: int
    swollen_glands: int
    rashes: int
    sinus_headache: int
    facial_pain: int
    shortness_of_breath: int
    reduced_smell_and_taste: int
    skin_irritation: int
    itchiness: int
    throbbing_headache: int
    confusion: int
    back_pain: int
    knee_ache: int


class PredictionResponse(BaseModel):
    """
    Response schema.
    """

    predicted_disease: str