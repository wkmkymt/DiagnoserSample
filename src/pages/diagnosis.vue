<template>
  <div class="content">
    <DiagnosisBox />
  </div>
</template>

<script>
import DiagnosisBox from '~/components/DiagnosisBox'

export default {
  components: { DiagnosisBox }
}
</script>

<style scoped>
.content {
  max-width: 960px;
  margin: 0 auto;
}
</style>
