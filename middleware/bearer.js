import storage from '../utils/storage.ts'

export default function ({ $axios, $auth }) {
    const token = $auth.$storage.getLocalStorage(storage.token)
    if(token) return $axios.setToken(token)

    return
}