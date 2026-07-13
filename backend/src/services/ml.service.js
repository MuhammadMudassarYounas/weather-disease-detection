import axios from "axios";
import { env } from "../config/env.js";

export const predictDiseaseService = async (patientData) => {

  console.log("\n========== ML INPUT ==========");
  console.log(JSON.stringify(patientData, null, 2));
  console.log("==============================\n");

  try {

    const response = await axios.post(
      `${env.FASTAPI_URL}/api/v1/predict`,
      patientData
    );

    return response.data;

  } catch (error) {

  console.log("\n========== FASTAPI ERROR ==========");

  console.log("Status:", error.response?.status);

  if (error.response?.data?.detail) {
    error.response.data.detail.forEach((item, index) => {
      console.log(`\nError ${index + 1}`);
      console.log("Location :", item.loc);
      console.log("Message  :", item.msg);
      console.log("Type     :", item.type);
      console.log("Input    :", item.input);
    });
  } else {
    console.log(error.response?.data);
  }

  console.log("\n===================================");

  throw error;
}

};