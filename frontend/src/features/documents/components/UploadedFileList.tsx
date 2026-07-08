import type { UploadedMaterial } from "../types/document.types";

interface UploadedFileListProps {
    materials: UploadedMaterial[];
    onRemove: (id: string) => void;
}

const formatFileSize = (size:number) => {
    if(size < 1024) {
        return '${size} B';
    }

    if(size<1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / 1024 / 1024).toFixed(1)} MB`;
};

export const UploadedFileList = ({
    materials,
    onRemove
}: UploadedFileListProps) => {
    if(materials.length == 0) {
        return <p>아직 추가된 파일이 없습니다.</p>;
    }

    return (
        <ul>
            {materials.map((material) => (
                <li key={material.id}>
                    <strong>{material.fileName}</strong>{" "}
                    <span>({formatFileSize(material.fileSize)})</span>{" "}
                    <button type="button" onClick={() => onRemove(material.id)}>
                        삭제
                    </button>
                </li>
            ))}
        </ul>
    );
};