import Vue from 'vue'
import Vuex from 'vuex'

// modules
import index from './module/index'
// import test from './module/test'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    index
    // test
  }
})
