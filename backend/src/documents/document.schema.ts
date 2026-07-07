import { z } from "zod";
// 프론트에서 잘못된 값 들어오면 막는 역할
export const generateDocumentRequestSchema = z.object({
  rawNote: z.string().min(1, "rawNote is required"),
  references: z.array(z.string()).optional(),
  documentType: z.enum([
    "TECH_RESEARCH",
    "GUIDE",
    "PROJECT_SPEC",
    "MEETING_NOTES",
  ]),
  targetReader: z.enum(["DEVELOPER", "PM", "DESIGNER", "TEAM_LEAD"]),
  tone: z.enum(["FORMAL", "CASUAL", "PRACTICAL", "ANALYTICAL"]),
});
