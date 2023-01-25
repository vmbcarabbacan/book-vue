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
    users: {}
})

export const getters = {
    getAuth(state) {
        return state.auth
    },
    getUsers(state) {
        return state.users
    }
}

export const mutations = {
    updateAuth(state, payload) {
        state.auth = payload
    },
    SET_USERS(state, payload) {
        state.users = payload
    }
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
    }
}

export const strict = false
