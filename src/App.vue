<template>
  <div class="wrapper">

    <div :class="['cards']" :style="'grid-template-columns: ' + computedcolumns + ';'">
      <div class="card" v-for="(c, i) in pagedCards" @click="fixAlt(c)">
        <img v-if="!c.url.length" src="./assets/back.png" alt="pokeball" class="empty">
        <img v-if="c.url.length" class="maincard" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !hideButtons" class="button alt">
          <img src="./assets/alty.png" alt="">
        </div>

        <button v-if="!hideButtons" class="button edit" @click="openEditor(c)">
          <img src="./assets/edity.png" alt="">
        </button>

        <button v-if="c.url.length  && !hideButtons" class="button eye" @click="openPreview(c)">
          <img src="./assets/eye.png" alt="">
        </button>

        <button v-if="!hideButtons" class="button delete" @click="deleteCard(c)">
          <img src="./assets/delete.png" alt="">
        </button>

      </div>
    </div>

    <div class="buttons">
      <button :disabled="page <= 0" @click="swipePage('first')"><<</button>
      <button :disabled="page <= 0" @click="swipePage('left')"><</button>
      <div>Pag <span style="color: #fff;">{{ parseInt(page)+1 }}</span></div>
      <button @click="swipePage('right')">></button>
      <button @click="swipePage('last')">>></button>
    </div>

    <div class="options">

      <div class="field">
        <label for="generation">Binder</label>
        <select v-model="gen" name="genselect" id="genselect">
          <option v-for="(b, i) in binderStore.userBinders" :value="b.id">{{ b.title }}</option>
        </select>
      </div>

      <div class="field">
        <div class="checkbox">
          <input type="checkbox" v-model="fill" id="fill" name="fill">
          <label for="fill">Fill pockets</label>
        </div>
        <div class="checkbox">
          <input type="checkbox" v-model="hideButtons" id="hide" name="hide">
          <label for="hide">Hide buttons</label>
        </div>
      </div>

      <!-- <div class="field">
        <label for="ncolumns">Columns</label>
        <div class="radios">
          <div :class="{'radio': true, 'active': ncolumns==3}">
            <label for="pp3">3</label>
            <input name="ncolumns" id="pp3" type="radio" v-model="ncolumns" value="3">
          </div>
          <div :class="{'radio': true, 'active': ncolumns==4}">
            <label for="pp4">4</label>
            <input name="ncolumns" id="pp4" type="radio" v-model="ncolumns" value="4">
          </div>
        </div>
      </div> -->

      <CardLoader v-if="isMobile" @add-card="fetchCards" />

      <BinderEditor v-if="isMobile" @select-binder="gen = binderStore.currentBinder" />
    </div>

    <div :class="{ 'preview': true, 'open': isPreviewOpen }" @click="closePreview">
      <div class="operations">
        <button class="button edit" @click="openEditor(currentPreview)">
          <img src="./assets/edity.png" alt="">
        </button>
        <button class="button delete" @click="deleteCard(currentPreview)">
          <img src="./assets/delete.png" alt="">
        </button>
      </div>
      <img ref="preview" src="" alt="">
    </div>

    <CardEditor :isOpen="isOpenEditor" @edit-card="closeEditor()" @close-editor="closeEditor()" />

  </div>
</template>

<script setup>
import BinderEditor from './components/BinderEditor.vue'
import CardLoader from './components/CardLoader.vue'
//import { useCardsStore } from '@/stores/cards'
import { ref, onMounted, computed, useTemplateRef, watch } from 'vue'
import { useStore } from './stores/data'
import { useUserStore } from './stores/users'
import { useBinderStore } from './stores/binders'
import { supabase } from './lib/supabaseClient'
import CardEditor from './components/CardEditor.vue'

const store = useStore()
//const userStore = useUserStore()
const binderStore = useBinderStore()
//const cardsStore = useCardsStore()

const isMobile = computed(() => window.innerWidth < 768)

/* visuals */
const fill = ref(false)
const hideButtons = ref(false)
const ncolumns = ref(3)
const pagesize = computed(() => { return ncolumns.value * 3 })

const computedcolumns = computed(() => {
  let s = ''
  for (let i = 0; i < ncolumns.value; i++)
    s += ' 1fr'
  return s
})

/* binder grid parameters */
const gen = ref(1)
const page = ref(0)

/* swipe page on same generation */
const swipePage = async (dir) => {
  switch (dir) {
    case 'left':
      page.value--;
      break;
    case 'right':
      page.value++;
      break;
    case 'first':
      page.value = 0;
      break;
    case 'last':
      page.value = Math.floor(storecards.value.length / pagesize.value) - 1;
      break;
  }
  localStorage.setItem('currentPage', page.value)
  document.querySelectorAll('.fixed').forEach(el => el.classList.remove('fixed'))
}

/* get page of cards */
const pagedCards = computed(() => {
  let ccs = []

  if(fill.value)
    ccs = fetchedCards.value.filter(c => c.url.length)
  else 
    ccs = fetchedCards.value

  ccs = ccs.slice(page.value * pagesize.value, page.value * pagesize.value + pagesize.value)

  return ccs
})

/* fix card second option */
const fixAlt = (card) => {
  if(card.alturl.length)
    event.target.classList.toggle('fixed')
}

/* on reload get old page position */
onMounted(() => {
  if (localStorage.getItem('currentPage'))
    page.value = localStorage.getItem('currentPage')

  if (localStorage.getItem('currentGen'))
    gen.value = localStorage.getItem('currentGen')

  console.log(localStorage.getItem('currentPage'), localStorage.getItem('currentGen'))
})

