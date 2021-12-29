# Base image
FROM nginx:stable-alpine

# Set working directory so that all subsequent command runs in this folder
WORKDIR /usr/share/nginx/html

# Copy our app
COPY . .

# Expose port to access server
EXPOSE 80
