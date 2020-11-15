![Docker Deploy](https://github.com/milobella/application-web/workflows/Deploy/badge.svg)
![Build](https://github.com/milobella/application-web/workflows/Build/badge.svg)


# Milobella website portal
The milobella website is powered by [single-spa](https://single-spa.js.org). It allows us to separate it in 
several part called micro-frontends.

Each of the micro-frontends is deployed in its own Pod and Service.

The [portal](#portal) folder contains single spa main configuration. It contains no business and configure only the single spa applications.

Each single spa application is an Angular Application project that can be find in ``angular/projects`` directory.
- [login](#login) - login page of the website
- [menu](#menu) - menu of the website
- [try-it](#try-it) - interface to speak with Milobella
- [abilities](#abilities) - management of abilities configuration
- [nlg](#nlg) - interface to manage text generation models

>
> In coming:
> - nlu : to manage text understanding models
> - tts : to configure the Text To Speech
> - stt : to configure the Speech To Text

## Micro-frontends
##### Portal
``portal`` is the main MF of the website. It does not contain much html and its only purpose is to merge
every MFs in one unique page.

##### Login
The `login` MF is materialized by the login prompt. It is displayed whenever the user is not logged in. (i.e. the token
is not found or expired)

It is used as a guard for every other routes.

> More details here : [login](angular/projects/login).

##### Menu
The `menu` MF is materialized by the navigation bar at the top of the site. It allows us to navigate in
each tab of the website which are probably each separated in their own MF.

> More details here : [menu](angular/projects/login).

##### Try It
``try-it`` app is a simple and pure chat tool.

We write something and Milobella answers us, nothing more...

> More details here : [try-it](angular/projects/try-it).

##### Abilities
``abilities`` app allows the user to modify Abilities' configurations.

It makes CRUD actions on Abilities' configurations.

> More details here : [abilities](angular/projects/abilities).

##### NLG
``nlg`` is the app of Natural Language Generation.
It allows us to modify the sentences that Milobella can produce in all languages.

On the left we have a very detailed robotic sentence produced by Milobella.

On the right we give some "translations" in real life words. We can add one or more sentences by robotic ones, and by
language.

> More details here : [nlg](angular/projects/nlg).

##### NLU
> In construction
>
##### STT
> In construction

##### TTS
> In construction

## More documentation
Go to https://single-spa.js.org/docs/ecosystem-angular/ to learn how all of this works.
