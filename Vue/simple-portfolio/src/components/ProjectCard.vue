<template>
  <div class="card">
    <h2 class="card-title">{{ title }}</h2>
    <div class="img-container">
      <img src="https://picsum.photos/200/100" alt="" class="project-image" />
      <div class="overlay">
        <div class="text">{{ techStack }}, {{techStack}}</div>
        <a href="#" >Live Link</a><br>
        <a href="#" >Code</a>
      </div>
      <p class="project-description">
        {{ projectInfo }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
    techStack: String,
    projectInfo: String,
  },
  data() {},
  methods: {},
};
</script>

<style>
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

.project-description{
  display: flex;
  text-align: center;
  height: 100px;
  bottom: 0;
  border: 1px solid red;
}

/* Container needed to position the overlay. Adjust the width as needed */
.img-container {
  position: relative;
  width: 100%;
}

/* Make the image to responsive */
.project-image {
  width: 100%;
  height: auto;
}

/* The overlay effect (full height and width) - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008CBA;
  overflow: hidden;
  opacity: .9;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transition: .3s ease;
}

/* When you mouse over the container, the overlay text will "zoom" in display */
.img-container:hover .overlay {
  transform: scale(1);
}

/* Some text inside the overlay, which is positioned in the middle vertically and horizontally */
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>
