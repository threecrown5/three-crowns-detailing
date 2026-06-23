"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

const galleryImages = [
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
  { src: "/galleryC/InteriorBeforeAndAfter.jpeg", width: 1080, height: 872, alt: "Car interior before and after full detail transformation mobile detailing Glendale CA", caption: "Prince Package — Full interior detail. Glendale, CA.", beforeAfter: true },
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

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <PageHeader
        label="GALLERY"
        heading="View Our Work"
        subtitle="A look at the precision and care behind every detail."
      />
      <section className="pb-[120px] px-6 md:px-20 w-full min-w-0">

        <div className="columns-2 lg:columns-3 2xl:columns-4 gap-5">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="break-inside-avoid mb-5 overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto block transition-transform duration-400 group-hover:scale-105"
              />
              {image.beforeAfter && (
                <>
                  <span className="absolute top-2 left-2 text-white text-[10px] font-bold tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
                    BEFORE
                  </span>
                  <span className="absolute top-2 right-2 text-white text-[10px] font-bold tracking-widest uppercase bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
                    AFTER
                  </span>
                </>
              )}
              <p className="text-[11px] text-white/50 px-2 pt-2 pb-2 leading-snug">
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
