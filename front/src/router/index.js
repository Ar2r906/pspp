import { createRouter, createWebHistory } from 'vue-router'
import instance from '@/middlewares'
import Home  from  '@/views/Home.vue'
import Login  from  '@/views/Login.vue'
import Register  from  '@/views/Register.vue'
import Profile  from  '@/views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({ 
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  try {
    const requireAuth = to.matched.some(record => record?.meta.auth)
    if(requireAuth) {
      const response = await instance.get('api/users')
      if(response.status == 200) {
        return next();
      } else if(response.status == 401)  {
        return next('/login')
      }
    }
    return next()
  } catch (error) {
    console.log(error.message)
    return next('/login')
  }
})

export default router
