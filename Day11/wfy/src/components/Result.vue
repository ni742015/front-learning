<template>
  <div id="Result">
    <p class="title">结果</p>
    <p class="recording-time">总用时{{totalTime}}'</p>
    <p class="recording-time">正确{{correctQuestionNum}} /完成{{doneQuestionNum}}</p>
    <button class="submit-button" @click="router_exam">返回</button>
  </div>
</template>
 
<script>
import "../index.css";
export default {
  name: "Result",
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
    totalTime() {
      return this.$store.state.totalTime;
    },
    correctQuestionNum() {
      return this.$store.state.correctQuestionNum;
    },
    doneQuestionNum() {
      return this.$store.state.doneQuestionNum;
    }
  },
  mounted: function() {
    //计算完成数、正确数
    let tmpNum1 = 0;
    let tmpNum2 = 0;
    for (let i = 0; i < this.dataList.length; i++) {
      if (this.dataList[i].userAnswer !== null) tmpNum1++;
      if (this.dataList[i].answer === this.dataList[i].userAnswer) tmpNum2++;
    }
    this.setDoneQuestionNum(tmpNum1);
    this.setCorrectQuestionNum(tmpNum2);
  },
  methods: {
    router_exam() {
      this.$router.push({ path: "/exam" });
    },
    //设置回答正确题目数
    setCorrectQuestionNum(target) {
      this.$store.commit("setCorrectQuestionNum", target);
    },
    //设置已完成题目数
    setDoneQuestionNum(target) {
      this.$store.commit("setDoneQuestionNum", target);
    }
  }
};
</script>
 
<style>
</style>
