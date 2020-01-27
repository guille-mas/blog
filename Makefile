include .env
# speed up builds and improve build UI by enabling Docker Buildkit
export DOCKER_BUILDKIT=0


standalone-prod:
	docker run -p ${WEB_PORT}:${WEB_PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-production

standalone-dev:
	docker run -p ${WEB_PORT}:${WEB_PORT} guillermomaschwitz/blog:${PROJECT_VERSION}-development



build:
	docker build -f ./Dockerfile -t guillermomaschwitz/blog:${PROJECT_VERSION} -t guillermomaschwitz/blog:${PROJECT_VERSION}-production --target blog-production ./
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

# creates the infrastructure needed by the blog:
# an s3 bucket where to upload the website, a cloudfront CDN, DNS certificates, etc
aws-setup:
	terraform apply -parallelism=100 --auto-approve

deploy:
# start production container
	docker run -d --name blog-prod guillermomaschwitz/blog:${PROJECT_VERSION}-production
# copy prod files from docker container to dist folder
	docker cp blog-prod:/home/node/blog/public /tmp/guille-cloud-blog-dist
# stop container
	docker stop blog-prod
# remove container
	docker rm blog-prod
# upload ./dist folder to s3
	aws s3 sync /tmp/guille-cloud-blog-dist s3://website-guille-dot-cloud
#	aws s3 sync/tmp/guille-cloud-blog-dist s3://www.guille.cloud
