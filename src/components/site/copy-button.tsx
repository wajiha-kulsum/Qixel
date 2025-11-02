"use client";

import { useState } from "react";

export function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const text = getText();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={onCopy}
      className="px-3 py-1 bg-blue-600 text-white text-sm rounded"
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}


