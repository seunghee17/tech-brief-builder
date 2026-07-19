import type { ReferenceDocument } from "../document.types.js";

export const techResearchExamples: ReferenceDocument[] = [
  {
    id: "tech-research-react-query",
    documentType: "TECH_RESEARCH",
    title: "React Query 도입 검토",
    description: "서버 상태 관리 라이브러리 도입 여부를 검토한 예시 문서",
    content: `# React Query 도입 검토

## 배경

현재 프로젝트에서는 API 요청 상태, 로딩 상태, 에러 상태를 각 화면에서 개별적으로 관리하고 있다.

## 문제 정의

서버 상태 캐싱과 재요청 정책이 화면마다 다르게 구현되어 유지보수 비용이 증가하고 있다.

## 조사 내용

React Query는 서버 상태 관리, 캐싱, 재시도, stale time 관리 기능을 제공한다.

## 장점

- 서버 상태 관리 로직을 화면에서 분리할 수 있다.
- 캐싱과 재요청 정책을 일관되게 관리할 수 있다.

## 단점 및 리스크

- 팀원들이 새로운 라이브러리 사용법을 학습해야 한다.
- 기존 API 호출 구조와 일부 충돌할 수 있다.

## 결론

서버 상태가 많은 화면부터 점진적으로 도입하는 것이 적절하다.
`,
  },
];