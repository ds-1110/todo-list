<template>
  <div class="md:mx-8 font-display">
    <transition-group
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <div
        class="flex items-center relative py-4 w-full px-8 border-b-2 border-gray-200 md:border-l-2 md:border-r-2"
        v-for="(todo, index) in $store.state.todos"
        :key="index"
        v-show="!$store.state.hideDoneTodos || !todo.done"
      >
        <input
          type="checkbox"
          name="task-done"
          id="task-checkbox"
          class="h-4 w-4 border-2 border-gray-200 text-indigo-300 block"
          v-model="todo.done"
        />
        <span
          class="text-lg pl-3"
          :class="{ 'text-gray-400': todo.done, 'line-through': todo.done }"
        >
          {{ todo.todoName }}
        </span>
        <div class="flex items-center absolute right-8">
          <span
            class="w-6 h-6 block mr-3"
            id="important"
            v-if="todo.important"
          ></span>
          <button
            @click="removeTodo(index)"
            class="bg-red-500 flex items-center justify-center h-8 w-8 rounded shadow-red"
          >
            <span id="delete" class="h-6 w-6 block"></span>
          </button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    },
  },
};
</script>

<style scoped>
#delete {
  background-image: url("../assets/Trashdelete.svg");
  background-repeat: no-repeat;
}
#important {
  background-image: url("../assets/Attention.svg");
  background-repeat: no-repeat;
}
.shadow-red {
  box-shadow: 0px 4px 20px -5px #c40000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
