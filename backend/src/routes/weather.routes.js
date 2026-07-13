import express from "express";

import { getWeather } from "../controllers/weather.controller.js";

const router = express.Router();

/**
 * GET /api/v1/weather?city=Lahore
 */
router.get("/weather", getWeather);

export default router;