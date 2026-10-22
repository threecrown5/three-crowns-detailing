"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Composite already shows a before/after split. */
  beforeAfter?: boolean;
  /** The composite already has "Before"/"After" pills baked into the image — don't draw our own. */
  badgesBuiltIn?: boolean;
  /** Vehicle/service heading rendered above the image instead of the caption below it. */
  title?: string;
}

// Featured transformations first (before/afters + the new batch), then the
// rest of the standard job photos. Shuffled client-side on load — see
// GalleryPage below — so this order is really just the no-JS/SSR fallback.
const galleryImages: GalleryImage[] = [
  { src: "/galleryC/MercedesHeadlightBeforeAfter.webp", width: 1500, height: 2000, alt: "Foggy Mercedes E-Class headlight restored to clear, before and after", title: "Headlight Restoration — Mercedes E-Class", caption: "Wet-sanded and resealed with 2K UV clear coat.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/TeslaScratchBeforeAfter.webp", width: 2000, height: 1983, alt: "Tesla paint scratch removed and polished to a mirror finish, before and after", title: "Scratch Removal — Tesla", caption: "Light scratches and swirls polished out, finish restored to a mirror gloss.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/CamryHeadlightBeforeAfter.webp", width: 2000, height: 1000, alt: "Foggy Toyota Camry headlight restored to clear, before and after", title: "Headlight Restoration — Toyota Camry", caption: "Wet-sanded and resealed with 2K UV clear coat.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/TacomaHeadlightBeforeAfter.webp", width: 1689, height: 2000, alt: "Foggy Toyota Tacoma headlight restored to clear, before and after", title: "Headlight Restoration — Toyota Tacoma", caption: "Wet-sanded and resealed with 2K UV clear coat.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/GolfShifterBeforeAfter.webp", width: 2000, height: 1000, alt: "Volkswagen Golf shifter console interior detailed, before and after", title: "Interior Detail — Volkswagen Golf", caption: "Console and shifter boot degreased, dressed, and detailed.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/GLAInteriorBeforeAfter.webp", width: 2000, height: 1000, alt: "Mercedes GLA dashboard and steering wheel interior detailed, before and after", title: "Interior Detail — Mercedes GLA", caption: "Dash and console degreased, leather conditioned throughout.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/EngineBayBeforeAfter.webp", width: 2000, height: 1500, alt: "Mercedes-Benz engine bay degreased and detailed, before and after", title: "Engine Bay Detail — Mercedes-Benz", caption: "Degreased and hand-detailed, sensitive components protected throughout.", beforeAfter: true, badgesBuiltIn: true },
  { src: "/galleryC/InteriorBeforeAndAfter.jpeg", width: 1080, height: 872, alt: "Car interior before and after full detail transformation mobile detailing Glendale CA", caption: "Prince Package — Full interior detail. Glendale, CA.", beforeAfter: true },
  { src: "/galleryC/TeslaModelX.jpg", width: 4080, height: 2296, alt: "White Tesla Model X exterior mobile detailing Glendale CA", caption: "Crown Refresh — Full exterior hand wash + sealant top-up. Tesla Model X. Glendale, CA." },
  { src: "/galleryC/BMWX6.jpg", width: 3264, height: 1836, alt: "Black BMW X6 exterior mobile detailing Glendale CA", caption: "King Package — Full exterior detail, clay bar + ceramic sealant. BMW X6. Glendale, CA." },
  { src: "/galleryC/EClassCoupeInterior.jpg", width: 1125, height: 2000, alt: "Mercedes E-Class Coupe interior detail Glendale CA", caption: "Prince Package — Full interior detail. Mercedes E-Class Coupe. Glendale, CA." },
  { src: "/galleryC/WhiteM32.jpg", width: 1920, height: 2560, alt: "White BMW M3 mobile detailing paint decontamination sealant Glendale CA", caption: "Prince Package — Full exterior wash, paint decontamination + sealant. Glendale, CA." },
  { src: "/galleryC/chevybelair.jpeg", width: 1920, height: 1080, alt: "Classic Chevy Bel Air exterior mobile detailing hand wash wax Pasadena CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Pasadena, CA." },
  { src: "/galleryC/benzwheel.jpeg", width: 1920, height: 2560, alt: "Mercedes wheel and tire mobile detailing monthly maintenance Glendale CA", caption: "Crown Refresh — Monthly maintenance, wheel + tire cleaning. Glendale, CA." },
  { src: "/galleryC/GraySRT2.jpg", width: 1920, height: 2560, alt: "Gray Dodge Challenger SRT exterior interior mobile detailing Burbank CA", caption: "Prince Package — Full exterior + interior detail. Burbank, CA." },
  { src: "/galleryC/WhiteM3wheel.jpg", width: 1920, height: 2560, alt: "BMW M3 wheel decontamination tire dressing mobile detailing Glendale CA", caption: "Crown Refresh — Wheel decontamination + tire dressing. Glendale, CA." },
  { src: "/galleryC/Blackbmw.jpeg", width: 1920, height: 2560, alt: "Black BMW exterior wash wax interior mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash, wax, interior wipe-down. Glendale, CA." },
  { src: "/galleryC/RedHellcat.jpeg", width: 1920, height: 2560, alt: "Red Dodge Hellcat clay bar iron remover ceramic sealant mobile detailing Burbank CA", caption: "King Package — Clay bar decontamination, iron remover + ceramic sealant. Burbank, CA." },
  { src: "/galleryC/BenzDriverSide.jpeg", width: 1920, height: 2560, alt: "Mercedes Benz interior detail leather conditioning door panels mobile detailing Glendale CA", caption: "Prince Package — Full interior detail, leather wipe-down + door panels. Glendale, CA." },
  { src: "/galleryC/RedBike.jpeg", width: 1920, height: 1080, alt: "Dirt bike exterior mobile detailing hand wash wax Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Glendale, CA." },
  { src: "/galleryC/Cyan65Mustang.jpg", width: 720, height: 1280, alt: "1965 Ford Mustang classic car mobile detailing hand wash wax tire dressing Pasadena CA", caption: "Prince Package — Full exterior hand wash, wax, tire dressing. Pasadena, CA." },
  { src: "/galleryC/GraySRTRwheel.jpg", width: 1920, height: 2560, alt: "Dodge Challenger SRT wheel tire refresh mobile detailing Burbank CA", caption: "Crown Refresh — Monthly maintenance, wheel + tire refresh. Burbank, CA." },
  { src: "/galleryC/WhiteM33.jpg", width: 1920, height: 2560, alt: "White BMW M3 paint decontamination sealant mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail, paint decontamination + sealant. Glendale, CA." },
  { src: "/galleryC/HemiEngineBay.jpeg", width: 1920, height: 1080, alt: "Hemi engine bay detail exterior wash wax mobile detailing Burbank CA", caption: "Prince Package — Engine bay detail + full exterior wash and wax. Burbank, CA." },
  { src: "/galleryC/BlueMatteBenz.jpeg", width: 1920, height: 2560, alt: "Matte blue Mercedes Benz clay bar ceramic sealant mobile detailing Glendale CA", caption: "King Package — Matte-safe hand wash, clay bar + ceramic sealant. Glendale, CA." },
  { src: "/galleryC/GrayMustang.jpeg", width: 1440, height: 2560, alt: "Gray Ford Mustang exterior interior mobile detailing Glendale CA", caption: "Prince Package — Full exterior + interior detail. Glendale, CA." },
  { src: "/galleryC/WhiteLexus.jpeg", width: 1920, height: 2560, alt: "White Lexus exterior hand wash sealant mobile detailing Pasadena CA", caption: "Crown Refresh — Monthly maintenance, exterior hand wash + sealant top-up. Pasadena, CA." },
  { src: "/galleryC/WhiteGMC3.jpg", width: 1920, height: 2560, alt: "White GMC truck exterior wash wax wheel detail mobile detailing Burbank CA", caption: "Prince Package — Full exterior wash, wax, tire and wheel detail. Burbank, CA." },
  { src: "/galleryC/GraySRTFwheel.jpg", width: 1920, height: 2560, alt: "Dodge Charger wheel cleaning tire dressing mobile detailing Glendale CA", caption: "Crown Refresh — Monthly maintenance, wheel cleaning + tire dressing. Glendale, CA." },
  { src: "/galleryC/GraySienna.jpeg", width: 1440, height: 2560, alt: "Gray Toyota Sienna full exterior refresh mobile detailing Glendale CA", caption: "Crown Refresh — Monthly maintenance, full exterior refresh. Glendale, CA." },
  { src: "/galleryC/GraySRT3.jpg", width: 1920, height: 2560, alt: "Gray Dodge Challenger SRT exterior interior detail tire dressing Glendale CA", caption: "Prince Package — Full exterior + interior detail, tire dressing. Glendale, CA." },
  { src: "/galleryC/GraySRT1.jpg", width: 1920, height: 2560, alt: "Gray Dodge SRT exterior hand wash wax mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Glendale, CA." },
  { src: "/galleryC/WhiteM3.jpg", width: 1920, height: 2560, alt: "White BMW M3 paint decontamination sealant mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash, paint decontamination + sealant. Glendale, CA." },
  { src: "/galleryC/WhiteGMC.jpg", width: 1920, height: 2560, alt: "White GMC truck exterior hand wash wax tire dressing mobile detailing Burbank CA", caption: "Prince Package — Full exterior hand wash, wax + tire dressing. Burbank, CA." },
  { src: "/galleryC/WhiteGMC2.jpg", width: 1920, height: 2560, alt: "White GMC truck exterior wash wax wheel detail mobile detailing Burbank CA", caption: "Prince Package — Full exterior wash, wax + wheel detail. Burbank, CA." },
  { src: "/galleryC/LincolnMKXFrontD.jpg", width: 1080, height: 1920, alt: "Lincoln MKX exterior mobile detailing hand wash wax Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Glendale, CA." },
  { src: "/galleryC/LincolnMKXDriver.jpg", width: 1441, height: 2560, alt: "Lincoln MKX driver side exterior mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail. Lincoln MKX. Glendale, CA." },
  { src: "/galleryC/LincolnMKXRearP.jpg", width: 1080, height: 1920, alt: "Lincoln MKX rear exterior trim cleaning mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail, rear + trim cleaning. Glendale, CA." },
  { src: "/galleryC/SierraFrontC.jpg", width: 1440, height: 2560, alt: "GMC Sierra exterior wash wax tire dressing mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash, wax + tire dressing. Glendale, CA." },
  { src: "/galleryC/SierraFrontP.jpg", width: 1440, height: 2560, alt: "GMC Sierra exterior mobile detailing hand wash wax Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Glendale, CA." },
  { src: "/galleryC/TacomaTRCFrontL.jpg", width: 1080, height: 1920, alt: "Toyota Tacoma TRD exterior hand wash wax tire dressing mobile detailing Pasadena CA", caption: "Prince Package — Full exterior wash, hand wax + tire dressing. Pasadena, CA." },
  { src: "/galleryC/TacomaTRCPassenger.jpg", width: 1441, height: 2560, alt: "Toyota Tacoma TRD passenger side exterior mobile detailing Pasadena CA", caption: "Prince Package — Full exterior detail. Toyota Tacoma TRD. Pasadena, CA." },
  { src: "/galleryC/TacomaTRCPassengerDoor.jpg", width: 1441, height: 2560, alt: "Toyota Tacoma TRD door panel exterior mobile detailing Pasadena CA", caption: "Prince Package — Door panel + exterior detail. Toyota Tacoma TRD. Pasadena, CA." },
  { src: "/galleryC/TacomaTRCRearL.jpg", width: 1080, height: 1920, alt: "Toyota Tacoma TRD rear exterior wash wax mobile detailing Pasadena CA", caption: "Prince Package — Full exterior wash + wax. Toyota Tacoma TRD. Pasadena, CA." },
  { src: "/galleryC/VWGolfFrontC.jpg", width: 1080, height: 1920, alt: "Volkswagen Golf exterior mobile detailing hand wash wax Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Glendale, CA." },
  { src: "/galleryC/VWGolfFrontD.jpg", width: 1080, height: 1920, alt: "Volkswagen Golf exterior wash wax tire dressing mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash, wax + tire dressing. Glendale, CA." },
  { src: "/galleryC/VWGolfDriver.jpg", width: 1440, height: 2560, alt: "Volkswagen Golf driver side exterior mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail. Volkswagen Golf. Glendale, CA." },
  { src: "/galleryC/VWGolfRearD.jpg", width: 1080, height: 1920, alt: "Volkswagen Golf rear exterior wash wax mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash + wax. Volkswagen Golf. Glendale, CA." },
  { src: "/galleryC/VWGolfRearDTire.jpg", width: 1080, height: 1920, alt: "Volkswagen Golf wheel decontamination tire dressing mobile detailing Glendale CA", caption: "Crown Refresh — Wheel decontamination + tire dressing. Volkswagen Golf. Glendale, CA." },
  { src: "/galleryC/CivicFrontC.jpg", width: 1440, height: 2560, alt: "Honda Civic exterior wash hand wax tire dressing mobile detailing Glendale CA", caption: "Prince Package — Full exterior wash, hand wax + tire dressing. Glendale, CA." },
  { src: "/galleryC/CivicFrontD.jpg", width: 1440, height: 2560, alt: "Honda Civic exterior mobile detailing Glendale CA", caption: "Prince Package — Full exterior detail. Honda Civic. Glendale, CA." },
  { src: "/galleryC/CivicDriverTire.jpg", width: 1440, height: 2560, alt: "Honda Civic wheel decontamination tire dressing mobile detailing Glendale CA", caption: "Crown Refresh — Wheel decontamination + tire dressing. Honda Civic. Glendale, CA." },
  { src: "/galleryC/HRVFrontD.jpg", width: 1080, height: 1920, alt: "Honda HR-V exterior mobile detailing hand wash wax Glendale CA", caption: "Prince Package — Full exterior detail, hand wash + wax. Honda HR-V. Glendale, CA." },
  { src: "/galleryC/SiennaWheel.jpeg", width: 1440, height: 2560, alt: "Toyota Sienna wheel tire cleaning mobile detailing Glendale CA", caption: "Crown Refresh — Monthly maintenance, wheel + tire cleaning. Toyota Sienna. Glendale, CA." },
];

