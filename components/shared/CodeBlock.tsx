"use client";

import { useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  // Revert the "Copied" label after 2 seconds; the cleanup clears the timer on unmount.
  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable (insecure context or denied permission); fail silently.
      setCopied(false);
    }
  };

  return (
    <div className="flex items-start gap-2 rounded-xl border border-border bg-muted p-3">
      <pre className="min-w-0 flex-1 overflow-x-auto py-1.5 text-[13px]">
        <code className="font-mono">{code}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Command copied to clipboard" : "Copy command to clipboard"}
        className="shrink-0 rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium transition-colors hover:bg-muted"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </div>
  );
};
