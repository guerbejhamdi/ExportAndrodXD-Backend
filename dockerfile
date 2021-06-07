FROM node:14.17.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "npm-shrinkwrap.json", "./"]
RUN npm install
COPY . .
CMD [ "npm", "start" ]