// 분석결과 카드

import type { AnalysisOutput } from "../types/document.types";

interface AnalysisSummaryCardProps {
    analysis: AnalysisOutput;
}

export const AnalysisSummaryCard = ({ analysis }: AnalysisSummaryCardProps) => {
  return (
    <section
      style={{
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 12,
        backgroundColor: "#fff",
      }}
    >
      <h2>분석 결과</h2>

      <div>
        <strong>주제</strong>
        <p>{analysis.topic}</p>
      </div>

      <div>
        <strong>요약</strong>
        <p>{analysis.summary}</p>
      </div>

      <div>
        <strong>핵심 포인트</strong>
        <ul>
          {analysis.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>부족한 정보</strong>
        <ul>
          {analysis.missingInformation.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};