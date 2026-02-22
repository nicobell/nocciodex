<template>
  <div v-if="props.card.url != ''" :class="[
    'card', 
    { 'missing': props.missing && props.card.gotit },
    { 'nopoke': !props.card.pokemon }
  ]"

    @click="togglePriority">
    <img :class="[{ 'over': mainPriority }]" :src="props.card.url" :alt="'pokemon_' + props.card.pokemon">
    <img v-if="props.card.alturl" :class="['alt', { 'over': !mainPriority }]" :src="props.card.alturl"
      :alt="'pokemon_alt_' + props.card.pokemon">

    <div class="card-buttons"> <!-- v-if="!isMobile" -->
      <button class="edit" @click="editCard">edit</button>
      <button class="delete" @click="deleteCard(props.card)">delete</button>
      <button class="addleft" @click="addInPosition(props.card.order)">+</button>
      <button class="addright" @click="addInPosition(props.card.order + 1)">+</button>
    </div>

   <!--  <div class="card-buttons" v-else>
      <template v-if="!toggleButtonsMobile">
        <button class="edit" @click="showButtons">show buttons</button>
      </template>
      <template v-else>
        <button class="edit" @click="editCard">edit</button>
        <button class="delete" @click="deleteCard(props.card)">delete</button>
        <button class="addleft" @click="addInPosition(props.card.order)">+</button>
        <button class="addright" @click="addInPosition(props.card.order + 1)">+</button>
      </template>
    </div> -->

    <div v-if="props.card.alturl" class="altlabel">click for {{ mainPriority ? 'alt' : 'main' }}</div>
  </div>
  <div v-else class="empty">
    <div class="card-buttons">
      <button class="edit" @click="editCard">edit</button>
      <button class="delete" @click="deleteCard(props.card)">delete</button>
      <button class="addleft" @click="addInPosition(props.card.order)">+</button>
      <button class="addright" @click="addInPosition(props.card.order)">+</button>
    </div>
  </div>
</template>

<script setup>
import { useCardsStore } from '@/stores/cards';
import { useStore } from '@/stores/data';
import { computed, ref, watch } from 'vue';

const props = defineProps(['card', 'missing'])
const store = useStore()
const cardsStore = useCardsStore()
const mainPriority = ref(true)
/* const toggleButtonsMobile = ref(false)

function showButtons() {
  toggleButtonsMobile.value = true
}

const isMobile = computed(() => {
  return window.innerWidth < 1200
}) */

function togglePriority() {
  mainPriority.value = !mainPriority.value
}

function editCard() {
  store.setEditing(props.card)
  store.setEditor(true)
  
}

async function deleteCard(card) {
  await cardsStore.deleteCard(card)
  cardsStore.refreshCards()
}

const cardWatcher = computed(() => props.card)
watch(cardWatcher, () => {
  mainPriority.value = true
})

function addInPosition(position) {
  store.setOpen(true);
  store.setPosition(position);
}
</script>

<style scoped lang="scss">
.card,
.empty {
  aspect-ratio: calc(63.5/88);
  width: fit-content;
  max-width: 160px;
  height: calc($cardwm * 88 / 63.5);
  max-height: 24svh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    z-index: 1;
  }

  img.alt {
    z-index: 0;

    &.over {
      z-index: 2;
    }
  }

  &.missing img {
    filter: grayscale(1);
  }
}

.more {
  .card.nopoke {
    border: 4px solid $secondary;
  }
}

@media (min-width: 1200px) {
  .card,
  .empty {
    width: calc($cardh * 63.5 / 88); //$cardw;
    height: $cardh; //calc($cardw * 88 / 63.5);
    max-height: unset;
    max-width: unset;

    img {
      object-fit: cover;
    }
  }
}

.empty {
  border-right: 1px dashed #666;
  border-bottom: 1px dashed #666;
  border-radius: 0;
}

.card-buttons {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: .5rem;
  flex-direction: column;
  gap: .25rem;
  height: calc(100% - 1rem);
  width: calc(100% - 1rem);

  button {
    border-radius: 0;
    background: white;
    border: none;
    padding: .25rem;
    max-width: 50%;

    &:hover {
      color: white;
      cursor: pointer;

      &.edit {
        background: $primary;
      }
      &.delete {
        background: $secondary;
      }
      &.addleft,
      &.addright {
        background: $accent;
      }
    }

    &.addleft,
    &.addright {
      position: absolute;
      top: 50%;
      left: 0;
      translate: 0 -50%;
      font-size: 1.5rem;

    }
    &.addright {
      left: unset;
      right: 0;
    }
  }
}

.altlabel {
  position: absolute;
  z-index: 3;
  display: none;
  bottom: .25rem;
  left: 50%;
  translate: -50% 0;
  padding: .25rem;
  background: white;
  font-size: .8rem;
  width: 80%;
  text-align: center;
  pointer-events: none;
  cursor: default;
}

.empty:hover,
.card:hover {
  .card-buttons {
    display: flex;
  }

  .altlabel {
    display: block;
  }
}
</style>