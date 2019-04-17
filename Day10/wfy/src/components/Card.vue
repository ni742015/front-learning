<template>
  <div>
    <div class="card1">
      <p class="card-title">答题卡</p>
    </div>
    <div class="card2">
      <div
        :class="index==i?'current-question':'others-question'"
        v-for="(question, i) in datalist"
        :key="question._id"
        @click="switch_question(i)"
      >{{i + 1}}</div>
    </div>
  </div>
</template>
 
<script>
import "../index.css";
export default {
  name: "Card",
  props: ["datalist", "index"],
  methods: {
    switch_question: function(i) {
      this.$emit("switch_question", i);
    }
  }
};
// 答题卡子组件(题号选择功能)，传入dataList/index，传出对index的修改给父组件的函数，父组件的函数对index做修改
</script>
 
<style>
</style>
