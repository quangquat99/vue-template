import { getAllUser } from '../service/index'

const state = {
  userList: [],
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
}

const actions = {
  async getAllUser (context) {
    const response = await getAllUser()
    context.commit('SET_USER_LIST', response.data)
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
