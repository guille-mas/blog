# blog

Starting here a blog with thoughts about software design, infrastructure as code, webapps, and software development

Project structure:

- `blog/` blog source and static content
- `server/` a very basic nodejs http server to use for development purposes
- `Dockerfile` docker image I use for the development environment
- `docker-compose.yml` docker image setup as a development environment
- `aws/` infrastructure as code with Terraform will go here
- `logs/` where development environment logs will go when things go wrong
- `Makefile` a place to define high level devops commands

Commands:

- `docker-compose up` starts the local development environment at http://0.0.0.0:8081
- `make build` builds a nodejs 13.1 docker image used for development purposes

