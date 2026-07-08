import { DocumentForm } from '../features/documents/components/DocumentForm'
import type { GenerateDocumentRequest } from '../features/documents/types/document.types'
import { useFileMaterials } from '../features/documents/hooks/useFileMaterials'
import { UploadedFileList } from "../features/documents/components/UploadedFileList";
import { FileDropZone } from '../features/documents/components/FileDropzone';

export const CreateDocumentPage = () => {
   const { materials, error, addFiles, removeMaterial, clearMaterials } =
    useFileMaterials();

  const handleSubmit = (request: GenerateDocumentRequest) => {
    console.log("문서 생성 요청:", request);
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
          <button type="button" onClick={clearMaterials}>
            전체 삭제
          </button>
        )}
      </section>

      <section>
        <h2>3. 문서 옵션 선택</h2>
        <DocumentForm materials={materials} onSubmit={handleSubmit} />
      </section>
    </main>
  );
};