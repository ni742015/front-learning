<template>
  <div id="Exam">
    <p class="title">测试</p>
    <p class="recording-time">开始时间:{{startTime}} &nbsp; &nbsp; 用时:{{totalTime}}分钟</p>
    <!-- 答题卡子组件 -->
    <Card></Card>
    <div class="form-Conent">
      <!-- 答题区域子组件 -->
      <Question></Question>
      <button class="submit-button" @click="router_submit">交卷</button>
    </div>
  </div>
</template>

<script>
import Card from "./ExamChild/Card.vue";
import Question from "./ExamChild/Question.vue";
import "../index.css";

export default {
  name: "Exam",
  components: {
    Card: Card,
    Question: Question
  },
  computed: {
    startTime() {
      return this.$store.state.startTime;
    },
    totalTime() {
      return this.$store.state.totalTime;
    }
  },
  methods: {
    router_submit() {
      this.$router.push({ path: "/result" });
    }
  }
};
</script>

<style>
</style>
