import pandas as pd

from app.dependencies.model_loader import (
    get_model,
    get_scaler,
    get_encoder
)


def predict(request):
    """
    Predict disease from patient data.
    """

    model = get_model()
    scaler = get_scaler()
    encoder = get_encoder()

    input_data = pd.DataFrame([{
        "Age": request.age,
        "Gender": request.gender,
        "Temperature (C)": request.temperature,
        "Humidity": request.humidity,
        "Wind Speed (km/h)": request.wind_speed,

        "nausea": request.nausea,
        "joint_pain": request.joint_pain,
        "abdominal_pain": request.abdominal_pain,
        "high_fever": request.high_fever,
        "chills": request.chills,
        "fatigue": request.fatigue,
        "runny_nose": request.runny_nose,
        "pain_behind_the_eyes": request.pain_behind_the_eyes,
        "dizziness": request.dizziness,
        "headache": request.headache,
        "chest_pain": request.chest_pain,
        "vomiting": request.vomiting,
        "cough": request.cough,
        "shivering": request.shivering,

        "asthma_history": request.asthma_history,
        "high_cholesterol": request.high_cholesterol,
        "diabetes": request.diabetes,
        "obesity": request.obesity,
        "hiv_aids": request.hiv_aids,
        "nasal_polyps": request.nasal_polyps,
        "asthma": request.asthma,
        "high_blood_pressure": request.high_blood_pressure,

        "severe_headache": request.severe_headache,
        "weakness": request.weakness,
        "trouble_seeing": request.trouble_seeing,
        "fever": request.fever,
        "body_aches": request.body_aches,
        "sore_throat": request.sore_throat,
        "sneezing": request.sneezing,
        "diarrhea": request.diarrhea,
        "rapid_breathing": request.rapid_breathing,
        "rapid_heart_rate": request.rapid_heart_rate,
        "pain_behind_eyes": request.pain_behind_eyes,
        "swollen_glands": request.swollen_glands,
        "rashes": request.rashes,
        "sinus_headache": request.sinus_headache,
        "facial_pain": request.facial_pain,
        "shortness_of_breath": request.shortness_of_breath,
        "reduced_smell_and_taste": request.reduced_smell_and_taste,
        "skin_irritation": request.skin_irritation,
        "itchiness": request.itchiness,
        "throbbing_headache": request.throbbing_headache,
        "confusion": request.confusion,
        "back_pain": request.back_pain,
        "knee_ache": request.knee_ache,
    }])

    try:

        print("\n========== MODEL INPUT ==========")
        print(input_data.T)
        print("=================================\n")

        # Scale features
        input_scaled = scaler.transform(input_data)

        print("\n========== SCALED INPUT ==========")
        print(input_scaled)
        print("==================================\n")

        # Predict
        prediction = model.predict(input_scaled)

        # Prediction probabilities
        if hasattr(model, "predict_proba"):

            probabilities = model.predict_proba(input_scaled)[0]

            classes = encoder.inverse_transform(
                list(range(len(probabilities)))
            )

            print("\n========== PROBABILITIES ==========")

            for disease_name, probability in zip(classes, probabilities):
                print(f"{disease_name}: {probability:.4f}")

            print("===================================\n")

        # Decode prediction
        disease = encoder.inverse_transform(prediction)

        print("\n========== FINAL PREDICTION ==========")
        print(disease[0])
        print("======================================")

        return disease[0]

    except Exception as e:

        print("\n========== PREDICTION ERROR ==========")
        print(type(e).__name__)
        print(str(e))
        print("======================================")

        raise