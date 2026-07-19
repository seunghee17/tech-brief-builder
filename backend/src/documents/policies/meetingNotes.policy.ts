import type { DocumentTypePolicy } from "../document.types.js";

export const meetingNotesPolicy: DocumentTypePolicy = {
  documentType: "MEETING_NOTES",
  name: "회의록 정리",
  purpose:
    "회의 내용을 사실 중심으로 정리하고, 결정 사항과 액션 아이템을 명확히 남긴다.",
  toneGuide: "간결하고 사실 중심적인 톤. 대화체를 줄이고 결정 사항과 실행 항목을 우선한다.",
  targetUseCase:
    "기획 회의, 기술 검토 회의, 회고, 의사결정 회의, 작업 분배 회의",
  sections: [
    {
      title: "회의 개요",
      description: "회의 목적, 참석자, 일시 등 기본 정보를 정리한다.",
      required: false,
    },
    {
      title: "논의 주제",
      description: "회의에서 다룬 주요 주제를 목록화한다.",
      required: true,
    },
    {
      title: "주요 논의 내용",
      description: "오간 의견과 검토 내용을 주제별로 요약한다.",
      required: true,
    },
    {
      title: "결정 사항",
      description: "회의에서 확정된 내용을 명확히 작성한다.",
      required: true,
    },
    {
      title: "액션 아이템",
      description: "해야 할 일, 담당자, 기한을 정리한다.",
      required: true,
    },
    {
      title: "미해결 이슈",
      description: "아직 결정되지 않았거나 추가 논의가 필요한 내용을 정리한다.",
      required: false,
    },
    {
      title: "다음 확인 사항",
      description: "다음 회의나 후속 작업에서 확인할 내용을 정리한다.",
      required: false,
    },
  ],
  writingGuidelines: [
    "발언을 그대로 옮기기보다 결정 사항과 실행 항목 중심으로 정리한다.",
    "누가 무엇을 언제까지 해야 하는지 명확히 작성한다.",
    "확정된 내용과 미확정 내용을 구분한다.",
    "감정적 표현이나 불필요한 대화체는 제거한다.",
  ],
  qualityCriteria: [
    "결정 사항이 명확하게 정리되었는가?",
    "액션 아이템에 담당자와 기한이 포함되어 있는가?",
    "논의 내용과 미해결 이슈가 구분되어 있는가?",
    "회의 이후 바로 후속 작업을 진행할 수 있는가?",
  ],
};
