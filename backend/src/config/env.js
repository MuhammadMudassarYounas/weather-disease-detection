import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  FASTAPI_URL: process.env.FASTAPI_URL,
  WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
};