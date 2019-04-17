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
export default {
  name: "HelloWorld",
  data() {
    return {
      index: 0,
      newTime:'',
      time: 0,
      timeStep:'',
      dataList: [
        {
          id: 0,
          type: "join",
          content: "四大名著连一连",
          leftItems: ["《水浒传》", "《西游记》", "《三国演义》", "《红楼梦》"],
          rightItems: ["罗贯中", "施耐庵", "曹雪芹", "吴承恩"],
          answer: [[0, 1], [1, 3], [2, 0], [4, 2]],
          userAnswer: null
        },
        {
          id: 1,
          type: "judgment",
          content: "所有的苹果都是水果",
          answer: true,
          userAnswer: null
        },
        {
          id: 2,
          type: "judgment",
          content: "所有的苹果都是水果131321",
          answer: true,
          userAnswer: null
        },
        {
          id: 3,
          type: "fill",
          content: "___秋月何时了，往事___",
          answer: ["春花", "知多少"],
          userAnswer: null
        },
        {
          id: 4,
          type: "aq",
          content: "1+2等于几？",
          answer: "3",
          userAnswer: null
        },
        {
          id: 5,
          type: "multiple",
          content: "哪些是对的",
          options: ["1+1=2", "1+2=3", "1+1=3", "1+2=2"],
          answer: [0, 1],
          userAnswer: null
        },
        {
          id: 6,
          type: "single",
          content: "1+1=?",
          options: ["1", "2", "3", "4"],
          answer: 2,
          userAnswer: null
        }
      ]
    };
  },
  created() {
    this.optionsFn();
    this.timeStep = setInterval(this.timeSum,1000)
  },
  computed:{
    now(){
      let newTime = new Date()
      let Hours = newTime.getHours()>=10 ? newTime.getHours() : "0"+newTime.getHours()
      let Minutes = newTime.getMinutes()>=10 ? newTime.getMinutes() : "0"+newTime.getMinutes()
      return Hours+":"+Minutes
    }
  },
  methods: {
    timeSum(){
      this.time++
    },
    check(i){
      this.index = i
    },
    optionsFn() {
      for (let j = 0; j < this.dataList.length; j++) {
        if (this.dataList[j].options) {
          for (let i = 0; i < this.dataList[j].options.length; i++) {
            this.$set(this.dataList[j].options, i, {
              name: this.dataList[j].options[i],
              check: false
            });
          }
        }
      }
    },
    before() {
      this.index--;
    },
    next() {
      // if (this.dataList[this.index].userAnswer !== null) {
        this.index++;
      // } else {
      //   alert("请填写完毕后点击");
      // }
    },
    submit(){
      let rightLen = 0
      for (let i = 0; i < this.dataList.length; i++) {
        if (this.dataList[i].userAnswer && this.dataList[i].type==="multiple") {
          this.dataList[i].userAnswer.sort((a,b)=>{return a-b})
        }
        if (this.dataList[i].answer.toString() === (this.dataList[i].userAnswer===null ? '' : this.dataList[i].userAnswer.toString())) {
          rightLen++
        }
      }
      this.$router.push({ path: 'last', query: { time: this.time,len :this.dataList.length, rightLen:rightLen}})
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
