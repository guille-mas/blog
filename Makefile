include .env .secrets
# speed up builds and improve build UI by enabling Docker Buildkit
export DOCKER_BUILDKIT=0

standalone-prod:
	docker run --rm -p ${PORT}:${PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-production

standalone-dev:
	docker run --rm -p ${PORT}:${PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-development

start:
	docker-compose up

build:
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION} -t guillermomaschwitz/blog:${PROJECT_VERSION}-production --target blog-production --build-arg PORT=${PORT} ./blog
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION}-development --target blog-development --build-arg PORT=${PORT} ./blog

push:
	docker login -u guillermomaschwitz -p "${DOCKER_REPO_CREDENTIALS}"
	docker push guillermomaschwitz/blog

clean:
	docker-compose down --rmi all
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}
	docker image rm -f guillermomaschwitz/blog:${PROJECT_VERSION}-production

run:
	@read -p "Write a command to run inside your docker environment: " command; \
	docker-compose run --rm blog sh -c "$$command"

deploy:
# install any missing terraform plugin
	terraform init -var-file="./terraform.tfvars"
# update the infrastructure if needed
	terraform apply -parallelism=100 -var-file="./terraform.tfvars"
# remove if needed previous container
	- rm -rf /tmp/guille-cloud-blog-dist
# start production container
	docker run --rm -d --name blog-prod guillermomaschwitz/blog:${PROJECT_VERSION}-production
# copy prod files from docker container to dist folder
	docker cp blog-prod:/home/node/blog/public /tmp/guille-cloud-blog-dist
# stop container
	docker stop blog-prod
# remove container
	docker rm blog-prod
# upload ./dist folder to s3
	aws s3 sync /tmp/guille-cloud-blog-dist s3://website-guille-dot-cloud-2
#	aws s3 sync/tmp/guille-cloud-blog-dist s3://www.guille.cloud

push-code:
# remove if needed previous container
	- rm -rf /tmp/guille-cloud-blog-dist
# start production container
	docker run --rm -d --name blog-prod guillermomaschwitz/blog:${PROJECT_VERSION}-production
# copy prod files from docker container to dist folder
	docker cp blog-prod:/home/node/blog/public /tmp/guille-cloud-blog-dist
# stop container
	docker stop blog-prod
# remove container
	docker rm blog-prod
# upload ./dist folder to s3
	aws s3 sync /tmp/guille-cloud-blog-dist s3://website-guille-dot-cloud-2
#	aws s3 sync/tmp/guille-cloud-blog-dist s3://www.guille.cloud


all: build push deploy
