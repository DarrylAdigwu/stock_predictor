import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { aiRouter } from "./src/routes/ai.routes.js";

// Create server
const server = express();

// Configure .env files
dotenv.config();

// Middleware for web security
server.use(helmet());

// Middleware for parsing cookies
server.use(cookieParser());

// Middleware for proxy server
server.set("trust proxy", 1);

// Middleware for cross-origin resources and pass header
server.use(cors({
  origin: process.env.CLIENT_DOMAIN, 
  credentials: true,
}));

// Configure middleware for JSON, public folder, and parsing body
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({extended:true}));

// API routes
server.use("/ai", aiRouter)

// Run server
server.listen(process.env.PORT, () => {
  console.log(`server listening on port: ${process.env.PORT}`)
})