FROM node:22.18.0-alpine3.22 AS base
WORKDIR /app


COPY package*.json ./

RUN npm ci


#BUILD
FROM base AS build

WORKDIR /app

COPY . .

RUN npm run build && npm ci --omit=dev


#Release

FROM alpine AS release

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules/ ./node_modules
COPY --from=base /usr/local/bin/node /usr/local/bin/node

RUN apk add --no-cache libstdc++ dumb-init && \
    addgroup -g 1000 node && adduser -u 1000 -G node -s /bin/sh -D node && \
    chown -R node:node /app

USER node

EXPOSE 3000

CMD ["dumb-init", "--"]
ENTRYPOINT [ "node", "build/index.js" ]
