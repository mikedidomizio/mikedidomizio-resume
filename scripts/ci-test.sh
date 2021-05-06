#!/bin/bash

# this file was designed so someone could quickly get the CI images and ensure that the build will pass in CI

# runs tests against the pre-built docker image
winpty docker run -it --rm -v /"$PWD"/src/__tests__:/usr/src/app/src/__tests__ mikedidomizio.com:latest //bin//bash -c "pm2 start yarn --wait-ready --interpreter bash --name app -- serve; yarn ci:test"
