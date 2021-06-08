### This file is using multi-stage builds https://docs.docker.com/develop/develop-images/multistage-build/
### It requires 17.05 or higher to be run

ARG APPLICATION_NAME

########################################################################
### builder stage : Build the node application in /src/dist folder
FROM node:16 as builder
ARG APPLICATION_NAME

COPY . /src
WORKDIR /src
RUN yarn install && yarn run build:single-spa:$APPLICATION_NAME
########################################################################

########################################################################
### app stage : Run an nginx server from the built dist folder
FROM nginx as app
ARG APPLICATION_NAME
EXPOSE 80
COPY --from=builder /src/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/dist/$APPLICATION_NAME /usr/share/nginx/html
########################################################################
