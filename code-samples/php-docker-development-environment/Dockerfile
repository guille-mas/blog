FROM php:7.4.2-apache AS my-project-development
RUN pecl install xdebug-2.8.1 \
    && docker-php-ext-enable xdebug
