export type DocumentType =
  | "TECH_RESEARCH"
  | "GUIDE"
  | "PROJECT_SPEC"
  | "MEETING_NOTES";

export type TargetReader = "DEVELOPER" | "PM" | "DESIGNER" | "TEAM_LEAD";

export type Tone = "FORMAL" | "CASUAL" | "PRACTICAL" | "ANALYTICAL";

// 프론트에서 백엔드로 보내는 요청 구조
export interface GenerateDocumentRequest {
  rawNote: string;
  references?: string[];
  documentType: DocumentType;
  targetReader: TargetReader;
  tone: Tone;
}

// Raw Note 분석 중간 결과
export interface AnalysisOutput {
  topic: string;
  summary: string;
  keyPoints: string[];
  missingInformation: string[];
}

// 생성된 md 문서
export interface MarkdownOutput {
  title: string;
  content: string;
}

// 문서 품질 검토 결과
export interface QualityReport {
  score: number;
  isShareable: boolean;
  missingPoints: string[];
  improvementSuggestions: string[];
}

// 최종 api 응답구조
export interface GenerateDocumentResponse {
  analysis: AnalysisOutput;
  document: MarkdownOutput;
  qualityReport: QualityReport;
}

// 문서 타입별 필수 섹션 정의
export interface DocumentSectionPolicy {
  title: string;
  description: string;
  required: boolean;
}

// 문서 타입별 목적, 톤, 흐름, 품질기준
export interface DocumentTypePolicy {
  documentType: DocumentType;
  name: string;
  purpose: string;
  toneGuide: string;
  targetUseCase: string;
  sections: DocumentSectionPolicy[];
  writingGuidelines: string[];
  qualityCriteria: string[];
}

// few-shot example로 사용할 예시문서
export interface ReferenceDocument {
  id: string;
  documentType: DocumentType;
  title: string;
  description: string;
  content: string;
}
