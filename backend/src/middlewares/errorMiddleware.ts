import type { ErrorRequestHandler } from "express";
import { AppError } from "../shared/errors/AppError.js";

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      details: err.details,
    });
    return;
  }

  console.error(err);

  res.status(500).json({
    message: "Internal Server Error",
  });
};
