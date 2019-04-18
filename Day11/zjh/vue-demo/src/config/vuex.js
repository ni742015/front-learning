import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
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
            // {
            //   id: 2,
            //   type: "judgment",
            //   content: "所有的苹果都是水果131321",
            //   answer: true,
            //   userAnswer: null
            // },
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
    },
    mutations:{
        changData(state,i,userAnswer){
            state[i].userAnswer = userAnswer
        }
    },
})

export default store