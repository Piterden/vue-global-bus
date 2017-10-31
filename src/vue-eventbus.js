const eventbus = function (Vue) {
  if (parseInt(Vue.version) < 2) {
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
  window.eventbus = eventbus

  if (window.Vue) {
    window.Vue.use(eventbus)
  }
}

export default eventbus
