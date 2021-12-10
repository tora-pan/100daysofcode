<template>
  <div class="game-window">
    <Modal v-show="isModalVisible" @close="closeModal">
      <!-- <template v-slot:header> This is a new modal header. </template>

      <template v-slot:body> This is a new modal body. </template>

      <template v-slot:footer> This is a new modal footer. </template> -->
    </Modal>
    <button @click="sleep">Sleep</button>
    <h2>Your Future Job</h2>
    <div class="health-bar-container">
      <div class="health-bar-value" :style="{ width: enemyHealth + '%' }"></div>
    </div>
    <h2>Stamina</h2>
    <div class="health-bar-container">
      <div class="health-bar-value" :style="{ width: stamina + '%' }"></div>
    </div>

    <h2>Your Current Skills</h2>
    <div class="health-bar-container">
      <div
        class="health-bar-value"
        :style="{ width: playerHealth + '%' }"
      ></div>
    </div>
    <div class="commands">
      <button :disabled="canApply" @click="takeCourse">
        Take Udemy Course
      </button>
      <button :disabled="canApply" @click="grindLeetCode">
        Grind LeetCode
      </button>
      <button :disabled="canApply" @click="connectOnLinkedin">
        Connect to people on LinkedIn
      </button>
      <button :disabled="canApply" @click="apply">Apply</button>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default {
  name: "GameWindow",

  components: {
    Modal,
  },

  created: function () {
    setInterval(() => {
      if (this.stamina > 0) {
        this.stamina -= 1;
      } else {
        this.showModal();
      }
    }, 200);
  },

  data() {
    return {
      playerHealth: 0,
      enemyHealth: 0,
      currentRound: 0,
      stamina: 100,
      coolDown: false,
      isModalVisible: false,
    };
  },

  computed: {
    canApply() {
      return this.coolDown;
    },
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.resetValues();
    },
    resetValues() {
      this.stamina = 100;
      this.enemyHealth = 0;
      this.playerHealth = 0;
    },
    useStamina(amount) {
      this.stamina -= getRandomValue(1, amount);
    },
    takeCourse() {
      this.currentRound++;
      const coursePoints = getRandomValue(0.5, 9);
      this.playerHealth += coursePoints;
      this.useStamina(10);
    },
    apply() {
      this.enemyHealth += this.playerHealth * Math.random(2, 4);
      if (this.enemyHealth > 100) {
        this.enemyHealth = 100;
        alert("You're Hired!");
      }
      this.playerHealth = 0;
      this.useStamina(50);
    },
    grindLeetCode() {
      this.currentRound++;
      const leetPoints = getRandomValue(2, 15);
      this.playerHealth += leetPoints;
      this.useStamina(30);
    },
    connectOnLinkedin() {
      this.currentRound++;
      console.log("connectOnLinkedIn");
      this.useStamina(-10);
    },
    sleep() {
      this.stamina = 100;
      this.coolDown = true;
      setTimeout(() => {
        this.coolDown = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
body {
  background-color: gray;
}
.game-window {
  max-width: 60%;
  min-height: 500px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(52, 148, 151);
}
.health-bar-container {
  height: 25px;
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
  border: 1px solid #016255;
  background-color: #016255;
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
  background-color: #0e413a;
  border-color: #0e413a;
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
