import type { ReferenceDocument } from "../document.types.js";

export const guideExamples: ReferenceDocument[] = [
  {
    id: "guide-cloud-run-deploy",
    documentType: "GUIDE",
    title: "Cloud Run 백엔드 배포 가이드",
    description: "Docker 기반 Express 백엔드 배포 절차 예시 문서",
    content: `# Cloud Run 백엔드 배포 가이드

## 목적

Express 백엔드를 Docker 이미지로 빌드하고 Google Cloud Run에 배포한다.

## 사전 조건

- Google Cloud 프로젝트가 생성되어 있어야 한다.
- gcloud CLI가 설치되어 있어야 한다.
- Dockerfile이 준비되어 있어야 한다.

## 단계별 가이드

1. 백엔드 프로젝트를 빌드한다.
2. Docker 이미지를 생성한다.
3. 이미지를 Artifact Registry에 업로드한다.
4. Cloud Run 서비스를 생성한다.
5. 환경변수를 설정한다.

## 주의사항

OPENAI_API_KEY는 코드에 직접 작성하지 않고 Cloud Run 환경변수로 관리한다.
`,
  },
];