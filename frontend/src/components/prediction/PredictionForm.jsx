import { useState } from "react";
import { predictDisease } from "../../services/predictionApi";

import WeatherCard from "./WeatherCard";
import PredictionCard from "./PredictionCard";
import AIReport from "./AIReport";

const symptoms = [
  "fever",
  "cough",
  "headache",
  "fatigue",
  "chills",
  "body_aches",
  "joint_pain",
  "nausea",
  "vomiting",
  "runny_nose",
  "dizziness",
  "abdominal_pain",
  "high_fever",
  "severe_headache",
  "weakness",
  "chest_pain",
  "diarrhea",
  "shortness_of_breath",
  "sore_throat",
  "sneezing",
  "back_pain",
  "knee_ache",
  "itchiness",
  "rashes",
  "confusion",
  "rapid_breathing",
  "rapid_heart_rate",
  "pain_behind_the_eyes",
  "pain_behind_eyes",
  "swollen_glands",
  "sinus_headache",
  "facial_pain",
  "reduced_smell_and_taste",
  "skin_irritation",
  "throbbing_headache",
  "trouble_seeing",
  "shivering",
  "asthma",
  "asthma_history",
  "high_cholesterol",
  "high_blood_pressure",
  "diabetes",
  "obesity",
  "hiv_aids",
  "nasal_polyps",
];

export default function PredictionForm() {

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const initialData = {
    city: "",
    age: 25,
    gender: 1,
  };

  symptoms.forEach((symptom) => {
    initialData[symptom] = 0;
  });

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleCheckbox = (e) => {

    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked ? 1 : 0,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await predictDisease(formData);

      console.log("========== API RESPONSE ==========");
      console.log(response);

      console.log("========== AI REPORT ==========");
      console.log(response.ai_report);

      setResult(response);

    } catch (error) {

      console.error(error);

      alert("Prediction Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8"
      >

        <h2 className="text-3xl font-bold mb-8 text-center">
          Disease Prediction
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>

            <label className="font-semibold">
              City
            </label>

            <input
              className="border rounded-lg p-3 w-full mt-2"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
            />

          </div>

          <div>

            <label className="font-semibold">
              Age
            </label>

            <input
              type="number"
              className="border rounded-lg p-3 w-full mt-2"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="mt-5">

          <label className="font-semibold">
            Gender
          </label>

          <select
            className="border rounded-lg p-3 w-full mt-2"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >

            <option value={1}>
              Male
            </option>

            <option value={0}>
              Female
            </option>

          </select>

        </div>

        <h3 className="text-2xl font-bold mt-8 mb-5">
          Symptoms
        </h3>

        <div className="grid md:grid-cols-3 gap-3">

          {symptoms.map((symptom) => (

            <label
              key={symptom}
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-slate-100 cursor-pointer"
            >

              <input
                type="checkbox"
                name={symptom}
                checked={formData[symptom] === 1}
                onChange={handleCheckbox}
              />

              <span className="capitalize">
                {symptom.replaceAll("_", " ")}
              </span>

            </label>

          ))}

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 mt-8 text-lg font-semibold"
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>

      </form>

      {result && (

        <div className="space-y-8 mt-10">

          <WeatherCard
            weather={result.weather}
          />

          <PredictionCard
            prediction={result.prediction}
          />

          <AIReport
            report={result.ai_report}
          />

        </div>

      )}

    </>
  );

}