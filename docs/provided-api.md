---
id: provided-api
title: WYSIWYG API Overview
sidebar_label: API Overview
---

# Docusaurus Plugin WYSIWYG API

We provide a [template API](lien vers le template) that enables secure GitHub OAuth authentication and health monitoring for the Docusaurus WYSIWYG editor plugin.

## Features

- **GitHub OAuth 2.0 Authentication**: Secure login flow using GitHub.
- **Token Handling**: Access tokens are stored in HTTP-only cookies.
- **Health Check Endpoint**:For monitoring API and dependency status.
- **Swagger API Docs**: Interactive documentation at `/api`.
- **Environment-based Configuration**: All secrets and URLs are managed via `.env`.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a .env file in the project root, similar to `.env.example`, and set the following variables.

### 3. Run the Application

```bash
npm run start:dev
```

## API Endpoints

| Method | Endpoint          | Description                                  |
| ------ | ----------------- | -------------------------------------------- |
| GET    | /github/authorize | Redirects to GitHub OAuth authorization page |
| GET    | /github/callback  | Handles GitHub OAuth callback and redirects  |
| GET    | /github/status    | Returns authentication status                |
| GET    | /health           | Returns API and dependency health status     |

## Swagger Documentation

Once running, access the API docs at `http://localhost:3000/api`.
