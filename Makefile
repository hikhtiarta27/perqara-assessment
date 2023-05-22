NAME=nuxt3
VERSION=1.0.0

build:
	docker build -t $(NAME):$(VERSION) .

run:
	docker run -p 3000:3000 $(NAME):$(VERSION)