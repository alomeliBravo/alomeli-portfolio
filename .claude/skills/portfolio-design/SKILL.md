---
name: portfolio-design
description: >
  Principios de diseño visual para portfolios de developers Jr buscando trabajo.
  Trigger: Al diseñar o rediseñar secciones, componentes visuales o layouts del portfolio.
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.0"
---

## When to Use

- Al diseñar un nuevo componente visual (experience, education, skills, etc.)
- Al decidir layout, tipografía, espaciado o jerarquía visual
- Al evaluar si un diseño es apropiado para un developer Jr buscando trabajo
- Al elegir entre opciones de UI para una sección del portfolio

## Critical Patterns

### Filosofía para un portfolio Jr
- **Minimalismo > decoración**: Cada elemento tiene que justificar su presencia
- **El trabajo habla**: El diseño no debe competir con el contenido — debe servirlo
- **Credibilidad sin pretensión**: Transmitir competencia sin parecer senior cuando no lo sos
- **Reclutador en 10 segundos**: Nombre, rol y proyectos deben ser inmediatamente visibles

### Jerarquía visual (en orden de importancia)
1. Nombre y rol — lo más prominente
2. Proyectos — el corazón del portfolio
3. Stack técnico — señal de tecnologías que dominás
4. Experiencia — cronología clara, de más reciente a más antigua
5. Formación — secundaria, al final

### Componentes de experiencia/educación
- Usar línea vertical de acento (`border-left`) para marcar la cronología
- Rol/título en prominencia, empresa en color acento, fecha en gris suave
- Bullets concisos: acción + tecnología + resultado (cuando aplique)
- Máximo 3 bullets por experiencia en el portfolio
- Fechas siempre visibles y fáciles de leer

### Cards de proyectos
- Sin imagen forzada si no hay una real
- Título + descripción corta (2-3 líneas máx) + stack tags
- CTA sutil (flecha o "ver más") — no agresivo
- Stack tags: pequeños, discretos, agrupados al fondo de la card

### Paleta de este portfolio
- Acento: morado (`var(--accent-regular)`)
- Texto principal: casi blanco (`var(--gray-0)`)
- Texto secundario: gris medio (`var(--gray-300)`)
- Texto terciario / fechas: gris suave (`var(--gray-400)`)
- Bordes: `var(--gray-800)`
- Fondos de card: `var(--gradient-subtle)`

### Spacing system
- Usar el sistema de gap del proyecto: `gap-2`, `gap-4`, `gap-8`, `gap-20`
- Padding de secciones: `p-6` mobile, `p-8` desktop
- Padding de cards: `1.5rem` mobile, `2rem` desktop

### Typography
- Títulos de sección: `var(--text-xl)` con `color: var(--gray-0)`
- Texto de cuerpo: `var(--text-md)` con `line-height: 1.7`
- Labels / metadata (fechas, empresa): `var(--text-sm)` con `color: var(--gray-400)`
- Tags de stack: `var(--text-xs)` o `var(--text-sm)`

## Component Patterns

### Experience item
```
[rol — prominente]          [fecha — gris suave]
[empresa — color acento]
• bullet corto con tecnología
• bullet corto con tecnología
• bullet corto con resultado
```

### Education item
```
[institución — prominente]  [año — gris suave]
[descripción o título — texto secundario]
```

### Stack pill con ícono
```
[icono 1rem] [nombre tecnología]
— fondo sutil, borde gris suave, border-radius 999rem
— sin color agresivo, usar el sistema de variables del proyecto
```

## What NOT to Do

| Evitar | Razón |
|--------|-------|
| Animaciones complejas | Distrae del contenido |
| Gradientes intensos | Parecer pretencioso |
| Foto de perfil si no querés usarla | Innecesaria para backend devs |
| Más de 6 colores distintos | Rompe la coherencia |
| Texto centrado en párrafos largos | Difícil de leer |
| Cards con imágenes de stock | Se ve falso |
| Secciones vacías o con placeholder | Mejor no tenerlas |
| Bullets de más de 2 líneas | Ruido, no valor |
