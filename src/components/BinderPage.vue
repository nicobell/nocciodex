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
$pagewidth: calc((3 * $cardw) + (2 * $pagepadding) + (2 * $cardsgap));
$pageheight: calc(($pagewidth * 88 / 63.5));

.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .75rem;
  margin: 0 auto;
  height: fit-content;
  padding: .75rem;
  border-radius: 10px;
  background-color: #333;

  min-height: $pageheight;
  min-width: $pagewidth;
}

@media (min-width: 1200px) {
  .page {
    gap: $cardsgap;
    padding: $pagepadding;
    margin: unset;
  }
}
</style>