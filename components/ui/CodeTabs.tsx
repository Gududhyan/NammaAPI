"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { CodeSamples } from "@/lib/data/apiEndpoints";

const languages: { key: keyof CodeSamples; label: string }[] = [
  { key: "curl", label: "cURL" },
  { key: "csharp", label: "C#" },
  { key: "javascript", label: "JavaScript" },
  { key: "python", label: "Python" },
];

export function CodeTabs({ samples, className }: { samples: CodeSamples; className?: string }) {
  const [active, setActive] = useState<keyof CodeSamples>("curl");

  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/10 bg-brand-navy", className)}>
      <div role="tablist" aria-label="Code language" className="flex overflow-x-auto border-b border-white/10">
        {languages.map((lang) => (
          <button
            key={lang.key}
            role="tab"
            type="button"
            aria-selected={active === lang.key}
            onClick={() => setActive(lang.key)}
            className={cn(
              "shrink-0 px-4 py-2.5 font-mono text-xs font-medium transition-colors",
              active === lang.key
                ? "border-b-2 border-brand-primary text-white"
                : "border-b-2 border-transparent text-white/45 hover:text-white/75",
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-white/90">{samples[active]}</code>
      </pre>
    </div>
  );
}
