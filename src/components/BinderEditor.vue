<template>
  <div :class="{ 'loader': true, 'mobile': isMobile }">
    <button :class="{ 'loaderbutton': true, 'addbinder': true, 'close': isOpen }" @click="toggleLoader">
      <img v-if="!isOpen" src="../assets/closed-folder.png" alt="">
      <img v-else src="../assets/open-folder.png" alt="">
    </button>

    <div :class="{ 'interface': true, 'open': isOpen }">

      <div class="userload baseline">
        <p class="label">Current user:</p>
        <p class="title">{{ userStore.currentUser }}</p>
      </div>

      <div class="userload">
        <input type="text" v-model="user" placeholder="Username...">
        <button class="formbutton load" @click="loadUser()">Load user</button>
      </div>

      <div>
        <p class="title">{{ userStore.currentUser }} <span class="label">'s binders</span></p>
        <ul>
          <li v-for="(b, i) in binderStore.userBinders" :key="'binder' + i">
            {{ b.title }}
          </li>
        </ul>
      </div>

      <div class="userload">
        <input type="text" v-model="binderName" placeholder="Binder name...">
        <button :disabled="!binderName" class="formbutton create" @click="addBinder()">Add binder</button>
      </div>

    </div>
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { supabase } from '../lib/supabaseClient'
import { useUserStore } from '@/stores/users'
import { useBinderStore } from '@/stores/binders'
import { useStore } from '@/stores/data';

const isMobile = computed(() => window.innerWidth < 1024)

const userStore = useUserStore()
const binderStore = useBinderStore()
const store = useStore()

const emit = defineEmits(['select-binder'])

const user = ref(null)
const binderName = ref(null)
const isOpen = ref(false)

const toggleLoader = () => {
  isOpen.value = !isOpen.value
}

/* user operations */
const loadUser = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('username', user.value);

    userStore.loadUser(data[0].username, data[0].id)

    if (error) throw error
  } catch (error) {
    //console.log(error)
  }

  loadBinders()
  localStorage.setItem('currentUser', userStore.currentUser)
  user.value = ''
}

/* binder operations */
const loadBinders = async () => {
  try {
    const { data, error } = await supabase
      .from('binders')
      .select()
      .eq('user', userStore.currentId);

    binderStore.loadBinders(data)
    binderStore.selectBinder(data[0].id)
    emit('select-binder')
    
    if (error) throw error
  } catch (error) {
    //console.log(error)
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

    if (error) throw error
  } catch (error) {
    //console.log(error)
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

/* pokemons operations */
async function getPokemons() {
  const { data } = await supabase
    .from('pokemons')
    .select();

  store.loadPokemons(data)
}

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

.userload {
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
}

.baseline {
  align-items: baseline;
}

ul {
  padding-left: 1rem;
  list-style: circle;
}

</style>