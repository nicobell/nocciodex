import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBinderStore = defineStore('binder', () => {
  
  const userBinders = ref(null)
  const currentBinder = ref(null)
  const lastBinderOrder = ref(null)
  
  function loadBinders(binders) {
    userBinders.value = binders
  }

  function selectBinder(id) {
    currentBinder.value = id
  }

  function setLastOrder(order) {
    lastBinderOrder.value = order
  }

  return { userBinders, currentBinder, lastBinderOrder, loadBinders, selectBinder, setLastOrder }
})
