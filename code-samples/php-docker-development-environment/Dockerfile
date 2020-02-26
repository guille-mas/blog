# My PHP Development environment
FROM php:7.4.2-apache AS dev-image
# Install XDebug
RUN pecl install xdebug-2.9.2 \
    && docker-php-ext-enable xdebug \
    # Create data folders for XDebug
    # tracing and profiling tools
    # and set ownership to www-data
    && mkdir -p /tmp/mydata \
    && chown -R www-data:www-data /tmp/mydata
# copy development settings for PHP
COPY ./config/development.ini /usr/local/etc/php/conf.d/
# copy the PHP source code inside your image
COPY --chown=www-data:www-data ./src /usr/local/project
# symling your project folder 
# with default's public apache folder
RUN ln -s /usr/local/project/public /var/www/html
EXPOSE 80