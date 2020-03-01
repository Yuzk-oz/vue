<template>
  <div  class="animateitem">

    <div>
      <a href="http://www.bilibili.com">
        <img :src="es.src" alt="">
        <span>{{es.txt}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
     es:{
      type:Object,
      default:{}
  },
  top:{
    type:Array,
    default:[]
  }
}
}
</script>

<style>
.animateitem{
  width: 45%;
  height: 100%;
  text-align: center;
  font-size: 1em;
}
.animateitem a{
   text-decoration: none;
   color: #212121;
}
.animateitem img{
  width: 100%;
  height: 100%;
}

</style>
