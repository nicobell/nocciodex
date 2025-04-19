<template>
  <div class="page">
    <Card v-for="(card, i) in props.cards" :key="i + 'card'" :card="card" :missing="missing" />
  </div>
</template>

<script setup>
import Card from './Card.vue';
const props = defineProps(['cards', 'missing'])
</script>

<style scoped lang="scss">
@import "../style/variables";

.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .75rem;

  margin: 0 auto;
  height: 100%;

  padding: .75rem;

  border-radius: 10px;
  background-color: #333;
}

@media (min-width: 1200px) {
  .page {
    gap: $cardsgap;
    padding: $pagepadding;
    width: 50%;
    margin: unset;
  }
}
</style>