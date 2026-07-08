import { useForm } from "react-hook-form";
import type {
  DocumentType,
  GenerateDocumentFormValues,
  GenerateDocumentRequest,
  TargetReader,
  Tone,
  UploadedMaterial,
} from "../types/document.types";

interface DocumentFormProps {
  materials: UploadedMaterial[];
  onSubmit: (request: GenerateDocumentRequest) => void;
}

const documentTypes: { label: string; value: DocumentType }[] = [
  { label: "기술 리서치 문서", value: "TECH_RESEARCH" },
  { label: "개발 가이드 문서", value: "GUIDE" },
  { label: "프로젝트 사양 문서", value: "PROJECT_SPEC" },
  { label: "회의록 정리", value: "MEETING_NOTES" },
];

const targetReaders: { label: string; value: TargetReader }[] = [
  { label: "개발자", value: "DEVELOPER" },
  { label: "PM", value: "PM" },
  { label: "디자이너", value: "DESIGNER" },
  { label: "팀 리드", value: "TEAM_LEAD" },
];

const tones: { label: string; value: Tone }[] = [
  { label: "격식 있게", value: "FORMAL" },
  { label: "캐주얼하게", value: "CASUAL" },
  { label: "실무적으로", value: "PRACTICAL" },
  { label: "분석적으로", value: "ANALYTICAL" },
];

export const DocumentForm = ({ materials, onSubmit }: DocumentFormProps) => {
  const { register, handleSubmit } = useForm<GenerateDocumentFormValues>({
    defaultValues: {
      documentType: "TECH_RESEARCH",
      targetReader: "DEVELOPER",
      tone: "PRACTICAL",
    },
  });

  const submit = (values: GenerateDocumentFormValues) => {
    const rawNote = materials
      .map((material) => `# ${material.fileName}\n\n${material.content}`)
      .join("\n\n---\n\n");

    onSubmit({
      rawNote,
      references: [],
      documentType: values.documentType,
      targetReader: values.targetReader,
      tone: values.tone,
    });
  };

  const isDisabled = materials.length === 0;

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="documentType">문서 타입</label>
        <br />
        <select id="documentType" {...register("documentType")}>
          {documentTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="targetReader">대상 독자</label>
        <br />
        <select id="targetReader" {...register("targetReader")}>
          {targetReaders.map((reader) => (
            <option key={reader.value} value={reader.value}>
              {reader.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tone">톤앤매너</label>
        <br />
        <select id="tone" {...register("tone")}>
          {tones.map((tone) => (
            <option key={tone.value} value={tone.value}>
              {tone.label}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={isDisabled}>
        문서 생성하기
      </button>

      {isDisabled && <p>문서 생성을 위해 최소 1개 이상의 파일을 추가해주세요.</p>}
    </form>
  );
};