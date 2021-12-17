<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="cards">
      <div class="card">
        <h2 class="card-title">Title</h2>
        <div class="tech-stack">
          <div class="stack-item">1</div>
          <div class="stack-item">2</div>
          <div class="stack-item">3</div>
        </div>
        <img src="https://picsum.photos/200/100" alt="" class="project-image" />
        <p class="project-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          consequuntur nam quisquam pariatur unde? Iusto debit
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Title</h2>
        <div class="tech-stack">
          <div class="stack-item">1</div>
          <div class="stack-item">2</div>
          <div class="stack-item">3</div>
        </div>
        <img src="https://picsum.photos/200/100" alt="" class="project-image" />
        <p class="project-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          consequuntur nam quisquam pariatur unde? Iusto debit
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Title</h2>
        <div class="tech-stack">
          <div class="stack-item">1</div>
          <div class="stack-item">2</div>
          <div class="stack-item">3</div>
        </div>
        <img src="https://picsum.photos/200/100" alt="" class="project-image" />
        <p class="project-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          consequuntur nam quisquam pariatur unde? Iusto debit
        </p>
      </div>
      <div class="card">
        <h2 class="card-title">Title</h2>
        <div class="tech-stack">
          <div class="stack-item">1</div>
          <div class="stack-item">2</div>
          <div class="stack-item">3</div>
        </div>
        <img src="https://picsum.photos/200/100" alt="" class="project-image" />
        <p class="project-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          consequuntur nam quisquam pariatur unde? Iusto debit
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
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
.card {
  width: 250px;
  height: 300px;
  background-color: cornflowerblue;
  border-radius: 15px;
  margin: 20px;
}
.card-title {
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  background-color: rgb(90, 132, 211);
}
.tech-stack {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
}
.stack-item {
  width: 50px;
  height: 50px;
  background-color: rgb(47, 104, 209);
}
.project-image {
}
</style>
