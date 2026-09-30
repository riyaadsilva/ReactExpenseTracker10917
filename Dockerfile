# ---------- Stage 1: Build the React app ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy application source code
COPY . .

# Create optimized production build
RUN npm run build


# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.27-alpine

# Copy React production build to Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]