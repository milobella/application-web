import { registerApplication, start } from 'single-spa';
import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';

import { loadAngularScript } from './loaders';

const spaPathPrefix = "/spa"
const APPLICATIONS_URLS = {
  "@milobella/menu": spaPathPrefix + '/menu',
  "@milobella/login": spaPathPrefix + '/login',
  "@milobella/abilities": spaPathPrefix + '/abilities',
  "@milobella/try-it": spaPathPrefix + '/try-it',
  "@milobella/nlg": spaPathPrefix + '/nlg',
}

const element = document.querySelector('#single-spa-layout')
if (element) {
  const routes = constructRoutes(element);
  const applications = constructApplications({
    routes,
    loadApp: function (param : {name: string}) {
      const appName = param.name.replace("@milobella/", '')
      return loadAngularScript(APPLICATIONS_URLS[param.name]).then(() => window[appName])
    },
  });
  const layoutEngine = constructLayoutEngine({ routes, applications });
  applications.forEach(registerApplication);
  start();
}


