const eventbus = function (Vue) {
  if (typeof Vue === 'undefined' || parseInt(Vue.version) < 2) {
    return
  }

  const bus = new Vue()

  Object.defineProperty(Vue.prototype, '$bus', {
    get () {
      return bus
    }
  })
}

if ('undefined' !== typeof window) {
  if (window && window.Vue) {
    window.Vue.use(eventbus)
  }
}

export default eventbus
