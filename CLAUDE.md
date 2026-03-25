# CLAUDE.md

## Proyecto
Portfolio personal de desarrollador Jr backend/fullstack.
Stack: Astro + Tailwind CSS.

## Comandos
- `npm run dev` — servidor en localhost:4321
- `npm run build` — build de producción
- `npm run preview` — preview del build

## Secciones del sitio
1. Hero — nombre, rol (Jr Backend/Fullstack), links a GitHub y LinkedIn
2. Proyectos — 4 tarjetas (ver abajo)
3. Stack técnico — agrupado por categoría
4. Sobre mí — breve, enfocado en qué tipo de trabajo busco
5. Contacto — email + links

## Proyectos (en orden de importancia)
1. Sistema de gestión de préstamos (NestJS, PostgreSQL, Redis, Docker, AWS S3, arquitectura hexagonal) — proyecto freelance, mostrar con capturas y diagrama, sin código
2. API de órdenes (Java, Spring Boot, JUnit, MockMVC, SOLID)
3. API de subastas (Java, Spark, WebSockets, Mustache)
4. API de restaurantes (Node.js, Express, MongoDB)

## Convenciones
- El sitio es bilingüe: inglés por defecto (`/`), español en `/es/`
- Tailwind para estilos, sin CSS custom salvo necesidad
- Excepción justificada global: TODOS los componentes del proyecto usan bloques `<style>` con CSS variables del tema (`var(--gray-*)`, `var(--accent-*)`, `var(--font-*)`, `var(--text-*)`) porque Tailwind no está configurado con las variables del design system del template. Migrar a Tailwind requeriría configurar todas las variables en `tailwind.config.js`, lo cual está fuera del scope del proyecto. Las clases de Tailwind (`gap-*`, `lg:gap-*`) se usan donde aplican para layout/spacing.
- Excepción justificada: `Icon.astro` usa `style` inline para pasar `--size` como CSS custom property, ya que no es posible con Tailwind utilities.
- Componentes Astro (.astro), no React
- Mobile-first

## Skills (cargar ANTES de escribir código)

| Contexto | Skill |
|----------|-------|
| Cualquier componente .astro, página o estilo | `.claude/skills/astro-portfolio/SKILL.md` |
| Diseño visual, layouts, componentes UI | `.claude/skills/portfolio-design/SKILL.md` |
