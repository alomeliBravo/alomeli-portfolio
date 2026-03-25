---
title: Auctions API
publishDate: 2023-08-01 00:00:00
description: Real-time auction system built with Java and Spark Framework. Multiple clients compete in the same auction with instant synchronization via WebSockets.
tags:
  - Java
  - Spark Framework
  - WebSockets
  - Mustache
repo: https://github.com/alomeliBravo/techno_ready_challenge_6
---

System where multiple users connect, view the state of an auction and place bids in real time. Built during the TechnoReady bootcamp with Java and the Spark microframework.

## Real-Time Synchronization

The core challenge was keeping state consistent across all simultaneously connected clients. Each bid updates the state on the server and is immediately broadcast to all participants via WebSocket — no polling, no noticeable latency.

Mustache renders views server-side, keeping the client as minimal as possible.
