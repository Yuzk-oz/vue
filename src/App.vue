<template>
  <div id="app">
    <maintopbar></maintopbar>
    <router-view/>
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
