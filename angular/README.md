# Milobella Angular packages
This folder is an Angular workspace containing all the necessary resources to run the Angular apps composing the Milobella website.

### Libraries
Under ``projects/milobella`` directory, you will find the Angular libraries that can be used by any app.
These libraries are also deployed under the ``@milobella`` scope.

### Applications
Each of the ``projects/*`` directories, except the ``projects/milobella`` one, is an Angular application meant to be registered as
a single-spa application in the [Milobella Portal Website](../portal).

#### Application development
We don't necessarily want to have the whole single-spa environment running when developing an application.

For this reason, each application have a dedicated command in the package.json, that you can run using 

```bash
yarn run serve:dev:<name of the app>
``` 

This command will :
- Run the Angular app in development mode with all the necessary dependencies, in particular the login component and redirection.
- Create a webpack proxy for the different APIs requests.

#### Application production build
Each application can be built for production with this command :

```bash
yarn run build:single-spa:<name of the app>
``` 

This command will produce a ``dist/<name of the app>`` directory that can be served by the common Dockerfile.

#### Application release
Every tag/release on this repository is producing a docker image for each Angular app with name ``milobella/website-app-<name of the app>`` and
deployed in the [Milobella DockerHub organization](https://hub.docker.com/orgs/milobella/repositories).

Since the apps are all built the same way, we use the same Dockerfile for each of them, with an ``APPLICATION_NAME`` argument.
e.g.: this command is building the docker image of the ``menu`` app
```bash
$ export APPLICATION_NAME=menu
$ docker build -t milobella/website-app-${APPLICATION_NAME} --build-arg APPLICATION_NAME .
```
