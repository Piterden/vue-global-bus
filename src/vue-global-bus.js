const eventbus = {
  install (Vue) {
    if (parseInt(Vue.version) < 2) {
      return false
    }

    const bus = new Vue()

    Object.defineProperty(Vue.prototype, '$bus', {
      get () {
        return bus
      },
      set (value) {
        if (!Array.isArray(value)) {
          value = [value]
        }
        this.$emit(...value)
      },
    })
  },
}

if (window && typeof window === 'object' && window.Vue) {
  window.Vue.use(eventbus)
}

export default eventbus
