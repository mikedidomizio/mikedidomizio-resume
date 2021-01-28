# builds the docker container and runs the tests against it
# because the container is a different OS than Windows, there is a separate snapshots directory `ci`
# for it to compare against

FROM mhart/alpine-node:12

# Create app directory
WORKDIR /usr/src/app

# install dependencies to run puppeteer inside container
RUN apk update && apk add --no-cache bash chromium chromium-chromedriver

# We specify the env vars required for the e2e style tests
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true CHROME_BIN=/usr/bin/chromium-browser CHROME_PATH=/usr/lib/chromium/ CHROMEDRIVER_PATH=/usr/bin/chromedriver

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# todo only necessary files
# Bundle app source
COPY . .

# use pm2 to start the `yarn serve` process in the background under http://localhost:8080
RUN yarn global add pm2

# keep as one command to ensure the intermediate container for the pm2 process remains running
RUN pm2 start yarn --wait-ready --interpreter bash --name app -- serve && yarn ci:test
