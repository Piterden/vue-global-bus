const eventbus = {
  install(Vue) {
    if (parseInt(Vue.version) < 2) {
      return false
    }

    const bus = Object.defineProperty(Vue.prototype, '$bus', {
      get() {
        return new Vue()
      },
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(eventbus)
}

export default eventbus
