# Multi-stage build

# Base image with Node.js
FROM node:20-alpine3.19 AS base-image

# Stage 1: Build the application
FROM base-image AS build-stage
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY ./package*.json ./
RUN npm install

# Copy the entire application code and build it
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM base-image AS run-application
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only necessary files from the build stage
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/next.config.ts ./next.config.ts

# Install only production dependencies
RUN npm install --omit=dev

# Expose the Next.js default port
EXPOSE 3000

# create new use with less privilege
RUN addgroup --system --gid 1001 next-user
RUN adduser --system --uid 1001 next-user
USER next-user

# Start the application
CMD ["npm", "run", "start"]

