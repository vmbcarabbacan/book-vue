import links from '../utils/links'

export const state = () => ({
  auth: {
    firstName: '',
    familyName: '',
    username: 'vmbcarabbacan',
    email: '',
    password: 'M0a3r1k5',
    role: 'User',
    contactNumber: '',
  },
  users: [],
  user: {},
})

export const getters = {
  getAuth(state) {
    return state.auth
  },
  getUsers(state) {
    return state.users
  },
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  updateAuth(state, payload) {
    state.auth = payload
  },
  SET_USERS(state, payload) {
    state.users = payload
  },
  SET_USER(state, payload) {
    state.user = payload
  },
}

export const actions = {
  async register(payload) {
    try {
      const data = await this.$axios.post(links.REGISTRATION, payload)
      return data
    } catch (error) {
      return error.errors
    }
  },

  async USERS({ commit }) {
    try {
      const response = await this.$axios.get(links.USERS)
      commit('SET_USERS', response.data)
      return response.data
    } catch (error) {
      return error.errors
    }
  },

  async USER({ commit }, { id }) {
    try {
      const response = await this.$axios.get(`${links.USERS}/${id}`)
      commit('SET_USER', response.data.user)
      return response.data.user
    } catch (error) {
      return error.errors
    }
  },

  async USER_UPDATE({ commit }, payload) {
    try {
      const response = await this.$axios.put(
        `${links.USER_UPDATE}/${payload.id}`,
        payload
      )
      commit('SET_USER', response.data.user)
      return response.data.user
    } catch (error) {
      return error.errors
    }
  },
}

export const strict = false
