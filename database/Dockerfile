# Base image
FROM postgres:alpine

# Set PostgreSQL settings
# User: novogradko
# Password: pass
# Database: novogradko
ENV POSTGRES_USER novogradko
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB novogradko

# Copy the database initialisation file over
COPY init.sql /docker-entrypoint-initdb.d/

# Expose port 5432 to allow backend communication
EXPOSE 5432
