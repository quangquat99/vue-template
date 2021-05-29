import { login, changePassword, getProfile } from '../service/index'

const state = {
  userProfile: {},
}

const mutations = {
  SET_USER_PROFILE (state, userProfile) {
    console.log('userProfile', userProfile)
    state.userProfile = userProfile
  },
}

const actions = {
  async login (context, request) {
    const response = await login(request)
    return response.data
  },
  async changePassword (context, request) {
    const response = await changePassword(request)
    return response
  },
  async getProfile (context) {
    const response = await getProfile()
    context.commit('SET_USER_PROFILE', response.data)
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
