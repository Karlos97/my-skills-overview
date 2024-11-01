FROM node:20.9-alpine

WORKDIR /backend

ARG DATABASE_URL
ARG PORT
ARG NODE_ENV
ARG REDIS_URL

ENV DATABASE_URL=${DATABASE_URL}
ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}
ENV REDIS_URL=${REDIS_URL}

COPY backend/package.json ./

RUN yarn install

COPY backend/ .

RUN printenv
RUN yarn prisma generate
# RUN yarn prisma migrate deploy 

RUN yarn build

EXPOSE 3000

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn start"]
# CMD ["yarn", "start"]
