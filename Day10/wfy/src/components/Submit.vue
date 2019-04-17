<template>
  <div class="buttons">
    <button class="submit-button" @click="submit">交卷</button>
  </div>
</template>
 
<script>
import "../index.css";
export default {
  name: "Submit",
  props: ["datalist"],
  data: function() {
    return {
      answers: []
    };
  },
  methods: {
    submit() {
      for (let i = 0; i < this.datalist.length; i++)
        this.answers.push(this.datalist[i].userAnswer);
      //向服务端提交answers
    }
  }
};
//提交子组件(提交功能)，传入dataList之后直接在本子组件里提交服务端
</script>
 
<style>
</style>
