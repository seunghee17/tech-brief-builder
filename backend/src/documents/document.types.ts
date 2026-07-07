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
