"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

type Ratio = "4:3" | "1:1" | "16:9";

const RATIO_PADDING: Record<Ratio, string> = {
  "4:3": "75%",
  "1:1": "100%",
  "16:9": "56.25%",
};

const MAX_RETRIES = 1;

export function ImageSlot({
  src,
  alt,
  ratio,
  label,
  priority,
}: {
  src: string | null;
  alt: string;
  ratio: Ratio;
  label?: string;
  priority?: boolean;
}) {
  const [retries, setRetries] = useState(0);
  const [failed, setFailed] = useState(false);

  function handleError() {
    if (retries < MAX_RETRIES) {
      // A cold on-demand image resize can 503 on its first request and
      // succeed moments later once cached — one retry papers over that.
      setTimeout(() => setRetries((n) => n + 1), 600);
    } else {
      setFailed(true);
    }
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-sm border border-gold/20 bg-black/20"
      style={{ paddingTop: RATIO_PADDING[ratio] }}
    >
      {src && !failed ? (
        <Image
          key={retries}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
          onError={handleError}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gold/30">
          <ImageOff size={22} strokeWidth={1.5} />
          {label && (
            <span className="text-[10px] tracking-[2px] uppercase text-center px-4">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
