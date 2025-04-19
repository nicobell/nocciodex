<template>
  <div class="wrapper">
    <!-- @mousemove="compilePreview" -->

    <!-- <CardPages :cards="pagedCards" :computedcolumns="computedcolumns" :ncolumns="ncolumns" :page="page"
      :hidebuttons="hideButtons" :seeMissing="seeMissing" :isMobile="isMobile" @open-editor="openEditor"
      @delete-card="deleteCard" @add-card-position="addCardPosition" /> -->
    <!-- @open-preview="openPreview" -->

    <Binder :missing="seeMissing" :fill="fill" :page="page" :animation="flipping" :direction="flipDirection" />

    <div class="buttons">
      <!-- <div v-if="isMobile" class="field columns">
        <label for="ncolumns">Columns</label>
        <div class="radios">
          <div :class="{ 'radio': true, 'active': ncolumns == 3 }">
            <input name="ncolumns" id="pp3" type="radio" v-model="ncolumns" value="3">
            <label for="pp3">3</label>
          </div>
          <div :class="{ 'radio': true, 'active': ncolumns == 4 }">
            <input name="ncolumns" id="pp4" type="radio" v-model="ncolumns" value="4">
            <label for="pp4">4</label>
          </div>
        </div>
      </div> -->

      <button :disabled="page <= 0 || flipping" @click="swipePage('first')">&lt;&lt;</button>
      <button :disabled="page <= 0 || flipping" @click="swipePage('left')">&lt;</button>
      <div><span style="color: #fff;">Pag {{ parseInt(page) + 1 }}</span></div>
      <button :disabled="disableNext || flipping" @click="swipePage('right')">&gt;</button>
      <!-- <button @click="swipePage('last')">&gt;&gt;</button> -->
    </div>

    <div class="options">

      <div class="field">
        <label for="user">User</label>
        <input type="text" v-model="user" name="user">
        <button @click="loadUser">login</button>
      </div>

      <div v-if="userStore.currentId">Logged in as <span style="color: yellow">{{ userStore.currentUser }}</span></div>

      <div class="field">
        <label for="generation">Binder</label>
        <select v-model="gen" name="genselect" id="genselect">
          <option v-for="(b, i) in binderStore.userBinders" :key="i + 'index'" :value="b.id">{{ b.title }}</option>
        </select>
      </div>

      <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="fill" id="fill" name="fill">
          <label for="fill">Fill pockets</label>
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

      <!-- <div v-if="!isMobile" class="field columns">
        <label for="ncolumns">Columns</label>
        <div class="radios">
          <div :class="{ 'radio': true, 'active': ncolumns == 3 }">
            <label for="pp3">3</label>
            <input name="ncolumns" id="pp3" type="radio" v-model="ncolumns" value="3">
          </div>
          <div :class="{ 'radio': true, 'active': ncolumns == 4 }">
            <label for="pp4">4</label>
            <input name="ncolumns" id="pp4" type="radio" v-model="ncolumns" value="4">
          </div>
          <div :class="{ 'radio': true, 'active': ncolumns == 5 }">
            <label for="pp5">2P</label>
            <input name="ncolumns" id="pp5" type="radio" v-model="ncolumns" value="5">
          </div>
        </div>
      </div> -->


    </div>



    <!-- <CardLoader :isOpen="isLoaderOpen" :pulse="pulseLoader" @add-card="addCard" @toggle-loader="toggleLoader"
        @close-loader="closeLoader" @add-card="fetchCards"/>
      

      <BinderEditor @select-binder="gen = binderStore.currentBinder" /> -->

    <!-- <div :class="{ 'preview': true, 'open': isPreviewOpen }" @click="closePreview">
      <div v-if="isMobile" class="operations">
        <button class="button edit" @click="openEditor(currentPreview)">
          <img src="./assets/edity.png" alt="">
        </button>
        <button class="button delete" @click="deleteCard(currentPreview)">
          <img src="./assets/delete.png" alt="">
        </button>
      </div>
      <img ref="preview" src="" alt="">
    </div> -->

    <!-- <CardEditor :isOpen="isOpenEditor" @edit-card="closeEditor()" @close-editor="closeEditor()" /> -->

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useUserStore } from './stores/users'
import { useBinderStore } from './stores/binders'
import { supabase } from './lib/supabaseClient'
import Binder from './components/Binder.vue'
import { useCardsStore } from './stores/cards'

