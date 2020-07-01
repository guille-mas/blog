# Multi stage build of inmutable blog images per environment

# Inmutable core image 
FROM node:13.1.0-alpine AS blog-production
ENV TERM=xterm-256color
ENV GATSBY_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN apk add --update --no-cache alpine-sdk gettext libtool autoconf automake make libpng-dev libjpeg-turbo-dev libc6-compat mesa-gl libx11 libxxf86vm libxi g++ nasm sysstat && \
    npm install -g node-gyp gatsby-cli
USER node
COPY --chown=node:node ./blog /home/node/blog
WORKDIR /home/node/blog
RUN npm install && gatsby build
CMD ["gatsby", "serve", "-H", "0.0.0.0", "--port", "8000"]
EXPOSE "8000"


# Inmutable image for development purposes
FROM blog-production AS blog-development
ENV NODE_ENV=development
RUN npm install
CMD ["gatsby", "develop", "-H", "0.0.0.0", "--port", "8000"]

