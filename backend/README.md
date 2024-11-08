# Description

It’s a simple Node.js backend API used to add/get/cache records to/from a cloud vault.

## Technologies used in the project:

- **Express** - used for quick development
- **Zod** - for form validation
- **Nodemon** - for hosting the app during development
- **TypeScript / ESLint** - for typing and code quality
- **Redis** - for caching
- **Swagger** - for easy API documentation with the ability to send requests; Swagger is accessible only in development mode
- **PostgreSQL** - database

### How to start locally

Local development setup is described here. The production setup is detailed in the [root folder](../README.md) and uses Docker with Docker Compose.

- For local development, either comment out the Docker Compose configuration for frontend and backend containers or use different ports and update environment variables and files using hardcoded ports accordingly.
- You will need node 20.9 to run this project
- Run `yarn install` to install dependencies.
- Update the `.env` file with:
  - `NODE_ENV`: set to `development` or `production`, depending on the environment
  - `REDIS_URL`: the Redis URL
  - `POSTGRES_USER`: postgreSQL user name
  - `POSTGRES_PASSWORD`: postgreSQL user password
  - `POSTGRES_DB`: postgreSQL db name
  - `DATABASE_URL`: the postgreSQL URL
  - _Note_: Changing the default backend port (3000) may require updating references in other files.
- Run `docker compose up -d` to start Redis in detached mode.
- Initialize your db, run `npx prisma generate`
- Sync your db, run `npx prisma migrate dev --name init-migration`
- To add default seeds and fill up database run `npx tsc prisma/seed.ts` which will create seed.js file. Run `yarn seed` to trigger it.
- Run `yarn dev` to start the backend in development mode.
- Access `localhost:3000/swagger` for a quick review of available endpoints.
- Ensure that CORS options are updated if frontend ports are changed.

### Scripts

- `yarn dev` - to run development mode
- `yarn build` - to build the project
- `yarn start` - to start production mode
- `yarn lint` - to run linting and check for possible code smells
