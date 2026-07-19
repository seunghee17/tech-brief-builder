import type { ReferenceDocument } from "../document.types.js";

export const projectSpecExamples: ReferenceDocument[] = [
  {
    id: "project-spec-tech-brief-builder",
    documentType: "PROJECT_SPEC",
    title: "Tech Brief Builder MVP 사양",
    description: "AI 문서 생성 서비스의 MVP 범위를 정의한 예시 문서",
    content: `# Tech Brief Builder MVP 사양

## 개요

Tech Brief Builder는 개발자가 작성한 산발적인 메모를 팀 공유용 기술 문서로 변환하는 웹 서비스다.

## 문제 정의

개발 과정에서 리서치 메모, 회의 내용, 링크가 흩어져 있어 팀 공유 문서로 정리하는 데 시간이 많이 든다.

## 목표

Raw Note를 문서 타입에 맞는 Markdown 문서로 변환한다.

## 범위

- 파일 드래그앤드롭 입력
- 문서 타입 선택
- Markdown 문서 생성
- 품질 리포트 표시

## 주요 기능

- .txt / .md 파일 읽기
- 문서 옵션 선택
- AI 문서 생성
- Markdown Preview

## 예외 케이스

- 파일이 없는 경우 문서 생성 버튼 비활성화
- 지원하지 않는 파일 형식 업로드 시 에러 표시

## 제외 범위

- 로그인
- DB 저장
- RAG
- PDF/DOCX 파싱
`,
  },
];