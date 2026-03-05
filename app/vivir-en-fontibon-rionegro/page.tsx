import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/components/WhatsAppButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Vivir en Fontibón Rionegro | Sector, Ventajas y Apartamento en Arriendo",
  description:
    "Descubre por qué el sector Fontibón en Rionegro es una excelente opción para vivir. Acceso al aeropuerto, transporte, comercio y naturaleza. Apartamento disponible desde $1.750.000/mes.",
  alternates: { canonical: "/vivir-en-fontibon-rionegro" },
};

export default function VivirEnFontibon() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-3">
          Rionegro · Antioquia · Colombia
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Vivir en Fontibón, Rionegro: todo lo que necesitas saber
        </h1>

        {/* Hero card */}
        <Link href="/" className="group block rounded-2xl overflow-hidden shadow-md mb-10 relative">
          <div className="relative w-full aspect-video">
            <Image
              src="/images/sala_balcon.jpg"
              alt="Sala y balcón Olivar Apartamentos Fontibón Rionegro"
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
            El sector de <strong>Fontibón en Rionegro</strong> es uno de los más completos y bien ubicados del
            municipio. Con acceso directo a las principales vías, cercanía al aeropuerto y una infraestructura de
            servicios consolidada, es una zona que combina lo mejor de vivir en un pueblo antioqueño con las
            comodidades de una ciudad moderna. Si estás considerando mudarte a este sector, aquí te contamos por
            qué es una excelente decisión.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">¿Dónde queda Fontibón en Rionegro?</h2>
          <p>
            Fontibón es un sector residencial de Rionegro ubicado estratégicamente entre el centro del municipio y
            la vía que conduce al aeropuerto internacional José María Córdova. Esto lo convierte en un punto de
            acceso privilegiado: estás cerca del movimiento comercial y administrativo del centro, pero con la
            tranquilidad de una zona residencial consolidada.
          </p>

          <p>
            Desde Fontibón puedes llegar al <strong>parque principal de Rionegro en 5 minutos</strong>, al Centro
            Comercial San Nicolás en el mismo tiempo, y al aeropuerto en apenas 10 minutos. El transporte público
            está disponible prácticamente en la puerta, lo que facilita la movilidad diaria sin necesidad de
            vehículo propio.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Servicios y comercio en el sector</h2>
          <p>
            Fontibón cuenta con fácil acceso a hospitales, clínicas, colegios, supermercados y todo tipo de
            comercio. Rionegro tiene una oferta gastronómica, educativa y de salud muy completa para ser un
            municipio de su tamaño. Encontrarás desde grandes cadenas de retail hasta negocios locales con
            productos frescos y de calidad.
          </p>

          <p>
            Para quienes trabajan en la zona o en Medellín, la conectividad es clave: el <strong>Túnel de
            Oriente</strong> reduce el tiempo de desplazamiento hacia la ciudad a aproximadamente 40 minutos en
            condiciones normales de tráfico. Hacia Llanogrande, zona de restaurantes y fincas de recreo, son solo
            15 minutos.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Clima y calidad de vida</h2>
          <p>
            Rionegro tiene un clima templado que ronda los 17°C en promedio, fresco pero agradable, sin los
            extremos del calor de ciudades del Valle o la Costa. Muchas personas que se mudan desde Medellín
            valoran especialmente el clima del oriente antioqueño: es ideal para quienes prefieren temperaturas
            más frescas sin perder la vitalidad urbana.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">Olivar Apartamentos: vivir en Fontibón con estilo</h2>
          <p>
            En el corazón del sector Fontibón se encuentra <strong>Olivar Apartamentos</strong>, un proyecto de
            vivienda de construcción 2024 que ofrece apartamentos modernos en un conjunto cerrado con amplias
            amenidades. El apartamento disponible es de <strong>55 m²</strong>: 1 habitación con vestier, 2 baños,
            sala-comedor, cocina integral, balcón, zona de ropas y gas domiciliario. Piso 2 con ascensor y
            parqueadero cubierto incluido.
          </p>

          <p>
            El conjunto cuenta con <strong>piscina, sauna, turco, salón social, espacio de coworking</strong>,
            cancha múltiple, juegos infantiles, zonas verdes y portería 24 horas con control de acceso automático.
            Todo esto en un entorno seguro, nuevo y bien mantenido.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-8">¿Cuánto cuesta vivir en Fontibón Rionegro?</h2>
          <p>
            El canon de arriendo en Olivar es de <strong>$1.750.000 COP mensuales con administración incluida
            </strong>. Los servicios públicos promedian $90.000 COP al mes. En total, el costo fijo de vivienda es
            muy competitivo para la calidad del inmueble y las amenidades del conjunto. No hay depósito, las
            mascotas son bienvenidas y el contrato puede ser de 6 o 12 meses.
          </p>

          <p>
            Si comparas con otras opciones similares en Rionegro o en zonas periféricas de Medellín, encontrarás
            que Fontibón ofrece mejor relación calidad-precio con una ubicación superior.
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
          <h2 className="text-3xl font-bold mb-4">¿Quieres vivir en Fontibón, Rionegro?</h2>
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
