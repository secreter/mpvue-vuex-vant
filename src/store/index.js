import Vue from 'vue'
import Vuex from 'vuex'
import task from './task'
import cart from './cart'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// const expire = {
//
// }

export default new Vuex.Store({
  modules: {
    task,
    cart
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => {
          console.log(key)
          return wx.getStorageSync(key)
        },
        setItem: (key, value) => {
          console.log(key, value)
          wx.setStorageSync(key, value)
        },
        removeItem: key => {}
      },
      key: 'vuex',
      paths: ['task'] // An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. (default: [])
    })
  ]
})
