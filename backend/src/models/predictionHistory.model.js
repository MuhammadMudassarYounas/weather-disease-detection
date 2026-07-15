import mongoose from "mongoose";

const predictionHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    weather: {
      temperature: {
        type: Number,
        required: true,
      },

      humidity: {
        type: Number,
        required: true,
      },

      wind_speed: {
        type: Number,
        required: true,
      },
    },

    patient: {
      type: Object,
      required: true,
    },

    prediction: {
      disease: {
        type: String,
        required: true,
      },
    },

    ai_report: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PredictionHistory = mongoose.model(
  "PredictionHistory",
  predictionHistorySchema
);

export default PredictionHistory;