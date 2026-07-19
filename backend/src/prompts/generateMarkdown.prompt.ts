import type {
  AnalysisOutput,
  DocumentTypePolicy,
  GenerateDocumentRequest,
  ReferenceDocument,
} from "../documents/document.types.js";

interface BuildGenerateMarkdownPromptParams {
  request: GenerateDocumentRequest;
  policy: DocumentTypePolicy;
  references: ReferenceDocument[];
  analysis: AnalysisOutput;
}

export const buildGenerateMarkdownPrompt = ({
  request,
  policy,
  references,
  analysis,
}: BuildGenerateMarkdownPromptParams) => {
  return `
너는 개발팀 내부 공유용 기술 문서를 작성하는 테크니컬 라이터다.

아래 문서 타입 정책, 참고 예시 문서, Raw Note 분석 결과를 바탕으로
팀원이 바로 읽고 공유할 수 있는 Markdown 문서를 작성해야 한다.

[문서 타입]
${policy.name}

[문서 목적]
${policy.purpose}

[작성 톤]
${policy.toneGuide}

[대상 독자]
${request.targetReader}

[사용자가 선택한 톤]
${request.tone}

[필수 섹션]
${policy.sections
  .filter((section) => section.required)
  .map((section) => `- ${section.title}: ${section.description}`)
  .join("\n")}

[선택 섹션]
${policy.sections
  .filter((section) => !section.required)
  .map((section) => `- ${section.title}: ${section.description}`)
  .join("\n")}

[작성 가이드]
${policy.writingGuidelines.map((guide) => `- ${guide}`).join("\n")}

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

[Raw Note 분석 결과]
주제: ${analysis.topic}
요약: ${analysis.summary}
핵심 포인트:
${analysis.keyPoints.map((point) => `- ${point}`).join("\n")}

부족한 정보:
${analysis.missingInformation.map((info) => `- ${info}`).join("\n")}

[원본 Raw Note]
${request.rawNote}

작성 규칙:
- Markdown 형식으로 작성한다.
- 불필요한 인사말은 쓰지 않는다.
- 섹션 제목은 문서 타입 정책을 따른다.
- Raw Note에 없는 내용을 과도하게 지어내지 않는다.
- 부족한 정보는 "추가 확인 필요" 또는 "오픈 이슈"로 분리한다.
`;
};