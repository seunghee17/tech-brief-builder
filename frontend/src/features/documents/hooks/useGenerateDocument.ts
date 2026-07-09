import { useState } from "react";
import { documentApi } from "../api/documentApi";
import type {
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from "../types/document.types";

type GenerateDocumentStatus = "idle" | "loading" | "success" | "error";

export const useGenerateDocument = () => {
  const [status, setStatus] = useState<GenerateDocumentStatus>("idle");
  const [data, setData] = useState<GenerateDocumentResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const generateDocument = async (request: GenerateDocumentRequest) => {
    try {
      setStatus("loading");
      setErrorMessage(null);

      const response = await documentApi.generateDocument(request);

      setData(response);
      setStatus("success");

      return response;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "문서 생성 중 알 수 없는 오류가 발생했습니다.";

      setErrorMessage(message);
      setStatus("error");

      throw error;
    }
  };

  const reset = () => {
    setStatus("idle");
    setData(null);
    setErrorMessage(null);
  };

  return {
    status,
    data,
    errorMessage,
    isIdle: status === "idle",
    isLoading: status === "loading",
    isSuccess: status === "success",
    isError: status === "error",
    generateDocument,
    reset,
  };
};