import { useNavigate } from 'react-router'
import { DocumentForm } from '../features/documents/components/DocumentForm'
import { useGenerateDocument } from '../features/documents/hooks/useGenerateDocument'
import type { GenerateDocumentRequest } from '../features/documents/types/document.types'

export function CreateDocumentPage() {
  const navigate = useNavigate()
  const { generateDocument, isLoading, error } = useGenerateDocument()

  async function handleSubmit(input: GenerateDocumentRequest) {
    const result = await generateDocument(input)
    navigate('/documents/result', { state: { result } })
  }

  return (
    <main className="page">
      <section className="page-header compact">
        <p className="eyebrow">Create Document</p>
        <h1>문서 생성</h1>
        <p>기술 주제와 배경을 입력해 팀 공유용 초안을 만듭니다.</p>
      </section>

      <DocumentForm error={error} isSubmitting={isLoading} onSubmit={handleSubmit} />
    </main>
  )
}
