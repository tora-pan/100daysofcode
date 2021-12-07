<template>
  <div>
    <Header />
    <div class="container">
      <Card :data="wordList" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Header,
    Card,
  },
  data() {
    return {
      wordList: [
        { word: "test", def: "test def" },
        { word: "test2", def: "test def2" },
        { word: "test3", def: "test def3" },
      ],
    };
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
