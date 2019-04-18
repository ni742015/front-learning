
<template>

  <div id="FirstIndex">
   <div class="heard">
        <span class="title">测试</span>
    </div>

    <div class="content" id="content">
        <div class="content_title">
            <span>开始时间:&nbsp;&nbsp;</span><span>{{beginTime}}</span><span>&nbsp;&nbsp;用时:&nbsp;&nbsp;</span><span>{{time}}秒</span>
        </div>

        <Answer :length="forms.length"></Answer>

        <div class="content_content" id="content_content">
            <Subject v-bind:post="forms" :p_index="index" :judgments="judgment"></Subject>
        </div>
        <div class="children_4">
            <div class="children_4_1" @click="beforeProblem" v-if="index!==0">上一题</div>
            <div class="children_4_1 margin_left back_color" @click="nextProblem" v-if="(index+1)!==forms.length">下一题
            </div>
            <div class="children_4_1 margin_left" @click="router_endanswer">交卷</div>
        </div>
    </div>
  </div>

</template>

<script>
import Answer from "./Answer.vue";
import Subject from "./Subject.vue";
import './style.css'

export default {
  name: 'FirstIndex',
  components: {
   'Answer': Answer,
    'Subject': Subject
  }, 
  data:function() {
    return {
    time: 0,
    index: 0,
    isShow: false,
    timeClear:'',
  
    

   
    judgment: [
      {
        name: "正确",
        check: false
      },
      {
        name: "错误",
        check: false
      }
    ],

    forms: [
      {
        id: "1",
        type: "判断题",
        content: "所有的苹果都是水果",
        answer: true,
        userAnswer: null
      },
      {
        id: "2",
        type: "填空题",
        content: "___秋月何时了，往事___",
        answer: ["春花", "知多少"],
        userAnswer: null
      },
      {
        id: "3",
        type: "计算题",
        content: "1+2等于几？",
        answer: "3",
        userAnswer: null
      },
      {
        id: "4",
        type: "多选题",
        content: "哪些是对的",
        options: ["A:1+1=2", "B:1+2=3", "C:1+1=3", "D:1+2=2"],
        answer: [0, 1],
        userAnswer: null
      },
      {
        id: "5",
        type: "单选题",
        content: "1+1=?",
        options: ["A:1", "B:2", "C:3", "D:4"],
        answer: 1,
        userAnswer: null
      }
    ]
  }},
  methods: {
    beforeProblem: function() {
      this.index--;
      let childrens = document.getElementById("answer_Card_numbers").children;
      for (var i = 0; i < childrens.length; i++) {
        //循环
        if (childrens[i].nodeType == 1 && i != this.index) {
          //如果该节点是元素节点与不是这个节点本身
          childrens[i].style.background = "white"; //
        }
      }
      childrens[this.index].style.background = "darkcyan";
    },
    nextProblem: function() {
      this.index++;
      let childrens = document.getElementById("answer_Card_numbers").children;
      for (var i = 0; i < childrens.length; i++) {
        //循环
        if (childrens[i].nodeType == 1 && i != this.index) {
          //如果该节点是元素节点与不是这个节点本身
          childrens[i].style.background = "white"; //
        }
      }
      childrens[this.index].style.background = "darkcyan";
    },
    optionsFn() {
      for (let j = 0; j < this.forms.length; j++) {
        if (this.forms[j].options) {
          for (let i = 0; i < this.forms[j].options.length; i++) {
            this.$set(this.forms[j].options, i, {
              name: this.forms[j].options[i],
              check: false
            });
          }
        }
      }
    },
    router_endanswer:function(){
        let success_index=[];
        let fail_index=[];
        for(let i=0;i<this.forms.length;i++){
            if(this.forms[i].userAnswer==null){
                alert("请完成"+(i+1)+"题");
                return;
            }

clearInterval(this.timeClear);

            if(this.forms[i].answer instanceof Array){
                if(JSON.stringify(this.forms[i].answer)==JSON.stringify(this.forms[i].userAnswer)){
                     success_index.push(i+1);
                }else{
                     fail_index.push(i+1);
                }
            }
            else{
            if(this.forms[i].answer===this.forms[i].userAnswer){
                success_index.push(i+1);
            }else{
                fail_index.push(i+1);
            }
           }

        }
        this.$router.push({
           name:'EndAnswer',
          params:{
              success_index:success_index,
              fail_index:fail_index,
              total_length:this.forms.length,
              end_time:this.time
          }
        });
    },

    timeCount:function(){
      this.time++;
    }

   

  },
  created: function() {
    this.optionsFn();
    this.timeClear=setInterval(this.timeCount,1000)
  },
  mounted: function() {
    document.getElementById(
      "answer_Card_numbers"
    ).children[0].style.background = "darkcyan";
  },
  computed: {
    beginTime: function() {
      //开始时间
      var now = new Date();
      var hh = now.getHours(); //时
      var mm = now.getMinutes(); //分
      var ss = now.getSeconds(); //秒
       var clock=""
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += "0";
      clock += mm + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      return clock;
    },
    
  }
}
</script>

