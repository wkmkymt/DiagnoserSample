<template>
  <header class="app-header" :class="{ 'is-home': $route.name === 'home' }">
    <h1>
      <router-link to="/">ShindanDA!</router-link>
    </h1>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.app-header {
  width: 100%;
}

.app-header.is-home {
  padding: 48px 0;
}

.app-header h1 {
  width: 100%;
  text-align: center;
}

.app-header a {
  color: #492c3d;
  font-family: 'Asap', sans-serif;
  font-size: 150%;
  font-weight: 700;
  transition: 0.6s All ease;
}

.app-header.is-home a {
  font-size: 300%;
}

@media screen and (max-width: 420px) {
  .app-header a {
    font-size: 120%;
  }

  .app-header.is-home a {
    font-size: 180%;
  }
}
</style>
