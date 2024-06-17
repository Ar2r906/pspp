import instance from "@/middlewares";
import axios from "axios";

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
            try {
                const user = await instance.get(`/api/users`)
                if(user) return commit('setUser', user.data)
                console.log(user.message);
            } catch (error) {
                console.log(error);
            }
            
        }
        
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    }
}