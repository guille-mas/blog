
build:
	docker build -f ./Dockerfile -t guilledevel/blog ./src

clean:
	docker image rm guilledevel/blog

