# ---- Stage 1: Build React App ----
FROM node:18 AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy rest of the project
COPY . .

# Build React app
RUN npm run build


# ---- Stage 2: Nginx Server ----
FROM nginx

# Copy React build from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
