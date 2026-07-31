# Use NGINX Alpine to serve static HTML
FROM nginx:alpine

# Copy web assets to default NGINX HTML folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]