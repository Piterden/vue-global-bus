# VueJS Eventbus Plugin

[![awesome-vue](https://img.shields.io/badge/Vue.js-AWESOME-ff69b4.svg)](//github.com/vuejs/awesome-vue)
[![license](https://img.shields.io/github/license/fffixed/vue-bus.svg)](//opensource.org/licenses/MIT)

## Introduction

A simple global event-bus plugin for [VueJS](//vuejs.org) (>= 2.0).

This plugin implements [Non Parent-Child Communication](//vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication).

## Install

```shell
$ npm i vue-global-bus -S
```

Download and use with your build system
```js
import VueBus from 'vue-bus'
// or
const VueBus = require('vue-bus')

Vue.use(VueBus)
```

## Usage

```js
// in component A's method
this.$bus.$emit('my-event', payload)

// in component B's created hook
this.$bus.$on('my-event', (payload) => {
  // ...
})
```

## License

[MIT](//opensource.org/licenses/MIT)
