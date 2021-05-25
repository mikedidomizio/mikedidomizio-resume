# the purpose of this Dockerfile is to build and have ready a Linux version that we can test against

FROM mhart/alpine-node:12

# Create app directory
WORKDIR /usr/src/app

# install dependencies to run puppeteer inside container
RUN apk update && apk add --no-cache bash chromium chromium-chromedriver

# We specify the env vars required for the e2e style tests
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true CHROME_BIN=/usr/bin/chromium-browser CHROME_PATH=/usr/lib/chromium/ CHROMEDRIVER_PATH=/usr/bin/chromedriver

# Specify to always use bash for yarn commands
RUN yarn config set script-shell /bin/bash

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# todo only necessary files
## Bundle app source
COPY . .

## Add pm2 so that inside the docker image we can run both the HTTP server and tests within the same terminal
RUN yarn global add pm2
