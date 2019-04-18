<template>
  <div class="content_children">
    <div class="children_1">{{post[p_index].type}}</div>
    <div class="children_2">{{post[p_index].content}}</div>

    <ol class="Outer" v-if="post[p_index].type === '判断题'">
      <li
        class="children_3"
        :class="item.check ? 'add_color' :'delete_color'"
        v-for="(item,index) in judgments"
        @click="selectOptionMultiple(item,index,p_index,1)"
        :key="item.index"
      >{{item.name}}</li>
    </ol>

    <ol class="Outer" v-if="post[p_index].type === '多选题'">
      <li
        class="children_3"
        :class="item.check ? 'add_color' :'delete_color'"
        v-for="(item,index) in post[p_index].options"
        @click="selectOptionMultiple(item,index,p_index,2)"
        :key="item.index"
      >{{item.name}}</li>
    </ol>

    <ol class="Outer" v-if="post[p_index].type === '单选题'">
      <li
        class="children_3"
        :class="item.check ? 'add_color' :'delete_color'"
        v-for="(item,index) in post[p_index].options"
        @click="selectOptionMultiple(item,index,p_index,3)"
        :key="item.index"
      >{{item.name}}</li>
    </ol>
    <ol class="Outer" v-if="post[p_index].type === '填空题'">
      <li class="children_3_fill">
        1.
        <input
          type="text"
          class="text_class"
          v-model="fill_answer1"
          @blur.stop="inputFill1(p_index)"
        >
      </li>
      <li class="children_3_fill">
        2.
        <input
          type="text"
          class="text_class"
          v-model="fill_answer2"
          @blur.stop="inputFill2(p_index)"
        >
      </li>
    </ol>
    <ol class="Outer" v-if="post[p_index].type === '计算题'">
      <li class="children_3_fill">
        答案:
        <input type="text" class="text_class" v-model="aq_answer" @blur="inputAq(p_index)">
      </li>
    </ol>
  </div>
</template>

        <script>
import "./style.css";
import store from "../store/store"
export default {
  name: "Subject",
  // props: ["post", "p_index", "judgments"],
  data: function() {
    return {
      fill_answer1: "",
      fill_answer2: "",
      aq_answer: "",
      num: 0,
      userMultipleAnswer: [],
      singleAnswer: -1,
      fillAnswer: []
    };
  },
  methods: {
    selectOptionMultiple: function(item, index, p_index, a) {
      //  item.item=!item.check;
      if (a === 2) {
        this.post[p_index].options[index].check = !this.post[p_index].options[index].check;
        //   if(this.$parent.forms[p_index].options[index].check ===true){

        //         this.userMultipleAnswer.push(index);
        //    }
        this.userMultipleAnswer = [];

        let list = this.post[p_index].options;
        for (let i = 0; i < list.length; i++) {
          if (list[i].check === true) {
            this.userMultipleAnswer.push(i); //多选题用户选择的数组
          }
        }
        this.post[p_index].userAnswer = this.userMultipleAnswer;
      } else if (a === 3) {
        let form = this.post[p_index].options;
        for (let i = 0; i < form.length; i++) {
          if (i !== index) form[i].check = false;
        }
        form[index].check = true;
        this.singleAnswer = index;
        this.post[p_index].userAnswer = this.singleAnswer;
      } else {
        let judgments = this.judgments;
        for (let i = 0; i < judgments.length; i++) {
          if (i !== index) judgments[i].check = false;
        }
        judgments[index].check = true;
        if (index === 0) {
          this.post[p_index].userAnswer = true;
        } else {
          this.post[p_index].userAnswer = false;
        }
      }
    },
    inputAq: function(p_index) {
      this.post[p_index].userAnswer = this.aq_answer;
    },
    inputFill1: function(p_index) {
        this.fillAnswer[0]=this.fill_answer1;
        this.post[p_index].userAnswer = this.fillAnswer;
     
    }, inputFill2: function(p_index) {
           this.fillAnswer[1]=this.fill_answer2
       this.post[p_index].userAnswer =  this.fillAnswer;
    }
  },

computed: {

  post:function(){
    return store.state.forms;
  },
  p_index:function(){
     return store.state.index;
  },
  judgments:function(){
    return store.state.a.judgment;
  }
}

};
</script>
        