<template>
  <div class="wrapper" @mousemove="compilePreview">

    <CardPages 
      :cards="pagedCards"
      :computedcolumns="computedcolumns"
      :ncolumns="ncolumns"
      :page="page"
      :hidebuttons="hideButtons"
      :isMobile="isMobile"
      @open-editor="openEditor" @open-preview="openPreview" @delete-card="deleteCard" 
    />

    <div class="buttons">
      <div v-if="isMobile" class="field columns">
        <label for="ncolumns">Columns</label>
        <div class="radios">
          <div :class="{'radio': true, 'active': ncolumns==3}">
            <input name="ncolumns" id="pp3" type="radio" v-model="ncolumns" value="3">
            <label for="pp3">3</label>
          </div>
          <div :class="{'radio': true, 'active': ncolumns==4}">
            <input name="ncolumns" id="pp4" type="radio" v-model="ncolumns" value="4">
            <label for="pp4">4</label>
          </div>
        </div>
      </div>

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

      <div v-if="!isMobile" class="field columns">
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
          <div :class="{'radio': true, 'active': ncolumns==5}">
            <label for="pp5">2P</label>
            <input name="ncolumns" id="pp5" type="radio" v-model="ncolumns" value="5">
          </div>
        </div>
      </div>

      <CardLoader @add-card="fetchCards" />

      <BinderEditor @select-binder="gen = binderStore.currentBinder" />
    </div>

    <div :class="{ 'preview': true, 'open': isPreviewOpen }" @click="closePreview">
      <div v-if="isMobile" class="operations">
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
import CardPages from './components/CardPages.vue'

const store = useStore()
//const userStore = useUserStore()
const binderStore = useBinderStore()
//const cardsStore = useCardsStore()

const isMobile = computed(() => window.innerWidth < 1024)

/* visuals */
const fill = ref(false)
const hideButtons = ref(false)
const ncolumns = ref(3)
const pagesize = computed(() => { return ncolumns.value<5 ? ncolumns.value * 3 : 9 })

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
    if(ncolumns.value<5 || page.value==1)
        page.value--;
      else
        page.value -= 2;
      break;
    case 'right':
      if(ncolumns.value<5 || page.value==0)
        page.value++;
      else
        page.value += 2;
      break;
    case 'first':
      page.value = 0;
      break;
    case 'last':
      let pagedcs = []
      if(fill.value)
        pagedcs = fetchedCards.value.filter(c => c.url.length)
      else 
        pagedcs = fetchedCards.value
      page.value = Math.ceil(pagedcs.length / pagesize.value) - 1;
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

  if(ncolumns.value<5)
    ccs = ccs.slice(page.value * pagesize.value, page.value * pagesize.value + pagesize.value)
  else
    ccs = ccs.slice(page.value * pagesize.value, page.value * pagesize.value + (pagesize.value * 2))

  return ccs
})



/* on reload get old page position */
onMounted(() => {
  if (localStorage.getItem('currentPage'))
    page.value = localStorage.getItem('currentPage')

  if (localStorage.getItem('currentGen'))
    gen.value = localStorage.getItem('currentGen')

  //console.log(localStorage.getItem('currentPage'), localStorage.getItem('currentGen'))
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
  if(!isMobile.value) {
    let t = event.target
    if(t.classList.contains('card')) {
      previewRef.value.style.opacity = 1
      if(t.classList.contains('fixed'))
        previewRef.value.setAttribute('src', t.querySelector('.altcard').getAttribute('src'))
      else
        previewRef.value.setAttribute('src', t.querySelector('.maincard').getAttribute('src'))
    } else {
      previewRef.value.setAttribute('src', '')
      previewRef.value.style.opacity = 0
    }
  }
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

    //console.log('fetch cards', data)
    fetchedCards.value = data

    //console.log(fetchedCards.value, data)

    if (error) throw error
  } catch (error) {
    //console.log(error)
  }
}

const deleteCard = async (c) => {
  //console.log(c)
  try {
    const { data, error } = await supabase
      .from('cards')
      .delete()
      .eq('id', c.id)
      .select()

    //console.log('delete card', data)
    fetchCards()

    if (error) throw error
  } catch (error) {
    //console.log(error)
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

@media (min-width: 1024px) {
  .wrapper {
    padding: 0;
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
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  button {
    padding: .5rem 1rem;
    border-radius: 3rem;
    border: none;
  }
}
@media (min-width: 1024px) {
  .buttons {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    gap: 1rem;
    padding: 0;
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
@media (min-width: 1024px) {
  .options {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    max-height: unset;
    width: calc(25vw - 4rem);
    padding: 2rem;
    gap: 2rem;
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
@media (min-width: 1024px) {
  .field {
    width: 100%;
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
@media (min-width: 1024px) {
  .preview {
    position: absolute;
    top: unset;
    bottom: 5rem;
    left: 2rem;
    width: 23vw;
    height: fit-content;
    background: none;
    transition: all 500ms ease;
    display: block;
    pointer-events: none;
    
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: .75;
      object-position: left top;
      object-fit: contain;
    }
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
  gap: .5rem;
  .radio {
    display: flex;
    gap: 0;

    label {
      opacity: .7;
      padding: 0 .5rem;
    }

    &.active label {
      font-weight: 700;
      opacity: 1;
    }
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
@media (min-width: 1024px) {
  .interface {
    width: fit-content;
    min-width: 25vw;
    right: -10%;
    translate: 0 0;
    top: 2rem;
    &.open {
      top: 2rem;
      right: 2rem;
    }
  }
}
</style>