/* load cards on binder change */
watch(gen, async (newgen, oldgen) => {
  localStorage.setItem('currentGen', newgen)
  binderStore.selectBinder(newgen)
  fetchCards()
  page.value = 0
})

/* preview management */
const isPreviewOpen = ref(false)
const currentPreview = ref(null)
const previewRef = useTemplateRef('preview')

const openPreview = (card) => {
  isPreviewOpen.value = true
  currentPreview.value = card

  if (card.url && !card.alturl) {
    previewRef.value.setAttribute('src', card.url)

  } else {
    let isFixed = event.target.closest('.card').classList.contains('fixed')

    console.log(isFixed)

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

/* editor management */
const isOpenEditor = ref(false)

const openEditor = (card) => {
  isOpenEditor.value = true
  store.setEditing(card)
}

const closeEditor = (card) => {
  isOpenEditor.value = false
  store.setEditing(null)
  fetchCards()
}

/* supabase operations */
const fetchedCards = ref([])

const fetchCards = async () => {
  try {
    const { data, error } = await supabase
      .from('cards')
      .select()
      .eq('binder', binderStore.currentBinder)
      .order('id', { ascending: true });

    console.log('fetch cards', data)
    fetchedCards.value = data

    console.log(fetchedCards.value, data)

    if (error) throw error
  } catch (error) {
    console.log(error)
  }
}

const deleteCard = async (c) => {
  console.log(c)
  try {
    const { data, error } = await supabase
      .from('cards')
      .delete()
      .eq('id', c.id)
      .select()

    console.log('delete card', data)
    fetchCards()

    if (error) throw error
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss">
$pokeyellow: #F1E668;
$pokeblue: #1f2573;
$lightgray: #cacaca;

#app {
  background-color: #333;
}

.wrapper {
  display: flex;
  gap: 1rem;
  height: 100svh;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .5rem;
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
  width: 100vw;
  padding: .5rem;

  .card {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    aspect-ratio: 0.75;

    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
      object-position: top left;
      max-height: 200px;
      pointer-events: none;
    }

    .button {
      position: absolute;
      z-index: 3;
    }
    .edit {
      bottom: .5rem;
      right: .5rem;
    }
    .alt {
      left: 50%;
      bottom: .5rem;
      translate: -50% 0;
      pointer-events: none;
    }
    .eye {
      left: .5rem;
      bottom: .5rem
    }
    .delete {
      top: .5rem;
      left: .5rem;
    }
  }

  .card .maincard {
    position: relative;
    z-index: 1;
  }

  .card .altcard {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .card.fixed .altcard {
    z-index: 2;
  }
}

.button {
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    box-shadow: 0 0 10px 10px $pokeblue;
    opacity: .8;
    z-index: -1;
  }
}

.buttons {
  grid-area: pages;
  margin: auto 0 0 0 ;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    padding: .5rem 1rem;
    border-radius: 3rem;
    border: none;
  }
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  max-height: 10svh;
  padding: 0 1rem;

  > .field {
    height: 100%;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  label {
    font-size: .8rem;
    color: $pokeyellow;
  }
}

.checkbox {
  display: flex;
  gap: .5rem;
  align-items: center;
}

.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .loaderbutton {
    background-color: $pokeyellow;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: 300ms ease all;
    transform-origin: center center;
    transform: rotateY(0);

    &.close {
      transform: rotateY(180deg);
      transition: 300ms ease all;
    }

    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }

  
}

.preview {
  display: none;

  &.open {
    display: block;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 100vw;
    height: 100svh;
    background-color: rgba(0, 0, 0, .7);

    > img {
      height: calc(100% - 2rem);
      width: calc(100% - 2rem);
      object-fit: contain;
    }
  }

  .button:before {
    box-shadow: 0 0 10px 10px $pokeyellow;
    opacity: .3;
  }

  .operations {
    position: absolute;
    width: calc(100% - 2rem);
    display: flex;
    gap: 1rem;
    align-items: center;
    top: 1.5rem;
    left: 1rem;
  }
}

select {
  border-radius: 3rem;
  background-color: $lightgray;
  border: none;
  padding: .25rem .5rem;
}

input {
  padding: .5rem .5rem;
  border: none;
  background-color: rgba(255, 255, 255, .3);
  border-radius: 3rem;
  color: #fff;

  &:disabled {
    opacity: .3;
  }
}

.formbutton {
  border-radius: 3rem;
  background-color: $lightgray;
  color: $pokeblue;
  font-size: .8rem;
  border: none;
  padding: .5rem 1rem;
}

.radios {
  display: flex;
  gap: 1rem;
  .radio {
    display: flex;
    gap: .25rem;
  }
}

.interface {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  top: 10svh;
  right: 0;
  width: calc(100vw - 1rem);
  height: calc(90svh - 1.5rem);
  padding: 1rem;
  margin: 0 .5rem;
  
  pointer-events: none;
  opacity: 0;
  background-color: $pokeblue;
  color: #fff;
  border-radius: 10px;
  transition: all 500ms ease;

  &.open {
    display: flex;
    pointer-events: all;
    top: .5rem;
    z-index: 102;
    opacity: 1;
    transition: all 500ms ease;
  }

  label,
  .label {
    color: $pokeyellow;
    font-size: 1rem;
  }
}
</style>
