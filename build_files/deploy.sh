#!/bin/bash

docker login -e $DOCKER_CLOUD_EMAIL -u $DOCKER_CLOUD_USERNAME -p $DOCKER_CLOUD_PASSWORD
docker build -t giftedeasy/gifted .
docker push giftedeasy/gifted

