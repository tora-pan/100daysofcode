<template>
  <div id="app">
    <TodoList3 theProps="This is the props from App.vue"></TodoList3>
  </div>
</template>

<script>
import TodoList3 from "./components/TodoList3.vue";

export default {
  name: "App",
  components: {
    TodoList3,
  },
};
</script>

<style></style>
