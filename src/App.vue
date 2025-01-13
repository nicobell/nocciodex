<template>
  <div class="wrapper" @mousemove="makePreview">

    <div :class="['cards']" :style="'grid-template-columns: '+ computedcolumns +';'">
      <div class="card" v-for="(c, i) in cards">
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
      <!-- 
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
      -->

      <div class="field">
        <label for="generation">Generation</label>
      <select v-model="gen" name="genselect" id="genselect">
        <option value="1">Gen 1</option>
        <option value="2">Gen 2</option>
        <option value="3">Gen 3</option>
        <option value="4">Gen 4</option>
        <option value="5">Gen 5</option>
        <option value="6">Gen 6</option>
        <option value="7">Gen 7</option>
        <option value="8">Gen 8</option>
        <option value="9">Gen 9</option>
        <option value="0">Starters</option>
      </select>
    </div>

      <div class="checkbox">
        <label for="fill">Fill pockets</label>
        <input type="checkbox" v-model="fill" id="fill" name="fill">
      </div>
      
      <div class="field">
        <label for="ncolumns">Columns</label>
        <input name="ncolumns" type="number" v-model="ncolumns">
      </div>

      <div class="field">
        <label for="ncolumns">Cards per page</label>
        <span style="color: #fff;">{{ pagesize }}</span>
      </div>
      <!-- <input disabled name="ncolumns" type="number" v-model="pagesize"> -->

    </div>

    <div class="preview">
      <img ref="preview" src="" alt="">
    </div>

  </div>
</template>

<script setup>
import { useCardsStore } from '@/stores/cards'
import { ref, onMounted, computed, useTemplateRef, getCurrentInstance, watch } from 'vue'

const store = useCardsStore()
const gen = ref(1)
const page = ref(0)
const fill = ref(false)
const ncolumns = ref(3)
//const pagesize = ref(9)
const pagesize = computed(() => {
  return ncolumns.value  * 3
})

/* get all cards from current generation + filter 9 per page */
const storecards = computed(() => {
  if(fill.value)
    return store.cards[gen.value].filter(c => c!="")
  else
    return store.cards[gen.value]
})

const cards = computed(() => {
  return storecards.value.slice(page.value * pagesize.value, page.value * pagesize.value + pagesize.value)
})

/* preview card element */
const previewRef = useTemplateRef('preview')

/* select pokemon generation */
/* const changeGen = (g) => {
  gen.value = g
  localStorage.setItem('currentGen', gen.value)
  swipePage('first')
} */

const computedcolumns = computed(() => {
  let s = ''
  for(let i=0; i<ncolumns.value; i++)
    s += ' 1fr'
  return s
})

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
      page.value = Math.floor(storecards.value.length/pagesize.value)-1;
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

<style scoped lang="scss">
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
  /* grid-template-columns: 1fr 1fr 1fr; */
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

.cards .card .multiple .altcard.fixed {
  z-index: 1;
  translate: 0 0;
  transition: all 300ms ease;
}

@media (min-width: 768px) {
  .cards .card .multiple:hover .altcard {
    z-index: 1;
    translate: 0 0;
    transition: all 300ms ease;
  }
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


@media (max-width: 767px) {

  .cards  {
    margin: 0;
    /* background-color: blue; */
    height: 80svh;
    width: 100vw;
    padding: .5rem;
    gap: .5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    .card {
      /* background-color: red; */
      height: calc((80svh - 2rem) / 3);
      width: 100%;
      display: block;
      position: relative;
    }

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }


  .buttons {
    position: absolute;
    bottom: 3.5rem;
    gap: 1rem;
    button {
      padding: .5rem 1rem;
      border-radius: 3rem;
      border: none;
    }
  }

  

  .generation {
    bottom: .5rem;
    top: unset;
    left: 0;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    gap: .5rem;
    padding: 0 .5rem;
    /* background-color: blue; */

    /* button {
      padding: .5rem;
      font-size: .7rem;
      border-radius: 2rem;
    } */

    > * {
      display: block;
      width: 25%;
      /* background-color: red; */
    }

    input, select {
      background-color: #666;
      border: none;
      line-height: 1em;
      padding: .25rem .5rem;
      color: #fff;
      height: fit-content;
      border-radius: 3rem;
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    label {
      font-size: .7rem;
    }
  }

  .checkbox {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    align-items: center;
    font-size: .7rem;
    line-height: 1em;
  }

  .preview {
    display: none;
  }
}

</style>
