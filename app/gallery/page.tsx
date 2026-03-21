"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";

const galleryImages = [
  { src: "/galleryC/chevybelair.jpeg", alt: "Exterior Detailing on Classic Chevrolet" },
  { src: "/galleryC/benzwheel.jpeg", alt: "Mercedes Wheel and Tire Detailing" },
  { src: "/galleryC/Blackbmw.jpeg", alt: "BMW Mobile Detailing Glendale, CA" },
  { src: "/galleryC/RedHellcat.jpeg", alt: "Dodge Hellcat Exterior Mobile Detailing" },
  { src: "/galleryC/BenzDriverSide.jpeg", alt: "Mercedes Benz Interior Detailing Transformation" },
  { src: "/galleryC/RedBike.jpeg", alt: "Dirt Bike Mobile Detailing" },
  { src: "/galleryC/Cyan65Mustang.jpg", alt: "Classic 1965 Mustang Detailing" },
  { src: "/galleryC/HemiEngineBay.jpeg", alt: "Hemi Engine Bay Detailing" },
  { src: "/galleryC/BlueMatteBenz.jpeg", alt: "Matte Blue Mercedes Detailing" },
  { src: "/galleryC/InteriorBeforeAndAfter.jpeg", alt: "Interior Before and After" },
  { src: "/galleryC/GrayMustang.jpeg", alt: "Gray Mustang Detailing" },
  { src: "/galleryC/WhiteLexus.jpeg", alt: "White Lexus Detailing" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              className="break-inside-avoid mb-5 overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto block transition-transform duration-400 group-hover:scale-105"
              />
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
