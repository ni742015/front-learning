import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//模块A
const moduleA={

    state:{
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
    }
}

// //模块B
// const moduleB={
//     state:{
      
//     }
// }



export default new Vuex.Store({
    state: {
        index: 0,
     
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
          ],

    },
    mutations: {
        addIndex (state) {
            state.index++
        },
        dropIndex (state) {
            state.index--
        },
        equalIndex(state,number){
            state.index=number
        }
    },
    modules:{
        a:moduleA,
        // b:moduleB
    }


})