import express from "express";
import { getResponse } from "../controllers/ai.controllers.js";

// Create Router
export const aiRouter = express.Router();

aiRouter.route("/")
.post(getResponse)

