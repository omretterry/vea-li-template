<p align="center">
  <img width="320" src="https://i.imgur.com/9reJemW.png">
</p>

![GitHub last commit](https://img.shields.io/github/last-commit/omretterry/vea-li-template)
![GitHub all releases](https://img.shields.io/github/downloads/omretterry/vea-li-template/total)
![GitHub](https://img.shields.io/github/license/omretterry/vea-li-template)

[English](./README.md) | 简体中文

## 特别鸣谢

本项目是在[vue-element-admin](https://panjiachen.github.io/vue-element-admin)基础上进行的简化修改，完整后台前端解决方案请转跳至[vue-element-admin github 项目地址](https://github.com/PanJiaChen/vue-element-admin/)查看。

## 简介

`vae-li-template` 是基于[vue-element-admin](https://panjiachen.github.io/vue-element-admin) 进行修改精简后的后台模板。它保留了[vue-element-admin](https://panjiachen.github.io/vue-element-admin)的基础框架，同时删除了多数的控件和辅助功能。减少后台项目开发时前期框架搭建部分时的成本。完整的后台框架集成方案，虽然功能很强大，但是很多情况下多数的功能是冗余的。如果你想要一个精简的，但是又不过分简陋的后台项目作为开发的基础，本项目相信能够帮到你。

## 前序准备

首先需要了解[vue-element-admin](https://panjiachen.github.io/vue-element-admin)，它的文档非常详细。请先阅读。

本项目的技术栈和[vue-element-admin](https://panjiachen.github.io/vue-element-admin)的技术栈基本相同：
本地环境: [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。主要技术栈: [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)

## 对于 Vue Element Admin 的主要修改

```
标签：
[-] 删除
[+] 新增
[.] 保留部分
[!] 部分修改

- 构建工具
 - [!] Mock - 仅保留用户登录、退出模拟接口
 - [-] plop - 微生成器框架（代码生成工具）
 - [-] 正式环境等多环境构建环境变量文件

- 项目
 - [-] 角色管理模块
 - [-] 动态路由

 - [!] 用户登录
  - [-] 删除第三方登录部分
  - [-] 删除用户角色判断

 - [!] 页面布局
  - [.] 仅保留全屏功能按钮

 - [!] 左侧菜单
  - [.] 仅保留[Dashboard]页面

 - [!] 其他页面
  - [.] 保留401、404错误页
  - [.] 保留[Profile]页面
  - [.] 保留重定向页面
  - [.] 保留登录页面
```

## 修改说明

- 构建工具部分的调整
  - 如，plop 等工具的删除，后期可按需加入，不影响基础框架，故将其删除
- 项目部分
  - 角色管理和动态路由取决于每个项目接口对于权限和角色的定义，几乎不能满足实际开发需要，故将其删除
- 页面功能部分
  - 仅保留了部分错误页面，删除了其他功能演示页。同样的，组件功能需要适应实际开发需求，不作为基础模板内容
  - 保留页面头部面包屑

## 开发

```bash
# 克隆项目
git clone https://github.com/omretterry/vea-li-template.git

# 进入项目目录
cd vea-li-tempalte

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9999

## 发布

```bash
# 构建生产环境
npm run build
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
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
