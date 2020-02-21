# My PHP Development environment
FROM php:7.4.2-apache AS dev-image
RUN pecl install xdebug-2.9.2 \
    && docker-php-ext-enable xdebug
COPY ./config/development.ini /usr/local/etc/php/conf.d/
COPY --chown=www-data:www-data ./public /var/www/html

