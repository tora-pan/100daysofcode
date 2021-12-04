<template>
  <div class="container mt-5">
    <h2>{{ reversedText }}</h2>
    <h2 v-if="text">{{ text }}</h2>
    <h2 v-else>Type something</h2>
    <input
      type="text"
      v-model="text"
      placeholder="Please enter your name"
      name="mainInput"
      id="mainInput"
    />
    <input
      type="text"
      v-model="reversedText"
      v-on:input="reverseMessage(reversedText)"
      placeholder="Please enter your name"
      name="mainInput2"
      id="mainInput2"
    />
    <button @click="changeHandler" class="btn btn-danger">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "TodoList2",

  methods: {
    changeHandler() {
      console.log(this.text);
    },
    reverseMessage: function () {
      this.reversedText = this.reversedText.split("").reverse().join("");
    },
  },

  data() {
    return {
      text: "",
      reversedText: "",
    };
  },
};
</script>
