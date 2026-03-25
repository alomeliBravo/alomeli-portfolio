---
name: astro-portfolio
description: >
  Convenciones de código para el portfolio personal de Angel Lomelí (Astro + Tailwind CSS).
  Trigger: Al escribir o modificar cualquier componente .astro, página, layout o estilo en este proyecto.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Al crear o editar cualquier archivo `.astro` en este proyecto
- Al agregar estilos (siempre Tailwind, nunca CSS custom salvo excepción justificada)
- Al agregar lógica en el frontmatter de un componente
- Al decidir si usar un framework JS (respuesta: no, salvo necesidad real)

## Critical Patterns

### Componentes
- UN componente por archivo `.astro`
- Props tipadas con TypeScript en el frontmatter cuando hay más de una prop
- Componentes pequeños y enfocados — una responsabilidad
- Sin React, Vue ni Svelte salvo necesidad técnica justificada y documentada

### Estilos
- Tailwind utility classes directamente en el markup — sin `@apply` salvo que el patrón se repita 3+ veces
- Orden obligatorio de clases: `layout → spacing → typography → color → effects`
- Sin CSS inline (`style="..."`)
- Sin clases CSS propias salvo que Tailwind no lo cubra y esté documentado

### Mobile-first
- Diseñar siempre para mobile primero
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Usar el breakpoint `50em` (800px) que ya usa el proyecto para consistencia

### Accesibilidad
- Imágenes: `alt` siempre descriptivo, nunca vacío salvo decorativas (`alt=""`)
- Links: texto significativo — nunca "click aquí" ni "ver más" sin contexto
- Estructura semántica: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Botones con `aria-label` cuando no tienen texto visible

### Textos del sitio
- TODO en español (Rioplatense está bien, pero consistente)
- Tono profesional pero directo — sin marketing vacío

## What NOT to Do

| Prohibido | Por qué |
|-----------|---------|
| `console.log` en producción | Ruido en consola del reclutador |
| Código comentado sin razón | Ruido visual |
| CSS inline `style="..."` | Rompe la consistencia de Tailwind |
| `@apply` para una sola clase | Abstracción prematura |
| Componentes React/Vue | El proyecto es Astro puro |
| Lógica de negocio en presentación | Responsabilidad única |
| Links sin texto significativo | Mala accesibilidad |

## Code Examples

### Componente bien formado
```astro
---
interface Props {
  title: string;
  description?: string;
}
const { title, description } = Astro.props;
---
<article class="flex flex-col gap-4 p-6 rounded-xl border border-gray-800">
  <h2 class="text-xl font-semibold text-gray-100">{title}</h2>
  {description && <p class="text-sm text-gray-400 leading-relaxed">{description}</p>}
</article>
```

### Tailwind class order
```astro
<!-- layout → spacing → typography → color → effects -->
<div class="flex flex-col gap-4 p-6 text-sm font-medium text-gray-300 bg-gray-900 rounded-xl shadow-md transition-shadow hover:shadow-lg">
```

## Commands

```bash
npm run dev      # Servidor en localhost:4321
npm run build    # Build de producción
npm run preview  # Preview del build
```
