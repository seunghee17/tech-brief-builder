// 1. 파일 추가 
// 2. .txt/.md 아닌 파일 거절
// 3. 파일 내용 읽어서 Magerials 저장
// 4. 파일 삭제

import { useState } from "react";
import type { UploadedMaterial } from "../types/document.types";
import { readTextFile } from "../../../shared/utils/readTextFile";

const ACCEPTED_EXTENSIONS = [".txt", ".md"];

const isAcceptedTextFile = (file: File) => {
    const lowerName = file.name.toLowerCase();

    return ACCEPTED_EXTENSIONS.some((extension) =>
        lowerName.endsWith(extension)
    );
};

export const useFileMaterials = () => {
    const [materials, setMaterials] = useState<UploadedMaterial[]>([]);
    const [error, setError] = useState<string | null>(null);

    const addFiles = async (files: File[]) => {
        setError(null);

        const acceptedFiles = files.filter(isAcceptedTextFile);
        const rejectedFiles = files.filter((file) => !isAcceptedTextFile(file));

        if (rejectedFiles.length > 0) {
            setError("초기 Mvp에서는 .txt, .md 파일만 지원한다");
        }

        // 여러 파일 동시에 읽는다 모든 파일 읽기가 끝난뒤 Materials에 추가한다
        const newMaterials = await Promise.all(
            acceptedFiles.map(async (file) => {
                const content = await readTextFile(file);

                return {
                    id: crypto.randomUUID(),
                    fileName: file.name,
                    fileSize: file.size,
                    fileType: file.type || "text/plain",
                    content
                };
            })
        );

        setMaterials((prev) => [...prev, ...newMaterials]);
    };

    const removeMaterial = (id: string) => {
        setMaterials((prev) => prev.filter((material) => material.id !== id));
    };

    const clearMaterials = () => {
        setMaterials([]);
        setError(null);
    };

    return {
        materials,
        error,
        addFiles,
        removeMaterial,
        clearMaterials
    };
};
