import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { AppError } from "../shared/errors/AppError.js";

export const validateRequest =
  (schema: ZodType): RequestHandler =>
  (req, _res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      next(new AppError("Invalid request body", 400, result.error.flatten()));
      return;
    }

    req.body = result.data;
    next();
  };
