<template>
    <div class="form-Conent">
            <div>
                <span class="question-type">{{typeName}}</span>
            </div>
            <div v-if="data.type==='join'">
                <div class="question-title">{{data.content}}</div>
                <div :class="item.check?'true-answer' :'answer'" v-for="(item,i) in data.leftItems" :key="item._id" @click="checkOne(i,'a')">
                    {{item.name}}
                </div>
                <div :class="item.check?'true-answer' :'answer'" v-for="(item,i) in data.rightItems" :key="item._id" @click="checkOne(i,'b')">
                    {{item.name}}
                </div>
            </div>
            <div v-if="data.type==='judgment'">
                <div class="question-title">{{data.content}}</div>
                <div :class="item.check || data.userAnswer===item.id ?'true-answer' :'answer'"
                        v-for="(item,i) in judgmentIsture"
                        :key="item._id" 
                        @click="radio(i)">
                    {{item.name}}
                </div>
            </div>
            <div v-if="data.type==='fill'">
                <div class="question-title">
                    {{fill1 ? fill1 : (data.userAnswer===null ? '' : data.userAnswer[0])}}
                    {{data.content}}
                    {{fill2 ? fill2 : (data.userAnswer===null ? '' : data.userAnswer[1])}}
                </div>
                <div class="inputfill">
                    <input :style="{border:'3px solid black'}" v-model="fill1" @keyup.enter="keyup(0)" />
                    <input :style="{border:'3px solid black'}" v-model="fill2" @keyup.enter="keyup(1)" />
                </div>
            </div>
            <div v-if="data.type==='aq'">
                <div class="question-title">{{data.content}}{{data.userAnswer}}</div>
                <div class="inputfill">
                    <input v-model="ap" @keyup.enter="keyup('ap')" />
                </div>
            </div>
            <div v-if="data.type==='multiple'">
                <div class="question-title">{{data.content}}</div>
                <div :class="answers.indexOf(i)!==(-1) ? 'true-answer' :'answer'" v-for="(item,i) in data.options" :key="item._id" @click="options(i)">
                    {{item}}
                </div>
            </div>
            <div v-if="data.type==='single'">
                <div class="question-title">{{data.content}}</div>
                <div :class="['single',data.userAnswer===item ?  'true-answer' :'answer']" :tabindex="i" v-for="(item,i) in data.options" @click="options(i,'single')" :key="item._id">
                    {{item}}
                </div>
            </div>
            <Buttons 
            :index="index" 
            :len="len"
            @next="next"
            @before="before"
            @submit="submit"></Buttons>
    </div>
</template>
<script>
import Buttons from "./Buttons/Buttons";
import { mapMutations  } from 'vuex'
export default {
  name: "FormConent",
  data() {
    return {
      answers: [],
      ap: "",
      fill1: "",
      fill2: "",
      fillList: [],
      fillTime: 0,
      judgmentIsture:[
        {
          name: "正确",
          check: false,
          id:true
        },
        {
          name: "错误",
          check: false,
          id:false
        }
      ],
      dataType: [
        {
          name: "连线题",
          id: "join"
        },
        {
          name: "判断题",
          id: "judgment"
        },
        {
          name: "填空题",
          id: "fill"
        },
        {
          name: "问答题",
          id: "aq"
        },
        {
          name: "多选题",
          id: "multiple"
        },
        {
          name: "单选题",
          id: "single"
        }
      ]
    };
  },
  computed:{
    typeName() {
      let typeName = ''
      if (this.data.type==='multiple') {
        this.data.userAnswer = []
      }
      for (let i = 0; i < this.dataType.length; i++) {
        if (this.data.type === this.dataType[i].id ) {
           typeName = this.dataType[i].name
        }
      }
      return typeName
    },
  },
  created() {
    this.checkFn()
  },
  methods: {
    // ...mapMutations({
    //   add: 'changData' // 将 `this.add()` 映射为 `this.$store.commit('changData')`
    // }),
    radio(i) {
      for (let j = 0; j < this.judgmentIsture.length; j++) {
        this.judgmentIsture[j].check = false;
      }
      this.judgmentIsture[i].check = true;
      this.data.userAnswer = this.judgmentIsture[i].id;

      //修改store
      // this.add({i:i,userAnswer:this.data.userAnswer})
    },
    keyup(type) {
      if (type === 0) {
        this.fillList[0] = this.fill1;
       this.data.userAnswer = this.fillList;
        this.fill1 = "";
      } else if (type === 1) {
        this.fillList[1] = this.fill2;
        this.data.userAnswer = this.fillList;        
        this.fill2 = "";
      }
      if (type === "ap") {
        this.data.userAnswer = this.ap;
        this.ap = "";
      }
    },
    options(i, type) {
      if (type === "single") {
        this.data.userAnswer = this.data.options[i];
        return;
      }
      if (this.answers.indexOf(i)===(-1)) {
        this.answers.push(i)
      }
      else{
        this.answers.splice(this.answers.indexOf(i),1)
      }
      this.data.userAnswer = this.answers
      console.log('this.data.userAnswer',this.data.userAnswer);
    },
    checkOne(i, type) {
      if (type === "a") {
        for (let j = 0; j < this.data.leftItems.length; j++) {
          this.data.leftItems[j].check = false;
        }
        this.data.leftItems[i].check = true;
      } else {
        for (let j = 0; j < this.data.rightItems.length; j++) {
          this.data.rightItems[j].check = false;
        }
        this.data.rightItems[i].check = true;
      }
    },
    checkFn() {
      if (this.data.type === "join") {
        if (typeof this.data.leftItems[0].name !== "string") {
              for (let j = 0; j < this.data.leftItems.length; j++) {
              this.$set(this.data.leftItems, j, {
                name: this.data.leftItems[j],
                check: false
              });
            }
            for (let j = 0; j < this.data.rightItems.length; j++) {
              this.$set(this.data.rightItems, j, {
                name: this.data.rightItems[j],
                check: false
              });
            }
        }
      }
    },
    next() {
      this.$emit("next");
    },
    before() {
      this.$emit("before");
    },
    submit() {
      this.$emit("submit");
    }
  },
  components: {
    Buttons
  },
  props: ["data", "index", "len"]
};
</script>
<style scoped>
</style>


