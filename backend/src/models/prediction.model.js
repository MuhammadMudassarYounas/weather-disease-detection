import mongoose from "mongoose";

const predictionSchema = new mongoose.Schema(
  {
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

      weather: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },
    },

    symptoms: {
      type: Object,
      required: true,
    },

    predicted_disease: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Prediction = mongoose.model(
  "Prediction",
  predictionSchema
);

export default Prediction;