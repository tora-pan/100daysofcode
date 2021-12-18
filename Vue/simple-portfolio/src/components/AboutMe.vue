<template>
  <div class="container" id="about">
    <div class="left-side">
      <h1 class="title">My Name is {{$store.getters.getCurrentUser}}</h1>
      <h3 class="headline">
        I'm a full stack developer who speaks Japanese and is ready to turn some
        heads.
      </h3>
      <p class="about-me-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        repellendus deleniti ad laborum quidem magni quos? Aliquid nihil in
        porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        exercitationem cupiditate dignissimos eius mollitia, eum assumenda
        provident reprehenderit nam cumque!
      </p>

      <p class="about-me-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        repellendus deleniti ad laborum quidem magni quos? Aliquid nihil in
        porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        exercitationem cupiditate dignissimos eius mollitia, eum assumenda
        provident reprehenderit nam cumque!
      </p>
    </div>
    <div class="right-side">
      <img src="https://picsum.photos/600/600" alt="random photo from picsum" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
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
  background-color: lightcoral;
  display: flex;
  flex-direction: row;
  padding-left: 50px;
}

.left-side {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 150px;
  /* justify-content: center; */
  /* align-items: center; */
  width: 40%;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
}

.title {
  font-size: 4rem;
  margin: 100px 0 20px 0;
}

.headline {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about-me-description {
  line-height: 1.5;
  margin: 10px;
}
</style>
