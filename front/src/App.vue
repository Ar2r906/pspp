<template>
  <nav>
    <a href="/" class="logo"><img src="" alt="logotype"></a>
    <div class="links">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/register" v-if="!isAuth">Регистарция</router-link>
      <router-link class="link" to="/login" v-if="!isAuth">Вход</router-link>
      <router-link class="link" to="/profile" v-if="isAuth">Профиль</router-link>
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
      logout: 'auth/logaut'
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
  padding: 0 2dvh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding-right: 1dvw;
  color: #000;
}
.link {
  
}
.links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  column-gap: 3dvw;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 0 0 15px 15px;
  padding: 0 3dvw 0 3dvw;
  padding-top: 3dvh;
}
.logo{
  justify-content: start;
  align-items: start;
  height: 6dvh;
  padding-top: 2dvh;
  padding-left: 0;
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
  color: #402FFF;
}
</style>
