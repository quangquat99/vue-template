import { getTutorial } from '../service/index'
const state = {}

const mutations = {}

const actions = {
    async getAllTutorial () {
        const response = await getTutorial()
        return response
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
