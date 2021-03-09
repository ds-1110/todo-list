<template>
  <header class="mx-auto max-w-screen-md h-16 mb-4 font-display">
    <nav class="mx-8 h-full flex bg-gray-200">
      <router-link
        to="/"
        class="h-full w-1/2 flex justify-center items-center text-lg font-medium"
        >Todos</router-link
      >
      <router-link
        to="/done"
        class="h-full w-1/2 flex justify-center items-center text-lg font-medium"
        >Done</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-active {
  background-color: black;
  color: #f2f2f2;
}
</style>
