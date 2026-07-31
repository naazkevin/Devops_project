# Use lightweight official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package dependencies first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of application code
COPY . .

# Expose application port
EXPOSE 5000

# Run application
CMD ["node", "server.js"]