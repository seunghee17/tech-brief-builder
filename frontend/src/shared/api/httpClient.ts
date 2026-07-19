const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

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
  const url = `${API_BASE_URL}${path}`;

  console.info("[http] request", { method, url });

  let response: Response;

  try {
    response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (error) {
    console.error("[http] network error", { method, url, error });
    throw error;
  }

  console.info("[http] response", {
    method,
    url,
    status: response.status,
    requestId: response.headers.get("X-Request-Id"),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);

    throw new Error(
      errorBody?.message ?? `API 요청에 실패했습니다. status: ${response.status}`
    );
  }

  return response.json() as Promise<TResponse>;
};
