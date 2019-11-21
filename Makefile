include .env

build:
	docker login -u guillermomaschwitz
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION} ./
	docker push guillermomaschwitz/blog:${PROJECT_VERSION}

clean:
	docker image rm guillermomaschwitz/blog:${PROJECT_VERSION}

run:
	@read -p "Write a command to run inside your docker environment: " command; \
	docker-compose run blog sh -c "$$command"

start:
	docker-compose run blog sh -c "npm install && gatsby develop"

