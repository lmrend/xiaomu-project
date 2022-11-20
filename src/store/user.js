import { setItem,getItem } from "@/utils/storage"
const TOKEN_KEY = 'USER'
const state = {
    user: getItem(TOKEN_KEY)
}
const mutations = {
    setUser(state,data) {
        state.user = data
        setItem(TOKEN_KEY,state.user)
    }
}
const actions = {
    
}
const getters = {
    
}
export default({
    state,
    getters,
    mutations,
    actions
})