const userStore = useUserStore()
const binderStore = useBinderStore()
const cardsStore = useCardsStore()

const isMobile = computed(() => {
  return window.innerWidth < 1200
})

/* -------------------------------------------- */
const user = ref('')

const loadUser = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('username', user.value);

    if (error) throw error

    userStore.loadUser(data[0].username, data[0].id)

  } catch (error) {
    //console.log(error)
  }

  loadBinders()
  localStorage.setItem('currentUser', userStore.currentUser)
  user.value = ''
}

/* -------------------------------------------- */
const gen = ref(1)

const loadBinders = async () => {
  try {
    const { data, error } = await supabase
      .from('binders')
      .select()
      .eq('user', userStore.currentId)
      .order('title', { ascending: true });;

    if (error) throw error

    binderStore.loadBinders(data)
    //gen.value = data[0].id
    gen.value = 18

  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  const logged = localStorage.getItem('currentUser')
  if (logged) {
    user.value = logged
    loadUser()
  }
})

watch(gen, async (newgen, oldgen) => {
  binderStore.selectBinder(newgen)
  cardsStore.fetchCards()
  page.value = 0
})

/* -------------------------------------------- */
const page = ref(0)
const flipping = ref(false)
const flipDirection = ref('')

const swipePage = async (dir) => {
  flipping.value = true
  flipDirection.value = dir

  setTimeout(() => {
    flipping.value = false
    flipDirection.value = ''

    switch (dir) {
      case 'left':
        page.value -= (isMobile ? 1 : 2);
        break;
      case 'right':
        page.value += (isMobile ? 1 : 2);
        break;
      case 'first':
        page.value = 0;
        break;
    }
    //document.querySelectorAll('.fixed').forEach(el => el.classList.remove('fixed'))
  }, isMobile ? 0 : 1000);
}

const disableNext = computed(() => {
  if (cardsStore.cards.length) {
    const l = cardsStore.cards
      .find(el => el.binder == binderStore.currentBinder)
      .data
      .filter(el => !fill.value || el.url)
      .length

    if(!isMobile)
      return l < 18 * (page.value / 2 + 1)
    else
      return l < 9 * (page.value + 1)
  } else return true
})

/* -------------------------------------------- */
const seeMissing = ref(false)
const fill = ref(false)

//const isMobile = computed(() => window.innerWidth < 1024)
/* const hideButtons = ref(false)
const seeMissing = ref(false)
const ncolumns = ref(3)
const pagesize = computed(() => { return ncolumns.value < 5 ? ncolumns.value * 3 : 9 }) */


/* const computedcolumns = computed(() => {
  let s = ''
  for (let i = 0; i < ncolumns.value; i++)
    s += ' 1fr'
  return s
}) */

/* loader management */
/* const isLoaderOpen = ref(false)
const userStore = useUserStore()
const pulseLoader = ref(false)

const toggleLoader = () => {
  isLoaderOpen.value = !isLoaderOpen.value
}

const closeLoader = () => {
  isLoaderOpen.value = false
}

const openLoader = () => {
  isLoaderOpen.value = true
} */

/* const newCardOrder = ref(null)

const addCardPosition = (order) => {
  openLoader()
  if (newCardOrder.value) pulser()
  newCardOrder.value = order
  console.log('add card at ' + newCardOrder.value)
}

const pulser = () => {
  pulseLoader.value = true;
  setTimeout(() => {
    pulseLoader.value = false;
  }, 300);
}

const addCard = async (card) => {
  if (!userStore.currentId) {
    alert('Prima carica un profilo!')
    return false
  }

  if (!binderStore.currentBinder) {
    alert('Prima scegli un binder!')
    return false
  }

  let insertOrder = binderStore.lastBinderOrder + 1
  if (newCardOrder.value) {
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
  }

  if (card.type == 'card') {
    //console.log('add card', insertOrder)
    try {
      const { data, error } = await supabase
        .from('cards')
        .insert({ url: card.maincard, alturl: card.altcard, pokemon: card.pokemonNumber, binder: card.binder, order: insertOrder })
        .select();

      //console.log('add card', data)
      toggleLoader()
      //binderStore.setLastOrder(binderStore.lastBinderOrder+1)


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
      toggleLoader()
      //binderStore.setLastOrder(binderStore.lastBinderOrder+1)

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  newCardOrder.value = null
  fetchCards()
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

<style lang="scss"></style>
