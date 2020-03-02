<template>
  <div id="app">
    <maintopbar></maintopbar>
   <keep-alive> <router-view/></keep-alive>
  </div>
</template>

<script>
import maintopbar from './components/mainTopBar/MainTopBar'
export default {
  name: 'App',
  components:{
    maintopbar
    }

}
</script>

<style>

</style>
