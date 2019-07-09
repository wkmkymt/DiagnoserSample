<template>
  <div class="container">
    <AppHeader />
    <main class="app-main">
      <transition name="fade" appear="appear" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: { AppHeader }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 48px;
}

.app-main {
  margin-top: 48px;
}

@media screen and (max-width: 600px) {
  .container {
    padding: 92px 24px;
  }
}

@media screen and (max-width: 420px) {
  .container {
    padding: 48px 24px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
