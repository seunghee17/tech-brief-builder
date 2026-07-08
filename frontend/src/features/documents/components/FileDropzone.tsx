import { useDropzone } from "react-dropzone";


interface FileDropzoneProps {
    onDropFiles: (files: File[]) => void;
}

export const FileDropZone = ({onDropFiles}: FileDropzoneProps) => {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        multiple: true,
        accept: {
            "text/plain": [".txt"],
            "text/markdown": [".md"]
        },
        onDrop: (acceptedFiles) => {
            onDropFiles(acceptedFiles);
        }
    });

    return (
        <section
        {...getRootProps()}
        style={{
            border: "2px dashed #999",
            borderRadius: 12,
            padding: 32,
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: isDragActive ? "#f5f5f5" : "transparent",
        }}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>파일을 여기에 놓아주세요.</p>
            ) : (
                <div>
                    <p>문서 재료 파일을 드래그앤드롭하세요.</p>
                    <p>현재는 .txt, .md 파일을 지원합니다.</p> 
                </div>
            )
        }
        </section>
    )
}