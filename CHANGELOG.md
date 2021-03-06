# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.2](https://github.com/ambus/gfc/compare/v0.2.1...v0.2.2) (2019-07-05)



### [0.2.1](https://github.com/ambus/gfc/compare/v0.2.0...v0.2.1) (2019-07-05)


### Build System

* **package:** update repo info ([94da8be](https://github.com/ambus/gfc/commit/94da8be))



## [0.2.0](https://github.com/ambus/gfc/compare/v0.1.6...v0.2.0) (2019-07-05)


### Build System

* **gulp:** add gulp task's to build app ([0876159](https://github.com/ambus/gfc/commit/0876159))
* **gulp:** add task to copy readme file ([d894005](https://github.com/ambus/gfc/commit/d894005))
* **package:** add gulp-header package to modification main.bundle.js file ([65f3442](https://github.com/ambus/gfc/commit/65f3442))
* **package:** add gulp-replace package to replace string file's ([226faf8](https://github.com/ambus/gfc/commit/226faf8))
* **package:** change package name ([7a7ef28](https://github.com/ambus/gfc/commit/7a7ef28))
* remove unused library ([7ae65b4](https://github.com/ambus/gfc/commit/7ae65b4))


### Features

* **input:** add suport for undefinded input type ([e2a2de7](https://github.com/ambus/gfc/commit/e2a2de7))
* **input:** check max and min characters in input ([2269a6b](https://github.com/ambus/gfc/commit/2269a6b))
* **main:** when user does not want to load default template app abort ([4bf2108](https://github.com/ambus/gfc/commit/4bf2108))
* **template:** when file not exist, load default template ([6d5bff3](https://github.com/ambus/gfc/commit/6d5bff3))
* **template:** when template file not exist, ask the user if it should be loaded defauld template ([78097b0](https://github.com/ambus/gfc/commit/78097b0))



### [0.1.6](https://github.com/ambus/gfc/compare/v0.1.5...v0.1.6) (2019-05-31)



### [0.1.5](https://github.com/ambus/gfc/compare/v0.1.4...v0.1.5) (2019-05-31)



### [0.1.4](https://github.com/ambus/gfc/compare/v0.1.3...v0.1.4) (2019-05-31)



### [0.1.3](https://github.com/ambus/gfc/compare/v0.1.2...v0.1.3) (2019-05-31)



### [0.1.2](https://github.com/ambus/gfc/compare/v0.1.1...v0.1.2) (2019-05-31)



### [0.1.1](https://github.com/ambus/gfc/compare/v0.1.0...v0.1.1) (2019-05-31)



## 0.1.0 (2019-05-31)


### Bug Fixes

* **index:** delate iife function and add normaln start function ([6022fe0](https://github.com/ambus/gfc/commit/6022fe0))
* **template:** change parametr name ([fc15caf](https://github.com/ambus/gfc/commit/fc15caf))
* **template:** update start and end string in footer and body line ([b5f88cd](https://github.com/ambus/gfc/commit/b5f88cd))


### Build System

* add new dependencies ([5cdf538](https://github.com/ambus/gfc/commit/5cdf538))
* add new dependencies ([e890d57](https://github.com/ambus/gfc/commit/e890d57))
* **package:** add mock-fs dependencies to mockup fs ([a089c80](https://github.com/ambus/gfc/commit/a089c80))
* **package:** add ora and rxjs modules ([95a7d53](https://github.com/ambus/gfc/commit/95a7d53))
* **package:** add script, test config and dependencies ([becd27f](https://github.com/ambus/gfc/commit/becd27f))
* **yarn:** add yarn.lock file ([284268a](https://github.com/ambus/gfc/commit/284268a))
* **yarn:** update yarn.lock file ([2bb2c90](https://github.com/ambus/gfc/commit/2bb2c90))


### Features

* **index:** add simple version of index file ([494e863](https://github.com/ambus/gfc/commit/494e863))
* **index:** run loadTemplate when app is started ([77eed80](https://github.com/ambus/gfc/commit/77eed80))
* **input:** add function to read stdin ([47d2757](https://github.com/ambus/gfc/commit/47d2757))
* **input:** add read in stdin a new question type - yes/no ([07227c6](https://github.com/ambus/gfc/commit/07227c6))
* **loadTemplate:** add loadTemplate function ([5d92830](https://github.com/ambus/gfc/commit/5d92830))
* **logo:** add logo printer function ([3781954](https://github.com/ambus/gfc/commit/3781954))
* **main:** add main function - to start app ([3b58db2](https://github.com/ambus/gfc/commit/3b58db2))
* **main:** print commit message and add question with execution Y/N ([884b70a](https://github.com/ambus/gfc/commit/884b70a))
* **models:** add template type ([1cced0f](https://github.com/ambus/gfc/commit/1cced0f))
* **tempalte:** add new type - TemplateWithCommit ([e9fd729](https://github.com/ambus/gfc/commit/e9fd729))
* **template:** add example template ([0f5391e](https://github.com/ambus/gfc/commit/0f5391e))
* **template:** add new filed to example template ([4c046d9](https://github.com/ambus/gfc/commit/4c046d9))
* **template:** add new param to TemplateLine type definition ([72a2b9d](https://github.com/ambus/gfc/commit/72a2b9d))
* **template:** add new template line ([3d7457b](https://github.com/ambus/gfc/commit/3d7457b))
* **template:** startString and endString in LineTempale are optional ([10b3a65](https://github.com/ambus/gfc/commit/10b3a65))


### Tests

* **input:** add standard and select LineField mockup's ([a5bf101](https://github.com/ambus/gfc/commit/a5bf101))
* **loadTemplate:** add first test ([8e433cd](https://github.com/ambus/gfc/commit/8e433cd))
* **loadTemplate:** check that stream return correct data ([5e62fba](https://github.com/ambus/gfc/commit/5e62fba))
* **loadTemplate:** remove console.log ([07afc1c](https://github.com/ambus/gfc/commit/07afc1c))
* **loadTemplate:** remove unused import ([4297aaf](https://github.com/ambus/gfc/commit/4297aaf))
* **logo:** add logo test's ([5608daf](https://github.com/ambus/gfc/commit/5608daf))
* **template:** add line fields mockup's ([57a1231](https://github.com/ambus/gfc/commit/57a1231))
* **template:** add new input's to template file mockup ([a2bab46](https://github.com/ambus/gfc/commit/a2bab46))
* **template:** add template object mockup ([eaaa084](https://github.com/ambus/gfc/commit/eaaa084))



## 0.0.0 (2019-05-22)
