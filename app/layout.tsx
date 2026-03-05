import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arriendo-rionegro.com"),
  icons: {
    icon: "/favicon.ico",
  },
  title: "Apartamento en arriendo en Fontibón Rionegro | 1 habitación | Cerca al aeropuerto",
  description:
    "Apartamento en arriendo en el sector Fontibón de Rionegro, Antioquia. 55 m², 1 habitación con vestier, 2 baños, parqueadero cubierto. Conjunto cerrado con piscina, sauna y más. Canon $1.750.000/mes. Administración incluida. Sin depósito. Mascotas permitidas.",
  keywords: [
    "apartamento en arriendo rionegro",
    "arriendo fontibon rionegro",
    "apartamento cerca aeropuerto rionegro",
    "apartamento en arriendo antioquia",
    "arriendo rionegro antioquia",
    "olivar apartamentos rionegro",
  ],
  openGraph: {
    title: "Apartamento en arriendo en Fontibón Rionegro | 1 habitación | Cerca al aeropuerto",
    description:
      "55 m², 1 habitación, 2 baños, parqueadero cubierto. Conjunto con piscina, sauna y coworking. $1.750.000/mes. Administración incluida.",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/images/cocina_sala_1.jpeg",
        width: 1200,
        height: 630,
        alt: "Apartamento en arriendo Olivar Fontibón Rionegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamento en arriendo en Fontibón Rionegro",
    description: "55 m², 1 habitación, 2 baños. $1.750.000/mes. Administración incluida.",
    images: ["/images/cocina_sala_1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
