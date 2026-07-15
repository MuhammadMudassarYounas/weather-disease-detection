import express from "express";

import {
  getHistory,
  removeHistory,
} from "../controllers/prediction.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/history",
  protect,
  getHistory
);

router.delete(
  "/history/:id",
  protect,
  removeHistory
);

export default router;