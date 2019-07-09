<template>
  <div class="btn">
    <router-link :to="href" @click.native="initState">
      診断する
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },

  methods: {
    ...mapMutations(['initState'])
  }
}
</script>

<style scoped>
.btn {
  width: 40%;
  margin: 144px auto 0;
}

.btn a {
  display: block;
  width: 100%;
  padding: 16px 0;
  background: #e84a50;
  border-radius: 5em;
  color: #ffffff;
  font-size: 200%;
  font-weight: 700;
  text-align: center;
  transition: ALl 0.2s ease-in;
}

.btn a:hover {
  box-shadow: 0px 4px 6px #666666;
}

@media screen and (max-width: 600px) {
  .btn {
    width: 60%;
  }
}

@media screen and (max-width: 420px) {
  .btn {
    width: 80%;
    margin-top: 96px;
  }

  .btn a {
    font-size: 160%;
  }
}
</style>
