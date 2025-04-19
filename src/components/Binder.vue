<template>
  <div :class="['binder-wrapper', isMobile ? 'mobile' : '']">

    <div v-if="isMobile" :class="['binder', isMobile ? 'mobile' : '']">
      <BinderPage :cards="mobilePageCards" :missing="props.missing" />
    </div>

    <div v-if="!isMobile" class="binder">
      <BinderPage :cards="leftCards" :missing="props.missing"
        :class="['left-page', (props.animation && (props.direction == 'left' || props.direction == 'first')) ? 'flipping' : '']" />
      <BinderPage :cards="rightCards" :missing="props.missing"
        :class="['right-page', (props.animation && props.direction == 'right') ? 'flipping' : '']" />
    </div>

    <div v-if="!isMobile && props.page > 0" :missing="props.missing"
      :class="['flip-helper', 'left', (props.animation && (props.direction == 'left' || props.direction == 'first')) ? 'flipping' : '']">
      <BinderPage :cards="(props.animation && props.direction == 'first') ? rightCardsFirst : rightCardsPrev"
        class="right-page-back" />
    </div>
    <div v-if="!isMobile" :class="['flip-helper', 'right', (props.animation && props.direction == 'right') ? 'flipping' : '']"
      :missing="props.missing">
      <BinderPage :cards="leftCardsNext" class="left-page-back" />
    </div>

    <div v-if="!isMobile && props.page > 0" class="backpage left" :missing="props.missing">
      <BinderPage :cards="(props.animation && props.direction == 'first') ? leftCardsFirst : leftCardsPrev"
        class="right-page-back" />
    </div>
    <div v-if="!isMobile" class="backpage right" :missing="props.missing">
      <BinderPage :cards="rightCardsNext" class="right-page-back" />
    </div>

  </div>
</template>

<script setup>
import { useCardsStore } from '@/stores/cards';
import BinderPage from './BinderPage.vue';
import { useBinderStore } from '@/stores/binders';
import { computed, ref, watch } from 'vue';

const props = defineProps(['page', 'animation', 'direction', 'fill', 'missing'])
const cardsStore = useCardsStore()
const binderStore = useBinderStore()
const pageDimension = ref(9)
//const pageOffset = ref(0)

const isMobile = computed(() => {
  return window.innerWidth < 1200
})

const mobilePageCards = computed(() => {
  return filteredCards.value.slice(pie(0), pie(1))
})

const filteredCards = computed(() => {
  if (cardsStore.cards.length) {
    return cardsStore.cards.find(el => el.binder == binderStore.currentBinder).data.filter(el => !props.fill || el.url)
  } else return []
})

function pie(p) {
  return (props.page + p) * pageDimension.value //+ pageOffset.value
}


const leftCards = computed(() => {
  return filteredCards.value.slice(pie(0), pie(1))
})

const rightCards = computed(() => {
  return filteredCards.value.slice(pie(1), pie(2))
})



const leftCardsNext = computed(() => {
  return filteredCards.value.slice(pie(2), pie(3))
})

const rightCardsNext = computed(() => {
  return filteredCards.value.slice(pie(3), pie(4))
})



const leftCardsPrev = computed(() => {
  return filteredCards.value.slice(pie(-1), pie(-1))
})

const rightCardsPrev = computed(() => {
  return filteredCards.value.slice(pie(-1), pie(0))
})



const leftCardsFirst = computed(() => {
  return filteredCards.value.slice(0, pageDimension.value)
})

const rightCardsFirst = computed(() => {
  return filteredCards.value.slice(pageDimension.value, 2 * pageDimension.value)
})

</script>

<style scoped lang="scss">
@import "../style/variables";

$binderwidth: calc((6 * $cardw) + (4 * $pagepadding) + (4 * $cardsgap));

.binder-wrapper {
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

@media (min-width: 1200px) {
  .binder-wrapper {
    position: relative;
    margin: 5rem 5rem 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

/* main current binder */
.binder {
  display: flex;
  flex-direction: row;
  width: calc((3 * $cardwm) + (4 * .75rem));
  margin: .75rem auto;
}

@media (min-width: 1200px) {
  .binder {
    margin: 0;
    width: $binderwidth;
  }
}

/* main pages animation */
.left-page {
  position: relative;
  z-index: 2;
  transform-origin: center right;
  backface-visibility: hidden;

  &.flipping {
    z-index: 4;
    animation: left-pageflip;
    animation-duration: 950ms;
    animation-fill-mode: forwards;
  }
}

.right-page {
  position: relative;
  z-index: 2;
  transform-origin: center left;
  backface-visibility: hidden;

  &.flipping {
    z-index: 4;
    animation: right-pageflip;
    animation-duration: 950ms;
    animation-fill-mode: forwards;
  }
}

@keyframes right-pageflip {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg);
  }
}

@keyframes left-pageflip {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(-180deg);
  }
}

/* fixed pages background for flipping preview */
.backpage {
  position: absolute;
  z-index: 0;
  width: calc($binderwidth / 2);
  top: 0;

  &.right {
    right: 0;
  }

  &.left {
    right: calc($binderwidth / 2);
  }

  .page {
    width: 100%;
  }
}

/* backface of main pages while animating */
.flip-helper.left .right-page-back,
.flip-helper.right .left-page-back {
  width: 100%;
  transform-origin: center center;
  scale: -1 1;
}

.flip-helper {
  //width: 50%;
  width: calc($binderwidth / 2);
  position: absolute;
  top: 0;
  z-index: 1;

  &.right {
    right: 0;
    transform-origin: center left;

    &.flipping {
      z-index: 3;
      animation: right-pageflip;
      animation-duration: 950ms;
      animation-fill-mode: forwards;
    }
  }

  &.left {
    right: calc($binderwidth / 2);
    transform-origin: center right;

    &.flipping {
      z-index: 3;
      animation: left-pageflip;
      animation-duration: 950ms;
      animation-fill-mode: forwards;
    }
  }
}
</style>
