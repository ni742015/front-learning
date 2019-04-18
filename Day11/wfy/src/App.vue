<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Exam from "./components/Exam.vue";
import Result from "./components/Result.vue";
import "./index.css";

export default {
  name: "app",
  components: {
    Exam: Exam,
    Result: Result
  }
};
</script>

<style>
</style>
