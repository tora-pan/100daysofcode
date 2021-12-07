<template>
  <div className="header">
    <nav className="navbar">
      <h1 className="logo">Flashcards - Vue</h1>
      <ul className="navlinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Flash Cards</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {},
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 10vh;
}

.header .navbar .logo {
  margin: 20px auto 20px 20px;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  width: 100vw;
  background-color: #1d3557;
  padding: 10px 100px 10px 10px;
}

.navlinks {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  color: white;
}

a {
  color: white;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

a:hover {
  color: red;
  transform: rotate(10deg);
}
</style>
