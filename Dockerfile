# Dockerfile
FROM node:18.16.0-alpine3.17 as build

WORKDIR /build

COPY . .
RUN yarn install
RUN yarn build --standalone

FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY --from=build /build/.nuxt /app/.nuxt
COPY --from=build /build/.output /app/.output
COPY --from=build /build/public /app/public
COPY --from=build /build/nuxt.config.ts /app/

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

ENTRYPOINT [ "node", ".output/server/index.mjs" ]