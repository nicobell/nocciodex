<template>

  <div :class="['interface', { 'close': !isOpen }]">
    <div class="inside-interface">
      <div>Edit selected Card</div>

      <!-- <div class="radios">
          <div class="radio">
            <input id="card" type="radio" v-model="type" value="card">
            <label for="card">Card</label>
          </div>
          <div class="radio">
            <input id="empty" type="radio" v-model="type" value="empty">
            <label for="empty">Empty slot</label>
          </div>
        </div> -->

      <div class="field">
        <label for="mainimage">Main card</label>
        <input type="text" id="mainimage" v-model="maincard">
      </div>

      <div class="field">
        <label for="altimage">Alternative card</label>
        <input type="text" id="altimage" v-model="altcard">
      </div>

      <div class="autocomplete field">
        <label for="pokemon">Selected pokemon</label>
        <input id="pokemon" type="text" v-model="pokemonName" @focus="toggleSuggestions(true)"
          @blur="toggleSuggestions(false)" @input="toggleSuggestions(true)" placeholder="Cerca Pokémon..." />
        <ul v-if="showSuggestions && filteredPokemons.length" class="suggestions">
          <li v-for="pokemon in filteredPokemons" :key="pokemon.pokedex_number"
            @mousedown.prevent="selectPokemon(pokemon)">
            {{ pokemon.name }}
          </li>
        </ul>
      </div>

      <div class="label">Pokedex number <span>{{ pokemonNumber }}</span></div>

      <div class="checkbox">
        <input type="checkbox" name="gotit" id="gotit" v-model="gotcard">
        <label for="gotit">Already have</label>
      </div>

      <button class="formbutton add" @click="editCard">Edit card</button>
      <button class="formbutton cancel" @click="closeEditor">Cancel</button>
    </div>
  </div>

</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { useCardsStore } from '@/stores/cards';
import { useStore } from '@/stores/data';
import { computed, onMounted, ref, watch } from 'vue';

const store = useStore()
const cardsStore = useCardsStore()

// gestione apertura e chiusura form
const isOpen = ref(false)

function closeEditor() {
  isOpen.value = false
  resetValues()
}

// campi form di input
const maincard = ref('')
const altcard = ref('')
const pokemonName = ref('')
const pokemonNumber = ref(null)
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

//submit handler
const editCard = async () => {
  try {
    const { data, error } = await supabase
      .from('cards')
      .update({ url: maincard.value, alturl: altcard.value, pokemon: pokemonNumber.value, gotit: gotcard.value })
      .eq('id', store.editingCard.id)
      .select();

    if (error) throw error

    cardsStore.refreshCards()
    closeEditor()

  } catch (error) {
    console.log(error)
  }
}

// popola campi carta da editare alla selezione
const currentCard = computed(() => store.editingCard)

watch(currentCard, async (newvalue, oldvalue) => {
  resetValues()

  if (newvalue) {
    isOpen.value = true
    maincard.value = store.editingCard.url
    altcard.value = store.editingCard.alturl
    gotcard.value = store.editingCard.gotit
    if (store.editingCard.pokemon)
      selectPokemon(store.pokemons.find(p => p.pokedex_number == store.editingCard.pokemon))
  }
})

</script>

<style scoped lang="scss">
.interface {
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inside-interface {
  max-height: 80svh;
  width: 90vw;
  background-color: $primary;
  transition: all ease 300ms;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

@media(min-width: 1200px) {
  .inside-interface {
    width: 50vw;
    padding: 4rem;
  }
}

.interface.close {
  max-height: 0;
  padding: 0 1rem;
  overflow: hidden;
  transition: all ease 300ms;
}
</style>