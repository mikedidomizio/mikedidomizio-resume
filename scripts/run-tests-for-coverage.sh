#!/usr/bin/env bash

source "${PWD}/scripts/vars.sh"

docker run -i --rm \
	-v "${PWD}/src":/usr/src/app/src \
	-v "${PWD}"/coverage:/usr/src/app/coverage \
	"$IMAGE_NAME" /bin/bash \
	-c "pm2 start yarn --wait-ready --interpreter bash --name app -- serve; yarn ci:test"

