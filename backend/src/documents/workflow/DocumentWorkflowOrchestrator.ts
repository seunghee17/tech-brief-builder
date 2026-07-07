import type {
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from "../document.types.js";

export class DocumentWorkflowOrchestrator {
  async generate(
    request: GenerateDocumentRequest
  ): Promise<GenerateDocumentResponse> {
    const analysis = this.createMockAnalysis(request);
    const document = this.createMockDocument(request);
    const qualityReport = this.createMockQualityReport();

    return {
      analysis,
      document,
      qualityReport,
    };
  }

  private createMockAnalysis(request: GenerateDocumentRequest) {
    return {
      topic: this.createTopicByDocumentType(request.documentType),
      summary: `${request.documentType} 문서 생성을 위한 Raw Note 분석 결과입니다.`,
      keyPoints: [
        "문서 타입별 작성 정책을 적용할 예정입니다.",
        "현재는 AI 연결 전 Mock 응답 단계입니다.",
        "이후 Analyzer → Generator → Quality 흐름으로 확장합니다.",
      ],
      missingInformation: [
        "실제 근거 자료",
        "명확한 결론",
        "구체적인 액션 아이템",
      ],
    };
  }

  private createMockDocument(request: GenerateDocumentRequest) {
    return {
      title: this.createTitleByDocumentType(request.documentType),
      content: this.createMockMarkdown(request),
    };
  }

  private createMockQualityReport() {
    return {
      score: 75,
      isShareable: false,
      missingPoints: ["구체적인 근거", "최종 결론", "후속 액션"],
      improvementSuggestions: [
        "Raw Note에서 핵심 문제를 더 명확히 추출해야 합니다.",
        "문서 타입별 필수 섹션을 더 구체적으로 채워야 합니다.",
        "팀 공유 전에 결론과 다음 액션을 보강하는 것이 좋습니다.",
      ],
    };
  }

  private createTopicByDocumentType(
    documentType: GenerateDocumentRequest["documentType"]
  ) {
    const topicMap = {
      TECH_RESEARCH: "기술 리서치 분석",
      GUIDE: "개발 가이드 작성",
      PROJECT_SPEC: "프로젝트 사양 정리",
      MEETING_NOTES: "회의록 요약",
    };

    return topicMap[documentType];
  }

  private createTitleByDocumentType(
    documentType: GenerateDocumentRequest["documentType"]
  ) {
    const titleMap = {
      TECH_RESEARCH: "Mock 기술 리서치 문서",
      GUIDE: "Mock 개발 가이드 문서",
      PROJECT_SPEC: "Mock 프로젝트 사양 문서",
      MEETING_NOTES: "Mock 회의록 정리 문서",
    };

    return titleMap[documentType];
  }

  private createMockMarkdown(request: GenerateDocumentRequest) {
    if (request.documentType === "TECH_RESEARCH") {
      return `# Mock 기술 리서치 문서

## 배경

업로드된 Raw Note를 기반으로 기술 도입 여부를 검토합니다.

## 문제 정의

현재는 문서 생성 API 흐름을 검증하기 위한 Mock 단계입니다.

## 조사 내용

- 문서 타입: ${request.documentType}
- 대상 독자: ${request.targetReader}
- 톤앤매너: ${request.tone}

## 장점

- 백엔드 흐름을 먼저 고정할 수 있습니다.
- 프론트엔드와 API 계약을 빠르게 맞출 수 있습니다.

## 리스크

- 아직 실제 AI 분석 결과가 아닙니다.

## 결론

다음 단계에서 GPT API를 연결해 실제 분석과 문서 생성을 수행합니다.
`;
    }

    if (request.documentType === "GUIDE") {
      return `# Mock 개발 가이드 문서

## 목적

이 문서는 특정 작업을 따라 할 수 있도록 안내하는 Mock 가이드입니다.

## 사전 조건

- 백엔드 서버가 실행되어 있어야 합니다.
- 프론트엔드에서 문서 생성 요청을 보낼 수 있어야 합니다.

## 단계별 절차

1. 재료 파일을 업로드합니다.
2. 문서 타입을 선택합니다.
3. 문서 생성을 요청합니다.
4. 생성된 Markdown 문서를 확인합니다.

## 주의사항

현재는 AI 연결 전 Mock 응답입니다.
`;
    }

    if (request.documentType === "PROJECT_SPEC") {
      return `# Mock 프로젝트 사양 문서

## 개요

이 문서는 프로젝트 요구사항을 정리하기 위한 Mock 사양 문서입니다.

## 목표

Raw Note를 기반으로 구현 범위와 기능 요구사항을 정리합니다.

## 주요 기능

- 파일 기반 재료 입력
- 문서 타입 선택
- Markdown 문서 생성
- 품질 리포트 반환

## 제외 범위

- 로그인
- DB 저장
- RAG
- PDF/DOCX 파싱
`;
    }

    return `# Mock 회의록 정리 문서

## 회의 개요

업로드된 회의 메모를 기반으로 회의록을 정리합니다.

## 주요 논의 내용

- 문서 생성 흐름 설계
- 백엔드 Orchestrator 구조
- 프론트엔드 Drag & Drop 입력 방식

## 결정 사항

- Day 1에서는 Mock API를 먼저 구현합니다.
- AI 연결은 이후 단계에서 진행합니다.

## 액션 아이템

- Backend Mock API 구현
- Frontend 입력 화면 구현
- API 연결 테스트
`;
  }
}
