import { useState } from 'react'
import { generateDocument as generateDocumentApi } from '../api/documentApi'
import type {
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from '../types/document.types'

export function useGenerateDocument() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function generateDocument(
    input: GenerateDocumentRequest,
  ): Promise<GenerateDocumentResponse> {
    setIsLoading(true)
    setError(null)

    try {
      return await generateDocumentApi(input)
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : '문서 생성 중 오류가 발생했습니다.'
      setError(message)
      throw caughtError
    } finally {
      setIsLoading(false)
    }
  }

  return { error, generateDocument, isLoading }
}
