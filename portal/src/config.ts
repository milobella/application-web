export let MENU_APP_URL: string;
export let TRY_IT_APP_URL: string;
export let LOGIN_APP_URL: string;
export let ABILITIES_APP_URL: string;
export let NLG_APP_URL: string;

const spaPathPrefix = '/spa';

if (process.env.NODE_ENV === 'production') {
  MENU_APP_URL = spaPathPrefix + '/menu';
  TRY_IT_APP_URL = spaPathPrefix + '/try-it';
  LOGIN_APP_URL = spaPathPrefix + '/login';
  ABILITIES_APP_URL = spaPathPrefix + '/abilities';
  NLG_APP_URL = spaPathPrefix + '/nlg';
} else {
  MENU_APP_URL = 'http://localhost:4201';
  TRY_IT_APP_URL = 'http://localhost:4202';
  LOGIN_APP_URL = 'http://localhost:4203';
  ABILITIES_APP_URL = 'http://localhost:4204';
  NLG_APP_URL = 'http://localhost:4205';
}
