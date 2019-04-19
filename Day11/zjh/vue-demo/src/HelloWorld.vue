<template>
  <div class="hello">
    <p class="title">测试</p>
        <p class="recording-time">开始时间: {{now}} &nbsp; &nbsp; 用时: {{time}}秒
        </p>
        <ChooseTopic 
        :len="dataList.length"  
        :index="index"
        @check="check"></ChooseTopic>
        <FormConent 
        :len="dataList.length" 
        :index="index" 
        :data="dataList[index]"
        @next="next"
        @before="before"
        @submit="submit"></FormConent>
  </div>
</template>
<script>
import FormConent from "./components/FormConent/FormConent"
import ChooseTopic from "./components/ChooseTopic/ChooseTopic"

import "./index.css";
import { mapState } from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      index: 0,
      newTime:'',
      time: 0,
      timeStep:'',
    };
  },
  created() {
    this.timeStep = setInterval(this.timeSum,1000)
  },
  computed:{
    now(){
      let newTime = new Date()
      let Hours = newTime.getHours()>=10 ? newTime.getHours() : "0"+newTime.getHours()
      let Minutes = newTime.getMinutes()>=10 ? newTime.getMinutes() : "0"+newTime.getMinutes()
      return Hours+":"+Minutes
    },
    ...mapState(['dataList'])
  },
  methods: {
    timeSum(){
      this.time++
    },
    check(i){
      this.index = i
        // console.log('当前题目所选',this.dataList[this.index].userAnswer);
    },

    before() {
      this.index--;
    },
    next() {
      // if (this.dataList[this.index].userAnswer !== null) {
        console.log('当前题目所选',this.dataList[this.index].userAnswer);
        this.index++;
      // } else {
      //   alert("请填写完毕后点击");
      // }
    },
    submit(){
      // let rightLen = 0
      // for (let i = 0; i < this.dataList.length; i++) {
      //   if (this.dataList[i].userAnswer && this.dataList[i].type==="multiple") {
      //     this.dataList[i].userAnswer.sort((a,b)=>{return a-b})
      //   }
      //   if (this.dataList[i].answer.toString() === (this.dataList[i].userAnswer===null ? '' : this.dataList[i].userAnswer.toString())) {
      //     rightLen++
      //   }
      // }
      // console.log('dataAn',this.dataList);
      
      // this.$router.push({ path: 'last', query: { time: this.time,len :this.dataList.length, rightLen:rightLen}})
      clearInterval(this.timeStep)
    }
  },
  components:{
    FormConent,
    ChooseTopic
  }
};
</script>
<style scoped>
</style>
