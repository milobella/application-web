### This file is using multi-stage builds https://docs.docker.com/develop/develop-images/multistage-build/
### It requires 17.05 or higher to be run

########################################################################
### builder stage : Build the node application in /src/dist folder
FROM node:lts as builder

COPY . /src
WORKDIR /src
RUN yarn install && yarn run build:prod

########################################################################


########################################################################
### app stage : Run an apache server from the built dist folder
FROM httpd:2.4 as app
COPY --from=builder /src/.htaccess /usr/local/apache2/htdocs/
COPY --from=builder /src/dist/ /usr/local/apache2/htdocs/
COPY --from=builder /src/httpd.conf /usr/local/apache2/conf/httpd.conf
########################################################################
