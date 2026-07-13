import Prediction from "../models/prediction.model.js";

/**
 * GET all prediction history
 */
export const getPredictionHistory = async (req, res) => {
  try {
    const predictions = await Prediction.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: predictions.length,
      data: predictions,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};