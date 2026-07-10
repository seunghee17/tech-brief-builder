// 품질 리포트

import type { QualityReport } from "../types/document.types";

interface QualityReportCardProps {
  qualityReport: QualityReport;
}

export const QualityReportCard = ({
  qualityReport,
}: QualityReportCardProps) => {
  const shareableText = qualityReport.isShareable ? "공유 가능" : "보완 필요";

  return (
    <section
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 12,
        backgroundColor: "#fff",
      }}
    >
      <h2>품질 리포트</h2>
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            padding: 12,
            border: "1px solid #eee",
            borderRadius: 9,
            minWidth: 20,
          }}
        >
          <strong>점수</strong>
          <p style={{ fontSize: 24, margin: "8px 0 0" }}>
            {qualityReport.score}
          </p>
        </div>
        <div
          style={{
            padding: 12,
            border: "1px solid #eee",
            borderRadius: 8,
            minWidth: 120,
          }}
        >
          <strong>공유 가능 여부</strong>
          <p style={{ margin: "9px 0 0" }}>
            {shareableText}
          </p>
        </div>
      </div>

      <div>
        <strong>누락된 내용</strong>
        {qualityReport.missingPoints.length > 0 ? (
          <ul>
            {qualityReport.missingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : (
          <p>누락된 내용이 없습니다.</p>
        )}
      </div>

      <div>
        <strong>개선 제안</strong>
        {qualityReport.improvementSuggestions.length > 0 ? (
          <ul>
            {qualityReport.improvementSuggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        ) : (
          <p>추가 개선 제안이 없습니다.</p>
        )}
      </div>
    </section>
  );
};
