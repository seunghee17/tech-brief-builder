import type { RequestHandler } from "express";
import type { GenerateDocumentRequest } from "./document.types.js";
import { DocumentWorkflowOrchestrator } from "./workflow/DocumentWorkflowOrchestrator.js";

const orchestrator = new DocumentWorkflowOrchestrator();

export const generateDocument: RequestHandler = async (req, res, next) => {
  try {
    const body = req.body as GenerateDocumentRequest;
    const result = await orchestrator.generate(body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
