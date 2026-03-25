---
title: Orders API
publishDate: 2023-10-01 00:00:00
description: REST API for order management in Java with Spring Boot. Focused on code quality with SOLID principles and test coverage with JUnit and MockMVC.
tags:
  - Java
  - Spring Boot
  - JUnit
  - MockMVC
repo: https://github.com/alomeliBravo/techno_ready_challenge_5
---

API to create, update and query orders, built during the TechnoReady bootcamp. The emphasis was on maintainable code: separation of concerns, well-defined interfaces and tests that validate the actual behavior of each endpoint.

## Testing

Each endpoint has its integration test with MockMVC — full HTTP requests that traverse the entire chain, not controller mocks. Services are unit-tested with repository mocks to isolate business logic from persistence.
