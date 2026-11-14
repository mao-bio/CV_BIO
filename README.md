# Portafolio y CV de Mario Andrés Hernández Moreno

Sitio personal con **dos perfiles profesionales**, en español e inglés:

| Perfil | Español | English |
|---|---|---|
| Ingeniería Biomédica | [/es/biomedico](https://bioai-cv-mario-hernandez.vercel.app/es/biomedico) | [/en/biomedical](https://bioai-cv-mario-hernandez.vercel.app/en/biomedical) |
| Datos, IA y Desarrollo | [/es/datos](https://bioai-cv-mario-hernandez.vercel.app/es/datos) | [/en/data-ai](https://bioai-cv-mario-hernandez.vercel.app/en/data-ai) |

La portada ([/es](https://bioai-cv-mario-hernandez.vercel.app/es), [/en](https://bioai-cv-mario-hernandez.vercel.app/en)) presenta ambos perfiles. Cada perfil tiene su propia experiencia, proyectos, habilidades, certificaciones y hoja de vida en PDF.

## Cómo actualizar el contenido

Todo el contenido vive en `src/content/`:

- `es.ts` y `en.ts`: textos en cada idioma (experiencia, proyectos, habilidades, certificaciones, reconocimientos).
- `shared.ts`: datos que no cambian con el idioma (contacto y enlaces).
- `ui.ts`: textos de la interfaz (menús, botones, títulos).

Cada experiencia, proyecto, grupo de habilidades y certificación indica en `tracks` a qué perfil pertenece (`'bio'`, `'data'` o ambos). Una experiencia puede tener viñetas distintas para cada perfil en `bullets`.

Al cambiar un texto, hazlo en `es.ts` **y** en `en.ts`.

## Hojas de vida en PDF

Los cuatro PDF de `public/cv/` se generan desde las páginas `/[idioma]/cv/[perfil]`, que usan el mismo contenido del sitio. Después de editar el contenido, regenéralos con:

```bash
npm run cv:pdf
```

El comando compila el sitio y exporta los PDF con el Chrome o Edge instalado en el equipo. Luego hay que hacer commit de los PDF nuevos.

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda en `http://localhost:9002`.

Otros comandos: `npm run build` (compilación de producción) y `npm run typecheck`.

## Tecnología

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion y componentes de shadcn/ui. Desplegado en Vercel: la rama `main` es producción y las demás ramas generan una vista previa.

## Contacto

- Email: marioandretybio@gmail.com
- GitHub: [mao-bio](https://github.com/mao-bio)
