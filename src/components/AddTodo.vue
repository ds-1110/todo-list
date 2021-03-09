<template>
  <div class="mx-8 font-display relative">
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <span class="text-red-600 text-sm absolute -top-6" v-if="!checkTodo"
        >You have to enter a todo!</span
      >
    </transition>
    <input
      type="text"
      name="add-todo"
      id="add-todo"
      class="w-full text-base py-2 px-4 border-2 border-gray-300 rounded"
      v-model="todo.todoName"
      @keyup.enter="addTodo"
      :class="{ 'border-red-600': !checkTodo }"
    />
    <div class="my-2 flex items-center">
      <input
        type="checkbox"
        name="important"
        id="important"
        class="h-4 w-4"
        v-model="todo.important"
      />
      <label for="important" class="text-base pl-3">Important</label>
    </div>
    <button
      class="w-full bg-black text-white rounded py-3 heavy"
      @click="addTodo"
    >
      Add todo
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        todoName: "",
        important: false,
        done: false,
        test: true,
      },
      checkTodo: true,
    };
  },
  methods: {
    addTodo() {
      if (this.todo.todoName.length === 0) {
        this.checkTodo = false;
      } else {
        this.checkTodo = true;
        this.$store.commit("addTodo", this.todo);
        this.todo = {
          todoName: "",
          important: false,
        };
      }
    },
  },
  computed: {
    // checkTodo() {
    //   if (this.todo.todoName.length === 0) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
  },
};
</script>

<style></style>
