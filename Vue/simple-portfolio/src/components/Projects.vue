<template>
  <div class="container" id="projects">
    <h1>Projects</h1>
    <div class="cards">
      <ProjectCard
        title="Title 1"
        techStack="HTML"
        projectInfo="An awesome Project. Took me 13s to make."
      />
      <ProjectCard
        title="Title 1"
        techStack="HTML"
        projectInfo="An awesome Project. Took me 13s to make."
      />
      <ProjectCard
        title="Title 1"
        techStack="HTML"
        projectInfo="An awesome Project. Took me 13s to make."
      />
      <ProjectCard
        title="Title 1"
        techStack="HTML"
        projectInfo="An awesome Project. Took me 13s to make."
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: coral;
  display: flex;
  flex-direction: column;
}

.cards {
  margin-top: 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
