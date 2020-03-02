<template>
  <div class="top">
    <div class="nativebar">
      <router-link to="/native/nativeBarRec">推荐</router-link>
      <router-link to="/native/nativeBarNat">国产动画</router-link>
      <router-link to="/native/nativeBarRecNat">国产原创相关</router-link>
      <router-link to="/native/nativeBarPup">布袋戏</router-link>
      <router-link to="/native/nativeBarInf">资讯</router-link>
    </div>
<div>

  <router-view></router-view>
</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      path:'/native/Recommend',

    }
  },
  // created(){
  //     this.$router.push('/native/Recommend')
  // },
//   active(){
//       this.$router.push(this.path)
//   },
//   beforeRouteLeave(to,from,next){
//     this.path=this.$route.path
//   }
     };
</script>

<style scoped>
*{
  margin: 0;
  padding: 1px;
}
.top {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: #f9f9f9;
}
.nativebar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  font-size: 16px;
  color: #757575;
  border-bottom: 0.001rem solid #000;
}
.nativebar a {
  text-decoration: none;
  color: #757575;
  font-size: 0.9rem;
}
.active{
 color: rgb(222, 105, 140);
}
</style>
