<template>
  <div class="root-container">
    <!-- Header -->
    <Header />
    <div class="container">
      <!-- About Me -->
      <AboutMe />
      <!-- Projects -->
      <Projects />
      <!-- Contact -->
      <Contact />
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AboutMe from "./components/AboutMe.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    AboutMe,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
