FROM oven/bun:latest

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install

RUN bun build

CMD ["bun", "run", "serve"]