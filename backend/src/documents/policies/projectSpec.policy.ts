import type { DocumentTypePolicy } from "../document.types.js";

export const projectSpecPolicy: DocumentTypePolicy = {
  documentType: "PROJECT_SPEC",
  name: "프로젝트 사양 문서",
  purpose:
    "구현할 기능, 범위, 요구사항, 예외 케이스를 명확히 정의하여 개발 기준을 만든다.",
  toneGuide: "명확하고 구체적인 톤. 모호한 표현을 줄이고 구현 기준 중심으로 작성한다.",
  targetUseCase:
    "신규 기능 기획, MVP 범위 정의, API 요구사항 정리, 개발 착수 전 요구사항 합의",
  sections: [
    {
      title: "개요",
      description: "프로젝트 또는 기능의 배경과 간단한 설명을 작성한다.",
      required: true,
    },
    {
      title: "문제 정의",
      description: "현재 해결하려는 문제와 사용자의 불편을 정리한다.",
      required: true,
    },
    {
      title: "목표",
      description: "이번 구현을 통해 달성하려는 결과를 명확히 작성한다.",
      required: true,
    },
    {
      title: "범위",
      description: "이번 작업에 포함되는 범위를 정리한다.",
      required: true,
    },
    {
      title: "주요 기능",
      description: "구현해야 할 핵심 기능을 목록화한다.",
      required: true,
    },
    {
      title: "사용자 플로우",
      description: "사용자가 기능을 사용하는 순서를 정리한다.",
      required: false,
    },
    {
      title: "예외 케이스",
      description: "실패 상황, 빈 상태, 권한 문제 등 예외 흐름을 정리한다.",
      required: true,
    },
    {
      title: "제외 범위",
      description: "이번 MVP 또는 작업에서 다루지 않는 항목을 명확히 작성한다.",
      required: true,
    },
    {
      title: "오픈 이슈",
      description: "아직 결정되지 않은 사항이나 추가 논의가 필요한 내용을 정리한다.",
      required: false,
    },
  ],
  writingGuidelines: [
    "모호한 표현보다 구현 가능한 기준으로 작성한다.",
    "포함 범위와 제외 범위를 반드시 분리한다.",
    "예외 케이스와 빈 상태를 누락하지 않는다.",
    "기획자, 개발자, 디자이너가 같은 기준으로 이해할 수 있게 작성한다.",
  ],
  qualityCriteria: [
    "문제 정의와 목표가 명확한가?",
    "기능 범위와 제외 범위가 분리되어 있는가?",
    "주요 기능과 예외 케이스가 충분히 정리되었는가?",
    "개발 착수 기준으로 사용할 수 있을 만큼 구체적인가?",
  ],
};
