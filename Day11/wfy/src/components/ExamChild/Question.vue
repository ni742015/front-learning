<template>
  <div>
    <!-- 不变的部分：题目类型、题干 -->
    <span class="question-type">{{map[dataList[index].type]}}</span>
    <div class="question-title">{{dataList[index].content}}</div>

    <!-- 变化的部分：选项 -->
    <!-- 判断题 -->
    <div v-if="dataList[index].type==='judgment'">
      <div
        :class="dataList[index].userAnswer?'true-answer':'answer'"
        @click="judgment_select(true)"
      >正确</div>
      <div
        :class="dataList[index].userAnswer?'answer':'true-answer'"
        @click="judgment_select(false)"
      >错误</div>
    </div>
    <!-- 填空题 -->
    <div v-if="dataList[index].type==='fill'">
      <input
        class="answer"
        v-for="(item,i) in dataList[index].userAnswer"
        :key="item._id"
        v-model="dataList[index].userAnswer[i]"
      >
    </div>
    <!-- 计算题 -->
    <div v-if="dataList[index].type==='aq'">
      <input class="answer" v-model="dataList[index].userAnswer">
    </div>
    <!-- 多选题 -->
    <div v-if="dataList[index].type==='multiple'">
      <!-- <div :class="dataList[index].userAnswer[i]?'true-answer':'answer'" class="answer" v-for="(item,i) in dataList[index].options" :key="item._id" @click="multipleSelect(i)"> -->
      <div
        class="answer"
        v-for="(item,i) in dataList[index].options"
        :key="item._id"
        @click="multipleSelect(i)"
      >{{item}}</div>
      <div class="answer">选的是：第{{dataList[index].userAnswer}}项</div>
    </div>
    <!-- 单选题 -->
    <div v-if="dataList[index].type==='single'">
      <div
        :class="dataList[index].userAnswer===i?'true-answer':'answer'"
        v-for="(item,i) in dataList[index].options"
        :key="item._id"
        @click="singleSelect(i)"
      >{{item}}</div>
    </div>
  </div>
</template>
 
<script>
import "../../index.css";
export default {
  name: "Question",
  computed: {
    dataList() {
      return this.$store.state.dataList;
    },
    index() {
      return this.$store.state.index;
    },
    map() {
      return this.$store.state.map;
    },
    startTime() {
      return this.$store.state.startTime;
    }
  },
  mounted: function() {
    for (let i = 0; i < this.dataList.length; i++)
      this.dataList[i].userAnswer = this.dataList[i].answer;
  },
  mounted: function() {
    this.setStartTime();
    //this.setTotalTime();
  },
  //递归
  // function() {
  //   for (let i = 0; i < this.dataList.length; i++) {
  //     this.dataList[i].userAnswer = this.dataList[i].answer;
  //     this.solve(this.dataList[i].userAnswer);
  //   }
  // },
  // solve(current) {
  //   if (current.length == undefined) {
  //     current = null;
  //     return;
  //   }
  //   for (let i = 0; i < current.length; i++) solve(current[i]);
  // },
  methods: {
    //判断
    judgment_select: function(target) {
      this.$store.commit("judgment_select", target);
    },
    //单选
    singleSelect: function(target) {
      this.$store.commit("singleSelect", target);
    },
    //多选
    multipleSelect: function(target) {
      this.$store.commit("multipleSelect", target);
    },
    //答题开始时间
    setStartTime: function() {
      //开始时间
      var now = new Date();
      var hh = now.getHours();    //时
      var mm = now.getMinutes();  //分
      var ss = now.getSeconds();  //秒
      var clock = "";
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += "0";
      clock += mm + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      this.$store.commit("setStartTime", clock);
    },
    // setTotalTime: function() {
    //   this.$store.commit("l", 1);
    // }
  }
};
</script>
 
<style>
</style>
