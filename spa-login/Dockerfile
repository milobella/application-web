### This file is using multi-stage builds https://docs.docker.com/develop/develop-images/multistage-build/
### It requires 17.05 or higher to be run

########################################################################
### builder stage : Build the node application in /src/dist folder
FROM node as builder

COPY . /src
WORKDIR /src
RUN yarn install && yarn run build

########################################################################


########################################################################
### app stage : Run an apache server from the built dist folder
FROM nginx as app
EXPOSE 80
COPY --from=builder /src/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/dist/ /usr/share/nginx/html
########################################################################
