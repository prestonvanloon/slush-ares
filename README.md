```
_______  ______    _______  _______
|   _   ||    _ |  |       ||       |
|  |_|  ||   | ||  |    ___||  _____|
|       ||   |_||_ |   |___ | |_____
|       ||    __  ||    ___||_____  |
|   _   ||   |  | ||   |___  _____| |
|__| |__||___|  |_||_______||_______|

```

Slush-ares
============

[![NPM](https://nodei.co/npm/slush-ares.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/slush-ares)

[![npm version](https://badge.fury.io/js/slush-ares.svg)](http://badge.fury.io/js/slush-ares)
[![Dependency Status](https://david-dm.org/prestonvanloon/slush-ares.svg)](https://david-dm.org/prestonvanloon/slush-ares)

[![Pull Requests Status](http://issuestats.com/github/prestonvanloon/slush-ares/badge/pr?style=flat)](http://issuestats.com/github/prestonvanloon/slush-ares/badge/pr?style=flat)
[![Issues Status](http://issuestats.com/github/prestonvanloon/slush-ares/badge/issue?style=flat)](http://issuestats.com/github/prestonvanloon/slush-ares/badge/issue?style=flat)

A Slush generator for APIs

<sub>Forked from [slush-athena](https://github.com/reaganthomas/slush-athena).</sub>

* [Slush-ares](#slush-ares)
  * [Installation](#installation)
  * [Usage](#usage)
    * [Scaffold API](#scaffold)
    * [Scaffold Controller](#controller)
    * [Scaffold Model](#model)
    * [Scaffold CRUD](#crud)

<h2 id="installation">Installation</h2>

To use this generator you must have `gulp` and `slush` installed:

```
$ npm install -g gulp slush
```

Then install the generator:

```
$ npm install -g slush-ares
```

<h2 id="usage">Usage</h2>
<h3 id="scaffold">Scaffold API</h3>

With the generator installed make a new project directory:

```
$ mdkir new_project
$ cd new_project
```

Scaffold your API:

```
$ slush ares
```

This will generate the following files:

```
.
├── .aresrc
├── .gitignore
├── .jshintrc
├── .travis.yml
├── README.md
├── build-config.js
├── gulpfile.js
├── package.json
├── server
│   ├── api
│   │   └── index.js
│   ├── app.js
│   ├── config
│   │   ├── environment
│   │   │   ├── development.js
│   │   │   ├── index.js
│   │   │   ├── production.js
│   │   │   └── test.js
│   │   ├── express.js
│   │   └── seed
│   │       └── .gitkeep
│   ├── lib
│   │   └── .gitkeep
│   └── routes.js
└── tasks
    ├── lint.js
    └── test.js
```

<h3 id="controller">Scaffold Controller</h3>

```
$ slush ares:controller
```

Follow the prompts, and be sure to use a capital case name.

This will generate the following files:

```
.
├── server
│   ├── api
│       ├── <controller-name>
│           ├── index.js
│           ├── <controller-name>.controller.js
│           └── <controller-name>.controller.spec.js
```

<h3 id="model">Scaffold Model</h3>

```
$ slush ares:model
```

Follow the prompts, and be sure to use a capital case name.

This will generate the following files:

```
.
├── server
│   ├── api
│       ├── <model-name>
│           ├── <model-name>.model.js
│           └── <model-name>.model.spec.js
```

<h3 id="crud">Scaffold CRUD</h3>

```
$ slush ares:crud
```

CRUD stands for Create Read Update Delete.

Follow the prompts to generate CRUD endpoints for your model.

```
.
├── server
│   ├── api
│   └── <model-name>
│       ├── index.js
│       ├── <model-name>.controller
│       │   ├── createOrder
│       │   │   ├── create<model-name>.spec.js
│       │   │   └── index.js
│       │   ├── delete<model-name>
│       │   │   ├── delete<model-name>.spec.js
│       │   │   └── index.js
│       │   ├── get<model-name>
│       │   │   ├── get<model-name>.spec.js
│       │   │   └── index.js
│       │   ├── index.js
│       │   └── update<model-name>
│       │       ├── index.js
│       │       └── update<model-name>.spec.js
│       ├── <model-name>.model.js
│       └── <model-name>.model.spec.js

```
