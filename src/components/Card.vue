<template>
  <div v-if="props.card.url != ''" :class="['card', (props.missing && props.card.gotit) ? 'missing' : '']"
    @click="togglePriority">
    <img :class="[{ 'over': mainPriority }]" :src="props.card.url" :alt="'pokemon_' + props.card.pokemon">
    <img v-if="props.card.alturl" :class="['alt', { 'over': !mainPriority }]" :src="props.card.alturl"
      :alt="'pokemon_alt_' + props.card.pokemon">

    <div class="card-buttons">
      <button class="edit" @click="editCard">edit</button>
      <button class="delete" @click="deleteCard(props.card)">delete</button>
    </div>

    <div v-if="props.card.alturl" class="altlabel">click for {{ mainPriority ? 'alt' : 'main' }}</div>
  </div>
  <div v-else class="empty"></div>
</template>

<script setup>
import { useCardsStore } from '@/stores/cards';
import { useStore } from '@/stores/data';
import { ref } from 'vue';

const props = defineProps(['card', 'missing'])
const store = useStore()
const cardsStore = useCardsStore()
const mainPriority = ref(true)

function togglePriority() {
  mainPriority.value = !mainPriority.value
}

function editCard() {
  store.setEditing(props.card)
}

async function deleteCard(card) {
  await cardsStore.deleteCard(card)
  cardsStore.refreshCards()
}
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


.card-buttons {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: .5rem;
  flex-direction: column;
  gap: .25rem;

  button {
    border-radius: 0;
    background: white;
    border: none;
    padding: .25rem;

    &:hover {
      color: white;
      cursor: pointer;

      &.edit {
        background: $primary;
      }
      &.delete {
        background: $secondary;
      }
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

.card:hover {
  .card-buttons {
    display: flex;
  }

  .altlabel {
    display: block;
  }
}
</style>