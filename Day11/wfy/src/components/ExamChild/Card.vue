<template>
  <div>
    <div class="card1">
      <p class="card-title">答题卡</p>
    </div>
    <div class="card2">
      <div
        :class="index==i?'current-question':'others-question'"
        v-for="(question, i) in dataList"
        :key="question._id"
        @click="switch_question(i)"
      >{{i + 1}}</div>
    </div>
  </div>
</template>
 
<script>
import "../../index.css";
export default {
  name: "Card",
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
    index() {
      return this.$store.state.index;
    },
  },
  methods: {
    //切换题号
    switch_question: function(i) {
      this.$store.commit("switch_question", i);
    }
  }
};
</script>
 
<style>
</style>
