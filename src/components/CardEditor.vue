<template>


  <div :class="{ 'interface': true, 'open': props.isOpen, 'pulse': pulse }">

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
    <button class="formbutton cancel" @click="emit('close-editor')">Cancel</button>
  </div>

</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { useStore } from '@/stores/data';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps(['isOpen'])
const openWatcher = computed(() => { return props.isOpen })
const store = useStore()

const isMobile = computed(() => window.innerWidth < 1024)

const maincard = ref('')
const altcard = ref('')
const gotcard = ref(false) 

const emit = defineEmits(['edit-card', 'close-editor'])

// Campo di input con v-model
const pokemonName = ref('');
const pokemonNumber = ref(null);
const showSuggestions = ref(false);

// Suggerimenti filtrati
const filteredPokemons = computed(() => {
  if (!pokemonName.value) return [];
  return store.pokemons.filter(p =>
    p.name.toLowerCase().includes(pokemonName.value.toLowerCase())
  );
});

// Gestione della selezione
const selectPokemon = (pokemon) => {
  pokemonName.value = pokemon.name;
  pokemonNumber.value = pokemon.pokedex_number;
  showSuggestions.value = false; // Nascondi i suggerimenti
};

// Mostra/nascondi suggerimenti
const toggleSuggestions = (state) => {
  showSuggestions.value = state;
};

const editCard = async () => {
  try {

    console.log(gotcard.value)

    const { data, error } = await supabase
      .from('cards')
      .update({ url: maincard.value, alturl: altcard.value, pokemon: pokemonNumber.value, gotit: gotcard.value })
      .eq('id', store.editingCard.id)
      .select();

    if (error) throw error
  } catch (error) {
    //console.log(error)
  }

  emit('edit-card')

  maincard.value = ''
  altcard.value = ''
  pokemonName.value = ''
  pokemonNumber.value = null
}

const currentCard = computed(() => store.editingCard)

watch(openWatcher, async (newvalue, oldvalue) => {
  if (newvalue) {
    maincard.value = store.editingCard.url
    altcard.value = store.editingCard.alturl
    gotcard.value = store.editingCard.gotit
    if (store.editingCard.pokemon)
      selectPokemon(store.pokemons.find(p => p.pokedex_number == store.editingCard.pokemon))
  } else {
    maincard.value = ''
    altcard.value = ''
    pokemonName.value = ''
    pokemonNumber.value = null
    gotcard.value = false
  }
})

const pulse = ref(false)

watch(currentCard, async (newvalue, oldvalue) => {
  if (oldvalue && newvalue) {
    pulse.value = true;
    setTimeout(() => {
      pulse.value = false;
    }, 500);
  }

  if (newvalue) {
    maincard.value = store.editingCard.url
    altcard.value = store.editingCard.alturl
    gotcard.value = store.editingCard.gotit
    if (store.editingCard.pokemon)
      selectPokemon(store.pokemons.find(p => p.pokedex_number == store.editingCard.pokemon))
  } else {
    maincard.value = ''
    altcard.value = ''
    pokemonName.value = ''
    pokemonNumber.value = null
    gotcard.value = false
  }
})

</script>

<style scoped lang="scss">
</style>