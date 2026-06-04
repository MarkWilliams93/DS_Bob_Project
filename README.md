# DS Bob — Basic React Design System

Minimal React design system with a `Button` component and standard text styles.

## Quick start

Install dependencies and run the example dev server:

```bash
npm install
npm run dev
```

Open the app at: http://localhost:5173/

## Build & Preview

Build the library package into `dist/`:

```bash
npm run build
```

You can also build and preview the example app if you want to verify the demo:

```bash
npm run build:example
npm run preview
```

## Usage

### Local source import

You can import the component files directly into an existing React app for development or prototyping:

```jsx
import React from 'react'
import { Button } from '../src'
import '../src/styles/typography.css'
import '../src/components/Button.css'

function MyApp(){
  return <Button variant="primary">Click me</Button>
}
```

### Built distribution import

After running `npm run build`, the library is bundled into `dist/`.

If you install the package from npm or GitHub, you can import the built library directly:

```jsx
import { Button } from 'ds-bob-design-system'
import 'ds-bob-design-system/dist/style.css'

function MyApp(){
  return <Button variant="primary">Click me</Button>
}
```

If you consume the repo directly from GitHub without publishing, install it with:

```bash
npm install github:your-username/your-repo
```

Then import it in the same way.

## Files

- [src/components/Button.jsx](src/components/Button.jsx) — Button component
- [src/components/Button.css](src/components/Button.css) — Button styles
- [src/styles/typography.css](src/styles/typography.css) — Typography styles
- [example/App.jsx](example/App.jsx) and [example/main.jsx](example/main.jsx) — Example app entry

## Notes

- The package is set up for local development using Vite.
- `react` and `react-dom` are listed as dependencies for the example; if embedding into another project, align versions with your app.

## Distribution & consumption

If you plan to publish this repo so others can consume the design system, follow these steps.

1) Prepare `package.json`

- Choose a stable package `name` (e.g. `marks-super-basic-design-system` or `@your-org/marks-super-basic-design-system`).
- Set a `version` and ensure `main`, `module`, and `files` are correct for your build output.

2) Add a build step (recommended)

- Use Vite library mode to produce ESM and CJS bundles and to extract or bundle CSS.
- The included `vite.config.js` already produces `dist/marks-super-basic-design-system.es.js`, `dist/marks-super-basic-design-system.cjs.js`, and `dist/marks-super-basic-design-system.umd.js`.

Example package scripts for build:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "build:example": "vite build --config vite.config.js --mode example",
  "preview": "vite preview --port 5173 --strictPort example"
}
```

3) Bundle or expose CSS

- Decide whether to ship compiled CSS files under `dist/` (recommended) or require consumers to import the raw CSS from `src/`.
- If you bundle CSS, update `package.json` `files` to include `dist/*.css` and document how to import styles.

4) Publish to npm (manual)

```bash
# login once
npm login

# bump version, build, publish
npm version patch
npm run build
npm publish --access public
```

For scoped packages (`@your-org/...`) you may need `--access public`.

5) Publish from GitHub (instant use without npm publish)

- Users can install directly from GitHub while you iterate:

```bash
npm install github:your-username/your-repo
```

Or install a specific tag or commit:

```bash
npm install github:your-username/your-repo#v0.1.0
```

6) Automate publishing (recommended)

- Add a GitHub Action that runs `npm run build` and `npm publish` when you push a release tag. Use `actions/setup-node` and a `NPM_TOKEN` secret.

7) Consumption examples

- From npm (after publish):

```js
import { Button } from 'ds-bob-design-system'
import 'ds-bob-design-system/dist/styles.css' // if you shipped compiled css
```

- From GitHub (no publish):

```bash
npm install github:your-username/your-repo
```

8) Additional recommendations

- Add `README.md` usage examples (this file), a `LICENSE` file, and `CONTRIBUTING.md`.
- Add `types` (TypeScript declarations) or ship `.d.ts` files if consumers use TypeScript.
- Add CI checks (lint, tests) before publishing.

If you want, I can add a Rollup/Vite library build config, a GitHub Actions workflow for publishing, and a `LICENSE` file — which should I add first?
