---
title: Sistema de gestión de préstamos
publishDate: 2024-01-15 00:00:00
description: Backend freelance para gestionar clientes, préstamos, cuotas y documentos adjuntos. Diseñado para confiabilidad y trazabilidad en cada operación financiera.
tags:
  - NestJS
  - PostgreSQL
  - Redis
  - Docker
  - AWS S3
images:
  - /assets/1774293313405.jpg
  - /assets/1774293313508.jpg
  - /assets/1774293314255.jpg
---

Sistema construido desde cero como proyecto freelance. El cliente necesitaba registrar clientes, emitir préstamos, hacer seguimiento de cuotas y adjuntar documentos como contratos e identificaciones, todo con acceso controlado por roles.

## Arquitectura hexagonal

La lógica de negocio vive en el núcleo del sistema, completamente aislada de la infraestructura. Los adaptadores (base de datos, S3, Redis) se conectan desde afuera sin que el dominio sepa de ellos.

Esto fue clave para poder cambiar el ORM a mitad del desarrollo sin romper nada del core. La separación también facilitó testear la lógica de negocio de forma aislada.

## Decisiones técnicas

**Redis** maneja el caché de consultas frecuentes y las sesiones de usuario, reduciendo carga sobre PostgreSQL en operaciones de solo lectura.

**AWS S3** almacena los documentos con URLs firmadas de acceso temporal — el cliente nunca recibe una URL permanente al archivo, sino una que expira.

> Repositorio privado por requerimiento del cliente.
