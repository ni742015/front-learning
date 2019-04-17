<template>
  <div id="app">
    <p class="title">测试</p>
    <p class="recording-time">开始时间: {{now}} &nbsp; &nbsp; 用时: {{time}}分钟</p>
    <!-- 答题卡子组件 -->
    <Card v-on:switch_question="switch_question" :datalist="dataList" :index="index"></Card>
    <div class="form-Conent">
      <!-- 答题区域子组件 -->
      <Question v-on:judgment_select="judgment_select" :datalist="dataList" :index="index"></Question>
      <!-- 提交子组件 -->
      <Submit :datalist="dataList" :index="index"></Submit>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Question from "./components/Question.vue";
import Submit from "./components/Submit.vue";
import "./index.css";

export default {
  name: "app",
  components: {
    Card: Card,
    Question: Question,
    Submit: Submit
  },
  data: function() {
    return {
      index: 0,
      now: "07:51",
      time: "181",
      //dataList应从服务端获取
      dataList: [
        {
          id: "2",
          type: "judgment",
          content: "所有的苹果都是水果",
          answer: true,
          userAnswer: null
        },
        {
          id: "3",
          type: "judgment",
          content: "所有的水果都是苹果",
          answer: false,
          userAnswer: null
        },
        {
          id: "4",
          type: "fill",
          content: "____秋月何时了，往事______",
          answer: ["春花", "知多少"],
          userAnswer: null
        },
        {
          id: "5",
          type: "aq",
          content: "1+2等于几？",
          answer: "3",
          userAnswer: null
        },
        {
          id: "6",
          type: "multiple",
          content: "哪些是对的",
          options: ["1+1=2", "1+2=3", "1+1=3", "1+2=2"],
          answer: [0, 1],
          userAnswer: null
        },
        {
          id: "7",
          type: "single",
          content: "1+1=?",
          options: ["1", "2", "3", "4"],
          answer: 1,
          userAnswer: null
        }
      ]
    };
  },
  methods: {
    switch_question(i) {
      this.index = i;
    },
    judgment_select(target) {
      this.dataList[this.index].userAnswer = target;
    }
  }
};
</script>

<style>
</style>