function shuffled<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Server-rendered order matches galleryImages exactly (no hydration
  // mismatch); shuffled once on the client after mount so every visitor
  // sees a different mix without affecting the initial page load.
  const [images, setImages] = useState(galleryImages);

  useEffect(() => {
    // Deliberately re-randomizing after mount so SSR output (used for the
    // no-JS/first-paint case) stays deterministic and hydration-safe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImages(shuffled(galleryImages));
  }, []);

  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    if (!selectedImage) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedImage, closeLightbox]);

  return (
    <>
      <section className="pt-[140px] pb-14 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto text-center">
        <p className="text-gold text-xs tracking-[0.28em] font-medium mb-5 uppercase">Gallery</p>
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-4xl md:text-[54px] leading-[1.12] text-[#F2EFE6] mb-5">
          View Our Work
        </h1>
        <p className="text-base md:text-[17px] leading-relaxed text-[#F2EFE6]/60 font-light max-w-[560px] mx-auto">
          A look at the precision and care behind every detail — real jobs, real transformations.
        </p>
      </section>

      <section className="pb-[120px] px-6 md:px-20 w-full min-w-0">
        <div className="columns-2 lg:columns-3 2xl:columns-4 gap-5">
          {images.map((image) => (
            <div
              key={image.src}
              className="break-inside-avoid mb-5 rounded-xl overflow-hidden border border-[#F2EFE6]/10 bg-gradient-to-b from-[#173026] to-[#0e2218] hover:border-gold/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              {image.title && (
                <p className="px-4 pt-4 pb-3 text-[13px] font-semibold text-[#F2EFE6] tracking-wide">
                  {image.title}
                </p>
              )}
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto block transition-transform duration-400 group-hover:scale-105"
                />
                {image.beforeAfter && !image.badgesBuiltIn && (
                  <>
                    <span className="absolute top-2 left-2 text-white text-[10px] font-bold tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
                      BEFORE
                    </span>
                    <span className="absolute top-2 right-2 text-white text-[10px] font-bold tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
                      AFTER
                    </span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-[#F2EFE6]/50 px-4 pt-2.5 pb-3.5 leading-snug">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/95 animate-in fade-in duration-250 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <span
            className="absolute top-10 right-14 text-white text-4xl cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>
          <Image
            src={selectedImage}
            alt="Gallery detail"
            width={1200}
            height={800}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg animate-in zoom-in-95 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
