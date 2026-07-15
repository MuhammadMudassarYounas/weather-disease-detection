import { predictDiseaseService } from "../services/ml.service.js";
import { getWeatherByCity } from "../services/weather.service.js";
import { generateHealthReport } from "../services/ai.service.js";
import {
  savePrediction,
  getPredictionHistory,
  deletePrediction,
} from "../services/prediction-history.service.js";


/**
 * Predict Disease Controller
 */
export const predictDisease = async (req, res) => {

  try {

    // ==========================
    // Get Request Data
    // ==========================
    const patient = req.body;

    if (!patient.city) {
      return res.status(400).json({
        success: false,
        message: "City is required."
      });
    }

    // ==========================
    // Get Weather
    // ==========================
    const weather = await getWeatherByCity(patient.city);

    // ==========================
    // Prepare ML Input
    // ==========================
    const mlInput = {
      ...patient,
      temperature: weather.temperature,
      humidity: weather.humidity,
      wind_speed: weather.wind_speed,
    };

    delete mlInput.city;

    // ==========================
    // ML Prediction
    // ==========================
    const prediction = await predictDiseaseService(mlInput);

    // ==========================
    // Gemini AI Report
    // ==========================
    const aiReport = await generateHealthReport(
      prediction.predicted_disease,
      weather,
      patient
    );

    // ==========================
    // Save History
    // ==========================
    await savePrediction({

  user: req.user._id,

  city: patient.city,

  weather,

  patient,

  prediction: {
    disease: prediction.predicted_disease,
  },

  ai_report: aiReport,

});

    // ==========================
    // Send Response
    // ==========================
    return res.status(200).json({
      success: true,
      weather,
      prediction,
      ai_report: aiReport,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

/**
 * Get all prediction history
 */
export const getHistory = async (req, res) => {

  try {

    const history = await getPredictionHistory(
      req.user._id
    );

    return res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


/**
 * Delete prediction history
 */
export const removeHistory = async (req, res) => {

  try {

    const deleted = await deletePrediction(
      req.params.id,
      req.user._id
    );

    if (!deleted) {

      return res.status(404).json({
        success: false,
        message: "Prediction not found.",
      });

    }

    return res.status(200).json({
      success: true,
      message: "Prediction deleted successfully.",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};