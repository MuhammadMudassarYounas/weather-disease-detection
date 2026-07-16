import express from "express";
import cors from "cors";

import { env } from "./config/env.js";
import { connectDB } from "./config/database.js";

import predictionRoutes from "./routes/prediction.routes.js";
import weatherRoutes from "./routes/weather.routes.js";
import historyRoutes from "./routes/history.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

// Create Express app FIRST
const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Connect Database
await connectDB();

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", dashboardRoutes);
app.use("/api/v1", predictionRoutes);
app.use("/api/v1", weatherRoutes);
app.use("/api/v1", historyRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running.",
  });
});

// Start Server
app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});