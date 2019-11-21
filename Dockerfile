FROM node:13.1.0

WORKDIR /home/node/blog
RUN npm install -g gatsby-cli

USER node
EXPOSE 8000
