# My PHP Development environment
FROM php:7.4.2-apache AS dev-image

# arguments available at runtime
ARG HTTP_PORT
ARG HTTPS_PORT

# Install XDebug
RUN pecl install xdebug-2.9.2 \
    && docker-php-ext-enable xdebug \
    # Create data folders for XDebug
    # tracing and profiling tools
    # and set ownership to www-data
    && mkdir -p /tmp/mydata \
    && chown -R www-data:www-data /tmp/mydata \
    && rm -rf /var/www/html \
    && chown -R www-data:www-data /var/www 
# copy development settings for PHP
COPY ./config/php-dev.ini /usr/local/etc/php/conf.d/
# override default apache configuration
COPY ./config/apache-vhost.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./config/apache-ports.conf /etc/apache2/ports.conf
# copy the PHP source code inside your image
COPY --chown=www-data:www-data ./src /usr/local/project
EXPOSE ${HTTP_PORT} ${HTTPS_PORT} 
USER www-data
# symling your project folder 
# with default's public apache folder
RUN ln -s /usr/local/project/html /var/www
