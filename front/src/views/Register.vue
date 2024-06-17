<template>
    <div class="form">
       <h1>&lt;Регистрация&gt;</h1>
       <form @submit.prevent="go_register" autocomplete="off">
            <select class="form option-input" name="role" id="role" v-model="role" required>
                <option value="intern">Стажер</option>
                <option value="sportsman">Спортсмен</option>
                <option value="partner">Партнер</option>
                <option value="coach">Тренер</option>
            </select>
            <input type="text" name="name" id="name" placeholder="Имя" v-model="name" class="form form-input">
            <input type="email" name="email" id="email" placeholder="Email" v-model="email" class="form form-input">
            <input type="password" name="password" id="password" placeholder="Пароль" v-model="password" class="form form-input">
            <button class="form form-button" type="submit">Зарегистрироваться</button>
            <span class="form text">Уже зарегистрированы?<a href="/login">Войти</a></span>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'register',
    data() {
        return {
            role: 'intern',
            email: '',
            password: '',
            name: ''
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register'
        }
    ),
        go_register() {
            const formData = {
                role: this.role,
                name: this.name,
                email: this.email,
                password: this.password
            }
            this.register(formData)
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
    width: 100%;
    border-radius: 8px;
    color: #fff;
}
.option-input {
    padding: 1dvh 1dvw;
    width: 100%;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #d9d9d9;
}
.text {
    padding-top: 2dvh;
}
.text a {
    color: #000;
}
.text a:hover {
    color: #402fff;
}
.form-button:hover {
    background-color: #1b1c21;
    border-color: #1b1c21;
    color: #fff;
}
</style>