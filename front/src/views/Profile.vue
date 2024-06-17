<template>
    <div class="info">
        <h1>Профиль</h1>
        <div class="info_1">{{ user?.name }}</div>
        <div class="info_2">{{ user?.email }}</div>
        <div class="info_3">{{ user?.role }}</div>
        <div class="info_4"></div>
        <div class="info_5"></div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'profile',
    // data() {
    //     return {
    //         user: null,
    //     }
    // },
    methods: {
        ...mapActions({
            getUserByUid: 'user/getUserByUid',
        }),
    },
    mounted() {
        this.getUserByUid();
    },
    computed: {
        user() {
            return this.$store.state.user.user
        }
    },
}

</script>

<style>
.info {
    padding-top: 10dvh;
}
</style>