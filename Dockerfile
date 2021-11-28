FROM node:16-alpine AS base
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

COPY . ./

RUN pnpm install --unsafe-perm
RUN pnpm build

EXPOSE 3000

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

CMD pnpm website start
