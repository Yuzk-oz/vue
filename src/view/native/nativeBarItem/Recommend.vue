<template>
  <div class="video">
    <div class="videoitem1">
      <video
        src="../../../assets/video/native_recommend1.mp4"
        width="100%"
        height="50%"
        controls="controls"

      ></video>
      <div class="txt">
        <p>这样的喜羊羊与灰太狼 我愿称之为 王者归来</p>
      </div>
    </div>

    <div class="videoitem2">
      <video
        src="../../../assets/video/native_recommend2.mp4"
        width="100%"
        height="50%"
        controls="controls"

      ></video>
      <div class="txt">
        <p>【喜羊羊与灰太狼/踩点/燃爆】青草生长之处，羊亦生生不息</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
*{
  margin: 0;
  padding: 1px;
}
.video{

  display: flex;
}
.videoitem1{
  flex:1;
  margin-right: 10px;
}
.videoitem2{
  flex:1;
}
p{
  font-size: 14px;
  line-height: 30px;
}
</style>
