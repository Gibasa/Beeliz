# GEMINI.md

## Project Overview

This is a web application named "beeliz," built with React and bootstrapped using the Vite build tool. The project is configured for modern JavaScript development with ES Module support (`"type": "module"`).

The primary technologies used are:

- **React:** For building the user interface.
- **Vite:** As the development server and build tool.
- **React Router:** For handling client-side routing.
- **Tailwind CSS:** For utility-first styling.
- **ESLint:** For code linting and maintaining style consistency.

The application's entry point is `src/main.jsx`, which renders the main `App` component and sets up `BrowserRouter` for routing.

## Directory Structure

The project follows a component-based architecture:

- `src/components`: Contains reusable UI components (e.g., `Button`, `Footer`, `Navbar`).
- `src/assets/Pages`: Contains top-level page components (e.g., `Home`, `About`). Note: A more conventional location for pages would be `src/pages` or `src/views`.
- `public/`: Contains static assets that are served directly.
- `index.html`: The main HTML file and entry point for the application.

## Building and Running

The following scripts are defined in `package.json` for managing the development lifecycle:

- **Run the development server:**

  ```bash
  npm run dev
  ```

  This command starts the Vite development server with Hot Module Replacement (HMR) enabled.

- **Build for production:**

  ```bash
  npm run build
  ```

  This command bundles the application into the `dist/` directory for production deployment.

- **Lint the code:**

  ```bash
  npm run lint
  ```

  This command runs ESLint to check for code quality and style issues across the project.

- **Preview the production build:**
  ```bash
  npm run preview
  ```
  This command starts a local server to preview the production build from the `dist/` directory.

## Development Conventions

- **Styling:** The project uses Tailwind CSS for styling. Utility classes should be used directly in the JSX components. The configuration is in `tailwind.config.js`.
- **Code Style:** ESLint is configured to enforce code style. The rules can be found in `eslint.config.js`.
- **Components:** The codebase is structured around React components, which are organized by feature or role into their own directories (e.g., `src/components/Button`). Each component directory contains an `index.jsx` file.
