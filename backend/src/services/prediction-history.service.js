import Prediction from "../models/prediction.model.js";

/**
 * Save prediction history to MongoDB.
 */
export const savePrediction = async ({
  city,
  weather,
  symptoms,
  predicted_disease,
}) => {
  const prediction = await Prediction.create({
    city,
    weather,
    symptoms,
    predicted_disease,
  });

  return prediction;
};