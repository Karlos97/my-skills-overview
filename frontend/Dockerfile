FROM node:20.9.0-alpine AS builder

WORKDIR /frontend

ARG VITE_BACKEND_LINK
ARG VITE_FRONTEND_PORT

ENV VITE_BACKEND_LINK=${VITE_BACKEND_LINK}
ENV VITE_FRONTEND_PORT=${VITE_FRONTEND_PORT}

COPY frontend/package.json ./

RUN yarn install

COPY frontend/ .

RUN yarn build

FROM nginx:mainline-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /frontend/public ./public
COPY --from=builder /frontend/dist .
COPY --from=builder /frontend/nginx.conf /etc/nginx/

EXPOSE ${VITE_FRONTEND_PORT}

# CMD ["yarn", "start"]
CMD ["nginx", "-g", "daemon off;"]
