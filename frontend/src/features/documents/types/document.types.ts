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

export interface GenerateDocumentResponse {
  id: string;
  title: string;
  markdown: string;
  createdAt: string;
}
