FROM postgres
FROM node:20.9-alpine

WORKDIR /backend

ARG FRONTEND_LINK
ARG DATABASE_URL
ARG BACKEND_PORT
ARG NODE_ENV
ARG REDIS_URL

ENV FRONTEND_LINK=${FRONTEND_LINK}
ENV DATABASE_URL=${DATABASE_URL}
ENV BACKEND_PORT=${BACKEND_PORT}
ENV NODE_ENV=${NODE_ENV}
ENV REDIS_URL=${REDIS_URL}

COPY backend/package.json ./

RUN yarn install

COPY backend/ .

RUN yarn prisma generate

RUN yarn build

EXPOSE ${BACKEND_PORT}

CMD ["yarn", "start"]
