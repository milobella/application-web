import { LifeCycles } from 'single-spa';

declare global {
  interface Window {
    menu: LifeCycles<never>;
    "try-it": LifeCycles<never>;
    login: LifeCycles<never>;
    abilities: LifeCycles<never>;
    nlg: LifeCycles<never>;
  }
}
