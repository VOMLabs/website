FROM oven/bun:1.3.14 AS base
WORKDIR /app

FROM base AS build
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
ENV NODE_ENV=production
RUN bun run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodeuser

COPY --from=build --chown=nodeuser:nodejs /app/dist ./dist
COPY --from=build --chown=nodeuser:nodejs /app/vite.config.ts ./vite.config.ts
COPY --from=build --chown=nodeuser:nodejs /app/package.json ./package.json
COPY --from=build --chown=nodeuser:nodejs /app/node_modules ./node_modules

USER nodeuser

EXPOSE 3000
CMD ["bun", "run", "start"]
