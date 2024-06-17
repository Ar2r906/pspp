<template>
  <nav>
    <div class="logotype">
      <a href="/" class="logo"><img src="./assets//image/Logotype.svg" alt="logotype"></a>
    </div>
    
    <div class="links">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/register" v-if="!isAuth">Регистарция</router-link>
      <router-link class="link" to="/login" v-if="!isAuth">Вход</router-link>
      <router-link class="link" to="/profile" v-if="isAuth">Профиль</router-link>
      <router-link class="link" to="/calendar" v-if="isAuth">Календарь</router-link>
      <router-link class="link" to="/" v-if="isAuth" @click="logout()" >Выход</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import store from './store';

export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  mounted() {
    const uid = localStorage.getItem('uid')
    uid ? this.$store.commit('auth/setAuth', true) : this.$store.commit('auth/setAuth', false)
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  }
}
</script>

<style>
@font-face {
  font-family: "JetBrains Mono";
  src: url('./fonts/JetBrainsMonoNL-Regular.ttf')
}
* {
  padding: 0;
  margin: 0;
  font-family: 'JetBrains Mono';
}
body {
  background-color: #d9d9d9;
}
nav {
  height: 15dvh;
  /* padding: 0 2dvw 0 auto; */
  display: flex;
  flex-direction: row;
  position: fixed;
  
}
.link {
  margin-top: auto;
  margin-bottom: 1dvh;
}
.links {
  display: flex;
  flex-direction: row;
  align-items: end;
  column-gap: 3dvw;
  background-color: #303030;
  /* border: 1px solid #303030; */
  border-radius: 0 0 15px 15px;
  padding: 0 2dvw 0 2dvw;
  margin: 0 2dvw 10dvh 2dvw;
}
.logotype {
  justify-content: start;
  align-items: start;
  height: 6dvh;
  padding-top: 2dvh;
  padding-left: 2dvw;
  margin-right: auto;
}
.logo :hover {
  filter: saturate(10%);
}
nav a{
  font-family: "JetBrains Mono";
  text-decoration: none;
  color: #d9d9d9;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: auto;
}
nav a:hover {
  color: #000;
}
.links:hover {
  margin-bottom: 6dvh;
  transition: 0.8s;
  background-color:#402FFF;
}
</style>
