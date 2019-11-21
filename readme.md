# blog

Starting here a blog with thoughts about software design, infrastructure as code, webapps, software development, industry best practices and devops processes from a developers point of view.

Project structure:

- `blog/` blog source and static content
- `Dockerfile` docker image definition for development environment, available at https://hub.docker.com/r/guillermomaschwitz/blog
- `docker-compose.yml` containerized development environment
- `aws/` infrastructure as code with Terraform will go here
- `logs/` where development environment logs will go when things go wrong
- `Makefile` a place to define high level devops commands

Commands:

- `make build` build guillermomaschwitz/blog:1 and push it to https://hub.docker.com/r/guillermomaschwitz/blog
- `make setup` install npm vendors
- `docker-compose up` starts the local development environment at http://0.0.0.0:8000
