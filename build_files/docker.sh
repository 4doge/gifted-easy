#!/bin/bash

# TODO: also move credentials to secret file on S3

docker login -u $DOCKER_CLOUD_USERNAME -p $DOCKER_CLOUD_PASSWORD
docker build -t giftedeasy/gifted
docker push giftedeasy/gifted

