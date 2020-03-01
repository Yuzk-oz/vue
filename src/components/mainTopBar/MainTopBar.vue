<template>
  <div class="topbar">
    <div class="top">
      <a class="left" href="/home"></a>
      <a class="center" href="/home">
        <div class="box">
          <img src="../../assets/images/maintopbar_seach.png" alt />
          <span>济公爷爷喊你来画画啦</span>
        </div>
      </a>
      <img src="../../assets/images/maintopbar_user.gif" alt />
      <a class="right" href="/home">
        <span>下载APP</span>
      </a>
    </div>
    <div class="bar">
      <router-link to="/home" tag="a">
        <span>首页</span>
      </router-link>
      <router-link to="/animate" tag="a">
        <span>动画</span>
      </router-link>
      <router-link to="/anime" tag="a">
        <span>番剧</span>
      </router-link>
      <router-link to="/native" tag="a">
        <span>国创</span>
      </router-link>
      <router-link to="/music" tag="a">
        <span>音乐</span>
      </router-link>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style  scoped>
.topbar a {
  text-decoration: none;
}
.topbar{
  padding: 0 3px;
}
.top {
  width: 100%;
  height: 4em;
  line-height: 4em;
  display: flex;
  margin-bottom: 10px;
  font-size: 0.5em;
  margin-bottom: 20px;
}

.top .left {
  flex: 1;
  background-image: url(../../assets/images/BILIBILI_LOGO.png);
  background-size: 100% 100%;
  margin-right: 10px;
}

.top .center {
  flex: 3;
  background-color: #f4f4f4;
  margin-right: 10px;
  border-radius: 20px;

}
.top .box {
  height: 80%;
  padding-left: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
   text-align: left;
}
.top .center .box img {
  width: 20%;
  height: 60%;
  color: #aaa;
  vertical-align: center;
}
.top .center .box span {
  font-size: 2em;
  color: #999;
}
.top .right {
  flex: 1;
  color: #fff;
  background-color: rgb(222, 105, 140);
  border-radius: 10px;
  text-align: center;
}
.top img {
  width: 12%;
  height: 100%;
  border-radius: 10px;
  margin: 0 5px 0 0;
}
.bar {
  display: flex;
  margin: 10px -5px;
}

.bar a {
  flex: 1;
  text-align: left;
}
.bar span {
  padding: 5px;
}
.active {
  color: rgb(222, 105, 140);
}
.active span {
 width: 100%;
  border-bottom: 2px solid rgb(222, 105, 140);
}
</style>
