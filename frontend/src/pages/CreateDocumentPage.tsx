import { useNavigate } from "react-router";
import { DocumentForm } from "../features/documents/components/DocumentForm";
import { FileDropZone } from "../features/documents/components/FileDropzone";
import { UploadedFileList } from "../features/documents/components/UploadedFileList";
import { useFileMaterials } from "../features/documents/hooks/useFileMaterials";
import { useGenerateDocument } from "../features/documents/hooks/useGenerateDocument";
import type { GenerateDocumentRequest } from "../features/documents/types/document.types";

export const CreateDocumentPage = () => {
  const navigate = useNavigate();

  const { materials, error, addFiles, removeMaterial, clearMaterials } =
    useFileMaterials();

  const { generateDocument, isLoading, errorMessage } = useGenerateDocument();

  const handleSubmit = async (request: GenerateDocumentRequest) => {
    const response = await generateDocument(request);

    navigate("/documents/result", {
      state: response,
    });
  };

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
      <h1>새 문서 만들기</h1>

      <p>
        리서치 메모, 회의 내용, 기술 조사 내용을 담은 .txt 또는 .md 파일을
        업로드하세요.
      </p>

      <section>
        <h2>1. 재료 파일 업로드</h2>
        <FileDropZone onDropFiles={addFiles} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>

      <section>
        <h2>2. 업로드한 파일</h2>
        <UploadedFileList materials={materials} onRemove={removeMaterial} />

        {materials.length > 0 && (
          <button type="button" onClick={clearMaterials} disabled={isLoading}>
            전체 삭제
          </button>
        )}
      </section>

      <section>
        <h2>3. 문서 옵션 선택</h2>
        <DocumentForm
          materials={materials}
          onSubmit={handleSubmit}
          isSubmitting={isLoading}
        />

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </section>
    </main>
  );
};
