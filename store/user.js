import storage from '../utils/storage.ts'

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
    user: {}
})

export const getters = {
    getAuth(state) {
        return state.auth
    },
    getUser(state) {
        return state.user
    }
}

export const mutations = {
    updateAuth(state, payload) {
        state.auth = payload
    },
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    async register(payload) {
        try {
            const data = await this.$axios.post('/auth/register', payload)
            return data
        } catch (error) {
            return error.errors
        }
    },

    async login({state, dispatch}, {username, password}) {
        console.log(username)
        try {
            const { data } = await this.$axios.post('/auth', {username, password})
            const token = `Bearer ${data.token}`
            await this.$auth.$storage.setLocalStorage(storage.token, token)
            await this.$auth.$storage.setCookie(storage.token, token, true)
            await dispatch('currentUser', token)
            return data
        } catch (error) {
            return error.errors
        }
    },

    async currentUser(commit, {token}) {
        this.$axios.default.headers.common['Authorization'] = token
        const { data } = await this.$axios.get('/users/current-user')
        await this.$auth.$storage.setLocalStorage(storage.user, data.user)
        await commit('setUser', data.user)
    }
}

export const strict = false
