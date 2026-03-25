---
title: API de órdenes
publishDate: 2023-10-01 00:00:00
description: API REST para gestión de órdenes en Java con Spring Boot. Foco en calidad de código con principios SOLID y cobertura de tests con JUnit y MockMVC.
tags:
  - Java
  - Spring Boot
  - JUnit
  - MockMVC
repo: https://github.com/alomeliBravo/techno_ready_challenge_5
---

API para crear, actualizar y consultar órdenes, desarrollada durante el bootcamp TechnoReady. El énfasis estuvo en código mantenible: separación de responsabilidades, interfaces bien definidas y tests que validen el comportamiento real de cada endpoint.

## Testing

Cada endpoint tiene su test de integración con MockMVC — requests HTTP completos que recorren toda la cadena, no mocks del controller. Los servicios están testeados unitariamente con mocks de repositorios para aislar la lógica de negocio de la persistencia.
