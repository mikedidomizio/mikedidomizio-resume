# the purpose of this Dockerfile is to build and have ready a Linux version that we can test against

FROM node:16.10.0-alpine

ARG CHROMIUM=116.0.5845.140-r0

# Create app directory
WORKDIR /usr/src/app

# install dependencies to run puppeteer inside container
RUN apk update && apk add --no-cache bash chromium@edge=$CHROMIUM chromium-chromedriver python3 py3-pip g++ make

# We specify the env vars required for the e2e style tests
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true CHROME_BIN=/usr/bin/chromium-browser CHROME_PATH=/usr/lib/chromium/ CHROMEDRIVER_PATH=/usr/bin/chromedriver

## Bundle app source
COPY . .

# Install app dependencies
RUN yarn install

# Install Puppeteer
RUN node node_modules/puppeteer/install.js

## Add pm2 so that inside the docker image we can run both the HTTP server and tests within the same terminal
RUN yarn global add pm2
