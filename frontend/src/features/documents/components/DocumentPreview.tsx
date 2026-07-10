// markdown 문자열을 실제 문서처럼 렌더링하기 위함 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { MarkdownOutput } from "../types/document.types";

interface DocumentPreviewProps {
    document: MarkdownOutput;
}

export const DocumentPreview = ({document}: DocumentPreviewProps) => {
    return(
        <section
        style={{
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 12,
            backgroundColor: "#fff",
        }}
        >

            <h2>Markdown Preview</h2>

            <article
            style={{
                lineHeight:1.7
            }}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {document.content}
                </ReactMarkdown>
            </article>

        </section>
    )
};