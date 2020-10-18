import { addErrorHandler, registerApplication, start } from 'single-spa';

import { loadAngularScript } from './loaders';
import { MENU_APP_URL, TRY_IT_APP_URL, ABILITIES_APP_URL, NLG_APP_URL, LOGIN_APP_URL } from './config';
import { activeWhenAnyExcept, activeWhenAnyOf, activeWhenPrefix } from './routes';

registerApplication({
  name: 'spa-menu',
  app: () => loadAngularScript(MENU_APP_URL).then(() => window.menu),
  activeWhen: location => activeWhenAnyExcept(['/login'], location),
});

registerApplication({
  name: 'spa-try-it',
  app: () => loadAngularScript(TRY_IT_APP_URL).then(() => window['try-it']),
  activeWhen: location => activeWhenAnyOf(['/', '/spa-try-it'], location),
});

registerApplication({
  name: 'spa-abilities',
  app: () => loadAngularScript(ABILITIES_APP_URL).then(() => window.abilities),
  activeWhen: location => activeWhenAnyOf(['/spa-abilities'], location),
});

registerApplication({
  name: 'spa-nlg',
  app: () => loadAngularScript(NLG_APP_URL).then(() => window.nlg),
  activeWhen: location => activeWhenAnyOf(['/spa-nlg'], location),
});

registerApplication({
  name: 'spa-login',
  app: () => loadAngularScript(LOGIN_APP_URL).then(() => window.login),
  activeWhen: location => activeWhenPrefix(['/'], location),
});

addErrorHandler(err => {
  console.log(err);
})

start();
