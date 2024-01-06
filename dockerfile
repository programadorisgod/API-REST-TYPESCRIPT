FROM node:20 as build 

RUN corepack enable && corepack prepare pnpm@latest --activate 
ENV PNPM_HOME=/usr/local/bin

WORKDIR /usr/src/app

COPY package*.json ./

RUN pnpm install

COPY  . .

RUN pnpm run build




#ETPA 2:Crear una image más pequeñas

FROM node:20-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package*.json ./


EXPOSE 4000

CMD [ "npm", "start" ]