<template>
  <div class="header">
    <div @click="animateHamburger" :class="{ active: isActive }" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="links" :class="{ active: isActive }">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    animateHamburger: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
li:hover {
  transform: rotate(2deg);
}
a:hover{
    color:blue;
}

.header {
  display: flex;
  justify-content: end;
  margin-right: 10px;
  right: 0;
  height: 100px;
}

.links {
  margin-right: 50px;
  margin-top: 50px;
  opacity: 0;
  transition: 300ms ease-in;
}
.links.active {
  opacity: 1;
  transform: translateX(-100px);
}

#hamburger {
  position: relative;
  width: 65px;
  height: 45px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
}

#hamburger span {
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: #000;
  left: 0;
  border-radius: 10px;
  transition: 225ms;
}

#hamburger span:nth-child(1) {
  top: 0;
  width: 50%;
}

#hamburger span:nth-child(2) {
  top: calc(50% - 5px);
}

#hamburger span:nth-child(3) {
  bottom: 0;
  width: 50%;
  left: 30px;
}

#hamburger.active span:nth-child(1) {
  top: calc(25% - 4px);
  left: 2px;
  transform: rotate(225deg);
}

#hamburger.active span:nth-child(2) {
  transform: rotate(-45deg);
}

#hamburger.active span:nth-child(3) {
  left: calc(26px);
  bottom: calc(25% - 5px);
  transform: rotate(225deg);
}
</style>
