import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, payload) {
      if (payload.important) {
        state.todos.unshift(payload);
      } else {
        state.todos.push(payload);
      }
    },
    removeTodo(state, payload) {
      state.todos.splice(payload, 1);
    },
  },
  actions: {},
  modules: {},
});
