# AGENTS.md — Reglas de revisión de código

Portfolio personal. Stack: Astro + Tailwind CSS.

## Stack

- Framework: Astro (componentes `.astro` únicamente — sin React, Vue ni Svelte)
- Estilos: Tailwind CSS — sin CSS custom salvo necesidad justificada
- Sin TypeScript complejo: el proyecto es estático, mantener simplicidad
- Diseño mobile-first

## Reglas generales

- Los textos del sitio deben estar en español
- No usar componentes de frameworks JS (React, Vue, etc.) salvo que sea estrictamente necesario y esté justificado
- No agregar dependencias innecesarias
- No CSS inline — usar clases de Tailwind
- No estilos globales en `<style>` salvo casos excepcionales documentados

## Estructura de componentes

- Un componente por archivo `.astro`
- Props tipadas con TypeScript en el frontmatter cuando corresponda
- Componentes pequeños y enfocados — una responsabilidad por componente

## Tailwind

- Usar clases utilitarias directamente en el markup
- No crear abstracciones con `@apply` salvo que se repita más de 3 veces el mismo patrón
- Respetar el orden: layout → spacing → typography → color → effects

## Accesibilidad

- Imágenes deben tener `alt` descriptivo
- Links deben tener texto significativo (no "click aquí")
- Estructura semántica correcta: `<header>`, `<main>`, `<section>`, `<footer>`

## Excepciones documentadas

### Clases del design system del template (no son Tailwind, están justificadas)

- `stack`, `wrapper`, `gap-*` (cuando no es Tailwind) — clases utilitarias del template base de Astro definidas en `src/styles/global.css`. Se usan en páginas y layouts como alternativa a Tailwind porque el template ya las define globalmente.
- Bloques `<style>` en TODOS los componentes — el design system usa CSS custom properties (`var(--gray-*)`, `var(--accent-*)`, `var(--font-*)`, `var(--text-*)`) que Tailwind no conoce. Migrar requeriría configurar Tailwind con todas las variables, lo cual está fuera del scope del proyecto.
- `<style>` inline en `Icon.astro` para `--size` — CSS custom property que no es posible pasar con utilidades de Tailwind.

## Lo que NO debe existir

- Código comentado sin razón
- Lógica de negocio en componentes de presentación
- `console.log` en producción
- Clases CSS inventadas que no vengan del design system ni de Tailwind
