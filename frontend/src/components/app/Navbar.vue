<template>
  <nav class="mb-3">
    <v-app-bar app class="primary">
      <v-icon class="mr-3" @click="toggleSidebar()">mdi-menu</v-icon>
      <v-toolbar-title class="white--text text-uppercase body-1">
        <router-link :to="{ name: 'Home' }" class="white--text toolbar__title">
          Geletram
        </router-link>
      </v-toolbar-title>

      <!-- Element in the center of header -->
      <v-spacer></v-spacer>
      <slot name="centerHeading" class="center"></slot>
      <v-spacer></v-spacer>
      <!-- Element end -->

      <v-btn text outlined class="body-1" color="white">Log out</v-btn>
      <div></div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar');
    },
  },
};
</script>

<style scoped>
.toolbar__title:hover {
  text-decoration: none;
}

.center {
  margin: 0 auto;
}
</style>
