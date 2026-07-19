import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { aiConfig } from "../../config/ai.js";
import { analysisOutputSchema } from "../document.schema.js";
import type {
  AnalysisOutput,
  DocumentTypePolicy,
  GenerateDocumentRequest,
  ReferenceDocument,
} from "../document.types.js";
import { buildAnalyzePrompt } from "../../prompts/analyze.prompt.js";

export class DocumentAnalyzerService {
    async analyze(
        params: {
            request: GenerateDocumentRequest;
            policy: DocumentTypePolicy;
            references: ReferenceDocument[];
        }): Promise<AnalysisOutput> {
            const { request, policy, references } = params;

            const result = await generateObject({
                model: openai(aiConfig.defaultModel),
                prompt: buildAnalyzePrompt({ request, policy, references }),
                schema: analysisOutputSchema,
            });
            return result.object;
        }
}