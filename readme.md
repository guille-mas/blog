# blog

Thoughts on software design, infrastructure as code, webapps, software development, industry best practices and devops processes from a developers point of view.

Project structure:

- `blog/` blog source and static content
- `Dockerfile` docker image definition for development environment, available at https://hub.docker.com/r/guillermomaschwitz/blog
- `docker-compose.yml` containerized development environment
- `aws/` infrastructure as code with Terraform will go here
- `logs/` where development environment logs will go when things go wrong
- `Makefile` a place to define high level devops commands

Commands:

- `make build` \
Build inmutable Docker images and push them to [my Dockerhub account](https://hub.docker.com/r/guillermomaschwitz/blog)
- `make setup` \
Execute a set of steps required by the local dev environment to work smoothly
- `docker-compose up` \
Starts a containerized local development environment at http://0.0.0.0:8000
- `docker-compose down` \
Stops your local development environment
- `make run` \
Runs any command inside the container from within blog/ folder

How to start the environment the first time:

- `make setup && docker-compose up`
