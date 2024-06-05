# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files including ui and assets
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built application and other necessary directories from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
