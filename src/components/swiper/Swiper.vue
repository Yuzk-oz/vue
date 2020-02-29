<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" />
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" />
        </transition>
      </a>
    </div>

    <ul class="slide-pages">
      <li @click="goto(prevIndex)" class="lt">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)" :key="index">
        <a :class="{on: index === nowIndex}">&#927;</a>
      </li>
      <li @click="goto(nextIndex)" class="gt">&gt;</li>
    </ul>

  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 10);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all 0.2s;
}
.slide-trans-enter {
  transform: translateX(100%);
}
.slide-trans-old-leave-active {
  transition: all 0.2s;
  transform: translateX(-100%);
}
.slide-show {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 200px;
  overflow: hidden;

}

.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 15px;
  left:0;
  right: 0;
  margin: auto 5px;
font-style: 10px;

}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: beige;
  font-size:1rem;
}
.slide-pages li .on {
  color: deeppink;
  text-decoration: underline;
}
.lt{
  position: absolute;
  left: 0;
  top:-320%;
}
.gt{

  position: absolute;
  right: 0;
  top:-320%;
}
</style>
