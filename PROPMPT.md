You are helping build a small SEO-optimized website for renting an apartment.

Use the information contained in the file **`apt-info.md`** as the single source of truth for all property details.

Goal: generate a **simple, fast, SEO-optimized apartment listing website** that can be deployed to Vercel.

Tech stack:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Static pages (no database needed)

The website should be clean, modern, and optimized for **mobile first**, since most visitors will come from phones.

---

PROJECT STRUCTURE

Create the following structure:

/app
page.tsx
apartamento-en-arriendo-rionegro/page.tsx
apartamento-cerca-aeropuerto-rionegro/page.tsx
vivir-en-fontibon-rionegro/page.tsx
/components
Gallery.tsx
PropertyFeatures.tsx
WhatsAppButton.tsx
/public/images

---

MAIN PAGE

`/app/page.tsx`

Landing page focused on conversion.

Sections:

1. Hero section
   - Title: "Apartamento en arriendo en Fontibón Rionegro"
   - Price
   - Short description
   - Primary CTA button → WhatsApp

2. Photo gallery
   - Place images on `/public/images` take them from `/fotos`

3. Property details
   - Bedrooms
   - Bathrooms
   - Area
   - Parking
   - Key features

4. Building amenities

5. Location advantages

6. Rental conditions
   - Contrato directo con propietario
   - Seguro de arrendamiento con SURA
   - Duración de 6 a 12 meses
   - Descuento disponible para contratos largos

7. Map section
   - Embed Google Maps location

8. Call to action
   - Button: "Contactar por WhatsApp"

---

WHATSAPP BUTTON

Create a floating WhatsApp button component.

It should open:

https://wa.me/<WHATSAPP_NUMBER>?text=Hola%20vi%20el%20apartamento%20en%20Fontibón%20Rionegro%20y%20quiero%20más%20información

The phone number should be defined as a variable.

---

SEO REQUIREMENTS

Add strong SEO support:

Head metadata:

title:
"Apartaestudio en arriendo en Fontibón Rionegro | 1 habitacion | Cerca al aeropuerto"

description:
Use information from `INFO_APTO.md`.

keywords:

- apartamento en arriendo rionegro
- arriendo fontibon rionegro
- apartamento cerca aeropuerto rionegro
- apartamento en arriendo antioquia

Add OpenGraph tags.

---

STRUCTURED DATA

Add **JSON-LD structured data** using the schema:

RealEstateListing

Include:

- price
- numberOfRooms
- numberOfBathrooms
- floorSize
- address
- images

Use values from `INFO_APTO.md`.

---

SEO PAGES

Generate 3 additional pages using the apartment information:

1.  /apartamento-en-arriendo-rionegro

2.  /apartamento-cerca-aeropuerto-rionegro

3.  /vivir-en-fontibon-rionegro

Each page should contain:

- 500–700 words
- Natural Spanish
- Mention the apartment listing
- Link back to the main page

---

STYLE

Use Tailwind with a modern real estate aesthetic:

- large images
- lots of whitespace
- neutral colors
- clean typography

---

OUTPUT

Provide:

1. Full Next.js project code
2. All pages
3. All components
4. Instructions to run locally
5. Instructions to deploy to Vercel
