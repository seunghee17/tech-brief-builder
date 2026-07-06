export type DocumentType =
  | 'tech-research'
  | 'library-review'
  | 'tech-comparison'
  | 'architecture-decision'
  | 'troubleshooting'

export type GenerateDocumentRequest = {
  topic: string
  context: string
  documentType: DocumentType
}

export type DocumentAnalysis = {
  topic: string
  problem: string
  background: string
  keyFindings: string[]
  pros: string[]
  cons: string[]
  risks: string[]
  suggestedActions: string[]
  references: string[]
}

export type DocumentSection = {
  id: string
  title: string
  content: string
}

export type GeneratedDocument = {
  title: string
  markdown: string
  sections: DocumentSection[]
}

export type QualityReport = {
  score: number
  isShareable: boolean
  missingPoints: string[]
  improvementSuggestions: string[]
}

export type GenerateDocumentResponse = {
  analysis: DocumentAnalysis
  document: GeneratedDocument
  qualityReport: QualityReport
}
