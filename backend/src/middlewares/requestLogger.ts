import { randomUUID } from "node:crypto";
import type { RequestHandler } from "express";
import { logger } from "../shared/logging/logger.js";

export const requestLogger: RequestHandler = (req, res, next) => {
  const requestId = randomUUID();
  const startedAt = performance.now();

  res.setHeader("X-Request-Id", requestId);

  logger.info("http_request_started", {
    requestId,
    method: req.method,
    path: req.originalUrl,
  });

  res.on("finish", () => {
    logger.info("http_request_completed", {
      requestId,
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Math.round(performance.now() - startedAt),
    });
  });

  next();
};
