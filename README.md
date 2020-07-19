![.github/workflows/docker.yml](https://github.com/milobella/application-web/workflows/.github/workflows/docker.yml/badge.svg)

# Milobella website portal
The milobella website is powered by [single-spa](https://single-spa.js.org). It allows us to separate it in 
several part called micro-frontends.

Each of the micro-frontends have its own Pod and Service.

The [portal](#portal) folder contains single spa main configuration. It contains no business and configure only the single spa applications.

All single spa applications have their own respective folder. They are easy to recognize because they
are all prefixed by `spa-` in the repositories :
- [spa-login](#spa-login): Login page of the website
- [spa-menu](#spa-menu): Menu of the website
- [spa-try-it](#spa-try-it): interface to speak with Milobella
- [spa-abilities](#spa-abilities): management of abilities configuration
- [spa-nlu-management](#spa-nlu-management): interface to manage text understanding models
- [spa-nlg-management](#spa-nlg-management): interface to manage text generation models

>
> In coming:
> - spa-tts-configuration : to configure the Text To Speech
> - spa-stt-configuration : to configure the Speech To Text
>

## Micro-frontends
##### Portal
``portal`` is the main MF of the website. It does not contain much html and its only purpose is to merge
every MFs in one unique page.

##### SPA Login
The `login` MF is materialized by the login prompt. It is displayed whenever the user is not logged in. (i.e. the token
is not found or expired)

It is used as a guard for every other routes.

> More details here : [spa-login](spa-login).

##### SPA Menu
The `menu` MF is materialized by the navigation bar at the top of the site. It allows us to navigate in
each tab of the website which are probably each separated in their own MF.

> More details here : [spa-menu](spa-menu).

##### SPA Try It
``spa-try-it`` is a simple and pure chat tool.

We write something and Milobella answers us, nothing more...

> More details here : [spa-try-it](spa-try-it).

##### SPA Abilities
``spa-abilities`` allows the user to modify Abilities' configurations.

It makes CRUD actions on Abilities' configurations.

> More details here : [spa-abilities](spa-abilities).

##### SPA NLU Management
``spa-nlu-management`` is the module of Natural Language Understanding.
It will contain the sentences which permits to train the understanding model.

We can write a text, categorize it and tag some important words or group of words in the sentence.

> More details here : [spa-nlu-management](spa-nlu-management).

##### SPA NLG Management
``spa-nlg-management`` is the module of Natural Language Generation.
It allows us to modify the sentences that Milobella can produce in all languages.

On the left we have a very detailed robotic sentence produced by Milobella.

On the right we give some "translations" in real life words. We can add one or more sentences by robotic ones, and by
language.

> More details here : [spa-nlg-management](spa-nlg-management).

##### SPA STT Configuration
> In construction

##### SPA TTS Configuration
> In construction

## More documentation
Go to https://github.com/CanopyTax/single-spa-angular to learn how all of this works.
