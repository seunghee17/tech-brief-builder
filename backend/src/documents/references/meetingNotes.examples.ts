import type { ReferenceDocument } from "../document.types.js";

export const meetingNotesExamples: ReferenceDocument[] = [
  {
    id: "meeting-notes-ai-workflow",
    documentType: "MEETING_NOTES",
    title: "AI Workflow 설계 회의록",
    description: "AI 문서 생성 흐름을 논의한 회의록 예시 문서",
    content: `# AI Workflow 설계 회의록

## 논의 주제

- 문서 생성 흐름
- 문서 타입별 정책 관리 방식
- RAG 도입 여부
- MVP 범위

## 주요 논의 내용

초기 MVP에서는 RAG를 제외하고 문서 타입별 예시 문서를 정적으로 관리하기로 했다.

## 결정 사항

- 문서 타입별 정책을 백엔드에서 관리한다.
- ReferenceDocumentRepository를 분리해 향후 RAG 확장이 가능하게 한다.
- GPT API 연결 전 Mock API 흐름을 먼저 고정한다.

## 액션 아이템

- Backend Mock API 구현
- DocumentTypePolicyRepository 작성
- ReferenceDocumentRepository 작성
`,
  },
];