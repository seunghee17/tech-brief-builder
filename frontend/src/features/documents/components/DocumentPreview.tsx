import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Card } from '../../../shared/components/Card'
import type { GeneratedDocument } from '../types/document.types'

type DocumentPreviewProps = {
  document: GeneratedDocument
}

export function DocumentPreview({ document }: DocumentPreviewProps) {
  return (
    <Card title="문서 미리보기">
      <article className="markdown-preview">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{document.markdown}</ReactMarkdown>
      </article>
    </Card>
  )
}
