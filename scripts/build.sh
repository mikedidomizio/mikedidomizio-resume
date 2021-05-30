#!/usr/bin/env bash

source "${PWD}/scripts/vars.sh"

# ensure a clean build in the volume
rm -rf ./dist
# we build into a different directory and then move the output to the ./dist directory
# if you just do to dist there is a locked file issue
docker run -i --rm -v "${PWD}/src":/usr/src/app/src -v "${PWD}/dist":/usr/src/app/dist "$IMAGE_NAME" /bin/bash -c "yarn build --dest ./tmp/dist; cp -r ./tmp/dist ./"

