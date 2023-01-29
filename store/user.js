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
  uUser: [],
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
  getUUser(state) {
    return state.uUser
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
  SET_UUSER(state, payload) {
    state.uUser = payload
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

  async USER_BY_ROLE({ commit }, { role }) {
    try {
      const response = await this.$axios.post(links.USER_BY_ROLE, {
        role,
      })
      commit('SET_UUSER', response.data.users)
      return response.data.users
    } catch (error) {
      return error.errors
    }
  },

  async USER_UPLOAD_PROFILE({ dispatch }, payload) {
    try {
      const headers = { 'Content-Type': 'multipart/form-data' }
      const { data } = await this.$axios.put(
        links.USER_UPDATE_PROFILE,
        payload,
        { headers }
      )
      const response = await dispatch('USER', { id: data.user._id })
      return response
    } catch (error) {
      return error.errors
    }
  },
}

export const strict = false
