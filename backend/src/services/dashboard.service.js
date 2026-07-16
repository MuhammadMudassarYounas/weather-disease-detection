import PredictionHistory from "../models/predictionHistory.model.js";

/**
 * Get Dashboard Statistics
 */
export const getDashboardStats = async (userId) => {

  // ==========================
  // Total Predictions
  // ==========================

  const totalPredictions = await PredictionHistory.countDocuments({
    user: userId,
  });

  // ==========================
  // Today's Predictions
  // ==========================

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const todayPredictions = await PredictionHistory.countDocuments({
    user: userId,
    createdAt: {
      $gte: today,
    },
  });

  // ==========================
  // Latest Prediction
  // ==========================

  const latestPrediction = await PredictionHistory.findOne({
    user: userId,
  }).sort({
    createdAt: -1,
  });

  // ==========================
  // Recent Predictions
  // ==========================

  const recentPredictions = await PredictionHistory.find({
    user: userId,
  })
    .sort({
      createdAt: -1,
    })
    .limit(5);

  // ==========================
  // Disease Distribution
  // ==========================

  const diseaseStats = await PredictionHistory.aggregate([

    {
      $match: {
        user: userId,
      },
    },

    {
      $group: {
        _id: "$prediction.disease",

        value: {
          $sum: 1,
        },
      },
    },

    {
      $project: {
        _id: 0,
        name: "$_id",
        value: 1,
      },
    },

    {
      $sort: {
        value: -1,
      },
    },

  ]);

  // ==========================
  // Weather Analytics
  // ==========================

  const weatherAnalytics = await PredictionHistory.aggregate([

    {
      $match: {
        user: userId,
      },
    },

    {
      $group: {

        _id: null,

        averageTemperature: {
          $avg: "$weather.temperature",
        },

        averageHumidity: {
          $avg: "$weather.humidity",
        },

        averageWindSpeed: {
          $avg: "$weather.wind_speed",
        },

      },

    },

  ]);

  // ==========================
  // Top City
  // ==========================

  const topCity = await PredictionHistory.aggregate([

    {
      $match: {
        user: userId,
      },
    },

    {
      $group: {

        _id: "$city",

        total: {
          $sum: 1,
        },

      },

    },

    {
      $sort: {
        total: -1,
      },
    },

    {
      $limit: 1,
    },

  ]);

  // ==========================
  // Return Dashboard Data
  // ==========================

  return {

    totalPredictions,

    todayPredictions,

    latestPrediction,

    recentPredictions,

    diseaseStats,

    weatherAnalytics: {

      averageTemperature:
        weatherAnalytics[0]?.averageTemperature?.toFixed(1) || 0,

      averageHumidity:
        weatherAnalytics[0]?.averageHumidity?.toFixed(1) || 0,

      averageWindSpeed:
        weatherAnalytics[0]?.averageWindSpeed?.toFixed(1) || 0,

      topCity:
        topCity[0]?._id || "N/A",

    },

  };

};