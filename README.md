# xcapist.github.io — Portfolio (Vite + React + TypeScript)

This repository contains a single-page developer portfolio built with Vite, React and TypeScript. The project is scaffolded to run locally, build for production, and deploy to GitHub Pages using a GitHub Actions workflow.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run locally

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview build locally

```bash
npm run preview
```

GitHub Pages Deployment (actions)

- This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` which builds the site and publishes the `dist/` output to GitHub Pages.
- By default the workflow triggers on push to `main` and on manual dispatch. If your default branch is named differently, either rename the branch to `main` or update the `on.push.branches` section of the workflow.
- After the workflow finishes, the built site will be deployed to GitHub Pages. For user or organization pages (repository named `username.github.io`) the site will be served from the repository's root. For project pages, adjust `vite.config.ts` base to `'/REPO_NAME/'`.

Manual deployment (optional)

If you'd rather not use Actions, you can deploy manually with the `gh-pages` package:

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Notes

- `vite.config.ts` contains `base: '/'` configured for a user page (`username.github.io`). If you publish this as a project page, update `base` to `'/REPO_NAME/'`.
- The workflow requires Pages write permission in the repository. GitHub will create a `github-pages` environment on first deploy.

If you'd like I can also add a small GitHub Actions status badge into this README once you've deployed so the build status is visible.
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
