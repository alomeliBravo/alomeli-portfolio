---
title: Restaurants API
publishDate: 2023-06-01 00:00:00
description: REST API for managing restaurants and menus with Node.js, Express and MongoDB. Full CRUD with category filters and name search.
tags:
  - Node.js
  - Express
  - MongoDB
repo: https://github.com/alomeliBravo/techno_ready_challenge_4
---

API to manage restaurants, their menus and dish categories. Allows creating and editing restaurants, assigning menus, and searching by name or filtering by cuisine type. Built during the TechnoReady bootcamp.

## Document Modeling

The MongoDB schema reflects the natural hierarchy of the domain: restaurant → menu → categories → dishes. Search and filter queries are resolved at the database layer using MongoDB queries, with no extra logic on the server.
