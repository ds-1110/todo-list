<template>
  <div class="max-w-screen-md mx-auto font-display">
    <div class="mb-2 px-8 flex items-center"></div>
    <div class="block px-8 mb-8">
      <transition name="fade">
        <p v-if="toggle">
          This is just a simple test for animations!
        </p>
      </transition>
      <button
        class="py-3 px-6 text-base font-medium uppercase text-white rounded bg-black"
        @click="toggle = !toggle"
      >
        Toggle class
      </button>
    </div>
    <h2 class="text-xl uppercase bg-black text-white px-8 py-4 md:mx-8">
      This things are done!
    </h2>
    <todo-done></todo-done>
  </div>
</template>

<script>
import TodoDone from "@/components/TodoDone";
export default {
  name: "Home",
  data() {
    return {
      toggle: false,
    };
  },
  components: {
    TodoDone,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
