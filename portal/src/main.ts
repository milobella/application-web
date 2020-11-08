import { registerApplication, start } from 'single-spa';
// import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';
const singleSpaLayout = require('single-spa-layout');

import { loadAngularScript } from './loaders';

const spaPathPrefix = "/spa"
const APPLICATIONS_URLS = {
  "@milobella/menu": spaPathPrefix + '/menu',
  "@milobella/try-it": spaPathPrefix + '/try-it',
  "@milobella/nlg": spaPathPrefix + '/nlg',
  "@milobella/abilities": spaPathPrefix + '/abilities',
  "@milobella/login": spaPathPrefix + '/login',
}

const element = document.querySelector('#single-spa-layout')
if (element) {
  const routes = singleSpaLayout.constructRoutes(element);
  const applications = singleSpaLayout.constructApplications({
    routes,
    loadApp: function (param : {name: string}) {
      const appName = param.name.replace("@milobella/", '')
      return loadAngularScript(APPLICATIONS_URLS[param.name]).then(() => window[appName])
    },
  });
  const layoutEngine = singleSpaLayout.constructLayoutEngine({ routes, applications });
  applications.forEach(registerApplication);
  start();
}


