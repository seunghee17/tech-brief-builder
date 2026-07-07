import express from "express";
import cors from "cors";
import { documentRoutes } from "./documents/document.routes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { env } from "./config/env.js";

export const app = express();

app.use(
  cors({
    origin: env.allowedOrigin,
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "tech-brief-builder-api",
  });
});

app.use("/api/documents", documentRoutes);

app.use(errorMiddleware);
