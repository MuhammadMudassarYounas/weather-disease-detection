import express from "express";
import { getPredictionHistory } from "../controllers/history.controller.js";

const router = express.Router();

router.get("/predictions", getPredictionHistory);

export default router;