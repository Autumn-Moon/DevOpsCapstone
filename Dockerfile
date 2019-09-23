### STAGE 1: Angular Build ###
FROM node:alpine as angularbuild
RUN apk update && apk add --no-cache make git

## Creating a Working Directory
RUN mkdir /sowtracker-app 
WORKDIR /sowtracker-app

##Copying our project into the image
COPY package.json package-lock.json /sowtracker-app/

#Install dependencies of the project
RUN cd /sowtracker-app && npm set progress=false && npm install

#Copy rest of the project
COPY . /sowtracker-app

## Build the angular app in production mode and store the artifacts in dist folder
RUN cd /sowtracker-app && npm run build --aot --prod


### STAGE 2: Setup ###
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=angularbuild /sowtracker-app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
