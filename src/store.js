import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user/store/user'
import transaction from './modules/transaction/store/transaction'
import product from './modules/product/store/product'
import customer from './modules/customer/store/customer'
import overview from './modules/overview/store/overview'
import auth from './modules/auth/store/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transaction,
    product,
    customer,
    overview,
    auth,
  },
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    showLoadingIndicator: false,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_DSET_SHOW_LOADING_INDICATOR (state, showLoadingIndicator) {
      state.showLoadingIndicator = showLoadingIndicator
    },
  },
  actions: {
    setLoadingIndicator (context, showLoadingIndicator) {
      context.commit('SET_DSET_SHOW_LOADING_INDICATOR', showLoadingIndicator)
    },
  },
})
