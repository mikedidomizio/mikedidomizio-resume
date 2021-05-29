#!/usr/bin/env bash

# docker run -i --rm -v "${PWD}/src":/usr/src/app/src -v "${PWD}"/coverage:/usr/src/app/coverage mikedidomizio/mikedidomizio.com:latest /bin/bash -c "pm2 start yarn --wait-ready --interpreter bash --name app -- serve; yarn ci:test"
docker run -i --rm -v "${PWD}/src":/usr/src/app/src -v "${PWD}"/coverage:/usr/src/app/coverage "$1" /bin/bash -c "pm2 start yarn --wait-ready --interpreter bash --name app -- serve; yarn ci:test"

