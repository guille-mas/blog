include .env
# speed up builds and improve build UI by enabling Docker Buildkit
export DOCKER_BUILDKIT=0

build:
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION}-production --target blog-production ./
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION}-development --target blog-development ./

push:
	docker login -u guillermomaschwitz
	docker push guillermomaschwitz/blog

clean:
	docker-compose down --rmi all
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}

run:
	@read -p "Write a command to run inside your docker environment: " command; \
	docker-compose run blog sh -c "$$command"

setup:
	docker-compose run blog npm install
	docker-compose run blog gatsby build

standalone-prod:
	docker run -p ${WEB_PORT}:${WEB_PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-production

standalone-dev:
	docker run -p ${WEB_PORT}:${WEB_PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-development
