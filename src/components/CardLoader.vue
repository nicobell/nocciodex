<template>
  <div :class="{ 'loader': true, 'mobile': isMobile }">
    <button :class="{ 'addcard': true, 'close': isOpen }" @click="toggleLoader">+</button>

    <div :class="{ 'interface': true, 'open': isOpen }">

      <p class="intro">Select card or empty slot</p>

      <div class="radios">
        <div class="radio">
          <input id="card" type="radio" v-model="type" value="card">
          <label for="card">Card</label>
        </div>

        <div class="radio">
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

      <div class="autocomplete">
        <label :class="{ 'disabled': type == 'empty' }" for="pokemon">Selected pokemon</label>
        <!-- Campo di input -->
        <input :disabled="type == 'empty'" id="pokemon" type="text" v-model="pokemonName"
          @focus="toggleSuggestions(true)" @blur="toggleSuggestions(false)" @input="toggleSuggestions(true)"
          placeholder="Cerca Pokémon..." />

        <!-- Elenco dei suggerimenti -->
        <ul v-if="showSuggestions && filteredPokemons.length" class="suggestions">
          <li v-for="pokemon in filteredPokemons" :key="pokemon.pokedex_number"
            @mousedown.prevent="selectPokemon(pokemon)">
            {{ pokemon.name }}
          </li>
        </ul>
      </div>

      <div :class="{ 'disabled': type == 'empty', 'number': true }">Pokedex number <span>{{ pokemonNumber }}</span></div>

      <button class="add" @click="addCard" :disabled="type=='card' && (!maincard || !pokemonNumber)">Add card</button>

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

const isMobile = computed(() => window.innerWidth < 768)

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

      console.log('add card', data)
      toggleLoader()
      
    
      if(error) throw error
    } catch (error) {
      console.log(error)
    }

  } else {
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: null, alturl: null, pokemon: null, binder: binderStore.currentBinder })
        .select();

      console.log('add empty slot', data)
      toggleLoader()
    
      if(error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  emit('add-card')

}


</script>

<style scoped lang="scss">
$card-height-mobile: 80svh;
$card-height-desktop: 90vh;
$pokeyellow: #F1E668;
$pokeblue: #1f2573;

.loader {
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.intro {
  color: #fff;
}

.addcard {
  padding: .5rem;
  border-radius: 50%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;

  &.close {
    transform-origin: center center;
    rotate: 45deg;
    transition: all 300ms ease;
  }
}

.interface {
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  right: -.5rem;
  width: calc(100vw - 1rem);
  height: 60svh;
  pointer-events: none;

  opacity: 0;
  background-color: $pokeblue;
  padding: 1rem;
  margin: 0 .5rem;
  border-radius: 10px;
  transition: all 500ms ease;
  flex-direction: column;

  &.open {
    display: flex;
    pointer-events: all;
    bottom: calc(100% + .5rem);
    z-index: 101;
    opacity: 1;
    transition: all 500ms ease;


  }
}

.radios {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.radio {
  display: flex;
  gap: .5rem;
}

.field {
  display: flex;
  flex-direction: column;
}

label {
  color: $pokeyellow;

  &.disabled {
    opacity: .3;
  }
}

input {
  padding: .25rem .5rem;
  border: none;
  background-color: rgba(255, 255, 255, .3);
  border-radius: 10px;
  color: #fff;

  &:disabled {
    opacity: .3;
  }
}

.number {
  color: $pokeyellow;

  &.disabled {
    opacity: .3;
  }

  span {
    color: #fff;
  }
}

.add {
  margin: 0 auto;
  padding: .25rem 2rem;
  border-radius: 3rem;
  border: none;
  color: $pokeblue;
  font-weight: 500;
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
  cursor: pointer;
}

.suggestions li:hover {
  background-color: #f0f0f0;
}
</style>