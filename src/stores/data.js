import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('data', () => {
  
  const pokemons = ref([])
  const editingCard = ref(null)

  function loadPokemons(pokes) {
    pokemons.value = pokes
  }

  function setEditing(card) {
    editingCard.value = card
  }

  return { pokemons, editingCard, loadPokemons, setEditing }
})
