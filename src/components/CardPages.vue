<template>
  <div :class="['cards-wrapper', {'doublepage': props.ncolumns==5}]">

    <div v-if="props.ncolumns<5 || (props.ncolumns==5 && props.page==0)" class="cards" :style="'grid-template-columns: ' + (props.ncolumns<5 ? props.computedcolumns : '1fr 1fr 1fr') + ';'">
      <div class="card" v-for="(c, i) in props.cards.slice(0,props.ncolumns<5?props.cards.length:9)" :key="i" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" :class="['maincard', { 'have': c.gotit && props.seeMissing }]" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <!-- <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && props.isMobile" class="button eye" @click="emit('open-preview', c)">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)">
          <img src="../assets/delete.png" alt="delete">
        </button>
        <button v-if="!props.hidebuttons" class="button addleft" @click="emit('add-card-position', c.order)">
          <img src="../assets/add.png" alt="add left">
        </button>
        <button v-if="!props.hidebuttons" class="button addright" @click="emit('add-card-position', c.order+1)">
          <img src="../assets/add.png" alt="add right">
        </button> -->
      </div>
    </div>

    <!-- <div v-if="props.ncolumns==5 && props.page>0" class="cards doublepage" style="grid-template-columns: 1fr 1fr 1fr;">
      <div class="card" v-for="(c, i) in props.cards.slice(0, 9)" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" :class="['maincard', { 'have': c.gotit && props.seeMissing }]" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && props.isMobile" class="button eye" @click="emit('open-preview', c)">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)">
          <img src="../assets/delete.png" alt="delete">
        </button>
        <button v-if="!props.hidebuttons" class="button addleft" @click="emit('add-card-position', c.order)">
          <img src="../assets/add.png" alt="add left">
        </button>
        <button v-if="!props.hidebuttons" class="button addright" @click="emit('add-card-position', c.order+1)">
          <img src="../assets/add.png" alt="add right">
        </button>
      </div>
    </div> -->

    <!-- <div v-if="props.ncolumns==5 && props.page>0" class="cards doublepage secondpage" style="grid-template-columns: 1fr 1fr 1fr;">
      <div class="card" v-for="(c, i) in props.cards.slice(9, props.cards.length)" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" :class="['maincard', { 'have': c.gotit && props.seeMissing }]" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && props.isMobile" class="button eye" @click="emit('open-preview', c)">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)">
          <img src="../assets/delete.png" alt="delete">
        </button>
        <button v-if="!props.hidebuttons" class="button addleft" @click="emit('add-card-position', c.order)">
          <img src="../assets/add.png" alt="add left">
        </button>
        <button v-if="!props.hidebuttons" class="button addright" @click="emit('add-card-position', c.order+1)">
          <img src="../assets/add.png" alt="add right">
        </button>
      </div>
    </div> -->

  </div>
</template>

<script setup>

const emit = defineEmits(['open-preview', 'delete-card', 'open-editor', 'add-card-position'])
const props = defineProps(['cards', 'hidebuttons', 'seeMissing', 'computedcolumns', 'ncolumns', 'isMobile', 'page'])

/* fix card second option */
const fixAlt = (card) => {
  if(card.alturl.length)
    event.target.classList.toggle('fixed')
}
</script>

<style scoped lang="scss">
@use "@/style/variables.scss" as *;

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


}

@media (min-width: 1024px) {
  .cards-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 76vw;
    margin: 0 0 0 auto;
  }

  .cards {
    gap: .5rem;
    height: $cardsh;
    width: fit-content;
    padding: 1rem;
    /* margin: 0 auto 0 calc(25vw + 2rem); */
    margin: 0;

    &.doublepage {
      margin: 0;
    }

    &.secondpage {
      border-left: 2px #666 dashed;
    }
  }
}

</style>