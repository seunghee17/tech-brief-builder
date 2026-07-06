import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(error);

  res.status(500).json({
    message: "서버 내부 오류가 발생했습니다."
  });
}
