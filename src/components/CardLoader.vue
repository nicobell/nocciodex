<template>
  <div>
    <button class="toggler" @click="toggleLoader">
      add card
    </button>

    <div :class="['interface', { 'close': !isOpen }]">

      <div class="field">
        <div class="label">
          Type
        </div>
        <div class="radios">
          <div :class="['radio', { 'active': type == 'card' }]">
            <input id="card" type="radio" v-model="type" value="card">
            <label for="card">Card</label>
          </div>
          <div :class="['radio', { 'active': disableField }]">
            <input id="empty" type="radio" v-model="type" value="empty">
            <label for="empty">Empty slot</label>
          </div>
        </div>
      </div>

      <div class="field">
        <label :class="[{ 'disabled': disableField }]" for="mainimage">Main card</label>
        <input :disabled="disableField" type="text" id="mainimage" v-model="maincard">
      </div>

      <div class="field">
        <label :class="[{ 'disabled': disableField }]" for="altimage">Alternative card</label>
        <input :disabled="disableField" type="text" id="altimage" v-model="altcard">
      </div>

      <div class="autocomplete field">
        <label :class="[{ 'disabled': disableField }]" for="pokemon">Selected pokemon</label>
        <input :disabled="disableField" id="pokemon" type="text" v-model="pokemonName" @focus="toggleSuggestions(true)"
          @blur="toggleSuggestions(false)" @input="toggleSuggestions(true)" placeholder="Cerca Pokémon..." />

        <ul v-if="showSuggestions && filteredPokemons.length" class="suggestions">
          <li v-for="pokemon in filteredPokemons" :key="pokemon.pokedex_number"
            @mousedown.prevent="selectPokemon(pokemon)">
            {{ pokemon.name }}
          </li>
        </ul>
      </div>

      <div :class="{ 'disabled': disableField, 'label': true }">Pokedex number <span>{{ pokemonNumber }}</span></div>

      <div class="checkbox">
        <input type="checkbox" name="gotit" id="gotit" v-model="gotcard">
        <label for="gotit">Already have</label>
      </div>

      <button :class="[{ 'disabled': type == 'card' && !maincard }]" @click="addCard"
        :disabled="type == 'card' && !maincard">Add card</button>
      <button class="formbutton cancel" @click="closeLoader">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { useBinderStore } from '@/stores/binders';
import { useCardsStore } from '@/stores/cards';
import { useStore } from '@/stores/data';
import { computed, ref } from 'vue';

const store = useStore()
const cardsStore = useCardsStore()
const binderStore = useBinderStore()

const emit = defineEmits(['add-card', 'toggle-loader', 'close-loader'])

// gestione apertura e chiusura form
const isOpen = ref(false)

function toggleLoader() {
  isOpen.value = !isOpen.value
}

function closeLoader() {
  isOpen.value = false
  resetValues()
}

// campi form di input
const maincard = ref('')
const altcard = ref('')
const type = ref('card')
const pokemonName = ref('');
const pokemonNumber = ref(null);
const gotcard = ref(false)

function resetValues() {
  maincard.value = ''
  altcard.value = ''
  pokemonName.value = ''
  pokemonNumber.value = null
  gotcard.value = false
}

// suggerimenti autocompletamento
const showSuggestions = ref(false);

const filteredPokemons = computed(() => {
  if (!pokemonName.value) return [];
  return store.pokemons.filter(p =>
    p.name.toLowerCase().includes(pokemonName.value.toLowerCase())
  );
});

function selectPokemon(pokemon) {
  pokemonName.value = pokemon.name;
  pokemonNumber.value = pokemon.pokedex_number;
  showSuggestions.value = false;
};

function toggleSuggestions(state) {
  showSuggestions.value = state;
};

// condizione campi disabled
const disableField = computed(() => type.value == 'empty')

// submit handler
async function addCard(newCardOrder = null) {
  const card = {
    maincard: maincard.value,
    altcard: altcard.value,
    type: type.value,
    pokemonName: pokemonName.value,
    pokemonNumber: pokemonNumber.value,
    gotcard: gotcard.value,
    binder: binderStore.currentBinder
  }

  let insertOrder = binderStore.lastBinderOrder + 1
  /* if (newCardOrder.value) {
    insertOrder = newCardOrder.value
  }

  if (newCardOrder.value) {
    console.log('update all cards from binder ' + binderStore.currentBinder + ' from position ' + insertOrder)
    try {
      const { data, error } = await supabase
        .rpc('increment_order', {
          binder_id: binderStore.currentBinder,
          min_order: insertOrder
        });

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  } */

  if (card.type == 'card') {
    //console.log('add card', insertOrder)
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: card.maincard, alturl: card.altcard, pokemon: card.pokemonNumber, gotit: card.gotcard, binder: card.binder, order: insertOrder })
        .select();

      if (error) throw error

      binderStore.setLastOrder(binderStore.lastBinderOrder + 1)

    } catch (error) {
      console.log(error)
    }

  } else {
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: '', alturl: '', pokemon: null, binder: card.binder, order: insertOrder })
        .select();

      if (error) throw error

      binderStore.setLastOrder(binderStore.lastBinderOrder + 1)

    } catch (error) {
      console.log(error)
    }
  }

  //newCardOrder.value = null
  cardsStore.refreshCards()
  resetValues()
}


</script>

<style scoped lang="scss">
.interface {
  max-height: 500px;
  background-color: $primary;
  transition: all ease 300ms;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.interface.close {
  max-height: 0;
  padding: 0 1rem;
  overflow: hidden;
  transition: all ease 300ms;
}

.toggler {
  width: 100%;
  text-align: center;
  margin: .5rem 0;
}
</style>