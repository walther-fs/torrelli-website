"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/behind-the-scenes-01.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-02.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-03.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-04.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-05.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-06.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-07.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-08.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-09.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },
  {
    src: "/images/gallery/behind-the-scenes-10.webp",
    alt: "TORRELLI durante la grabación de un videoclip",
    width: 4000,
    height: 2000,
  },

  // Más imágenes las iremos agregando aquí
];

const IMAGES_PER_PAGE = 6;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE,
  );

  return (
    <section id="gallery" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            Behind the scenes
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Detrás de cámaras
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-silver">
            Momentos detrás de los videoclips y proyectos de TORRELLI.
          </p>
        </div>
        <div className="grid auto-rows-[120px] grid-cols-4 gap-2 md:auto-rows-[140px]">
          {currentImages.map((image, index) => {
            const layoutClasses = [
              "col-span-2 row-span-2",
              "col-span-2 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
            ];

            return (
              <div
                key={image.src}
                className={`group relative overflow-hidden ${layoutClasses[index]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="text-sm font-semibold text-silver transition-colors hover:text-red disabled:cursor-not-allowed disabled:opacity-30"
            >
              ← Anterior
            </button>

            <span className="text-sm text-silver">
              {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="text-sm font-semibold text-silver transition-colors hover:text-red disabled:cursor-not-allowed disabled:opacity-30"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
