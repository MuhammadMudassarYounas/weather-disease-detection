import { predictDiseaseService } from "../services/ml.service.js";

/**
 * Handle disease prediction request.
 */
export const predictDisease = async (req, res) => {
  try {
    // Read data sent by the client
    const patientData = req.body;

    // Call business logic
    const prediction = await predictDiseaseService(patientData);

    // Send success response
    return res.status(200).json({
      success: true,
      data: prediction,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Prediction failed.",
    });

  }
};