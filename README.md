# Gatsby Static Site

A Gatsby coursework site exploring static pages, Markdown-driven blog content and generated page routes.

[![Verify](https://github.com/fizaamjd/static-site-gatsby/actions/workflows/verify.yml/badge.svg)](https://github.com/fizaamjd/static-site-gatsby/actions/workflows/verify.yml)

## Overview

Gatsby creates pages from React components and Markdown content. main contains editable source; gh-pages contains generated publishing output and is retained separately.

## Getting started

```sh
git clone https://github.com/fizaamjd/static-site-gatsby.git
cd static-site-gatsby
npm ci
npm run build
```

## Branches and development

`main` is editable Gatsby source. `gh-pages` preserves generated output. Use `npm run develop` for local development; `npm run build` produces `public/`. The starter includes example routes and framework demonstrations; it is a learning project, not a production product. The original Gatsby starter license and attribution remain intact.

## Maintenance

- [Architecture](docs/architecture.md)
- [Configuration](docs/configuration.md)
- [Verification](docs/testing.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [Support](SUPPORT.md)
- [License scope](docs/license-scope.md)

Original coursework history and contributors are preserved.

The inherited `/using-ssr/` example requires a server runtime; GitHub Pages serves only generated static routes. It is retained as a framework demonstration, not presented as a working Pages route.
