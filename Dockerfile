# PHP 8.5 CLI development image shared by both exercises.
# PostgreSQL support (pdo_pgsql) will be added when exercise 2 needs it.
FROM php:8.5-cli

# Tools required by Composer to fetch and unpack dist packages.
RUN apt-get update \
    && apt-get install -y --no-install-recommends git unzip \
    && rm -rf /var/lib/apt/lists/*

# Bring in Composer from its official image.
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app