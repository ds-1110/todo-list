<template>
  <div class="max-w-screen-md mx-auto">
    <add-todo class="mb-8"></add-todo>
    <h2 class="text-xl uppercase bg-black text-white px-8 py-4 md:mx-8">
      This is the todolist
    </h2>
    <todo></todo>
    <!-- <span> {{ this.$store.state.todos }} </span> -->
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import AddTodo from "@/components/AddTodo";
export default {
  name: "Home",
  components: {
    Todo,
    AddTodo,
  },
};
</script>
