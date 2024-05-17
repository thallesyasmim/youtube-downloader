FROM node:18-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
ENTRYPOINT ["node", "dist/src/main/index.js"]
