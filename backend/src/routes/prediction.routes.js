import express from "express";

import {
  predictDisease,
  getHistory,
  removeHistory,
} from "../controllers/prediction.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * Predict Disease
 */
router.post("/predict", protect, predictDisease);

/**
 * Get Prediction History
 */
router.get("/history", getHistory);

/**
 * Delete Prediction
 */
router.delete("/history/:id", removeHistory);

export default router;