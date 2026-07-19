import type { DocumentType, ReferenceDocument } from "../document.types.js";
import { guideExamples } from "./guide.examples.js";
import { meetingNotesExamples } from "./meetingNotes.examples.js";
import { projectSpecExamples } from "./projectSpec.examples.js";
import { techResearchExamples } from "./techResearch.examples.js";
// 현재는 정적으로 example 반환
const referenceMap: Record<DocumentType, ReferenceDocument[]> = {
  TECH_RESEARCH: techResearchExamples,
  GUIDE: guideExamples,
  PROJECT_SPEC: projectSpecExamples,
  MEETING_NOTES: meetingNotesExamples,
};

export class ReferenceDocumentRepository {
    findByType(documentType: DocumentType): ReferenceDocument[] {
        return referenceMap[documentType]
    }
}
