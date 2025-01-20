<template>
  <div :class="{ 'loader': true, 'mobile': isMobile }">

    <button :class="{ 'loaderbutton': true, 'addcard': true, 'close': isOpen }" @click="toggleLoader">
      <img src="../assets/card.png" alt="">
    </button>

    <div :class="{ 'interface': true, 'open': isOpen }">

      <div>Select card or empty slot</div>

      <div class="radios">
        <div :class="['radio', {'active': type=='card'}]">
          <input id="card" type="radio" v-model="type" value="card">
          <label for="card">Card</label>
        </div>
        <div :class="['radio', {'active': type=='empty'}]">
          <input id="empty" type="radio" v-model="type" value="empty">
          <label for="empty">Empty slot</label>
        </div>
      </div>

      <div class="field">
        <label :class="{ 'disabled': type == 'empty' }" for="mainimage">Main card</label>
        <input :disabled="type == 'empty'" type="text" id="mainimage" v-model="maincard">
      </div>

      <div class="field">
        <label :class="{ 'disabled': type == 'empty' }" for="altimage">Alternative card</label>
        <input :disabled="type == 'empty'" type="text" id="altimage" v-model="altcard">
      </div>

      <div class="autocomplete field">
        <label :class="{ 'disabled': type == 'empty' }" for="pokemon">Selected pokemon</label>
        <input :disabled="type == 'empty'" id="pokemon" type="text" v-model="pokemonName"
          @focus="toggleSuggestions(true)" 
          @blur="toggleSuggestions(false)" 
          @input="toggleSuggestions(true)"
          placeholder="Cerca Pokémon..." />
        <ul v-if="showSuggestions && filteredPokemons.length" class="suggestions">
          <li v-for="pokemon in filteredPokemons" :key="pokemon.pokedex_number"
            @mousedown.prevent="selectPokemon(pokemon)">
            {{ pokemon.name }}
          </li>
        </ul>
      </div>

      <div :class="{ 'disabled': type == 'empty', 'label': true }">Pokedex number <span>{{ pokemonNumber }}</span></div>

      <button class="formbutton add" @click="addCard" :disabled="type=='card' && (!maincard || !pokemonNumber)">Add card</button>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabaseClient';
import { useBinderStore } from '@/stores/binders';
import { useStore } from '@/stores/data';
import { useUserStore } from '@/stores/users';
import { computed, ref } from 'vue';

const isOpen = ref(false)
const store = useStore()
const userStore = useUserStore()
const binderStore = useBinderStore()

const isMobile = computed(() => window.innerWidth < 1024)

const maincard = ref('')
const altcard = ref('')
const type = ref('card')

const toggleLoader = () => {
  isOpen.value = !isOpen.value
}

const emit = defineEmits(['add-card'])

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

const addCard = async () => {
  if(!userStore.currentId) {
    alert('Prima carica un profilo!')
    return false
  }

  if(!binderStore.currentBinder) {
    alert('Prima scegli un binder!')
    return false
  }

  if(type.value == 'card') {
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: maincard.value, alturl: altcard.value, pokemon: pokemonNumber.value, binder: binderStore.currentBinder })
        .select();

      //console.log('add card', data)
      toggleLoader()
      
    
      if(error) throw error
    } catch (error) {
      //console.log(error)
    }

  } else {
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: '', alturl: '', pokemon: null, binder: binderStore.currentBinder })
        .select();

      //console.log('add empty slot', data)
      toggleLoader()
    
      if(error) throw error
    } catch (error) {
      //console.log(error)
    }
  }

  emit('add-card')

  maincard.value = ''
  altcard.value = ''
  pokemonName.value = ''
  pokemonNumber.value = null
}


</script>

<style scoped lang="scss">
$card-height-mobile: 80svh;
$card-height-desktop: 90vh;
$pokeyellow: #F1E668;
$pokeblue: #1f2573;


.label {
  align-items: baseline;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.label span {
  color: #fff;
  font-size: 1rem;
}

/* autocomplete */
.autocomplete {
  position: relative;
  input { width: 100%; }
}

.suggestions {
  color: #fff;
  position: absolute;
  top: calc(100% + .5rem);
  left: 0;
  right: 0;
  background: #666;
  border-radius: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
}

.suggestions li {
  padding: .25rem .5rem;
  font-size: .8rem;
}

</style>