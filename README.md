# marks-super-basic-design-system

Small, dependency-light React design system exposing a `Button` component and a few typography utilities.

This README is focused on how to export the compiled distribution for others to consume, and how consumers can install the distribution directly from GitHub.

---

## For consumers — install & use

Install from npm (when published):

```bash
npm install marks-super-basic-design-system
```

Install directly from GitHub (tag or branch):

```bash
npm install github:YOUR_USERNAME/YOUR_REPO
# or install a specific release tag
npm install github:YOUR_USERNAME/YOUR_REPO#v0.1.0
```

Import JS and compiled CSS in your app:

```jsx
import React from 'react'
import { Button } from 'marks-super-basic-design-system'
import 'marks-super-basic-design-system/dist/style.css'

function App(){
  return <Button variant="primary">Click</Button>
}
```

Notes for consumers:
- The package's compiled CSS is `dist/style.css` — import it once in your app.
- If you consume from GitHub and `dist/` is not committed, the repo must run a build on install (see maintainers notes).

---

## API (short)

`Button` props:
- `variant`: `primary` (default) | `secondary`
- `size`: `sm` | `md` (default) | `lg`
- `disabled`: boolean
- `onClick`: function
- `children`: ReactNode

Typography utility classes (use in markup): `ds-h1`, `ds-h2`, `ds-body`, `ds-caption`, `ds-strong`, `ds-muted`.

---

## For maintainers — export and publish the distribution

1) Build the distributable

```bash
npm install
npm run build
```

This produces a `dist/` folder containing:

- `dist/marks-super-basic-design-system.es.js`
- `dist/marks-super-basic-design-system.cjs.js`
- `dist/marks-super-basic-design-system.umd.js`
- `dist/style.css`

2) Commit or prepare the distribution

- Option A (simple): Commit `dist/` to the repo and push a tag. Consumers can install from GitHub without extra build steps.
- Option B (clean): Do NOT commit `dist/`. Instead add a `prepare` script so npm installs from GitHub build the package on install:

```json
"scripts": {
  "prepare": "npm run build"
}
```

3) Publish to npm (optional)

```bash
npm version patch
npm run build
npm publish --access public
```

4) Share via GitHub releases (optional)

- Create a release and attach a `package.tgz` or let users install via the release URL.

---

## Files

- `src/components/Button.jsx` — Button component
- `src/components/Button.css` — Button styles (source)
- `src/styles/typography.css` — Typography utilities
- `example/` — demo app used during development