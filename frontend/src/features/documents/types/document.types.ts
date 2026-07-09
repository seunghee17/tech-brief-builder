export type DocumentType =
  | "TECH_RESEARCH"
  | "GUIDE"
  | "PROJECT_SPEC"
  | "MEETING_NOTES";

export type TargetReader = "DEVELOPER" | "PM" | "DESIGNER" | "TEAM_LEAD";

export type Tone = "FORMAL" | "CASUAL" | "PRACTICAL" | "ANALYTICAL";

export interface UploadedMaterial {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  content: string;
}

export interface GenerateDocumentFormValues {
  documentType: DocumentType;
  targetReader: TargetReader;
  tone: Tone;
}

export interface GenerateDocumentRequest {
  rawNote: string;
  references?: string[];
  documentType: DocumentType;
  targetReader: TargetReader;
  tone: Tone;
}

export interface AnalysisOutput {
  topic: string;
  summary: string;
  keyPoints: string[];
  missingInformation: string[];
}

export interface MarkdownOutput {
  title: string;
  content: string;
}

export interface QualityReport {
  score: number;
  isShareable: boolean;
  missingPoints: string[];
  improvementSuggestions: string[];
}

export interface GenerateDocumentResponse {
  analysis: AnalysisOutput;
  document: MarkdownOutput;
  qualityReport: QualityReport;
}
