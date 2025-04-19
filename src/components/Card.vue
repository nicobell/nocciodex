<template>
  <div v-if="props.card.url != ''" :class="['card', (props.missing && props.card.gotit) ? 'missing' : '']">
    <!-- {{ props.card }} -->
    <img :src="props.card.url" :alt="'pokemon_' + props.card.pokemon">
  </div>
  <div v-else class="empty"></div>
</template>

<script setup>
const props = defineProps(['card', 'missing'])
</script>

<style scoped lang="scss">
.card,
.empty {
  aspect-ratio: calc(63.5/88);
  width: $cardwm;
  max-width: 160px;
  height: calc($cardwm * 88 / 63.5);
  max-height: 20svh;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &.missing img {
    filter: grayscale(1);
  }
}

@media (min-width: 1200px) {
  .card,
  .empty {
    width: $cardw;
    height: calc($cardw * 88 / 63.5);
    max-height: unset;
    max-width: unset;
  }
}

.empty {
  border-right: 1px solid #666;
  border-bottom: 1px solid #666;
  border-radius: 0;
}
</style>