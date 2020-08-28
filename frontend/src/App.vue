<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(err) {
      if (err != null) {
        this.$toast.clear();
        this.$toast.error(err);
        this.$store.commit('clearError');
      }
    },
  },
};
</script>
