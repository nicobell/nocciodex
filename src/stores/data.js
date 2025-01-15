import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('data', () => {
  
  const pokemons = ref([])

  function loadPokemons(pokes) {
    pokemons.value = pokes
  }

  return { pokemons, loadPokemons }
})
