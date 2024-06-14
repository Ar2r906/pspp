import instance from "@/middlewares";

export default {
    name: 'user',
    namespaced: true,
    state: () => ({
        user: null
    }),
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        async getUserByUid({ commit }) {
            const user = await instance.get('/api/users')
            if(user) return commit('setUser', user.data)
            console.log(user.message);
        }
    }
}