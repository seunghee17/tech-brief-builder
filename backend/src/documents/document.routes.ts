import { Router } from "express";
import {
  generateDocument,
  rewriteSection,
} from "./document.controller";

export const documentRouter = Router();

documentRouter.post("/generate", generateDocument);
documentRouter.post("/rewrite-section", rewriteSection);
