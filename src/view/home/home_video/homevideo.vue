<template>
  <div class="videoitem">
    <a href="http://www.bilibili.com">
      <img :src="item.src" alt />
      <p>{{item.txt}}</p>
    </a>
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
  text-align: center;
  font-size: 1em;

}
.videoitem a{
   text-decoration: none;
   color: #212121;
}
.videoitem img {
  width: 100%;
  height: 100%;
}
</style>
