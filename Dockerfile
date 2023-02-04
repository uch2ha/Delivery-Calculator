FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5115

# # run tests and application everytime when container is loaded or started
CMD [ "npm", "run", "startAndTests"]