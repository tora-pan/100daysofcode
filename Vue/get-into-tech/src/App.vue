<template>
  <div class="app">
    <!-- <Header /> -->
    <div class="container">
      <GameWindow />
    </div>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
import GameWindow from "./components/GameWindow.vue";
export default {
  name: "App",
  components: {
    // Header,
    GameWindow,
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: 100vh;
  /* margin-top: 60px; */
  background-color: rgb(57, 50, 121);
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
</style>
