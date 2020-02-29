<template>
  <div class="topbar">
    <div class="top">
      <a class="left" href="/home"></a>
      <a class="center" href="/home"> </a>
      <a class="right" href="/home">
        <span>下载APP</span>
      </a>
    </div>
    <div class="bar">
      <router-link to="/home" tag="a">首页</router-link>
      <router-link to="/animate" tag="a">动画</router-link>
      <router-link to="/anime" tag="a">番剧</router-link>
      <router-link to="/native" tag="a">国创</router-link>
      <router-link to="/music" tag="a">音乐</router-link>
    </div>

  </div>
</template>


<script>

export default {

};
</script>

<style  scoped>
 .topbar a {
  text-decoration: none;
}

.top {
  width: 100%;
  height: 43.97px;
  line-height: 43.97px;
  display: flex;
  margin-bottom: 10px;
}

.top .left {
  flex: 1;
  background-image: url(../../assets/images/BILIBILI_LOGO.png);
  background-size: 100% 100%;
  margin-right: 10px;
}

.top .center {
  flex: 3;
  background-color: #e1e2e3;
  margin-right: 10px;
  border-radius: 10px;
}

.top .right {
  flex: 1;
  color: #fff;
  background-color: rgb(222, 105, 140);
  border-radius: 10px;
  text-align: center;
}

.bar{
  display: flex;
  margin: 10px;
}

.bar a{
  flex:1;
  text-align: center;
}
.active {
 color: rgb(222, 105, 140);
 border-bottom: 2px solid rgb(222, 105, 140);
}


</style>
