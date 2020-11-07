import { registerApplication, start } from 'single-spa';
// import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';

import { loadAngularScript } from './loaders';
import { MENU_APP_URL, TRY_IT_APP_URL, ABILITIES_APP_URL, NLG_APP_URL, LOGIN_APP_URL } from './config';

const singleSpaLayout = require('single-spa-layout')
const urls = {
  "@milobella/menu": MENU_APP_URL,
  "@milobella/try-it": TRY_IT_APP_URL,
  "@milobella/abilities": ABILITIES_APP_URL,
  "@milobella/nlg": NLG_APP_URL,
  "@milobella/login": LOGIN_APP_URL,
}

const element = document.querySelector('#single-spa-layout')
if (element) {
  const routes = singleSpaLayout.constructRoutes(element);
  const applications = singleSpaLayout.constructApplications({
    routes,
    loadApp: function (param : {name: string}) {
      const appName = param.name.replace("@milobella/", '')
      return loadAngularScript(urls[param.name]).then(() => window[appName])
    },
  });
  const layoutEngine = singleSpaLayout.constructLayoutEngine({ routes, applications });
  applications.forEach(registerApplication);
  start();
}




//
//
//
//
//
//
// registerApplication({
//   name: 'spa-menu',
//   app: () => loadAngularScript(MENU_APP_URL).then(() => window.menu),
//   activeWhen: location => activeWhenAnyExcept(['/login'], location),
// });
//
// registerApplication({
//   name: 'spa-try-it',
//   app: () => loadAngularScript(TRY_IT_APP_URL).then(() => window['try-it']),
//   activeWhen: location => activeWhenAnyOf(['/', '/spa-try-it'], location),
// });
//
// registerApplication({
//   name: 'spa-abilities',
//   app: () => loadAngularScript(ABILITIES_APP_URL).then(() => window.abilities),
//   activeWhen: location => activeWhenAnyOf(['/spa-abilities'], location),
// });
//
// registerApplication({
//   name: 'spa-nlg',
//   app: () => loadAngularScript(NLG_APP_URL).then(() => window.nlg),
//   activeWhen: location => activeWhenAnyOf(['/spa-nlg'], location),
// });
//
// registerApplication({
//   name: 'spa-login',
//   app: () => loadAngularScript(LOGIN_APP_URL).then(() => window.login),
//   activeWhen: location => activeWhenPrefix(['/'], location),
// });
//
// addErrorHandler(err => {
//   console.log(err);
// })


