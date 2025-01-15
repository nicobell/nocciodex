<template>
  <div :class="{ 'wrapper': true, 'mobile': isMobile }">
    <button :class="{ 'addbinder': true, 'close': isOpen }" @click="toggleLoader">
      <img v-if="!isOpen" src="../assets/closed-folder.png" alt="">
      <img v-else src="../assets/open-folder.png" alt="">
    </button>

    <div :class="{ 'interface': true, 'open': isOpen }">
      <h3>Binder Editor</h3>

      <!-- <button class="create" @click="newUser()">New user</button> -->

      <div class="userload">
        <input type="text" v-model="user">
        <button class="load" @click="loadUser()">Load user</button>
      </div>

      <h2>Current user: {{ userStore.currentUser }}</h2>

      <div>
        <h3>Binders di {{ userStore.currentUser }}</h3>
        <p v-for="(b, i) in binderStore.userBinders" :key="'binder' + i">
          {{ b.title }}
        </p>
      </div>

      <div class="userload">
        <input type="text" v-model="binderName">
        <button :disabled="!binderName" class="create" @click="addBinder()">Add binder</button>
      </div>

    </div>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import CardLoader from '../components/CardLoader.vue'
import { supabase } from '../lib/supabaseClient'
const pokemons = ref([])
const user = ref(null)
const binderName = ref(null)
const binders = ref([])
const cards = ref([])
const errormsg = ref(null)
const isOpen = ref(false)
import { useUserStore } from '@/stores/users'
import { useBinderStore } from '@/stores/binders'
import { useStore } from '@/stores/data';

const userStore = useUserStore()
const binderStore = useBinderStore()
const store = useStore()
const isMobile = computed(() => window.innerWidth < 768)
const emit = defineEmits(['select-binder'])

async function getPokemons() {
  const { data } = await supabase
    .from('pokemons')
    .select();

  console.log('get pokemons', data)
  //pokemons.value = data
  store.loadPokemons(data)
}

const loadUser = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('username', user.value);

    console.log('load user', data)
    userStore.loadUser(data[0].username, data[0].id)

    if (error) throw error
  } catch (error) {
    console.log(error)
  }

  loadBinders()
  localStorage.setItem('currentUser', userStore.currentUser)
  user.value = ''
}
const toggleLoader = () => {
  isOpen.value = !isOpen.value
}

const loadBinders = async () => {
  try {
    const { data, error } = await supabase
      .from('binders')
      .select()
      .eq('user', userStore.currentId);

    console.log('load binders', data)
    binderStore.loadBinders(data)
    binderStore.selectBinder(data[0].id)
    emit('select-binder')
    
    if (error) throw error
  } catch (error) {
    console.log(error)
  }

  
}

const addBinder = async () => {
  if (!userStore.currentId) {
    alert('Prima carica un profilo!')
    return false
  }

  try {
    const { data, error } = await supabase
      .from('binders')
      .insert({ title: binderName.value, user: userStore.currentId })
      .select();

    console.log('add binder', data)

    if (error) throw error
  } catch (error) {
    console.log(error)
  }

  loadBinders()
  binderName.value = ''
}

onMounted(() => {
  getPokemons()

  if (localStorage.getItem('currentUser')) {
    user.value = localStorage.getItem('currentUser')
    loadUser()
  }
})

</script>

<style scoped lang="scss">
$card-height-mobile: 80svh;
$card-height-desktop: 90vh;
$pokeyellow: #F1E668;
$pokeblue: #1f2573;

.wrapper {
  position: relative;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.interface {
  color: #fff;
  display: flex;
  position: fixed;
  justify-content: flex-start;
  gap: 1rem;
  top: 10svh;
  right: 0;
  width: calc(100vw - 1rem);
  height: 80svh;
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
    top: .5rem;
    z-index: 102;
    opacity: 1;
    transition: all 500ms ease;


  }
}

.userload {
  display: flex;
  gap: 1rem;

  input {
    width: 70%;
  }

  button {
    width: 30%;
    margin: 0 auto;
    padding: .25rem;
    border-radius: 3rem;
    border: none;
    color: $pokeblue;
    font-weight: 500;
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


.addbinder {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* &.close {
    transform-origin: center center;
    transition: all 300ms ease;
  } */
}
</style>