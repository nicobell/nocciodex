<template>
  <div>
    <h3>Binder Editor</h3>

    

    
    <!-- <button class="create" @click="newUser()">New user</button> -->
    
    <input type="text" v-model="user">
    <button class="load" @click="loadUser()">Load user</button>

    <h2>Current user: {{ userStore.currentUser }}</h2>

    <div>
      <h3>Binders di {{ userStore.currentUser }}</h3>
      <p v-for="(b,i) in binderStore.userBinders" :key="'binder'+i">
        {{ b.title }}
      </p>
    </div>

    <input type="text" v-model="binderName">
    <button :disabled="!binderName" class="create" @click="addBinder()">Add binder</button>

    <CardLoader />
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import CardLoader from '../components/CardLoader.vue'
import { supabase } from '../lib/supabaseClient'
const pokemons = ref([])
const user = ref(null)
const binderName = ref(null)
const binders = ref([])
const cards = ref([])
const errormsg = ref(null)

import { useUserStore } from '@/stores/users'
import { useBinderStore } from '@/stores/binders'
import { useStore } from '@/stores/data';

const userStore = useUserStore()
const binderStore = useBinderStore()
const store = useStore()

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

    if(error) throw error
  } catch (error) {
    console.log(error)
  }

  loadBinders()
  localStorage.setItem('currentUser', userStore.currentUser)
  user.value = ''
}

const loadBinders = async () => {
  try {
    const { data, error } = await supabase
      .from('binders')
      .select()
      .eq('user', userStore.currentId);

    console.log('load binders', data)
    binderStore.loadBinders(data)
    
    if(error) throw error
  } catch (error) {
    console.log(error)
  }
}

const addBinder = async () => {
  if(!userStore.currentId) {
    alert('Prima carica un profilo!')
    return false
  }

  try {
    const { data, error } = await supabase
      .from('binders')
      .insert({ title: binderName.value, user: userStore.currentId })
      .select();

    console.log('add binder', data)
  
    if(error) throw error
  } catch (error) {
    console.log(error)
  }

  loadBinders()
  binderName.value = ''
}

onMounted(() => {
  getPokemons()

  if(localStorage.getItem('currentUser')) {
    user.value = localStorage.getItem('currentUser')
    loadUser()
  }
})

</script>

<style scoped lang="scss"></style>