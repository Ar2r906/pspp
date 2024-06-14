import instance from '@/middlewares'
import router from '@/router'

const checkStatuses = (status) => {
    switch (status) {
        case 400:
            window.alert('Проблема на сервере')
            return false
        case 403:
            window.alert('Введены неверные данные')
            return false
        case 404:
            window.alert('Пользователь не найден')
            return false
        case 413:
            window.alert('Email уже используется')
            return false
        case 414:
            window.alert('Пароль не верный')
            return false
        default: 
            return true
    }
}

export default {
    name: 'auth',
    state: () => ({
        isAuth: false
    }),
    mutations: {
        setAuth(state, isAuth) {
            state.isAuth = isAuth
        }
    },
    namespaced: true,
    actions: {

        async register({ }, { role, name, email, password }) {
            const data = JSON.stringify({ role, name, email, password })
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data,
            })
            
            if(!checkStatuses(response.status)) return

            window.alert('Вы успешно зарегистрированы! Теперь авторизуйтесь')

            router.push('/login')
            return
        },

        async login({ commit }, { email, password } ) {
            const data = JSON.stringify({ 
                email, password 
            });
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data 
            })
            if (!checkStatuses(response.status)) return 
            
            const result = await response.json()
            
            commit('setAuth', true)
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
            localStorage.setItem('uid', result.uid)
            localStorage.setItem('role', result.role)
            
            router.push(`/${result.role}`)
            return 
        },

        async changeAccess({ }) {
            const response = await instance.post('/api/auth/change-access', {
                headers: {
                    'x-refresh-token': localStorage.getItem('refreshToken')
                }
            })
            if(!checkStatuses(response.status)) return 
            const result = response.data
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
        },

        logout({ commit }) {
            commit('setAuth', false)
            localStorage.removeItem('uid')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            router.push('/login')
            return
        }
    }
}