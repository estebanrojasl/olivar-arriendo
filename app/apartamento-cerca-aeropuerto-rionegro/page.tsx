import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/components/WhatsAppButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Apartamento Cerca al Aeropuerto de Rionegro | A 10 min del JMC",
  description:
    "Apartamento en arriendo a 10 minutos del Aeropuerto Internacional José María Córdova, Rionegro. 55 m², 1 habitación, 2 baños, parqueadero cubierto y conjunto con piscina. $1.750.000/mes con administración incluida.",
  keywords: [
    "apartamento cerca aeropuerto rionegro",
    "arriendo cerca aeropuerto jose maria cordova",
    "apartamento cerca aeropuerto antioquia",
    "vivienda cerca aeropuerto rionegro",
    "arriendo fontibon rionegro aeropuerto",
  ],
  alternates: { canonical: "/apartamento-cerca-aeropuerto-rionegro" },
  openGraph: {
    title: "Apartamento Cerca al Aeropuerto de Rionegro | A 10 min del JMC",
    description:
      "A 10 min del Aeropuerto José María Córdova. 55 m², 1 habitación, piscina, sauna. $1.750.000/mes. Administración incluida. Sin depósito.",
    url: "https://olivar-arriendo.vercel.app/apartamento-cerca-aeropuerto-rionegro",
    type: "article",
    locale: "es_CO",
    siteName: "Olivar Apartamentos Rionegro",
    images: [
      {
        url: "/images/zonas_comunes_piscina.jpg",
        width: 1200,
        height: 630,
        alt: "Piscina conjunto Olivar Apartamentos Rionegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento Cerca al Aeropuerto de Rionegro | A 10 min del JMC",
    description:
      "A 10 min del aeropuerto JMC. Piscina, sauna. $1.750.000/mes. Sin depósito. Mascotas permitidas.",
    images: ["/images/zonas_comunes_piscina.jpg"],
  },
};

export default function ApartamentoCercaAeropuerto() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-3">
          A 10 minutos del Aeropuerto José María Córdova
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Apartamento en Arriendo Cerca al Aeropuerto de Rionegro
        </h1>

        {/* Hero card */}
        <Link href="/" className="group block rounded-2xl overflow-hidden shadow-md mb-10 relative">
          <div className="relative w-full aspect-video">
            <Image
              src="/images/zonas_comunes_piscina.jpg"
              alt="Conjunto Olivar Apartamentos Rionegro"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between">
            <div>
              <p className="font-bold text-xl">Olivar Apartamentos · Fontibón, Rionegro</p>
              <p className="text-white/80 text-sm">55 m² · 1 hab · 2 baños · Parqueadero cubierto</p>
            </div>
            <span className="shrink-0 bg-green-500 group-hover:bg-green-400 text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors">
              Ver apartamento →
            </span>
          </div>
        </Link>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-5">
          <p>
            Si viajas con frecuencia, trabajas en la industria aérea o simplemente quieres vivir cerca del{" "}
            <strong>Aeropuerto Internacional José María Córdova</strong>, el <strong>apartamento en Olivar
            Apartamentos</strong>, sector Fontibón de Rionegro, es exactamente lo que estás buscando. A tan solo{" "}
            <strong>10 minutos del aeropuerto</strong>, combinas la comodidad de un conjunto residencial moderno con
            la practicidad de estar cerca de uno de los aeropuertos más importantes de Colombia.
          </p>

          <p>
            El aeropuerto José María Córdova es el principal terminal aéreo del departamento de Antioquia y opera
            vuelos nacionales e internacionales de forma continua. Vivir cerca significa nunca más madrugar
            demasiado, evitar el tráfico de Medellín cuando tienes un vuelo temprano, y llegar a casa en minutos
            después de un viaje largo. Para tripulantes, empleados aeroportuarios o ejecutivos con agenda de viajes
            frecuentes, esta ubicación es invaluable.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">El apartamento en detalle</h2>
          <p>
            Olivar Apartamentos ofrece un apartamento de <strong>55 m²</strong> en segundo piso con ascensor.
            Distribución: 1 habitación principal con vestier, 2 baños completos, sala-comedor, cocina integral,
            zona de ropas y balcón. Construcción de 2024, por lo que todo es nuevo y moderno. El parqueadero es
            cubierto e incluido en el canon.
          </p>

          <p>
            El precio del arriendo es de <strong>$1.750.000 COP al mes, con administración incluida</strong>. No hay
            depósito. Mascotas permitidas. El proceso de arrendamiento es digital, sin codeudor, a través de un
            seguro con SURA. Puedes elegir contrato de 6 o 12 meses, con descuento disponible para contratos más
            largos.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Mucho más que solo el aeropuerto</h2>
          <p>
            La ubicación en Fontibón, Rionegro, te da acceso rápido a muchos más puntos de interés. El parque
            principal de Rionegro está a 5 minutos, el Centro Comercial San Nicolás también, hospitales y colegios
            a 5 minutos, y el transporte público prácticamente en la puerta (1 minuto). Hacia Llanogrande son 15
            minutos, y la conexión a Medellín por el Túnel de Oriente hace que la ciudad más grande del oriente
            antioqueño esté a aproximadamente 40 minutos.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Conjunto cerrado con todo</h2>
          <p>
            El conjunto cuenta con <strong>piscina, sauna, turco, salón social, coworking, cancha múltiple,
            juegos infantiles, zonas verdes</strong> y portería 24 horas con control de acceso automático. Un
            entorno seguro y bien equipado que hace que regresar a casa siempre sea un placer.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Rionegro: una ciudad que crece</h2>
          <p>
            Rionegro no para de crecer. Su ubicación estratégica en el oriente de Antioquia, la presencia del
            aeropuerto internacional y el clima templado de montaña lo han convertido en destino preferido de
            inversión y residencia. Los proyectos de vivienda nueva en la zona son de alta calidad, y el costo de
            vida es notablemente más bajo que en Medellín, con acceso a los mismos servicios y comodidades.
          </p>

          <p>
            Empresas nacionales e internacionales han instalado operaciones en el oriente antioqueño, lo que ha
            impulsado la demanda de vivienda de calidad como la que ofrece Olivar Apartamentos.
          </p>

          <p className="mt-10">
            <Link href="/" className="text-green-600 hover:underline font-medium">
              ← Ver todos los detalles del apartamento
            </Link>
          </p>
        </div>
      </main>

      <section className="py-20 bg-green-600 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Buscas vivir cerca al aeropuerto de Rionegro?</h2>
          <p className="text-white/80 mb-3">Contrato directo con el propietario. Sin depósito. Sin codeudor.</p>
          <p className="text-white/80 mb-8">Estudio 100% digital con SURA. Mascotas permitidas.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-green-50 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar por WhatsApp
          </a>
          <p className="mt-4 text-white/60 text-sm">O escríbenos a esteban7590@hotmail.com</p>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
