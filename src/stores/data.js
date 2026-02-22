import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('data', () => {
  
  const pokemons = ref([])
  const editingCard = ref(null)
  const isOpen = ref(false);
  const isOpenEditor = ref(false);
  const position = ref(null);

  function loadPokemons(pokes) {
    pokemons.value = pokes
  }

  function setEditing(card) {
    editingCard.value = card
  }

  function setOpen(bool) {
    isOpen.value = bool;
  }

  function setPosition(num) {
    position.value = num;
  }

  function setEditor(bool) {
    isOpenEditor.value = bool;
  }

  return { pokemons, editingCard, isOpen, isOpenEditor, position, loadPokemons, setEditing, setOpen, setPosition, setEditor }
})
