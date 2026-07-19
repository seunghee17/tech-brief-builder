import type {
  DocumentTypePolicy,
  GenerateDocumentRequest,
  GenerateDocumentResponse,
  ReferenceDocument,
} from "../document.types.js";
import { DocumentTypePolicyRepository } from "../policies/documentTypePolicy.repository.js";
import { ReferenceDocumentRepository } from "../references/referenceDocument.repository.js";
import { DocumentAnalyzerService } from "../services/documentAnalyzer.service.js";
import { MarkdownGeneratorService } from "../services/markdownGenerator.service.js";
import { logger, serializeError } from "../../shared/logging/logger.js";

export class DocumentWorkflowOrchestrator {
  private readonly policyRepository = new DocumentTypePolicyRepository();
  private readonly referenceRepository = new ReferenceDocumentRepository();
  private readonly analyzerService = new DocumentAnalyzerService();
  private readonly generatorService = new MarkdownGeneratorService();

  async generate(
    request: GenerateDocumentRequest,
  ): Promise<GenerateDocumentResponse> {
    const policy = this.policyRepository.findByType(request.documentType);
    const references = this.referenceRepository.findByType(request.documentType);
    let stage: "analysis" | "document" = "analysis";

    logger.info("document_generation_started", {
      documentType: request.documentType,
      referenceCount: references.length,
    });

    try {
      const analysis = await this.analyzerService.analyze({
        request,
        policy,
        references,
      });

      logger.info("document_analysis_completed", {
        documentType: request.documentType,
      });

      stage = "document";
      const document = await this.generatorService.generate({
        request,
        policy,
        references,
        analysis,
      });

      logger.info("document_markdown_completed", {
        documentType: request.documentType,
      });

      // TODO: 사실 기반으로 수정필요, 현재는 임의로 점수와 개선점 생성
      const qualityReport = {
        score: 78,
        isShareable: false,
        missingPoints: analysis.missingInformation,
        improvementSuggestions: policy.writingGuidelines.slice(0, 3),
      };

      return {
        analysis,
        document,
        qualityReport,
      };
    } catch (error) {
      logger.error("document_generation_failed", {
        documentType: request.documentType,
        stage,
        error: serializeError(error),
      });
      throw error;
    }
  }
}
