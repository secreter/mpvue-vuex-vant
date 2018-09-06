import Vue from 'vue'
import Vuex from 'vuex'
import task from './task'
import cart from './cart'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    task,
    cart
  },
  plugins: [
    createPersistedState({
      storage: {
        key: 'vuex',
        paths: ['state.task'], // An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. (default: [])
        getItem: key => {
          console.log(key)
          return wx.getStorageSync(key)
        },
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {}
      }
    })
  ]
})
