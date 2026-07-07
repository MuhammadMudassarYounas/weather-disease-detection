import axios from "axios";
import { env } from "../config/env.js";

/**
 * Call the FastAPI ML service
 * and return the prediction.
 */
export const predictDiseaseService = async (patientData) => {
  try {
    const response = await axios.post(
      `${env.FASTAPI_URL}/api/v1/predict`,
      patientData
    );

    return response.data;

  } catch (error) {

    console.error("FastAPI Error:", error.message);

    throw new Error("Unable to connect to ML Service.");

  }
};