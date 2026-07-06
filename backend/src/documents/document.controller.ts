import type { Request, Response, NextFunction } from "express";
import { DocumentWorkflowOrchestrator } from "./workflow/DocumentWorkflowOrchestrator";

const orchestrator = new DocumentWorkflowOrchestrator();

export async function generateDocument(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await orchestrator.generateDocument(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function rewriteSection(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await orchestrator.rewriteSection(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
