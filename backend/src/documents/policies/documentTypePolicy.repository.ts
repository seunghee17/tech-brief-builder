import type { DocumentType, DocumentTypePolicy } from "../document.types.js";
import { guidePolicy } from "./guide.policy.js";
import { meetingNotesPolicy } from "./meetingNotes.policy.js";
import { projectSpecPolicy } from "./projectSpec.policy.js";
import { techResearchPolicy } from "./techResearch.policy.js";

const policyMap: Record<DocumentType, DocumentTypePolicy> = {
    TECH_RESEARCH: techResearchPolicy,
    GUIDE: guidePolicy,
    PROJECT_SPEC: projectSpecPolicy,
    MEETING_NOTES: meetingNotesPolicy
};

export class DocumentTypePolicyRepository {
    findByType(documentType: DocumentType): DocumentTypePolicy {
        return policyMap[documentType];
    }
}
