import { predictDiseaseService } from "../services/ml.service.js";
import { getWeatherByCity } from "../services/weather.service.js";
import { savePrediction } from "../services/prediction-history.service.js";
import { generateHealthReport } from "../services/ai.service.js";

/**
 * Handle disease prediction request.
 */
export const predictDisease = async (req, res) => {
  try {
    // ==========================
    // Get patient data
    // ==========================
    const patientData = req.body;

    // Validate city
    if (!patientData.city) {
      return res.status(400).json({
        success: false,
        message: "City is required.",
      });
    }

    // ==========================
    // Fetch weather
    // ==========================
    const weather = await getWeatherByCity(patientData.city);

    // ==========================
    // Prepare ML input
    // ==========================
    const mlInput = {
      ...patientData,
      temperature: weather.temperature,
      humidity: weather.humidity,
      wind_speed: weather.wind_speed,
    };

    // Remove city before sending to ML
    delete mlInput.city;

    // ==========================
    // Predict Disease
    // ==========================
    const prediction = await predictDiseaseService(mlInput);

    // ==========================
    // Generate AI Health Report
    // ==========================
    const aiAnalysis = await generateHealthReport(
      prediction.predicted_disease,
      weather,
      patientData
    );

    // ==========================
    // Remove city from symptoms
    // ==========================
    const symptoms = { ...patientData };
    delete symptoms.city;

    // ==========================
    // Save Prediction History
    // ==========================
    await savePrediction({
      city: patientData.city,
      weather,
      symptoms,
      predicted_disease: prediction.predicted_disease,
    });

    // ==========================
    // Final Response
    // ==========================
    return res.status(200).json({
      success: true,
      weather,
      prediction,
      ai_analysis: aiAnalysis,
    });

  } catch (error) {

    console.error("Prediction Controller Error:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};