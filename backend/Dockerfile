# Base image
FROM node:alpine

# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

# Set working directory so that all subsequent command runs in this folder
WORKDIR /usr/src/app/backend

# Copy package json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy our app
COPY . .

# Expose port to access server
EXPOSE 8080

# Command to run our app
CMD node app.js
