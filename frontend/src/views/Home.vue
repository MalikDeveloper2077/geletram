<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="text-center mt-3">Vue App</h1>
  </div>
</template>

<script>
// import { authFetch } from '@/utils/auth_fetch';

export default {
  name: 'Home',
  async mounted() {
    // const resp = await authFetch(
    //  `${this.$store.getters.serverUrl}/users`,
    //  null,
    //  this.$store.commit
    // );
    // console.log(resp);
  },
};
</script>

<style scoped>
  img {
    margin: 0 auto;
    display: block;
  }
</style>
