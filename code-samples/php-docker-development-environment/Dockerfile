# My PHP Development environment
FROM php:7.4.2-apache AS dev-image
# Install XDebug
RUN pecl install xdebug-2.9.2 \
    && docker-php-ext-enable xdebug \
# Create data folders for XDebug's tracing and profiling and set ownership to www-data
    && mkdir -p /tmp/mydata \
    && chown -R www-data:www-data /tmp/mydata
# copy PHP development settings
COPY ./config/development.ini /usr/local/etc/php/conf.d/
# copy php project
COPY --chown=www-data:www-data ./src /var/www/html
