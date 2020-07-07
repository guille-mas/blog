# inmutable production image
FROM node:13.13-alpine AS blog-production
ARG PORT
ENV PORT=${PORT}
ENV TERM=xterm-256color
ENV GATSBY_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN apk add --update --no-cache alpine-sdk gettext libtool autoconf automake make libpng-dev libjpeg-turbo-dev libc6-compat mesa-gl libx11 libxxf86vm libxi g++ nasm && \
    npm install -g node-gyp gatsby-cli
USER node
COPY --chown=node:node ./ /home/node/blog
WORKDIR /home/node/blog
RUN npm install --only=prod && gatsby build
CMD ["sh", "-c", "gatsby serve -H 0.0.0.0 --port $PORT"]
EXPOSE "$PORT"


# Inmutable image for development purposes
FROM blog-production AS blog-development
ENV NODE_ENV=development
RUN npm install --only=dev
CMD ["sh", "-c", "gatsby develop -H 0.0.0.0 --port $PORT"]

