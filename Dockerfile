# Multi stage build of inmutable blog images per environment

# Inmutable core image 
FROM node:13.1.0 AS blog-core
ARG WEB_PORT
ENV TERM=xterm-256color
RUN npm install -g gatsby-cli
USER node
WORKDIR /home/node/blog
COPY --chown=node:node ./ ./
EXPOSE ${WEB_PORT}

# Inmutable image containing optimized website files
FROM blog-core AS blog-production
ENV NODE_ENV=production
RUN npm install && \
    gatsby build
CMD ["gatsby serve -H 0.0.0.0 --port ${WEB_PORT}"]


# Inmutable image for development purposes
FROM blog-production AS blog-development
ENV NODE_ENV=development
RUN npm install
CMD ["gatsby develop -H 0.0.0.0 --port ${WEB_PORT}"]
