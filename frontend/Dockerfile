FROM node:20.9.0-alpine

WORKDIR /frontend

ARG VITE_BACKEND_LINK

ENV VITE_BACKEND_LINK=${VITE_BACKEND_LINK}

COPY frontend/package.json ./

RUN yarn install

COPY frontend/ .

RUN yarn build

EXPOSE 4173
# in case nginx was needed, use steveltn container
CMD ["yarn", "start"]