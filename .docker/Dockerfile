FROM php:7.4.1-apache

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
        libpng-dev \
        zlib1g-dev \
        libxml2-dev \
        libzip-dev \
        libonig-dev \
        zip \
        curl \
        unzip \
    && docker-php-ext-configure gd \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install zip \
    && docker-php-source delete

#copio il vhost personalizzato nella cartella di apache
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

#copio tutta la mia attuale directory all'interno della WORKDIR nel container
COPY . .

RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

#lanciare queste righe da dentro il server
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

#lancio i comandi di installazione
RUN php artisan key:generate

