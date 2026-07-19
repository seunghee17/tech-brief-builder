import type {
    DocumentTypePolicy,
    GenerateDocumentRequest,
    ReferenceDocument,
} from "../documents/document.types.js";

interface BuildAnalyzePromptParams {
    request: GenerateDocumentRequest;
    policy: DocumentTypePolicy;
    references: ReferenceDocument[];
}

export const buildAnalyzePrompt = ({
    request,
    policy,
    references
}: BuildAnalyzePromptParams) => {
    return `
너는 개발팀의 기술 문서 작성을 돕는 AI 분석가다.

사용자가 제공한 Raw Note를 바로 문서로 작성하지 말고,
먼저 문서 생성을 위한 구조화된 분석 결과로 정리해야 한다.

[문서 타입]
${policy.name}

[문서 목적]
${policy.purpose}

[작성 톤]
${policy.toneGuide}

[대상 독자]
${request.targetReader}

[사용자가 원하는 톤]
${request.tone}

[문서 타입별 품질 기준]
${policy.qualityCriteria.map((criteria) => `- ${criteria}`).join("\n")}

[참고 예시 문서]
${references
  .map(
    (reference) => `
제목: ${reference.title}
설명: ${reference.description}
내용:
${reference.content}
`
  )
  .join("\n---\n")}

[Raw Note]
${request.rawNote}

위 내용을 바탕으로 다음 관점에서 분석해라.

- 이 문서의 핵심 주제
- 한 문단 요약
- 문서에 반드시 포함해야 할 핵심 포인트
- 현재 Raw Note에서 부족한 정보
`;
};