import type { DocumentTypePolicy } from "../document.types.js";

export const techResearchPolicy: DocumentTypePolicy = {
  documentType: "TECH_RESEARCH",
  name: "기술 리서치 문서",
  purpose:
    "특정 기술, 라이브러리, 아키텍처, 도입 방안을 조사하고 팀이 의사결정할 수 있도록 근거를 정리한다.",
  toneGuide:
    "분석적이고 객관적인 톤. 장점만 나열하지 않고 단점과 리스크를 함께 제시한다.",
  targetUseCase:
    "새로운 기술 도입 검토, 라이브러리 비교, 아키텍처 방향성 조사, 성능 개선안 검토",
    sections: [
    {
      title: "배경",
      description: "조사가 필요해진 맥락과 현재 상황을 설명한다.",
      required: true,
    },
    {
      title: "문제 정의",
      description: "해결하려는 문제 또는 의사결정이 필요한 지점을 명확히 정리한다.",
      required: true,
    },
    {
      title: "조사 내용",
      description: "검토한 기술, 자료, 실험 결과, 핵심 내용을 정리한다.",
      required: true,
    },
    {
      title: "대안 비교",
      description: "가능한 선택지를 기준에 따라 비교한다.",
      required: false,
    },
    {
      title: "장점",
      description: "도입 또는 선택 시 기대할 수 있는 이점을 정리한다.",
      required: true,
    },
    {
      title: "단점 및 리스크",
      description: "한계, 비용, 유지보수 리스크, 도입 시 주의점을 정리한다.",
      required: true,
    },
    {
      title: "결론",
      description: "조사 내용을 기반으로 현재 권장되는 판단을 정리한다.",
      required: true,
    },
    {
      title: "다음 액션",
      description: "후속 실험, PoC, 공유, 의사결정에 필요한 작업을 정리한다.",
      required: false,
    },
  ],

  writingGuidelines: [
    "기술의 장점만 강조하지 말고 단점과 리스크를 함께 작성한다.",
    "팀이 의사결정할 수 있도록 판단 기준을 명확히 드러낸다.",
    "불확실한 내용은 단정하지 않고 추가 검토 필요 항목으로 분리한다.",
  ],
  qualityCriteria: [
    "조사 배경과 문제 정의가 명확한가?",
    "대안 또는 선택지의 비교 기준이 드러나는가?",
    "장점, 단점, 리스크가 균형 있게 정리되었는가?",
    "결론과 다음 액션이 실행 가능하게 작성되었는가?",
  ],
};
