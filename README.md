# Config Composer

![GitHub last commit](https://img.shields.io/github/last-commit/noxsios/config-composer) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/noxsios/config-composer) ![GitHub](https://img.shields.io/github/license/noxsios/config-composer) ![GitHub deployments](https://img.shields.io/github/deployments/noxsios/config-composer/github-pages) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Noxsios_config-composer&metric=ncloc)](https://sonarcloud.io/dashboard?id=Noxsios_config-composer) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Noxsios_config-composer&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Noxsios_config-composer)

> __BLUF__: This PWA ingests a Markdown template file formatted with Mustache, and a YAML cutsheet file which are rendered into a clean HTML representation of the Markdown template with the YAML values.

## [DEMO](https://noxsios.github.io/config-composer/)

This project combines the best of multiple technologies:

- [PWA](https://web.dev/progressive-web-apps/) for all the power of a web app, but also full offline capabilities
- [Mustache](https://mustache.github.io/) for its dead simple but powerful templating system
- [YAML](https://yaml.org/) for its simplicity and human readability of metadata / configuration data
- [Markdown](https://en.wikipedia.org/wiki/Markdown), specifically [Github flavored](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax), for its dead simple syntax and human readability
- [React + CRA](https://reactjs.org/) as the JS library to build the UI
  - [Elastic UI](https://elastic.github.io/eui/#/) and [Material UI](https://material-ui.com/) as the main React component libraries, along with [React Toastify](https://github.com/fkhadra/react-toastify)
- etc...

### Running Locally:

First clone this repo then:

```bash
$ cd config-composer
$ yarn
$ yarn start
```

Follow the [CRA](https://create-react-app.dev/docs/getting-started/#scripts) docs to learn more.

