import { Router } from "express";
import { generateDocument } from "./document.controller.js";
import { generateDocumentRequestSchema } from "./document.schema.js";
import { validateRequest } from "../middlewares/validateRequest.js";

export const documentRoutes = Router();

documentRoutes.post(
  "/generate",
  validateRequest(generateDocumentRequestSchema),
  generateDocument
);
