import express from "express";
import { getKey } from "../controllers/api.controllers.js";

// Create Router
export const keyRouter = express.Router();

keyRouter.route("/")
.get(getKey)

