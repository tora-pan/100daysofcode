<template>
  <div class="game-window">
    <h2>Your Future Job</h2>
    <div class="health-bar-container">
      <div class="health-bar-value" :style="{ width: enemyHealth + '%' }"></div>
    </div>

    <h2>You Current Skills</h2>
    <div class="health-bar-container">
      <div
        class="health-bar-value"
        :style="{ width: playerHealth + '%' }"
      ></div>
    </div>
    <div class="commands">
      <button @click="takeCourse">Take Udemy Course</button>
      <button @click="grindLeetCode">Grind LeetCode</button>
      <button @click="connectOnLinkedin">Connect to people on LinkedIn</button>
      <button
        :disabled="currentRound % 3 !== 0 || currentRound === 0"
        @click="apply"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script>
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
  name: "GameWindow",

  data() {
    return {
      playerHealth: 0,
      enemyHealth: 0,
      currentRound: 0,
    };
  },

  methods: {
    takeCourse() {
      this.currentRound++;
      const coursePoints = getRandomValue(0.5, 9);
      this.playerHealth += coursePoints;
    },
    apply() {
      this.enemyHealth += this.playerHealth * Math.random(2, 4);
      if (this.enemyHealth > 100) {
        this.enemyHealth = 100;
        alert("You're Hired!");
      }
      this.playerHealth = 0;
    },
    grindLeetCode() {
      this.currentRound++;
      const leetPoints = getRandomValue(2, 15);
      this.playerHealth += leetPoints;
    },
    connectOnLinkedin() {
      this.currentRound++;
      console.log("connectOnLinkedIn");
    },
  },
};
</script>

<style scoped>
.game-window {
  max-width: 60%;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: lightcoral;
}
.health-bar-container {
  height: 100px;
  width: 80%;
  background-color: white;
  border: 1px solid black;
  margin: 10px auto;
}

.health-bar-value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.commands {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 20px;
  width: 200px;
  height: 100px;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>
