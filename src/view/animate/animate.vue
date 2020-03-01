<template>
  <div class="animate">
    <div class="animate_1">
      <div class="top">
        <p>{{top[0].left}}</p>
        <p>{{top[0].right}}</p>
      </div>
      <es v-for="item in es" :key="item.src" :es="item" :top="top"></es>
    </div>
    <div class="animate_2">
      <div class="top">
        <p>{{top2[0].left}}</p>
        <p>{{top2[0].right}}</p>
      </div>
      <es v-for="item in es2" :key="item.src" :es="item" :top="top2"></es>
    </div>

       <div class="animate_3">
      <div class="top">
        <p>{{top[0].left}}</p>
        <p>{{top[0].right}}</p>
      </div>
      <es v-for="item in es3" :key="item.src" :es="item" :top="top3"></es>
    </div>
    <div class="animate_4">
      <div class="top">
        <p>{{top2[0].left}}</p>
        <p>{{top2[0].right}}</p>
      </div>
      <es v-for="item in es4" :key="item.src" :es="item" :top="top4"></es>
    </div>
  </div>
</template>

<script>
import es from "./es";

export default {
  components: {
    es
  },
  data() {
    return {
      top: [
        {
          left: "热门推荐",
          right: "排行榜"
        }
      ],
      es: [
        {
          src: require("../../assets/images/animate_1_1.png"),
          txt: "《崩坏3》动画短片「天穹流星」"
        },
        {
          src: require("../../assets/images/animate_1_2.png"),
          txt: "人干事？为阻止少年轻生，狙击手成功将其击毙【阅片无数36】"
        },
        {
          src: require("../../assets/images/animate_1_3.png"),
          txt: "快 放 我 下 车！"
        },
        {
          src: require("../../assets/images/animate_1_4.png"),
          txt: "像这种孙子 爷一共有七个"
        }
      ],
      top2: [
        {
          left: "MAD·AMV",
          right: "查看更多"
        }
      ],
      es2: [
        {
          src: require("../../assets/images/animate_2_1.png"),
          txt: "沙雕不能拯救单身狗！！"
        },
        {
          src: require("../../assets/images/animate_2_2.png"),
          txt: "车门焊死，谁都别想在02身上白嫖！！"
        },
        {
          src: require("../../assets/images/animate_2_3.png"),
          txt: "戴上耳机！前方高能！感受极致踩点带来的视听盛宴！"
        },
        {
          src: require("../../assets/images/animate_2_4.png"),
          txt:
            "全程高甜！你暗恋的人喜欢你是世上最幸福的事【擅长调情的高木同学】"
        }
      ],
       top3: [
        {
          left: "MMD·3D",
          right: "查看更多"
        }
      ],
      es3: [
        {
          src: require("../../assets/images/animate_1_1.png"),
          txt: "【露肩礼裙天依】温馨的日常~【绫依】"
        },
        {
          src: require("../../assets/images/animate_1_2.png"),
          txt: "群 龙 王 该 做 的 事"
        },
        {
          src: require("../../assets/images/animate_1_3.png"),
          txt: "彼岸双生希儿【原创镜头配布】地狱【大神犬PV付】"
        },
        {
          src: require("../../assets/images/animate_1_4.png"),
          txt: "【MMD/裸眼3D】清纯校服miku，沉浸式体验，无VR设备也能看"
        }
      ],
      top4: [
        {
          left: "MAD·AMV",
          right: "查看更多"
        }
      ],
      es4: [
        {
          src: require("../../assets/images/animate_2_1.png"),
          txt: "沙雕不能拯救单身狗！！"
        },
        {
          src: require("../../assets/images/animate_2_2.png"),
          txt: "车门焊死，谁都别想在02身上白嫖！！"
        },
        {
          src: require("../../assets/images/animate_2_3.png"),
          txt: "戴上耳机！前方高能！感受极致踩点带来的视听盛宴！"
        },
        {
          src: require("../../assets/images/animate_2_4.png"),
          txt:
            "全程高甜！你暗恋的人喜欢你是世上最幸福的事【擅长调情的高木同学】"
        }
      ]
    };
  }
};
</script>

<style scoped>
.animate {
}
.animate_1,
.animate_2,
.animate_3,
.animate_4 {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.top {
  margin: 0 1%;
  width: 100%;
  height: 10%;
  padding: 0px;
}
.animate .top p:nth-child(1) {
  float: left;
  font-weight: bold;
}
.animate .top p:nth-child(2) {
  float: right;
  color: #ffa726;
  font-size: 14px;
}
</style>
