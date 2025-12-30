<template>
  <div class="buttons">
    <button :disabled="props.page <= 0 || props.flipping" @click="swipePage('first')">&lt;&lt;</button>
    <button :disabled="props.page <= 0 || props.flipping" @click="swipePage('left')">&lt;</button>
    <div><span style="color: #fff;">Pag {{ parseInt(props.page) + 1 }}</span></div>
    <button :disabled="props.disableNext || props.flipping" @click="swipePage('right')">&gt;</button>
  </div>
</template>

<script setup>
const props = defineProps(['flipping', 'page', 'disableNext'])
const emit = defineEmits(['swipe-page'])

function swipePage(side) {
  emit('swipe-page', side)
}
</script>

<style lang="scss" scoped>
.button {
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  display: flex;
  justify-content: center;

  align-items: center;
  background: none;
  border: none;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    box-shadow: 0 0 10px 10px $primary;
    opacity: .8;
    z-index: -1;
  }
}

.buttons {
  grid-area: pages;
  //margin: auto 0 0 0;
  margin: auto;
  gap: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  button {
    padding: .5rem 1rem;
    border-radius: 3rem;
    border: none;
  }
}

@media (min-width: 1024px) {
  .buttons {
    /* position: absolute;
    bottom: 2rem;
    left: 2rem; */
    grid-area: bottom;
    gap: 1rem;
    padding: 0;
  }
}
</style>