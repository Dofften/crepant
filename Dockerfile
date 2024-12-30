FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb for dependency installation
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application files
COPY . .

# Build the project
RUN bun run build

# Set the default command to serve the app
CMD ["bun", "run", "serve"]
