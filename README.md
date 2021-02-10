<p align="center">
  <img width="320" src="https://i.imgur.com/9reJemW.png">
</p>

![GitHub release (latest by date)](https://img.shields.io/github/v/release/omretterry/vea-li-template)
[![Build Status](https://travis-ci.com/omretterry/vea-li-template.svg?branch=master)](https://travis-ci.com/omretterry/vea-li-template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/omretterry/vea-li-template)
![GitHub last commit](https://img.shields.io/github/last-commit/omretterry/vea-li-template)
![GitHub all releases](https://img.shields.io/github/downloads/omretterry/vea-li-template/total)
![GitHub](https://img.shields.io/github/license/omretterry/vea-li-template)

English | [简体中文](./README.zh-CN.md)

## Special thanks

This Project was simplified based on [vue-element-admin](https://panjiachen.github.io/vue-element-admin).The all-future front-end solutions, please check [vue-element-admin github](https://github.com/PanJiaChen/vue-element-admin/).

## Introduction

`vae-li-template` is based on [vue-element-admin](https://panjiachen.github.io/vue-element-admin) modified streamlined background template.It keeps[vue-element-admin](https://panjiachen.github.io/vue-element-admin)based framework, at the same time deleted most of components and auxiliary functions. Reduce the cost of setting up the framework in the early stage of the background project development. All-future background framework integration scheme, although the function is very powerful, but in many cases most of the function is redundant. If you want a lean, yet not too crude, backend project to use as a foundation for development, this project will help you.

## Preparation

First need to understand [vue-element-admin](https://panjiachen.github.io/vue-element-admin), it's very detailed documentation. Please read it first.

The most part of technology stack is as same as [vue-element-admin](https://panjiachen.github.io/vue-element-admin)'s technology stack：
The local environment: [node](http://nodejs.org/) and [git](https://git-scm.com/). Main technology stack: [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) and [element-ui](https://github.com/ElemeFE/element)

## Major modifications from Vue Element Admin

```
Tags：
[-] Delete
[+] New
[.] reserved part
[!] modified

- Build tools
 - [!] Mock - Keep only the user logged in and out apis
  - [!] edit user login response data
 - [-] plop - Microgenerator framework (code generation tool)
 - [-] the environment files of production environment and other environments
 - [+] add vuex-persistedstate

- Projects
 - [-] Role management module
 - [-] Dynamic routing

 - [!] User Login
  - [-] Delete third party login
  - [-] Deletes user role judgment
  - [!] edit user login router guard

 - [!] Page layout
  - [.] Only the full-screen function button is retained

 - [!] The left side menu
  - [.] Keep only the [Dashboard] page

 - [!] Other pages
  - [.] Keep the 401 and 404 error pages
  - [.] Save the [Profile] page
  - [.] Retains the redirect page
  - [.] Retains the login page
```

## Description of modification

- Modification of build tools
  - For example, the deletion of PLOP and other tools can be added as needed in the later stage without affecting the basic framework, so it will be deleted
- Project section
  - Role management and dynamic routing depend on the definition of permissions and roles in each project interface, which can hardly meet the actual development needs, so they are removed
- Page function section
  - Only some error pages are kept, and other feature demo pages are deleted. Similarly, component functionality needs to be adapted to the actual development needs and should not be used as base template content
  - Keep the page header breadcrumbs

## Getting started

```bash
# clone the project
git clone https://github.com/omretterry/vea-li-template.git

# enter the project directory
cd vea-li-tempalte

# install dependencies
npm install

# develop
npm run dev
```

This will automatically open http://localhost:9999

## Build

```bash
# Build for production environment
npm run build
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint:fix
```

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/omretterry/vea-li-template/releases).

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

## License

[MIT](https://github.com/omretterry/vea-li-template/blob/master/LICENSE)

Copyright (c) 2021-present Terryli
