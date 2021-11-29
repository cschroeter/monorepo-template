FROM node:16-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

FROM base as prod-deps-installed
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch --prod

FROM prod-deps-installed AS builder
RUN pnpm fetch --dev

COPY . ./

RUN pnpm recursive install --offline --frozen-lockfile --unsafe-perm
RUN pnpm build
RUN pnpm recursive exec -- rm -rf ./node_modules


FROM prod-deps-installed
COPY --from=builder /app/ ./

RUN pnpm recursive install --offline --frozen-lockfile --prod

ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

WORKDIR /app/packages/website
CMD ["node_modules/.bin/next", "start"]