<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      access_token: localStorage.access_token,
    };
  },
};
</script>

<template>
  <div class="p-10">
    <Navbar v-if="access_token == null" />
    <RouterView class="mt-5" />
  </div>
</template>

<style></style>
