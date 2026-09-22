import Image from "next/image";
import { ImageOff } from "lucide-react";

type Ratio = "4:3" | "1:1" | "16:9";

const RATIO_PADDING: Record<Ratio, string> = {
  "4:3": "75%",
  "1:1": "100%",
  "16:9": "56.25%",
};

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
  return (
    <div
      className="relative w-full overflow-hidden rounded-sm border border-gold/20 bg-black/20"
      style={{ paddingTop: RATIO_PADDING[ratio] }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
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
