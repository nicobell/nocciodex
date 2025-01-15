import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  
  const currentUser = ref(null)
  const currentId = ref(null)

  function loadUser(name, id) {
    currentUser.value = name
    currentId.value = id
  }

  return { currentUser, currentId, loadUser }
})
