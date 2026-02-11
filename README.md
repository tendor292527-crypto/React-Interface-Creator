# React UI Builder

>A small React-based UI builder and playground (demo project).

## Quick Start

- **Prerequisites:** Node.js and npm installed.
- **Install:**

```bash
npm install
```

- **Run (development):**

```bash
npm start
```

This launches the webpack dev server (see [webpack.config.dev.js](webpack.config.dev.js)) on port 3000 by default.

## Scripts

- **start:** Runs the dev server with hot reloading (`npm start`).
- **lint:** Lints the `src` codebase (`npm run lint`).
- **test:** Runs unit tests via Jest (`npm test`).

These scripts are defined in [package.json](package.json).

## Project Structure

- **src/** — application source
  - **components/** — React components (Board, Constructor, Sections, tests and snapshots)
  - `index.jsx` — app entry
  - `index.css` — global styles
- **webpack.config.dev.js** — development webpack config
- **package.json** — project metadata, scripts and dependencies

## Running Tests

Run the test suite with:

```bash
npm test
```

The project uses Jest and includes snapshot tests under component `__snapshots__` folders.

## Linting

```bash
npm run lint
```

## Notes

- This project depends on React 15 and Webpack 2-era tooling. Consider upgrading dependencies for modern environments.
- There is no dedicated `build` script in `package.json`; add a production webpack config and build script if you need a distributable bundle.

## Contributing

Feel free to open issues or PRs. For quick improvements:

- Add a `build` script and production webpack config.
- Update React and webpack to more recent stable releases.

## License

MIT — see [package.json](package.json) for author details.
