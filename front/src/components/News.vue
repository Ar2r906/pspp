<template>
  <div class="header-block">
    <h1>&lt;Новости&gt;</h1>
  </div>
  <div class="main-block">

  </div>
</template>

<script>

export default {
  name: 'News',
  data() {
    return {

    }
  },
  methods: {

  },
  mutations: {
    
  }
}
</script>

<style scoped>
.header-block {
  background-color: #1c1b1b;
  display: flex;
  background-image: url('../assets/image/face_on_navbar.svg');
  background-repeat: no-repeat;
  background-size: 33%;
  background-position: bottom 0 left 2dvw;
  color: #fff;
  height: 70dvh;
}
h1 {
  margin: auto 2dvw 0 auto; 
  font-size: 3rem;
}

</style>
