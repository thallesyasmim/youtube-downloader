FROM node:18-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm build
RUN pnpm prune --prod

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
RUN
EXPOSE 3000
ENTRYPOINT ["node", "dist/src/main/index.js"]
