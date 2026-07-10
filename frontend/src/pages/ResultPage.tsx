import { Link, useLocation } from "react-router";
import type { GenerateDocumentResponse } from "../features/documents/types/document.types";
import { AnalysisSummaryCard } from "../features/documents/components/AnalysisSummaryCard";
import { DocumentPreview } from "../features/documents/components/DocumentPreview";
import { QualityReportCard } from "../features/documents/components/QualityReportCard";

export const ResultPage = () => {
  const location = useLocation();
  const result = location.state as GenerateDocumentResponse | null;

  if (!result) {
    return (
      <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
        <h1>문서 생성 결과</h1>
        <p>표시할 문서 생성 결과가 없습니다.</p>

        <Link to="/create">새 문서 만들기</Link>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: 40,
        backgroundColor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <Link to="/create">← 다시 만들기</Link>
        <h1>{result.document.title}</h1>
        <p>생성된 문서와 품질 리포트를 확인하세요.</p>
      </header>

      <div style={{ display: "grid", gap: 24 }}>
        <AnalysisSummaryCard analysis={result.analysis} />
        <DocumentPreview document={result.document} />
        <QualityReportCard qualityReport={result.qualityReport} />
      </div>
    </main>
  );
};
