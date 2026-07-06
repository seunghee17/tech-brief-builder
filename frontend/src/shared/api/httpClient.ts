const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

type RequestOptions = {
  body?: unknown
  headers?: HeadersInit
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

async function request<TResponse>(
  path: string,
  { body, headers, method = 'GET' }: RequestOptions = {},
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `HTTP ${response.status}`)
  }

  return response.json() as Promise<TResponse>
}

export const httpClient = {
  get<TResponse>(path: string) {
    return request<TResponse>(path)
  },
  post<TResponse>(path: string, body: unknown) {
    return request<TResponse>(path, { body, method: 'POST' })
  },
}
