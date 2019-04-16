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
                <div :class="item.check || data.userAnswer===item.name ?'true-answer' :'answer'"
                        v-for="(item,i) in judgmentIsture"
                        :key="item._id" 
                        @click="radio(i)">
                    {{item.name}}
                </div>
            </div>
            <div v-if="data.type==='fill'">
                <div class="question-title">
                    {{data.userAnswer===null ? '' : data.userAnswer[0]}}
                    {{data.content}}
                    {{data.userAnswer===null ? '' : data.userAnswer[1]}}
                </div>
                <div class="inputfill">
                    <input v-model="fill" @keyup.enter="keyup" />
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
                <div :class="item.check ? 'true-answer' :'answer'" v-for="item in data.options" :key="item._id" @click="options(item)">
                    {{item.name}}
                </div>
            </div>
            <div v-if="data.type==='single'">
                <div class="question-title">{{data.content}}</div>
                <div :class="item.check ? 'true-answer' :'answer'" v-for="item in data.options" :key="item._id" @click="options(item,'single')">
                    {{item.name}}
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
export default {
  name: "FormConent",
  data() {
    return {
      answers: [],
      ap: "",
      fill: "",
      fillList: [],
      fillTime: 0,
      judgmentIsture: [
        {
          name: "正确",
          check: false
        },
        {
          name: "错误",
          check: false
        }
      ],
      typeName:'',
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
  watch: {
    data() {
      this.typeFn();
      this.judgmentIsture = [
        {
          name: "正确",
          check: false
        },
        {
          name: "错误",
          check: false
        }
      ]
    }
  },
  created() {
    this.checkFn();
    this.typeFn();
  },
  methods: {
    typeFn(){
      this.dataType.map(item=> {
        if (item.id === this.data.type ) {
          this.typeName = item.name
        }
      })
    },
    radio(i) {
      for (let j = 0; j < this.judgmentIsture.length; j++) {
        this.judgmentIsture[j].check = false;
      }
      this.judgmentIsture[i].check = true;
      this.data.userAnswer = this.judgmentIsture[i].name;
    },
    keyup(type) {
      if (type === "ap") {
        this.data.userAnswer = this.ap;
        this.ap = "";
      } else {
        this.fillTime++;
        if (this.fillTime % 2 === 0) {
          this.fillList[1] = this.fill;
        } else {
          this.fillList[0] = this.fill;
        }
        this.data.userAnswer = this.fillList;
        this.fill = "";
      }
    },
    options(i, type) {
      if (type === "single") {
        for (let index = 0; index < this.data.options.length; index++) {
          this.data.options[index].check = false;
        }
        i.check = true;
        this.data.userAnswer = i.name;
        return;
      }
      i.check = !i.check;
      if (i.check) {
        this.data.userAnswer += "" + i.name;
      }
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


