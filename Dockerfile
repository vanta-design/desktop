FROM node:23-slim AS builder

WORKDIR /app

RUN npm i -g bun@latest

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .

RUN npm run storybook:build

FROM nginx:alpine AS storybook

COPY --from=builder /app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
