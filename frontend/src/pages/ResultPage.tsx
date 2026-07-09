import { Link, useLocation } from "react-router";
import type { GenerateDocumentResponse } from "../features/documents/types/document.types";

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
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <h1>{result.document.title}</h1>

      <section>
        <h2>분석 결과</h2>
        <p>{result.analysis.summary}</p>

        <h3>핵심 포인트</h3>
        <ul>
          {result.analysis.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3>부족한 정보</h3>
        <ul>
          {result.analysis.missingInformation.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>생성된 Markdown</h2>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
          }}
        >
          {result.document.content}
        </pre>
      </section>

      <section>
        <h2>품질 리포트</h2>
        <p>점수: {result.qualityReport.score}</p>
        <p>
          공유 가능 여부:{" "}
          {result.qualityReport.isShareable ? "공유 가능" : "보완 필요"}
        </p>

        <h3>누락된 내용</h3>
        <ul>
          {result.qualityReport.missingPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3>개선 제안</h3>
        <ul>
          {result.qualityReport.improvementSuggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      </section>

      <Link to="/create">다시 만들기</Link>
    </main>
  );
};