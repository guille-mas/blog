include .env
# speed up builds and improve build UI by enabling Docker Buildkit
export DOCKER_BUILDKIT=1

build:
	docker login -u guillermomaschwitz
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION} --target blog-core ./blog
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION}-production --target blog-production ./blog
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION}-development --target blog-development ./blog
	docker push guillermomaschwitz/blog

clean:
	docker-compose down
	-docker container rm $(docker container ls -qa)
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}-development
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}-production 
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}

run:
	@read -p "Write a command to run inside your docker environment: " command; \
	docker-compose run blog sh -c "$$command"

setup:
	docker-compose run blog npm install

