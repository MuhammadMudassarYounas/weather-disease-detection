import express from "express";

import { env } from "./config/env.js";

import predictionRoutes from "./routes/prediction.routes.js";

const app = express();

/**
 * Parse incoming JSON requests.
 */
app.use(express.json());

/**
 * Health Check
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Weather Disease Detection Backend is running.",
  });
});

/**
 * Prediction Routes
 */
app.use("/api/v1", predictionRoutes);

/**
 * Start Server
 */
app.listen(env.PORT, () => {
  console.log(
    `Server running on http://localhost:${env.PORT}`
  );
});