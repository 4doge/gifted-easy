#!/bin/bash

apt-get update -y && apt-get install -y nginx

cd /app && npm install
