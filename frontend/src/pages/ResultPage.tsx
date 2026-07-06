import { Link, useLocation } from 'react-router'
import { DocumentPreview } from '../features/documents/components/DocumentPreview'
import { QualityReportCard } from '../features/documents/components/QualityReportCard'
import type { GenerateDocumentResponse } from '../features/documents/types/document.types'
import { Button } from '../shared/components/Button'
import { Card } from '../shared/components/Card'
import { copyToClipboard } from '../shared/utils/copyToClipboard'
import { downloadMarkdown } from '../shared/utils/downloadMarkdown'

type ResultLocationState = {
  result?: GenerateDocumentResponse
}

export function ResultPage() {
  const location = useLocation()
  const result = (location.state as ResultLocationState | null)?.result

  if (!result) {
    return (
      <main className="page">
        <Card title="생성된 문서가 없습니다">
          <p>먼저 문서 생성 화면에서 새 문서를 만들어 주세요.</p>
          <Button as={Link} to="/documents/new">
            문서 생성하기
          </Button>
        </Card>
      </main>
    )
  }

  return (
    <main className="page result-page">
      <section className="result-actions">
        <div>
          <p className="eyebrow">Generated Document</p>
          <h1>{result.document.title}</h1>
        </div>
        <div className="button-row">
          <Button variant="secondary" onClick={() => copyToClipboard(result.document.markdown)}>
            복사
          </Button>
          <Button
            variant="secondary"
            onClick={() => downloadMarkdown(result.document.title, result.document.markdown)}
          >
            다운로드
          </Button>
        </div>
      </section>

      <div className="result-layout">
        <DocumentPreview document={result.document} />
        <QualityReportCard report={result.qualityReport} />
      </div>
    </main>
  )
}
