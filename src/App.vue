<template>
  <div class="wrapper">
    <Binder :missing="seeMissing" :fill="fill" :page="page" :animation="flipping" :direction="flipDirection" :moreCols="moreCols" />

    <Navigation :page="page" :flipping="flipping" @swipe-page="swipePage" :disableNext="disableNext" />

    <div class="options">

      <div class="field">
        <label for="user">User</label>
        <input type="text" v-model="user" name="user">
        <button @click="loadUser">login</button>
      </div>

      <div v-if="userStore.currentId">Logged in as <span class="username">{{ userStore.currentUser }}</span></div>

      <div class="field">
        <label for="generation">Binder</label>
        <select v-model="gen" name="genselect" id="genselect">
          <option v-for="(b, i) in binderStore.userBinders" :key="i + 'index'" :value="b.id">{{ b.title }}</option>
        </select>
      </div>

      <!-- <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="fill" id="fill" name="fill">
          <label for="fill">Fill pockets</label>
        </div>
      </div> -->

      <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="moreCols" id="moreCols" name="moreCols">
          <label for="moreCols">4 columns</label>
        </div>
      </div>

      <!-- <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="hideButtons" id="hide" name="hide">
          <label for="hide">Hide buttons</label>
        </div>
      </div> -->

      <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="seeMissing" id="possession" name="possession">
          <label for="possession">Highlight missing</label>
        </div>
      </div>

      <CardLoader />
      <CardEditor />

    </div>

    <!-- <a href="https://github.com/nicobell" target="_blank" class="firma">github.com/nicobell</a> -->

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useUserStore } from './stores/users'
import { useBinderStore } from './stores/binders'
import { supabase } from './lib/supabaseClient'
import Binder from './components/Binder.vue'
import { useCardsStore } from './stores/cards'
import CardLoader from './components/CardLoader.vue'
import { useStore } from './stores/data'
import Navigation from './components/Navigation.vue'
import CardEditor from './components/CardEditor.vue'

const userStore = useUserStore()
const binderStore = useBinderStore()
const cardsStore = useCardsStore()
const store = useStore()

const isMobile = computed(() => {
  return window.innerWidth < 1200
})

/* -------------------------------------------- */
const user = ref('')

async function loadUser() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('username', user.value);

    if (error) throw error

    userStore.loadUser(data[0].username, data[0].id)

  } catch (error) {
    console.log(error)
  }

  loadBinders()
  localStorage.setItem('currentUser', userStore.currentUser)
  user.value = ''
}

/* -------------------------------------------- */
const gen = ref(1)

async function loadBinders() {
  try {
    const { data, error } = await supabase
      .from('binders')
      .select()
      .eq('user', userStore.currentId)
      .order('title', { ascending: true });;

    if (error) throw error

    binderStore.loadBinders(data)
    gen.value = data[0].id

  } catch (error) {
    console.log(error)
  }
}

watch(gen, async (newgen, oldgen) => {
  binderStore.selectBinder(newgen)
  cardsStore.fetchCards()
  page.value = 0
})

/* -------------------------------------------- */
async function getPokemons() {
  const { data } = await supabase
    .from('pokemons')
    .select();

  store.loadPokemons(data)
}

/* -------------------------------------------- */
onMounted(() => {
  getPokemons()

  const logged = localStorage.getItem('currentUser')

  if (logged) {
    user.value = logged
    loadUser()
  }
})

/* -------------------------------------------- */
const page = ref(0)
const flipping = ref(false)
const flipDirection = ref('')

async function swipePage(dir) {
  flipping.value = true
  flipDirection.value = dir

  const factor = (isMobile.value || moreCols.value) ? 1 : 2;
  const timer = (isMobile.value || moreCols.value) ? 0 : 500;

  setTimeout(() => {
    flipping.value = false
    flipDirection.value = ''

    switch (dir) {
      case 'left':
        page.value -= factor;
        break;
      case 'right':
        page.value += factor;
        break;
      case 'first':
        page.value = 0;
        break;
    }
    //document.querySelectorAll('.fixed').forEach(el => el.classList.remove('fixed'))
  }, timer);
}

