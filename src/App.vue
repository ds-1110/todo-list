<template>
  <Header></Header>
  <h1 class="text-3xl font-heavy my-8 font-display text-center">
    Getting things done!
  </h1>
  <router-view class="mb-4" />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
