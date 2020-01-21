# Multi stage build of inmutable blog images per environment

# Inmutable core image 
FROM node:13.1.0 AS blog-core
ARG WEB_PORT
ENV TERM=xterm-256color
RUN npm install -g gatsby-cli && \
    apt update && \
    apt install -y libglu1-mesa-dev && \
    apt-get -y autoremove && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
USER node
COPY --chown=node:node ./blog /home/node/blog
WORKDIR /home/node/blog
EXPOSE "${WEB_PORT}"

# Inmutable image containing optimized website files
FROM blog-core AS blog-production
ENV NODE_ENV=production
RUN npm install && \
    gatsby build
CMD ["gatsby", "serve", "-H", "0.0.0.0", "--port", "8000"]


# Inmutable image for development purposes
FROM blog-production AS blog-development
ENV NODE_ENV=development
RUN npm install
CMD ["gatsby", "develop", "-H", "0.0.0.0", "--port", "8000"]

