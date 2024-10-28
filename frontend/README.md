# Description

This is frontend part allow the user to interact with the backend API to add and fetch records.

## Technologies used in the project:

- **React** - for quick development and rapid feature delivery
- **Tanstack Query** - helper library for fetching and caching data
- **Jest** - testing library
- **Zod** - form validation library
- **React Hook Form** - for handling forms
- **Storybook** - for component previews and quick checks
- **Tailwind CSS** - a utility-first CSS library that accelerates development with intuitive naming, quick theme setup, and a wealth of open-source components
- **TypeScript / ESLint** - for typing and code quality
- **Vite** - a fast development server that builds the project on the fly

### How to start locally

Local development setup is described here. The production setup is detailed in the [root folder](../README.md) and uses Docker with Docker Compose.

- You will need node 20.9 to run this project
- Update the `.env` file with:
  - `VITE_BACKEND_LINK`: the backend link, e.g., `http://127.0.0.1:3000`
- Run `yarn install` to install dependencies.
- Run `yarn dev` to start the frontend in development mode.
- Access the UI at `localhost:5173`.
- Run `yarn storybook` to start Storybook.
- Access Storybook at `localhost:6006` to review example components (note: not all components are included).

### Scripts

- `yarn dev` - to run development mode
- `yarn build` - to build the project
- `yarn start` - to start production mode
- `yarn test` - to run unit tests
- `yarn storybook` - to run Storybook
- `yarn build-storybook` - to build Storybook stories
- `yarn lint` - to run linting and check for code smells
- `yarn lint:fix` - to fix lint issues automatically
