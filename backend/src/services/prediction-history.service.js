import PredictionHistory from "../models/predictionHistory.model.js";

/**
 * Save prediction history.
 */
export const savePrediction = async ({
  user,
  city,
  weather,
  patient,
  prediction,
  ai_report,
}) => {

  const history = await PredictionHistory.create({
    user,
    city,
    weather,
    patient,
    prediction,
    ai_report,
  });

  return history;

};


/**
 * Get all prediction history.
 */
/**
 * Get logged-in user's prediction history
 */
export const getPredictionHistory = async (userId) => {

  const history = await PredictionHistory.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });

  return history;

};


/**
 * Delete logged-in user's prediction
 */
export const deletePrediction = async (
  id,
  userId
) => {

  return await PredictionHistory.findOneAndDelete({
    _id: id,
    user: userId,
  });

};