const disableNext = computed(() => {
  if (cardsStore.cards.length) {
    const found = cardsStore.cards.find(el => el.binder == binderStore.currentBinder)
    let l = 0
    if (found)
      l = found
        .data
        .filter(el => !fill.value || el.url)
        .length

    if (!isMobile.value || moreCols.value)
      return l < 18 * (page.value / 2 + 1)
    else
      return l < 9 * (page.value + 1)
  } else return true
})

/* -------------------------------------------- */
const seeMissing = ref(false)
const fill = ref(false)

const moreCols = ref(false)

/* -------------------------------------------- */
const isLoaderOpen = ref(false)

function toggleLoader() {
  isLoaderOpen.value = !isLoaderOpen.value
}
function closeLoader() {
  isLoaderOpen.value = false
}
function openLoader() {
  isLoaderOpen.value = true
}

/* -------------------------------------------- */
//const newCardOrder = ref(null)

async function addCard(card, newCardOrder = null) {
  if (!userStore.currentId) {
    alert('Prima carica un profilo!')
    return false
  }

  if (!binderStore.currentBinder) {
    alert('Prima scegli un binder!')
    return false
  }

  let insertOrder = binderStore.lastBinderOrder + 1
  /* if (newCardOrder.value) {
    insertOrder = newCardOrder.value
  }

  if (newCardOrder.value) {
    console.log('update all cards from binder ' + binderStore.currentBinder + ' from position ' + insertOrder)
    try {
      const { data, error } = await supabase
        .rpc('increment_order', {
          binder_id: binderStore.currentBinder,
          min_order: insertOrder
        });

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  } */

  if (card.type == 'card') {
    //console.log('add card', insertOrder)
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: card.maincard, alturl: card.altcard, pokemon: card.pokemonNumber, binder: card.binder, order: insertOrder })
        .select();

      //console.log('add card', data)
      //toggleLoader()
      binderStore.setLastOrder(binderStore.lastBinderOrder + 1)

      if (error) throw error
    } catch (error) {
      console.log(error)
    }

  } else {
    //console.log('add empty', insertOrder)
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: '', alturl: '', pokemon: null, binder: card.binder, order: insertOrder })
        .select();

      //console.log('add empty slot', data)
      //toggleLoader()
      binderStore.setLastOrder(binderStore.lastBinderOrder + 1)

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  //newCardOrder.value = null
  cardsStore.refreshCards()
}

/* const addCardPosition = (order) => {
  openLoader()
  //if (newCardOrder.value) pulser()
  newCardOrder.value = order
  console.log('add card at ' + newCardOrder.value)
} */


/* preview management */
/* const isPreviewOpen = ref(false)
const currentPreview = ref(null)
const previewRef = useTemplateRef('preview')

const openPreview = (card) => {
  isPreviewOpen.value = true
  currentPreview.value = card

  if (card.url && !card.alturl) {
    previewRef.value.setAttribute('src', card.url)

  } else {
    let isFixed = event.target.closest('.card').classList.contains('fixed')

    if (isFixed) {
      previewRef.value.setAttribute('src', card.alturl)
    } else {
      previewRef.value.setAttribute('src', card.url)
    }
  }
}

const closePreview = () => {
  isPreviewOpen.value = false
  currentPreview.value = null
}

const compilePreview = () => {
  if (!isMobile.value) {
    let t = event.target
    if (t.classList.contains('card')) {
      previewRef.value.style.opacity = 1
      if (t.classList.contains('fixed'))
        previewRef.value.setAttribute('src', t.querySelector('.altcard').getAttribute('src'))
      else
        previewRef.value.setAttribute('src', t.querySelector('.maincard').getAttribute('src'))
    } else {
      previewRef.value.setAttribute('src', '')
      previewRef.value.style.opacity = 0
    }
  }
} */

/* editor management */
/* const isOpenEditor = ref(false)

const openEditor = (card) => {
  console.log(card)
  isOpenEditor.value = true
  store.setEditing(card)
  console.log(card)
}

const closeEditor = (card) => {
  isOpenEditor.value = false
  store.setEditing(null)
  fetchCards()
} */

</script>

<style lang="scss">
.firma {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: $lightgray;
  opacity: .2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: .5;
  }
}

.username {
  color: $accent;
}
</style>
