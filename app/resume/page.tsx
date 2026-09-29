"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-bg px-3 pb-3 pt-24 sm:px-5 sm:pb-5 sm:pt-24">
      <div className="mx-auto flex min-h-[calc(100dvh-6rem)] max-w-6xl flex-col gap-3 sm:gap-4">

        {/* Back */}
        <div className="relative z-[60] flex items-center">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        {/* Resume */}
        <div className="min-h-0 flex-1 overflow-hidden bg-surface">
          <iframe
            src="/resume.pdf"
            title="Parth Bhuptani Resume"
            className="block h-[calc(100dvh-130px)] min-h-[70vh] w-full"
          />
        </div>
      </div>
    </main>
  );
}