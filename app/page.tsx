import type { Metadata } from "next";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import PropertyFeatures from "@/components/PropertyFeatures";
import WhatsAppButton from "@/components/WhatsAppButton";
import { whatsappUrl } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: "Apartamento en arriendo en Fontibón Rionegro | 1 habitación | Cerca al aeropuerto",
  description:
    "Apartamento en arriendo en Olivar Apartamentos, sector Fontibón, Rionegro, Antioquia. 55 m², 1 habitación con vestier, 2 baños, parqueadero cubierto. Conjunto con piscina, sauna y coworking. $1.750.000/mes. Administración incluida. Sin depósito. Mascotas permitidas.",
  keywords: [
    "apartamento en arriendo rionegro",
    "arriendo fontibon rionegro",
    "apartamento cerca aeropuerto rionegro",
    "apartamento en arriendo antioquia",
    "arriendo rionegro antioquia",
    "olivar apartamentos rionegro",
    "apartamento 1 habitacion rionegro",
    "arriendo sin deposito rionegro",
  ],
  openGraph: {
    title: "Apartamento en arriendo en Fontibón Rionegro | 1 habitación | Cerca al aeropuerto",
    description:
      "55 m², 1 habitación, 2 baños, parqueadero cubierto. Conjunto con piscina, sauna y coworking. $1.750.000/mes. Administración incluida. Sin depósito.",
    url: "https://arriendo-rionegro.com/",
    type: "website",
    locale: "es_CO",
    siteName: "Olivar Apartamentos Rionegro",
    images: [
      {
        url: "/images/comedor_cocina_sillas.png",
        width: 1200,
        height: 630,
        alt: "Apartamento en arriendo Olivar Fontibón Rionegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento en arriendo en Fontibón Rionegro | $1.750.000/mes",
    description:
      "55 m², 1 habitación, 2 baños, parqueadero cubierto. Administración incluida. Sin depósito. Mascotas permitidas.",
    images: ["/images/comedor_cocina_sillas.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Apartamento en arriendo en Fontibón Rionegro – Olivar Apartamentos",
  description:
    "Apartamento en arriendo en Olivar Apartamentos, sector Fontibón, Rionegro, Antioquia. 55 m², 1 habitación con vestier, 2 baños, parqueadero cubierto. Conjunto con piscina, sauna, coworking y más.",
  url: "https://arriendo-rionegro.com/",
  image: [
    "/images/cocina_sala_1.jpeg",
    "/images/habitacion_ppal_cama.jpg",
    "/images/zonas_comunes_piscina.jpg",
  ],
  offers: {
    "@type": "Offer",
    price: "1750000",
    priceCurrency: "COP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "1750000",
      priceCurrency: "COP",
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: "1",
        unitCode: "MON",
      },
    },
  },
  numberOfRooms: 1,
  numberOfBathroomsTotal: 2,
  floorSize: {
    "@type": "QuantitativeValue",
    value: 55,
    unitCode: "MTK",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector Fontibón",
    addressLocality: "Rionegro",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  telephone: "+573012513127",
};

const locationItems = [
  { icon: "✈️", label: "Aeropuerto José María Córdova", time: "10 min" },
  { icon: "🌳", label: "Parque principal de Rionegro", time: "5 min" },
  { icon: "🏬", label: "CC San Nicolás", time: "5 min" },
  { icon: "🏥", label: "Hospitales", time: "5 min" },
  { icon: "🏫", label: "Colegios", time: "5 min" },
  { icon: "🚌", label: "Transporte público", time: "1 min" },
  { icon: "🚇", label: "Medellín (Túnel de Oriente)", time: "~40 min" },
  { icon: "⛳", label: "Llanogrande", time: "15 min" },
];

const conditions = [
  { icon: "📝", text: "Contrato directo con el propietario" },
  { icon: "🛡️", text: "Seguro de arrendamiento con SURA" },
  { icon: "💻", text: "Estudio 100% digital, sin codeudor" },
  { icon: "⏱️", text: "Contratos de 6 o 12 meses" },
  { icon: "🎁", text: "Descuento disponible para contratos más largos" },
  { icon: "🚫", text: "Sin depósito" },
  { icon: "🏠", text: "Administración incluida ($250.000 COP)" },
  { icon: "🐾", text: "Mascotas permitidas" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end bg-gray-900">
        <Image
          src="/images/comedor_cocina_sillas.png"
          alt="Apartamento en arriendo Olivar Fontibón Rionegro"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 w-full px-4 pb-16 pt-24 max-w-3xl mx-auto text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400 mb-3">
            Olivar Apartamentos · Fontibón, Rionegro
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Apartamento en arriendo en Fontibón Rionegro
          </h1>
          <p className="text-lg text-white/80 mb-6">
            55 m² · 1 habitación · 2 baños · Parqueadero cubierto · Conjunto
            cerrado con piscina
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-white">
              $1.750.000
              <span className="text-lg font-normal text-white/70">
                {" "}
                COP/mes
              </span>
            </span>
            <span className="text-white/60 text-sm">
              Administración incluida
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Preguntar por WhatsApp
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery />

      {/* VIDEO TOUR */}
      <section className="py-16 bg-white" id="video">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Tour en video
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Recorre el apartamento sin salir de casa
          </p>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/oH3o5rkLlik?si=i4PSdzmiwPIr7oyp"
              title="Tour apartamento Olivar Fontibón Rionegro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* PROPERTY FEATURES */}
      <PropertyFeatures />

      {/* LOCATION */}
      <section className="py-16 bg-gray-50" id="ubicacion">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Ubicación estratégica
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Sector Fontibón, Rionegro, Antioquia
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {locationItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                <div className="font-bold text-green-600 text-lg">
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-video">
            <iframe
              title="Ubicación Olivar Apartamentos Fontibón Rionegro"
              src="https://maps.google.com/maps?q=Olivar+Apartamentos+Fontibon+Rionegro+Antioquia+Colombia&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* RENTAL CONDITIONS */}
      <section className="py-16 bg-white" id="condiciones">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Condiciones del arriendo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {conditions.map((c) => (
              <div
                key={c.text}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="text-gray-700">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Extra cost info */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Servicios públicos aprox.", value: "$90.000 COP" },
              {
                label: "Proveedores internet",
                value: "Tigo · Claro · Movistar",
              },
              { label: "Seguridad", value: "Portería 24h + chip acceso" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-green-50 rounded-xl p-4 border border-green-100"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {item.label}
                </div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTALES INMOBILIARIOS */}
      <section className="py-14 bg-white text-center border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-gray-500 text-sm mb-6">
            ¿Quieres ver el anuncio en portales inmobiliarios?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Metrocuadrado */}
            <a
              href="https://www.metrocuadrado.com/inmueble/arriendo-apartamento-rionegro-milla-fontibon-1-habitaciones-2-banos-1-garajes/MC4527628"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold bg-white transition-opacity hover:opacity-80"
              style={{ border: "2px solid #FF6B00", color: "#FF6B00" }}
            >
              <img
                src="https://www.metrocuadrado.com/favicon.ico"
                alt=""
                width={20}
                height={20}
                className="rounded-sm"
              />
              Ver en Metrocuadrado
            </a>

            {/* FincaRaíz */}
            <a
              href="https://www.fincaraiz.com.co/apartamento-en-arriendo-en-rionegro/193293325?time=1772734815369"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold bg-white transition-opacity hover:opacity-80"
              style={{ border: "2px solid #0057A8", color: "#0057A8" }}
            >
              <img
                src="https://www.fincaraiz.com.co/favicon.ico"
                alt=""
                width={20}
                height={20}
                className="rounded-sm"
              />
              Ver en FincaRaíz
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-20 bg-green-600 text-white text-center"
        id="contacto"
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Te interesa este apartamento?
          </h2>
          <p className="text-white/80 mb-8">
            Escríbenos por WhatsApp y resolvemos todas tus dudas. Estudio
            digital, sin codeudor.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-green-50 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </a>
          <p className="mt-4 text-white/60 text-sm">
            O escríbenos a esteban7590@hotmail.com
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
