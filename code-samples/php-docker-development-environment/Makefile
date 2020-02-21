
# Bake an image of your development environment
build:
	docker build -t my-project:1.0-development --target dev-image .

start:
	docker run -p 80:80/tcp -v ${PWD}/src:/var/www/html -v ${PWD}/data:/tmp/mydata --rm --name my-project-container my-project:1.0-development

exec:
	@read -p "Write a command to execute inside your running container: " command; \
	docker exec my-project-container sh -c "$$command"

stop: 
	-docker container stop my-project-container

clean: stop	
	-docker container rm my-project-container
	docker image rm my-project:1.0-development

