# Olivar Apartamentos – Sitio web de arriendo

Sitio web SEO-optimizado para arrendar apartamento en Fontibón, Rionegro, Antioquia.

## Stack

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Estático (sin base de datos)

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Despliegue en Vercel

### Opción 1 – Desde la interfaz de Vercel (recomendado)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"**.
3. Importa este repositorio desde GitHub.
4. Vercel detectará automáticamente que es un proyecto Next.js. No necesitas cambiar ninguna configuración.
5. Haz clic en **"Deploy"**.
6. En 1-2 minutos el sitio estará en línea con una URL del tipo `olivar-arriendo.vercel.app`.

### Opción 2 – Desde la terminal con Vercel CLI

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones en pantalla. Para producción:

```bash
vercel --prod
```

### Dominio personalizado (opcional)

En el dashboard de Vercel, ve a **Settings → Domains** y agrega tu dominio propio.

## Páginas del sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Landing principal |
| `/apartamento-en-arriendo-rionegro` | Página SEO – arriendo Rionegro |
| `/apartamento-cerca-aeropuerto-rionegro` | Página SEO – cerca al aeropuerto |
| `/vivir-en-fontibon-rionegro` | Página SEO – vivir en Fontibón |

## Actualizar dominio en metadata

Antes de desplegar, actualiza la URL en `app/layout.tsx`:

```ts
metadataBase: new URL("https://TU-DOMINIO.vercel.app"),
```

## Contacto

WhatsApp: +57 301 251 3127
