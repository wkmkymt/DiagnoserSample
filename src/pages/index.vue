<template>
  <div class="content">
    <Explanation />
    <DiagnosisButton href="/diagnosis" />
  </div>
</template>

<script>
import Explanation from '~/components/Explanation'
import DiagnosisButton from '~/components/DiagnosisButton'

export default {
  components: { Explanation, DiagnosisButton }
}
</script>

<style scoped></style>
