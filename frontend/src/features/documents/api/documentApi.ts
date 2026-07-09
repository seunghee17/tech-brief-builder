import { httpClient } from "../../../shared/api/httpClient";

import type {
  GenerateDocumentRequest,
  GenerateDocumentResponse,
} from "../types/document.types";

export const documentApi = {
  generateDocument: (request: GenerateDocumentRequest) => {
    return httpClient<GenerateDocumentResponse, GenerateDocumentRequest>(
      "/api/documents/generate",
      {
        method: "POST",
        body: request
      }
    );
  },
};
