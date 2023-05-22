# Dockerfile
FROM node:14.18.3-alpine3.15

# make dir
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY . .
RUN npm install --production
RUN npm install --save-dev nuxt
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]