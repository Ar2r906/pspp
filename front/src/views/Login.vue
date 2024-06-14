<template>
    <div class="form">
        <h1>&lt;Вход&gt;</h1>
        <form @submit.prevent="go_login">
            <input class="form form-input" type="email" name="" id="email" placeholder="Email" v-model="email">
            <input class="form form-input" type="password" name="" id="password" placeholder="Пароль" v-model="password">
            <button class="form form-button">Войти</button>
            <span class="form text">Нет аккаунта?<a href="/register">Зарегистрироваться</a></span>
        </form>
    </div>
</template>

<script skoped>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions({
            login: 'auth/login'
        }),
        go_login() {
            const formData = {
                email: this.email,
                password: this.password
            }
            this.login(formData)
        }
    }
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5dvh;
    padding-bottom: 5dvh;
}
h1 {
    padding-bottom: 5dvh;
}
.form-input {
    padding: 1dvh 1dvw;
    margin: 2dvh auto;
    width: 20dvw;
    color: #000;
    background-color: #d9d9d9;
    border: 1px solid #000;
    border-radius: 8px;
}
.form-button {
    margin: 1dvh 0;
    padding: 1dvh 1dvw;
    background-color: #402fff;
    border: 1px solid #402fff;
    border-radius: 8px;
    color: #fff;
    width: 100%;
}
.form-button:hover {
    background-color: #1b1c21;
    border-color: #1b1c21;
    color: #fff;
}
.text a{
    color: #402fff;
}
</style>