include .env

# Bake an image of your development environment
build:
	docker build -t my-project:1.0-development \
		--build-arg HTTP_PORT=${HTTP_PORT} \
		--build-arg HTTPS_PORT=${HTTPS_PORT} \
		--target dev-image .

start:
	docker run --rm \
		-p ${HTTP_PORT}:${HTTP_PORT}/tcp \
		-p ${HTTPS_PORT}:${HTTPS_PORT}/tcp \
		-v ${PWD}/src:/usr/local/project \
		-v ${PWD}/data:/tmp/mydata \
		-e HTTPS_PORT=${HTTPS_PORT} \
		-e HTTP_PORT=${HTTP_PORT} \
		-e HELLO_NAME=${HELLO_NAME} \
		--name my-project-container \
		my-project:1.0-development

exec:
	@read -p "Write a command to execute inside your running container: " command; \
	docker exec my-project-container sh -c "$$command"

stop: 
	-docker container stop my-project-container

clean: stop	
	-docker container rm my-project-container
	docker image rm my-project:1.0-development

