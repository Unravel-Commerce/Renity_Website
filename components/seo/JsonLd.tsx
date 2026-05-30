import { type ReactElement } from "react";

type JsonLdData = Record<string, unknown>;

interface JsonLdProps {
  data: JsonLdData | JsonLdData[];
}

// Renders one or more JSON-LD blocks. Server component (no client JS).
export default function JsonLd({ data }: JsonLdProps): ReactElement {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe to inject as structured data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
