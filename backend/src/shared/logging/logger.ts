type LogLevel = "info" | "error";

type LogMetadata = Record<string, unknown>;

const writeLog = (
  level: LogLevel,
  event: string,
  metadata: LogMetadata = {},
) => {
  const entry = JSON.stringify({
    timestamp: new Date().toISOString(),
    level,
    event,
    ...metadata,
  });

  if (level === "error") {
    console.error(entry);
    return;
  }

  console.info(entry);
};

export const serializeError = (error: unknown) => {
  if (!(error instanceof Error)) {
    return { message: String(error) };
  }

  const errorWithStatus = error as Error & {
    status?: number;
    statusCode?: number;
    code?: string;
  };

  return {
    name: error.name,
    message: error.message,
    code: errorWithStatus.code,
    status: errorWithStatus.status ?? errorWithStatus.statusCode,
    stack: error.stack,
  };
};

export const logger = {
  info: (event: string, metadata?: LogMetadata) =>
    writeLog("info", event, metadata),
  error: (event: string, metadata?: LogMetadata) =>
    writeLog("error", event, metadata),
};
