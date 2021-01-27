# todo alpine?
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Copy the lock file over
COPY yarn.lock ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# todo only necessary files
# Bundle app source
COPY . .

# EXPOSE 8080

# install dependencies to run puppeteer inside container
RUN apt-get -y update && \
 apt-get -y install libnss3 libatk-bridge2.0 libx11-xcb-dev libdrm2 libxkbcommon-dev libgtk3-perl libasound2

# use pm2 to start the `yarn serve` process in the background under http://localhost:8080
RUN yarn global add pm2

# keep as one command to ensure the intermediate container
RUN pm2 start yarn --interpreter bash --name app -- serve && yarn ci:test
