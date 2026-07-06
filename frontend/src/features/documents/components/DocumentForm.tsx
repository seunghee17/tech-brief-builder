import { useState, type FormEvent } from 'react'
import { Button } from '../../../shared/components/Button'
import { Card } from '../../../shared/components/Card'
import { Select } from '../../../shared/components/Select'
import { Textarea } from '../../../shared/components/Textarea'
import type { GenerateDocumentRequest } from '../types/document.types'

type DocumentFormProps = {
  error: string | null
  isSubmitting: boolean
  onSubmit: (input: GenerateDocumentRequest) => Promise<void>
}

const documentTypeOptions = [
  { label: '기술 조사', value: 'tech-research' },
  { label: '라이브러리 검토', value: 'library-review' },
  { label: '기술 비교', value: 'tech-comparison' },
  { label: '아키텍처 결정', value: 'architecture-decision' },
  { label: '문제 해결', value: 'troubleshooting' },
]

export function DocumentForm({ error, isSubmitting, onSubmit }: DocumentFormProps) {
  const [form, setForm] = useState<GenerateDocumentRequest>({
    topic: '',
    context: '',
    documentType: 'tech-research',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await onSubmit(form)
  }

  return (
    <Card>
      <form className="document-form" onSubmit={handleSubmit}>
        <label>
          문서 유형
          <Select
            value={form.documentType}
            options={documentTypeOptions}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                documentType: event.target.value as GenerateDocumentRequest['documentType'],
              }))
            }
          />
        </label>

        <label>
          주제
          <Textarea
            required
            rows={3}
            value={form.topic}
            placeholder="예: Maestro 기반 Flutter UI 테스트 자동화"
            onChange={(event) =>
              setForm((current) => ({ ...current, topic: event.target.value }))
            }
          />
        </label>

        <label>
          배경과 요구사항
          <Textarea
            required
            rows={8}
            value={form.context}
            placeholder="현재 문제, 검토 목적, 포함해야 할 관점 등을 입력하세요."
            onChange={(event) =>
              setForm((current) => ({ ...current, context: event.target.value }))
            }
          />
        </label>

        {error ? <p className="form-error">{error}</p> : null}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '생성 중...' : '문서 생성'}
        </Button>
      </form>
    </Card>
  )
}
