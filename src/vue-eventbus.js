const eventbus = {
  install: function (Vue) {
    if (parseInt(Vue.version) < 2) {
      return false
    }

    const bus = new Vue()

    Object.defineProperty(Vue.prototype, '$bus', {
      get: function () {
        return bus
      }
    })
  }
}

if ('undefined' !== typeof window && window.Vue) {
  window.Vue.use(eventbus)
}

export default eventbus
