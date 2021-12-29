# Base image
FROM nginx:stable-alpine

# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/frontend

# Set working directory so that all subsequent command runs in this folder
WORKDIR /usr/src/app/frontend

# Copy our app
COPY . .

# Expose port to access server
EXPOSE 3000
