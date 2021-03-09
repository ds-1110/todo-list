<template>
  <div class="max-w-screen-md mx-auto font-display">
    <add-todo class="mb-8"></add-todo>
    <div class="mb-2 px-8 flex items-center">
      <input
        type="checkbox"
        name="show-done"
        id="show-done"
        class="h-4 w-4"
        v-model="$store.state.hideDoneTodos"
      />
      <label for="show-done" class="pl-3 text-base">Hide done todos</label>
    </div>
    <h2 class="text-xl uppercase bg-black text-white px-8 py-4 md:mx-8">
      This is the todolist
    </h2>
    <todo></todo>
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

<style scoped>
.fade-in {
  transition: opacity 0.5s ease-in;
}
</style>
