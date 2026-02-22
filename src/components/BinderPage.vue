<template>
  <div :class="['page', { 'more': moreCols }]">
    <Card v-for="(card, i) in props.cards" :key="i + 'card'" :card="card" :missing="missing" />
  </div>
</template>

<script setup>
import Card from './Card.vue';
const props = defineProps(['cards', 'missing', 'moreCols'])
</script>

<style scoped lang="scss">

$pagewidthm: calc((3 * $cardwm) + (2 * $pagepadding) + (2 * $cardsgap));
//$pageheightm: calc(($pagewidthm * 88 / 63.5));

$pagewidth: calc((3 * ($cardh * 63.5 / 88)) + (2 * $pagepadding) + (2 * $cardsgap));
$pageheight: calc((3 * $cardh) + (2 * $pagepadding) + (2 * $cardsgap));//calc(($pagewidth * 88 / 63.5));

.page {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1vh;
  margin: 0 auto;
  height: fit-content;
  padding: 1vh;
  border-radius: 10px;
  background-color: #333;

  &.more {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  //min-height: $pageheightm;
  //min-width: $pagewidthm;
}

@media (min-width: 1200px) {
  .page {
    gap: $cardsgap;
    padding: $pagepadding;
    margin: unset;
    min-height: $pageheight;
    min-width: $pagewidth;
  }
}
</style>