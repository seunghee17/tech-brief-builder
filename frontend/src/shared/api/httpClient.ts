const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

interface HttpClientOptions<TBody> {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: TBody;
  headers?: HeadersInit;
}

export const httpClient = async <TResponse, TBody = unknown>(
  path: string,
  options: HttpClientOptions<TBody> = {}
): Promise<TResponse> => {
  const { method = "GET", body, headers } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);

    throw new Error(
      errorBody?.message ?? `API 요청에 실패했습니다. status: ${response.status}`
    );
  }

  return response.json() as Promise<TResponse>;
};
