# Dockerfile
FROM node:18.16.0-alpine3.17

# make dir
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY . .
RUN yarn install
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]