import type { DocumentTypePolicy } from "../document.types.js";

export const guidePolicy: DocumentTypePolicy = {
  documentType: "GUIDE",
  name: "개발 가이드 문서",
  purpose:
    "팀원이 특정 작업을 따라 할 수 있도록 절차, 사전 조건, 주의사항을 단계적으로 안내한다.",
  toneGuide: "친절하고 실무적인 톤. 독자가 바로 따라 할 수 있도록 명확한 지시형 표현을 사용한다.",
  targetUseCase:
    "개발 환경 설정, 배포 절차, 라이브러리 사용법, 코드 작성 규칙, 운영 대응 절차",
  sections: [
    {
      title: "목적",
      description: "이 가이드가 어떤 작업을 돕기 위한 것인지 설명한다.",
      required: true,
    },
    {
      title: "대상 독자",
      description: "이 문서를 읽고 따라 할 사람의 역할과 전제 수준을 설명한다.",
      required: false,
    },
    {
      title: "사전 조건",
      description: "작업 전 준비해야 할 도구, 권한, 환경, 파일을 정리한다.",
      required: true,
    },
    {
      title: "전체 절차",
      description: "작업 흐름을 큰 단계로 먼저 요약한다.",
      required: false,
    },
    {
      title: "단계별 가이드",
      description: "사용자가 순서대로 따라 할 수 있도록 절차를 상세히 작성한다.",
      required: true,
    },
    {
      title: "주의사항",
      description: "자주 실수하는 부분, 위험한 작업, 확인해야 할 조건을 정리한다.",
      required: true,
    },
    {
      title: "문제 해결",
      description: "자주 발생하는 오류와 해결 방법을 정리한다.",
      required: false,
    },
    {
      title: "참고 자료",
      description: "추가로 확인할 문서나 링크를 정리한다.",
      required: false,
    },
  ],
  writingGuidelines: [
    "독자가 그대로 따라 할 수 있도록 단계별로 작성한다.",
    "명령어, 파일 경로, 설정값은 가능한 한 구체적으로 작성한다.",
    "주의사항과 실패 가능성을 별도로 분리한다.",
    "배경 설명보다 실행 절차를 우선한다.",
  ],
  qualityCriteria: [
    "사전 조건이 충분히 명확한가?",
    "단계별 절차가 순서대로 작성되었는가?",
    "실수하기 쉬운 부분과 주의사항이 포함되었는가?",
    "독자가 문서만 보고 작업을 재현할 수 있는가?",
  ],
};