---
title: API de subastas
publishDate: 2023-08-01 00:00:00
description: Sistema de subastas en tiempo real con Java y Spark Framework. Múltiples clientes compiten en una misma subasta con sincronización instantánea vía WebSockets.
tags:
  - Java
  - Spark Framework
  - WebSockets
  - Mustache
repo: https://github.com/alomeliBravo/techno_ready_challenge_6
---

Sistema donde múltiples usuarios se conectan, ven el estado de una subasta y pujan en tiempo real. Desarrollado durante el bootcamp TechnoReady con Java y el microframework Spark.

## Sincronización en tiempo real

El desafío central fue mantener el estado consistente entre todos los clientes conectados simultáneamente. Cada puja actualiza el estado en el servidor y se propaga inmediatamente a todos los participantes vía WebSocket — sin polling, sin latencia perceptible.

Mustache renderiza las vistas server-side, lo que simplifica el cliente al mínimo necesario.
