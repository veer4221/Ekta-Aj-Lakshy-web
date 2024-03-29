#Using the alpine flavor of linux from dockerhub that has node preinstalled as our base container.
FROM node:alpine

#Setting the working directory inside the container to be the same name as our app on our local machine.
WORKDIR '/ekta-aj-lakshy-web'

#Copying our package.json file from our local machine to the working directory inside the docker container.
COPY package*.json ./

#Installing the dependencies listed in our package.json file.
RUN npm install -f

#Copying our project files from our local machine to the working directory in our container.
COPY . .

#Setting the default RUN command for our built container to run our test suite.
CMD ["npm", "run"]