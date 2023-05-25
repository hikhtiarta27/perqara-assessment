NAME=moovie-time
VERSION=1.0.0

build:
	docker build -t $(NAME):$(VERSION) .

run:
	docker-compose up -d

down:
	docker-compose down