#########################################
# MULTI-STAGE BUILD CONTAINER - Builder #
#########################################

# Base image
FROM node:alpine AS builder

# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

# Set working directory so that all subsequent commands run in this folder
WORKDIR /usr/src/app/backend

# Copy package.json, package-lock.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy our app
COPY . .

############################################
# MULTI-STAGE BUILD CONTAINER - Production #
############################################

# Base image
FROM node:alpine

# Set working directory
WORKDIR /usr/src/app/backend

# Copy all required app files from builder to production container
COPY --from=builder /usr/src/app/backend/ ./

# Expose port to access server
EXPOSE 5000

# Command to run our app
CMD node app.js
