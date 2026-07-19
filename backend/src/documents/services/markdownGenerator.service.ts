import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { aiConfig } from "../../config/ai.js";
import { markdownOutputSchema } from "../document.schema.js";
import type {
  AnalysisOutput,
  DocumentTypePolicy,
  GenerateDocumentRequest,
  MarkdownOutput,
  ReferenceDocument,
} from "../document.types.js";
import { buildGenerateMarkdownPrompt } from "../../prompts/generateMarkdown.prompt.js";

export class MarkdownGeneratorService {
  async generate(params: {
    request: GenerateDocumentRequest;
    policy: DocumentTypePolicy;
    references: ReferenceDocument[];
    analysis: AnalysisOutput;
  }): Promise<MarkdownOutput> {
    const { request, policy, references, analysis } = params;

    const result = await generateObject({
      model: openai(aiConfig.defaultModel),
      schema: markdownOutputSchema,
      prompt: buildGenerateMarkdownPrompt({
        request,
        policy,
        references,
        analysis,
      }),
    });

    return result.object;
  }
}