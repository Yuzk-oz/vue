<template>
  <div class="videoitem">
    <img :src="item.src" alt />
    <p>{{item.txt}}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
.videoitem {
  width: 45%;
  height: 100%;
}

.videoitem img {
  width: 100%;
  height: 100%;
}
</style>
