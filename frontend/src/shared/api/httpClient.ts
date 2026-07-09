const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

type HttpMethod = "POST";

interface RequestOptions<TBody = unknown> {
  body?: TBody;
}

const request = async <TResponse, TBody = unknown>(
  path: string,
  method: HttpMethod,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP request failed with status ${response.status}`);
  }

  return response.json() as Promise<TResponse>;
};

export const httpClient = {
  post: <TResponse, TBody = unknown>(path: string, body: TBody) =>
    request<TResponse, TBody>(path, "POST", {
      body,
    }),
};
