<template>
  <div class="wrapper" @mousemove="makePreview">

    <div :class="['cards']">
      <div class="card" v-for="c, i in cards">
        <img v-if="c==''" src="./assets/back.png" alt="" class="empty">
        <div v-if="c.length>=2 && c.length<=4" class="multiple" @click="fixAlt">
          <img class="maincard" :src="c[0]" alt="">
          <img class="altcard" :src="c[1]" alt="">
        </div>
        <img v-else :src="c" alt="">
      </div>
    </div>

    <div class="buttons">
      <button :disabled="page <= 0" @click="swipePage('first')"><<</button>
      <button :disabled="page <= 0" @click="swipePage('left')"><</button>
      <div>Pag {{ parseInt(page)+1 }}</div>
      <button @click="swipePage('right')">></button>
      <button @click="swipePage('last')">>></button>
    </div>

    <div class="generation">
      <button :class="{active: gen==0}" @click="changeGen(0)">Starters</button>
      <button :class="{active: gen==1}" @click="changeGen(1)">1st gen</button>
      <button :class="{active: gen==2}" @click="changeGen(2)">2nd gen</button>
      <button :class="{active: gen==3}" @click="changeGen(3)">3rd gen</button>
      <button :class="{active: gen==4}" @click="changeGen(4)">4th gen</button>
      <button :class="{active: gen==5}" @click="changeGen(5)">5th gen</button>
      <button :class="{active: gen==6}" @click="changeGen(6)">6th gen</button>
      <button :class="{active: gen==7}" @click="changeGen(7)">7th gen</button>
      <button :class="{active: gen==8}" @click="changeGen(8)">8th gen</button>
      <button :class="{active: gen==9}" @click="changeGen(9)">9th gen</button>
    </div>

    <div class="preview">
      <img ref="preview" src="" alt="">
    </div>

  </div>
</template>

<script setup>
import { useCardsStore } from '@/stores/cards'
import { ref, onMounted, computed, useTemplateRef, getCurrentInstance } from 'vue'

const store = useCardsStore()
const gen = ref(1)
const page = ref(0)
let pagesize = 9
/* get all cards from current generation + filter 9 per page */
const cards = computed(() => {
  return store.cards[gen.value].slice(page.value * pagesize, page.value * pagesize + pagesize)
})
/* preview card element */
const previewRef = useTemplateRef('preview')

/* select pokemon generation */
const changeGen = (g) => {
  gen.value = g
  localStorage.setItem('currentGen', gen.value)
  swipePage('first')
}

/* swipe page on same generation */
const swipePage = async (dir) => {
  switch(dir) {
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
      page.value = Math.floor(store.cards[gen.value].length/pagesize)-1;
      break;
  }
  localStorage.setItem('currentPage', page.value)
  document.querySelectorAll('.fixed').forEach(el => el.classList.remove('fixed'))
}

/* fix card second option */
const fixAlt = () => {
  if(event.target.classList.contains('fixed'))
    event.target.classList.remove('fixed')
  else
    event.target.nextElementSibling.classList.add('fixed')
}

/* preview card on hover */
const makePreview = () => {
  let imgsource = event.target.src
  previewRef.value.src = imgsource
}

/* on reload get old page position */
onMounted(() => {
  if(localStorage.getItem('currentPage'))
    page.value = localStorage.getItem('currentPage')

  if(localStorage.getItem('currentGen'))
    gen.value = localStorage.getItem('currentGen')
})
</script>

<style scoped>
#app {
  background-color: #333;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1vh;
}
.buttons > div {
  color: #fff;
  font-weight: 500;
}
.buttons button {
  padding: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 93vh;
  width: fit-content;
  gap: 1vh;
  margin-top: 0.7vh;
}
.cards .card {
  height: calc(91vh / 3);
  position: relative;
  /* min-width: 33.33%; */
}

.cards .card img {
  /* width: 100%; */
  height: 100%;
  object-fit: contain;
  border-radius: 11px;
}

.cards .card .empty {
  /* width: 40%;
  height: auto; */
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
}



.cards .card .multiple {
  width: 100%;
  height: 100%;
  pointer-events: all;
  position: relative;
}

.cards .card .multiple::after {
  content: '';
  position: absolute;
  bottom: .75rem;
  right: .75rem;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 10;
  display: flex;
  flex-direction: center;
  align-items: center;
  background-image: url(./assets/altr.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}

.cards .card .multiple::before {
  content: '';
  position: absolute;
  bottom: 1.45rem;
  right: 1.45rem;
  width: 0;
  height: 0;
  z-index: 10;
  box-shadow: 0px 0px 12px 12px #fff;
}

.cards .card .multiple .maincard {
  top: 0;
  left: 0;
  position: relative;
  z-index: 1;
}

.cards .card .multiple .altcard {
  top: 0;
  left: 0;
  position: absolute; 
  translate: 0;
  z-index: 0;
  transition: all 300ms ease;
  pointer-events: none;
}
.cards .card .multiple:hover .altcard,
.cards .card .multiple .altcard.fixed {
  z-index: 1;
  translate: 0 0;
  transition: all 300ms ease;
}

.cards .card .multiple .altcard.fixed {
  pointer-events: all;
  box-shadow: 2px 2px 2px red; /* #f0d75d */
}

.preview {
  position: absolute;
  top: 60%;
  left: 2.5rem;
  translate: 0 -50%;
  width: 25vw;
}

.preview img {
  width: 100%;
  object-fit: contain;
}


.generation {
  position: absolute;
  top: 1rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.generation button {
  border: none;
  outline: none;
  padding: .5rem 1rem;
}
.generation button.active {
  background: #666;
}

</style>
