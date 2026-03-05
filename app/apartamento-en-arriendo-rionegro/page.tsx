import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/components/WhatsAppButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Apartamento en Arriendo en Rionegro, Antioquia | Olivar Apartamentos",
  description:
    "¿Buscas un apartamento en arriendo en Rionegro? Olivar Apartamentos en Fontibón: 55 m², 1 habitación, 2 baños, parqueadero cubierto, piscina, sauna. $1.750.000/mes con administración incluida. Sin depósito.",
  keywords: [
    "apartamento en arriendo rionegro",
    "arriendo rionegro antioquia",
    "apartamento rionegro fontibon",
    "arriendo fontibon rionegro",
    "apartamento sin deposito rionegro",
    "arriendo con mascotas rionegro",
  ],
  alternates: { canonical: "/apartamento-en-arriendo-rionegro" },
  openGraph: {
    title: "Apartamento en Arriendo en Rionegro, Antioquia | Olivar Apartamentos",
    description:
      "55 m², 1 habitación, 2 baños, parqueadero cubierto. Conjunto con piscina y sauna. $1.750.000/mes. Administración incluida. Sin depósito.",
    url: "https://arriendo-rionegro.com/apartamento-en-arriendo-rionegro",
    type: "article",
    locale: "es_CO",
    siteName: "Olivar Apartamentos Rionegro",
    images: [
      {
        url: "/images/habitacion_ppal_cama.jpg",
        width: 1200,
        height: 630,
        alt: "Habitación principal apartamento Olivar Rionegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento en Arriendo en Rionegro, Antioquia",
    description:
      "55 m², 1 habitación, piscina, sauna. $1.750.000/mes. Sin depósito. Mascotas permitidas.",
    images: ["/images/habitacion_ppal_cama.jpg"],
  },
};

export default function ApartamentoRionegro() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-3">
          Rionegro · Antioquia · Colombia
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Apartamento en Arriendo en Rionegro, Antioquia
        </h1>

        {/* Hero card */}
        <Link href="/" className="group block rounded-2xl overflow-hidden shadow-md mb-10 relative">
          <div className="relative w-full aspect-video">
            <Image
              src="/images/habitacion_ppal_cama.jpg"
              alt="Apartamento en arriendo Olivar Rionegro"
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
            Rionegro se ha convertido en uno de los municipios más atractivos del oriente antioqueño para vivir. Con
            su clima templado, crecimiento urbano ordenado y excelente conectividad con Medellín a través del Túnel
            de Oriente, cada vez más familias y profesionales eligen establecerse aquí. Si estás buscando un{" "}
            <strong>apartamento en arriendo en Rionegro</strong>, esta es una oportunidad que vale la pena conocer.
          </p>

          <p>
            En el sector de <strong>Fontibón, Rionegro</strong>, encontrarás <strong>Olivar Apartamentos</strong>, un
            conjunto residencial moderno de construcción 2024 que ofrece todo lo que necesitas para vivir con
            comodidad y seguridad. Se trata de un apartamento de <strong>55 m²</strong> en el segundo piso, con
            acceso por ascensor, distribuido en 1 habitación principal con vestier, 2 baños completos, sala-comedor,
            cocina integral, zona de ropas, balcón y gas domiciliario.
          </p>

          <p>
            El canon de arriendo es de <strong>$1.750.000 COP mensuales</strong>, con la administración ya incluida
            (valorada en $250.000 COP). No se exige depósito. Las mascotas son bienvenidas. El estudio de crédito se
            realiza de forma 100% digital y no se requiere codeudor, lo que facilita enormemente el proceso de
            arrendamiento.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Un conjunto residencial completo</h2>
          <p>
            Olivar Apartamentos no es solo un lugar para dormir: es un estilo de vida. El conjunto cerrado cuenta con
            portería las 24 horas, control de acceso automático tanto peatonal como vehicular, <strong>piscina</strong>
            , <strong>sauna</strong>, turco, salón social, espacio de coworking ideal para quienes trabajan desde
            casa, cancha múltiple, juegos infantiles y amplias zonas verdes. Todo esto dentro de una unidad cerrada
            que garantiza tu tranquilidad y la de tu familia.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Parqueadero cubierto incluido</h2>
          <p>
            El apartamento incluye un parqueadero cubierto en el primer piso del conjunto, a solo un piso del
            apartamento. Una ventaja significativa frente a muchas opciones de arriendo en Rionegro que cobran el
            parqueadero por separado o simplemente no lo ofrecen.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Conectividad e internet</h2>
          <p>
            En Olivar Apartamentos puedes contratar servicios de internet con <strong>Tigo, Claro o Movistar</strong>
            , los tres operadores más importantes del país. El promedio de servicios públicos es de aproximadamente
            $90.000 COP al mes, lo que hace que el costo total de vivir aquí sea muy competitivo para la zona.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">¿Por qué vivir en Rionegro?</h2>
          <p>
            Rionegro ofrece la tranquilidad de un municipio organizado con toda la infraestructura de una ciudad
            moderna: centros comerciales, hospitales, colegios, restaurantes y transporte público a pocos minutos de
            cualquier punto. El aeropuerto internacional José María Córdova está a solo 10 minutos, lo que lo hace
            ideal para viajeros frecuentes o personas que trabajan en el sector aeroportuario.
          </p>

          <p>
            Si además valoras la naturaleza y los espacios abiertos, el oriente antioqueño te ofrece acceso rápido a
            embalses, haciendas y fincas en municipios cercanos como El Retiro, Guarne y La Ceja, todo a menos de 30
            minutos.
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
          <h2 className="text-3xl font-bold mb-4">¿Te interesa este apartamento en Rionegro?</h2>
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
