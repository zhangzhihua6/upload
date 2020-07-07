import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/header';
import getters from './getters';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    header
  },
  getters
})

export default store
