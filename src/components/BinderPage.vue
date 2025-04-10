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
  gap: $cardsgap;

  width: 50%;
  height: 100%;

  padding: $pagepadding;
  
  border-radius: 10px;
  background-color: #333;
}
</style>