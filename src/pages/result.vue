<template>
  <div class="content">
    <ResultArea />
  </div>
</template>

<script>
import ResultArea from '~/components/ResultArea'

export default {
  components: { ResultArea }
}
</script>

<style scoped>
.content {
  max-width: 960px;
  margin: 0 auto;
}
</style>
