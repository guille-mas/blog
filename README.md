# This blog

This is the code for a blog I am writing. \
I plan to write thoughts on software design, infrastructure as code, webapps, software development, industry best practices and devops processes from the perspective of a web developer inspired by those ideas.

## You could run the blog locally

If you have [Docker](https://www.docker.com/get-started) installed, you can spin up an instance of this blog at http://localhost:8000 by running the following command on a terminal: `docker run -p 8000:8000/tcp guillermomaschwitz/blog:1`

If you would like to run the development image instead, the command should be `docker run -p 8000:8000/tcp guillermomaschwitz/blog:1-development`

To wire the development environment to your local folder, run it like this: `docker-compose run blog`. Although remember to install vendors locally the first time by first running: `docker-compose run blog npm install`

## Useful commands

- `make standalone-prod` \
Helper method to run a standalone local container of the production environment
- `make standalone-prod` \
Helper method to run a standalone local container of the development environment
- `docker-compose up` \
Starts a fully working local development environment at http://localhost:8000 \
The first time you will have to install your own npm vendors with `docker-compose run blog npm install`
- `docker-compose down` \
Stops your local development environment, removes stopped containers and virtual networks
- `make run` \
Runs any command inside the composer development environment, from within blog/ folder
- `make clean` removes any artifact created during build or runtime
- `make build` \
Build inmutable Docker images like those available at [my Dockerhub account](https://hub.docker.com/r/guillermomaschwitz/blog)
- `make push` \
Push locall images to docker hub
- `make deploy` \
Creates or updates the aws infrastructure needed for this blog, and uploads the last production build available at dockerhub to AWS S3

