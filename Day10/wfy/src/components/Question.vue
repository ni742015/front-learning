<template>
  <div>
    <!-- 不变的部分：题目类型、题干 -->
    <span class="question-type">{{map[datalist[index].type]}}</span>
    <div class="question-title">{{datalist[index].content}}</div>

    <!-- 变化的部分：选项 -->
    <!-- 判断题 -->
    <div v-if="datalist[index].type==='judgment'">
      <div
        :class="datalist[index].userAnswer?'true-answer':'answer'"
        @click="judgment_select(true)"
      >正确</div>
      <div
        :class="datalist[index].userAnswer?'answer':'true-answer'"
        @click="judgment_select(false)"
      >错误</div>
    </div>
    <!-- 填空题 -->
    <div v-if="datalist[index].type==='fill'">
      <input
        class="answer"
        v-for="(item,i) in datalist[index].userAnswer"
        :key="item._id"
        v-model="datalist[index].userAnswer[i]"
      >
      <!-- 为什么v-model="item"不行呢 -->
    </div>
    <!-- 计算题 -->
    <div v-if="datalist[index].type==='aq'">
      <input class="answer" v-model="datalist[index].userAnswer">
    </div>
    <!-- 多选题 -->
    <div v-if="datalist[index].type==='multiple'">
      <!-- <div :class="datalist[index].userAnswer[i]?'true-answer':'answer'" class="answer" v-for="(item,i) in datalist[index].options" :key="item._id" @click="multipleSelect(i)"> -->
      <div
        class="answer"
        v-for="(item,i) in datalist[index].options"
        :key="item._id"
        @click="multipleSelect(i)"
      >{{item}}</div>
      <div class="answer">选的是：第{{datalist[index].userAnswer}}项</div>
    </div>
    <!-- 单选题 -->
    <div v-if="datalist[index].type==='single'">
      <div
        :class="datalist[index].userAnswer===i?'true-answer':'answer'"
        v-for="(item,i) in datalist[index].options"
        :key="item._id"
        @click="singleSelect(i)"
      >{{item}}</div>
    </div>
  </div>
</template>
 
<script>
import "../index.css";
export default {
  name: "Question",
  props: ["datalist", "index"],
  data: function() {
    return {
      // map: new Map()
      //     .set('join', '连线题')
      //     .set('judgment', '判断题')
      //     .set('fill', '填空')
      //     .set('aq', '计算题')
      //     .set('multiple', '多选题')
      //     .set('single', '单选题'),
      //对象方式：
      map: {
        judgment: "判断题",
        fill: "填空题",
        aq: "计算题",
        multiple: "多选题",
        single: "单选题"
      },
      userAnswer: []
    };
  },

  mounted: function() {
    for (let i = 0; i < this.datalist.length; i++)
      this.datalist[i].userAnswer = this.datalist[i].answer;
  },

  //样式数组
  // mounted: function () {
  //     for (let i = 0; i < this.datalist[this.index].userAnswer.length; i++)
  //         if (this.datalist[this.index].userAnswer[i] === target) {
  //             this.datalist[this.index].userAnswer.splice(i, 1);
  //             console.log(this.datalist[this.index].userAnswer);
  //             return
  //         }
  // },

  // mounted: function () {
  //     //根据answer的数据格式定义userAnswer的数据格式
  //     for (let i = 0; i < this.datalist.length; i++) {
  //         //首先复制answer的数据到userAnswer
  //         this.datalist[i].userAnswer = this.datalist[i].answer;
  //         //递归算法实现userAnswer的仅数据清除，使其仅剩格式
  //         this.solve(this.datalist[i].userAnswer);
  //     }
  // },
  // solve(current) {
  //     if (current.length == undefined) {
  //         current = null;
  //         return;
  //     }
  //     for (let i = 0; i < current.length; i++)
  //         solve(current[i]);
  // },
  methods: {
    //判断
    judgment_select(target) {
      this.$emit("judgment_select", target);
    },
    //单选
    singleSelect(target) {
      this.datalist[this.index].userAnswer = target;
    },
    //多选
    multipleSelect(target) {
      for (let i = 0; i < this.datalist[this.index].userAnswer.length; i++)
        if (this.datalist[this.index].userAnswer[i] === target) {
          this.datalist[this.index].userAnswer.splice(i, 1);
          return;
        }
      this.datalist[this.index].userAnswer.push(target);
    }
  }
};
//答题区域子组件(题目类型、题干、选项或输入框功能)，传入dataList/index，子组件的函数对dataList做修改
</script>
 
<style>
</style>
