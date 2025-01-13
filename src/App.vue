<template>
  <div class="wrapper"> <!-- @mousemove="makePreview" -->

    <div :class="['cards']" :style="'grid-template-columns: '+ computedcolumns +';'">
      <div class="card" v-for="(c, i) in cards">
        <button v-if="c.length" class="open" @click="openPreview(c)">
          <img src="./assets/eye.png" alt="occhio">
        </button>

        <img v-if="c==''" src="./assets/back.png" alt="pokeball" class="empty">
        <div v-else-if="c.length>=2 && c.length<=4" class="multiple" @click="fixAlt">
          <img class="maincard" :src="c[0]" alt="">
          <img class="altcard" :src="c[1]" alt="">
        </div>
        <img v-else :src="c" :alt="'pokemon' + page + '-' + i">
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
        <!-- <input name="ncolumns" type="number" v-model="ncolumns"> -->
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
      </div>

      <div class="field">
        <label for="ncolumns">Cards per page</label>
        <span style="color: #fff;">{{ pagesize }}</span>
      </div>
      <!-- <input disabled name="ncolumns" type="number" v-model="pagesize"> -->

    </div>

    <div :class="{'preview': true, 'open': isPreviewOpen}" @click="closePreview">
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
const isPreviewOpen = ref(false)
/* preview card element */
const previewRef = useTemplateRef('preview')
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



/* select pokemon generation */
/* const changeGen = (g) => {
  gen.value = g
  localStorage.setItem('currentGen', gen.value)
  swipePage('first')
} */

const openPreview = (source) => {
  //console.log(previewRef.value, source)
  //console.log(previewRef.value.getAttribute('src'))
  isPreviewOpen.value = true

  if(source.length > 2) {
    previewRef.value.setAttribute('src', source)

  } else {
    let isFixed = event.target.closest('.card').querySelector('.altcard').classList.contains('fixed')
    let altsource = event.target.closest('.card').querySelector('.altcard').getAttribute('src')
    let mainsource = event.target.closest('.card').querySelector('.maincard').getAttribute('src')
    if(isFixed) {
      previewRef.value.setAttribute('src', altsource)
    } else {
      previewRef.value.setAttribute('src', mainsource)
    }
  }
}

const closePreview = () => {
  isPreviewOpen.value = false
}

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

  console.log(localStorage.getItem('currentPage'), localStorage.getItem('currentGen'))
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

  console.log(localStorage.getItem('currentPage'), localStorage.getItem('currentGen'))
})

watch(gen, async (newgen, oldgen) => {
  console.log(oldgen + ' -> ' + newgen)
  localStorage.setItem('currentGen', newgen)
})

</script>

<style scoped lang="scss">
#app { background-color: #333; }

$card-height-mobile: 80svh;
$card-height-desktop: 90vh;
$pokeyellow: #F1E668;
$pokeblue: #1f2573;

.wrapper {
  display: grid;
  grid-template-areas: 
    'cards'
    'pages'
    'options';
  gap: 1rem;
}


.cards  {
  grid-area: cards;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .5rem;

  height: $card-height-mobile;
  width: 100vw;
  margin: 0;
  padding: .5rem;
  /* background-color: blue; */
  
  .card {
    display: block;
    position: relative;
    height: calc(($card-height-mobile - 2rem) / 3);
    width: 100%;
    /* background-color: red; */
  }

  .multiple {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-color: green; */

    .altcard,
    .maincard {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .altcard { z-index: 0; }
    .altcard.fixed { 
      z-index: 2; 
      box-shadow: 3px 2px 2px $pokeyellow;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: .35rem;
      right: .35rem;
      width: 1.5rem;
      height: 1.5rem;
      z-index: 4;
      background-size: contain;
      background-image: url(./assets/alty.png);
      background-position: center center;
      background-repeat: no-repeat;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 1.1rem;
      right: 1.1rem;
      width: 0;
      height: 0;
      z-index: 3;
      box-shadow: 0 0 .75rem .75rem rgba(28, 35, 92, .8);
    }
  }

  .open {
    position: absolute;
    bottom: .5rem;
    left: .5rem;
    z-index: 4;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    border: none;
    background: none;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 0;
      height: 0;
      z-index: -1;
      box-shadow: 0 0 .65rem .65rem rgba(28, 35, 92, .8);
    }
  }

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
}


.buttons {
  grid-area: pages;

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
  grid-area: options;
  justify-content: center;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
  gap: .5rem;
  padding: 0 .5rem;

  > * {
    display: block;
    width: 25%;
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

  .field {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    > label {
      font-size: .7rem;
      color: $pokeyellow;
    }
  }
}

.radios {
  display: flex;
  gap: .5rem;
  
  .radio {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    
    label {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      border-radius: 50%;
    }
    input { display: none; }

    &.active label {
      color: #fff;
      font-weight: 700;
    }
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
  margin: auto;
  color: $pokeyellow;
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
    background-color: rgba(0,0,0,.5);
    img {
      height: calc(100% - 2rem);
      width: calc(100% - 2rem);
      object-fit: contain;
    }
  }
}


@media (min-width: 768px) {
  .wrapper {
    grid-template-areas: 
      'options cards empty2'
      'preview cards empty2'
      'empty pages empty2';
    grid-template-columns: 20vw 70vw 10vw;
  }


  .cards {
    width: fit-content;
    height: $card-height-desktop;
    margin: 0 auto;

    .card {
      height: calc(($card-height-desktop - 2rem) / 3);
    }
  }


  .options {
    padding-top: 2rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem 0;

    > * {
      width: 100%;
    }

    .field {
      align-items: flex-start;
      font-size: 1.25rem;
      label { font-size: 1rem; }
    }

    select {
      font-size: 1.25rem;
    }
  }

  .radios {
    .radio {
      gap: .5rem;
      input { display: block; }
    }
  }

  .checkbox {
    justify-content: flex-end;
    font-size: 1.25rem;
  }

  .buttons {
    width: 100%;
    justify-content: center;
  }
}

</style>
