# the purpose of this Dockerfile is to build and have ready a Linux version that we can test against

FROM node:16.10.0-buster

# Create app directory
WORKDIR /usr/src/app

# install dependencies to run puppeteer inside container
RUN apk update && apk add --no-cache bash chromium chromium-chromedriver

# We specify the env vars required for the e2e style tests
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true CHROME_BIN=/usr/bin/chromium-browser CHROME_PATH=/usr/lib/chromium/ CHROMEDRIVER_PATH=/usr/bin/chromedriver

## Bundle app source
COPY . .

## Skips the Chromium download
## encountered this on MacOS
## https://github.com/puppeteer/puppeteer/issues/7740#issuecomment-970490323
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install app dependencies
RUN yarn install


## Add pm2 so that inside the docker image we can run both the HTTP server and tests within the same terminal
RUN yarn global add pm2
