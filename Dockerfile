# Multi-stage Dockerfile for Cloud Run (single service)
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
COPY server.js ./
COPY --from=builder /app/dist ./dist
RUN npm install --omit=dev
# Use Cloud Run-provided PORT env variable
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server.js"] 