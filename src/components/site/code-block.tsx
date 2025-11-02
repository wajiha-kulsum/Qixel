"use client";

import { CopyButton } from "./copy-button";

export function CodeBlock({ code, label = "tsx" }: { code: string; label?: string }) {
  return (
    <div className="relative bg-gray-900 rounded-lg p-4 mt-4">
      <div className="absolute top-2 right-2 flex items-center gap-2">
        <span className="text-gray-300 text-xs px-2 py-0.5 rounded bg-gray-800 border border-gray-700">
          {label}
        </span>
        <CopyButton getText={() => code} />
      </div>
      <pre className="text-gray-100 text-sm overflow-x-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
}