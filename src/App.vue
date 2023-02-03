<template>
  <nav>
    <router-link to="/business">Business</router-link>
    <router-link to="/entertainment">Entertainment</router-link>
    <router-link to="/">General</router-link>
    <router-link to="/health">Health</router-link>
    <router-link to="/science">Science</router-link>
    <router-link to="/sports">Sports</router-link>
    <router-link to="/technology">Technology</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #B4A5A5;
  background: #151515;
}

nav {
  padding: 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(1rem);
  background: #151515;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    font-weight: bold;
    color: #3C415C;
    font-size: 1.3rem;
    text-decoration: none;
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;

    &.router-link-exact-active {
      color: #B4A5A5;
      font-size: 2.2rem;
    }
  }
}

@media (max-width:786px) {
  nav {
    padding: 15px;
  }

  a {
    font-size: 0.8rem !important;
    text-decoration: none;
    margin: 0.2rem;

    &.router-link-exact-active {
      color: #B4A5A5;
      font-size: 1.5rem !important;
    }
  }
}
</style>
