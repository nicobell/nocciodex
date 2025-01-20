<template>
  <div :class="['card-wrapper', {'doublepage': props.ncolumns==5}]">

    <div v-if="props.ncolumns<5 || (props.ncolumns==5 && props.page==0)" class="cards" :style="'grid-template-columns: ' + (props.ncolumns<5 ? props.computedcolumns : '1fr 1fr 1fr') + ';'">
      <div class="card" v-for="(c, i) in props.cards.slice(0,props.ncolumns<5?props.cards.length:9)" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" class="maincard" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)/* openEditor(c) */">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && !props.hidebuttons && props.isMobile" class="button eye" @click="emit('open-preview', c)/* openPreview(c) */">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)/* deleteCard(c) */">
          <img src="../assets/delete.png" alt="delete">
        </button>

      </div>
    </div>

    <div v-if="props.ncolumns==5 && props.page>0" class="cards doublepage" style="grid-template-columns: 1fr 1fr 1fr;">
      <div class="card" v-for="(c, i) in props.cards.slice(0, 9)" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" class="maincard" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)/* openEditor(c) */">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && !props.hidebuttons && props.isMobile" class="button eye" @click="emit('open-preview', c)/* openPreview(c) */">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)/* deleteCard(c) */">
          <img src="../assets/delete.png" alt="delete">
        </button>

      </div>
    </div>

    <div v-if="props.ncolumns==5 && props.page>0" class="cards doublepage secondpage" style="grid-template-columns: 1fr 1fr 1fr;">
      <div class="card" v-for="(c, i) in props.cards.slice(9, props.cards.length)" @click="fixAlt(c)">

        <div v-if="!c.url.length" class="empty"></div>
        <img v-if="c.url.length" class="maincard" :src="c.url" alt="">
        <img v-if="c.alturl.length" class="altcard" :src="c.alturl" alt="">

        <div v-if="c.alturl.length && !props.hidebuttons" class="button alt">
          <img src="../assets/alty.png" alt="alternative">
        </div>
        <button v-if="!props.hidebuttons" class="button edit" @click="emit('open-editor', c)/* openEditor(c) */">
          <img src="../assets/edity.png" alt="edit">
        </button>
        <button v-if="c.url.length && !props.hidebuttons && props.isMobile" class="button eye" @click="emit('open-preview', c)/* openPreview(c) */">
          <img src="../assets/eye.png" alt="preview">
        </button>
        <button v-if="!props.hidebuttons" class="button delete" @click="emit('delete-card', c)/* deleteCard(c) */">
          <img src="../assets/delete.png" alt="delete">
        </button>

      </div>
    </div>

  </div>
</template>

<script setup>

const emit = defineEmits(['open-preview', 'delete-card', 'open-editor'])
const props = defineProps(['cards', 'hidebuttons', 'computedcolumns', 'ncolumns', 'isMobile', 'page'])

/* fix card second option */
const fixAlt = (card) => {
  if(card.alturl.length)
    event.target.classList.toggle('fixed')
}
</script>

<style scoped lang="scss">

$cardsh: 90vh;

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

  .empty {
    border: 2px #666 dashed;
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1024px) {
  .card-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 75vw;
    margin: 0 0 0 auto;
  }

  .cards {
    gap: .5rem;
    height: $cardsh;
    width: fit-content;
    padding: 2rem 1rem;
    /* margin: 0 auto 0 calc(25vw + 2rem); */
    margin: 0;
    .card {
      img {
        max-height: calc(($cardsh - 5rem) / 3);
      }
    }

    &.doublepage {
      margin: 0;
    }

    &.secondpage {
      border-left: 2px #666 dashed;
    }
  }
}

</style>