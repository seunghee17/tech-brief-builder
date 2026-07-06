import express from "express";
import cors from "cors";
import "./config/env";
import { documentRouter } from "./documents/document.routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/documents", documentRouter);

app.use(errorMiddleware);
