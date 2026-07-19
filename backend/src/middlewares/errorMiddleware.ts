import type { ErrorRequestHandler } from "express";
import { AppError } from "../shared/errors/AppError.js";
import { logger, serializeError } from "../shared/logging/logger.js";

export const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  logger.error("http_request_failed", {
    requestId: res.getHeader("X-Request-Id"),
    method: req.method,
    path: req.originalUrl,
    error: serializeError(err),
  });

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      details: err.details,
    });
    return;
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
};
