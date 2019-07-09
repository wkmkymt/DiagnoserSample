<template>
  <div class="result-area">
    <p class="description">あなたにオススメのサプリメントはこちらです！</p>

    <ul class="supple-box">
      <li class="supple" v-for="supple in getResult" :key="supple.id">
        <router-link to="/result">
          <section class="supple-container">
            <h1 class="supple-name">{{ supple.name }}</h1>
            <p class="supple-desc">{{ supple.description }}</p>
          </section>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getResult'])
  }
}
</script>

<style scoped>
.result-area .description {
  font-size: 150%;
  text-align: center;
}

.supple-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 48px;
}

.supple-box .supple {
  width: 30%;
  margin: 5% 1%;
  background: #ffffff;
  border-radius: 15px;
}

.supple-box .supple > a {
  display: block;
  width: 100%;
}

.supple-box .supple-container {
  padding: 10%;
}

.supple-box .supple-name {
  font-size: 200%;
  color: #e84a50;
  text-align: center;
}

.supple-box .supple-desc {
  margin-top: 16px;
  font-size: 100%;
  color: #492c3d;
  text-align: center;
}

@media screen and (max-width: 420px) {
  .result-area .description {
    font-size: 90%;
  }

  .supple-box {
    margin-top: 24px;
  }

  .supple-box .supple {
    width: 45%;
  }

  .supple-box .supple-container {
    padding: 15%;
  }

  .supple-box .supple-name {
    font-size: 120%;
  }

  .supple-box .supple-desc {
    margin-top: 16px;
    font-size: 80%;
  }
}
</style>
