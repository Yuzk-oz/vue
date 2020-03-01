<template>
  <div>
    <div class="swiper">
      <swiper :slides="slides"></swiper>
    </div>

    <div class="homevideo">
      <homevideo v-for="item in homevideo" :key="item.src" :item="item" />
    </div>
  </div>
</template>

<script>
import swiper from "../../components/swiper/Swiper.vue";
import homevideo from "./home_video/homevideo";
export default {
  components: {
    swiper,
    homevideo
  },
  data() {
    return {
      slides: [
        {
          src: require("../../assets/images/1.png")
        },
        {
          src: require("../../assets/images/2.png")
        }
      ],
      homevideo: [
        {
          src: require("../../assets/images/home_1.png"),
          txt: "父母反对我做up主！该怎么说服他们？【读评论01】"
        },
        {
          src: require("../../assets/images/home_2.png"),
          txt: "父母反对我做up主！该怎么说服他们？【读评论01】"
        },
        {
          src: require("../../assets/images/home_3.png"),
          txt: "孩子要出道了，《被 迫 营 业》MV正式首发！！"
        },
        {
          src: require("../../assets/images/home_4.png"),
          txt: "我，老坛胡说，实名diss中国BOY超级大猩猩"
        },
        {
          src: require("../../assets/images/home_5.png"),
          txt: "“那是我日夜思念，深深爱着的人啊”"
        },
        {
          src: require("../../assets/images/home_6.png"),
          txt: "谁才是普通人-月薪3000是什么水平？"
        },
        {
          src: require("../../assets/images/home_7.png"),
          txt: "自制KFC肯德基炸鸡翅，鲜嫩多汁，酥脆外皮的关键"
        },
        {
          src: require("../../assets/images/home_8.png"),
          txt: "珍 贵 录 像 : 慈善三巨头聚首斗地主"
        },
        {
          src: require("../../assets/images/home_9.png"),
          txt: "分享烹饪3580元一位的顶级日料中最好吃的一道菜！包教包会！"
        },
        {
          src: require("../../assets/images/home_10.png"),
          txt: "我在3平米的房间住了两年............"
        },
        {
          src: require("../../assets/images/home_11.png"),
          txt: "B站登月第一人"
        },
        {
          src: require("../../assets/images/home_12.png"),
          txt:
            "外国小哥体验了一天月经之后，决定给湖北的医护人员捐卫生巾和安心裤"
        },
        {
          src: require("../../assets/images/home_13.png"),
          txt:
            "服了日本，在东京告诉你为啥日本的确诊人数涨的慢。日本佛系抗疫下的日常惊悚加无奈加震惊vlog"
        },
        {
          src: require("../../assets/images/home_14.png"),
          txt: "女团腿 去头尾 自用"
        },
        {
          src: require("../../assets/images/home_15.png"),
          txt: "【海绵宝宝】B 站 等 级 现 状"
        },
        {
          src: require("../../assets/images/home_16.png"),
          txt: "真实叶问本人咏春木人桩演示（全站最清晰胶片版）"
        },
        {
          src: require("../../assets/images/home_17.png"),
          txt: "【沙雕新闻】直接笑到原地去世，喝水吃饭慎入"
        },
        {
          src: require("../../assets/images/home_18.png"),
          txt: "因为疑似新冠肺炎，我被澳洲医院隔离了【nya酱】"
        },
        {
          src: require("../../assets/images/home_19.png"),
          txt: "相亲对象居然是我的粉丝！场面一度尴尬！"
        },
        {
          src: require("../../assets/images/home_20.png"),
          txt: "100%实用高手教你怎么撩女生 男生别点进来 怕你变海王"
        }
      ]
    };
  }
};
</script>

<style scoped>
.homevideo {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;

}
</style>
