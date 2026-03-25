---
title: API de restaurantes
publishDate: 2023-06-01 00:00:00
description: API REST para gestión de restaurantes y menús con Node.js, Express y MongoDB. CRUD completo con filtros por categoría y búsqueda por nombre.
tags:
  - Node.js
  - Express
  - MongoDB
repo: https://github.com/alomeliBravo/techno_ready_challenge_4
---

API para gestionar restaurantes, sus menús y categorías de platos. Permite crear y editar restaurantes, asignarles menús, y buscar por nombre o filtrar por tipo de cocina. Desarrollada durante el bootcamp TechnoReady.

## Modelado de documentos

El esquema de MongoDB refleja la jerarquía natural del dominio: restaurante → menú → categorías → platos. Las consultas de búsqueda y filtro se resuelven en la capa de base de datos con queries de MongoDB, sin lógica adicional en el servidor.
