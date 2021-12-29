FROM postgres:alpine

ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD pass
ENV POSTGRES_DB novogradko

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432