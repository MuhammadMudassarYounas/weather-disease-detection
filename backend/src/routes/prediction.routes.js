import express from "express";
import { predictDisease } from "../controllers/prediction.controller.js";

const router = express.Router();

/**
 * POST /predict
 * Predict disease using the ML service.
 */
router.post("/predict", predictDisease);

export default router;