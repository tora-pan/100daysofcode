<template>
  <div className="card-container">
    <div class="card">
      <h1>{{ data[currentWord].word }}</h1>
      <span class="info">i</span>
      <div class="answer">
        <p>{{ data[currentWord].def }}</p>
      </div>
    </div>
    <button class="button-1" @click="getNextWord">Next</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  setup() {},
  data() {
    return {
      currentWord: 0,
    };
  },

  props: {
    data: Array,
  },

  methods: {
    getNextWord() {
      if (this.currentWord < this.data.length) {
        this.currentWord++;
      }
      if (this.currentWord === this.data.length) {
        this.currentWord = 0;
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: grid;
  place-items: center;
  position: relative;
  width: 600px;
  min-height: 250px;
  padding: 1rem 2rem;
  margin: 0 1rem;
  border-radius: 10px;
  background-color: #94242d;
  box-shadow: 0 0.8px 0.8px rgba(0, 0, 0, 0.02), 0 2px 2px rgba(0, 0, 0, 0.028),
    0 3.8px 3.8px rgba(0, 0, 0, 0.035), 0 6.7px 6.7px rgba(0, 0, 0, 0.042),
    0 12.5px 12.5px rgba(0, 0, 0, 0.05), 0 30px 30px rgba(0, 0, 0, 0.07);
}

.card-container {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card h1 {
  font-size: 2rem;
  text-align: center;
}
.card .info {
  display: inline-block;
  position: absolute;
  top: -2px;
  right: -2px;
  padding: 0.5rem 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  z-index: 2;
  opacity: 1;
  transition: opacity 300ms ease-in-out;
  color: #ffffff;
}
.card .info:hover {
  opacity: 0;
}
.card .answer {
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2em;
  height: 100%;
  border-radius: 10px;
  background-color: #1d3557;
  -webkit-clip-path: circle(12% at 100% 0%);
  clip-path: circle(12% at 100% 0%);
  transition: all 400ms ease-in-out;
  z-index: 1;
}
.card .answer p {
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
}
.card .info:hover + .answer {
  background-color: #1d3557;
  -webkit-clip-path: circle(150% at 100% 0%);
  clip-path: circle(150% at 100% 0%);
}

/* CSS */
.button-1 {
  background-color: #94242d;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin-top: 10px;
  width: 200px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-1:hover,
.button-1:focus {
  background-color: #f082ac;
}
</style>
