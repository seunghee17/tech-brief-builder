import { httpClient } from '../../../shared/api/httpClient'
import type {
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from '../types/document.types'

export function generateDocument(
  input: GenerateDocumentRequest,
): Promise<GenerateDocumentResponse> {
  return httpClient.post('/api/documents/generate', input)
}
