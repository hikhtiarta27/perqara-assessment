# HOW TO RUN USING DOCKER

1. Run the container using command `make run`

# HOW TO STOP DOCKER CONTAINER

1. Stop the container using command `make down`

the container will run on port :3000. To change the default port please specify in `docker-compose.yml` file and run the container again

# HOW TO RUN WITHOUT DOCKER

1. `yarn install`
2. `yarn build`
3. `yarn start`

app will run on default port :3000

## Requirements

1. Node v18.16
