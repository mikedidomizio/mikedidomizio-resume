#!/usr/bin/env bash

source "${PWD}/scripts/vars.sh"

docker build -t "$IMAGE_NAME" .

