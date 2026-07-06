import { Card } from '../../../shared/components/Card'
import type { QualityReport } from '../types/document.types'

type QualityReportCardProps = {
  report: QualityReport
}

export function QualityReportCard({ report }: QualityReportCardProps) {
  return (
    <Card title="품질 리포트">
      <div className="quality-score">
        <strong>{report.score}</strong>
        <span>{report.isShareable ? '공유 가능' : '추가 검토 필요'}</span>
      </div>

      <section className="quality-section">
        <h2>부족한 점</h2>
        <ul>
          {report.missingPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="quality-section">
        <h2>개선 제안</h2>
        <ul>
          {report.improvementSuggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      </section>
    </Card>
  )
}
