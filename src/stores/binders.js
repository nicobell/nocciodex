import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBinderStore = defineStore('binder', () => {
  
  const userBinders = ref(null)
  const currentBinder = ref(null)
  
  function loadBinders(binders) {
    userBinders.value = binders
  }

  function selectBinder(id) {
    currentBinder.value = id
  }

  return { userBinders, currentBinder, loadBinders, selectBinder }
})
