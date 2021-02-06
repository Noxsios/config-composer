# Config Composer

> BLUF: This PWA ingests a Markdown template file formatted with Mustache, and a YAML cutsheet file which are combined into a clean HTML representation of the Markdown template with the YAML values.

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

### TODO

- [x] Persistency?
- [x] Create a more in depth sample
- [ ] Implement more code splitting / better bundling
- [ ] Flip back between raw MB and rendered?
- [ ] Edit YAML / metadata in browser? + resave
- [x] Pick up where you left off choice modal
  - [x] store in indexeddb -future proofs against saving more files

