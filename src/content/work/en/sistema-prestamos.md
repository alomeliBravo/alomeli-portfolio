---
title: Loan Management System
publishDate: 2024-01-15 00:00:00
description: Freelance backend to manage clients, loans, payments and attached documents. Designed for reliability and traceability in every financial operation.
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

System built from scratch as a freelance project. The client needed to register clients, issue loans, track payments and attach documents such as contracts and IDs — all with role-based access control.

## Hexagonal Architecture

The business logic lives at the core of the system, completely isolated from the infrastructure. Adapters (database, S3, Redis) plug in from the outside without the domain knowing about them.

This was key to being able to swap the ORM mid-development without breaking any core logic. The separation also made it straightforward to test business logic in isolation.

## Technical Decisions

**Redis** handles caching for frequent queries and user sessions, reducing load on PostgreSQL for read-only operations.

**AWS S3** stores documents with temporary signed URLs — the client never receives a permanent file URL, only one that expires.

> Private repository per client requirement.
