"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/images/cocina_sala_1.jpeg", alt: "Sala y cocina" },
  { src: "/images/habitacion_ppal_cama.jpg", alt: "Habitación principal" },
  { src: "/images/habitacion_ppal_1.jpeg", alt: "Habitación principal 2" },
  { src: "/images/habitacion_ppal_2.jpeg", alt: "Habitación principal 3" },
  { src: "/images/vestier.jpeg", alt: "Vestier" },
  { src: "/images/vestier_2.jpeg", alt: "Vestier 2" },
  { src: "/images/cocina_2.jpeg", alt: "Cocina" },
  { src: "/images/comedor_cocina_sillas.png", alt: "Comedor" },
  { src: "/images/sala_balcon.jpg", alt: "Sala y balcón" },
  { src: "/images/bano_ppal_1.jpg", alt: "Baño principal" },
  { src: "/images/bano_ppal_2.jpg", alt: "Baño principal 2" },
  { src: "/images/bano_social_1.png", alt: "Baño social" },
  { src: "/images/bano_social_2.jpeg", alt: "Baño social 2" },
  { src: "/images/ropas_1.jpeg", alt: "Zona de ropas" },
  { src: "/images/ropas_2.jpg", alt: "Zona de ropas 2" },
  { src: "/images/zonas_comunes_piscina.jpg", alt: "Piscina" },
  { src: "/images/zonas_comunes.jpeg", alt: "Zonas comunes" },
  { src: "/images/zonas_comunes_salon_juego.jpeg", alt: "Salón de juegos" },
  { src: "/images/zonas_comunes_cancha.jpeg", alt: "Cancha múltiple" },
  { src: "/images/zonas_comunes_gimnasio.jpeg", alt: "Gimnasio" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="galeria">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Fotos del apartamento
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            onClick={() => setSelected(null)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-4xl leading-none px-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) => (prev! - 1 + images.length) % images.length);
            }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-3xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <button
            className="absolute right-4 text-white text-4xl leading-none px-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((prev) => (prev! + 1) % images.length);
            }}
            aria-label="Siguiente"
          >
            ›
          </button>
          <p className="absolute bottom-4 text-white/70 text-sm">
            {images[selected].alt} ({selected + 1} / {images.length})
          </p>
        </div>
      )}
    </section>
  );
}
