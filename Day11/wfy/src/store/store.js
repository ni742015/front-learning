import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        index: 0,  //题号
        startTime: "00:00",  //答题开始时间
        totalTime: "0",  //答题总时间
        correctQuestionNum: 0,  //回答正确题目数
        doneQuestionNum: 0,  //已完成题目数
        dataList: [  //题目数据
            {
                id: "2",
                type: "judgment",
                content: "所有的苹果都是水果",
                answer: true,
                userAnswer: null
            },
            {
                id: "3",
                type: "judgment",
                content: "所有的水果都是苹果",
                answer: false,
                userAnswer: null
            },
            {
                id: "4",
                type: "fill",
                content: "____秋月何时了，往事______",
                answer: ["春花", "知多少"],
                userAnswer: null
            },
            {
                id: "5",
                type: "aq",
                content: "1+2等于几？",
                answer: "3",
                userAnswer: null
            },
            {
                id: "6",
                type: "multiple",
                content: "哪些是对的",
                options: ["1+1=2", "1+2=3", "1+1=3", "1+2=2"],
                answer: [0, 1],
                userAnswer: null
            },
            {
                id: "7",
                type: "single",
                content: "1+1=?",
                options: ["1", "2", "3", "4"],
                answer: 1,
                userAnswer: null
            }
        ],
        //题型映射
        //Map方式：
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
        }
    },
    mutations: {
        //切换题号
        switch_question(state, target) {
            state.index = target;
        },
        //判断
        judgment_select(state, target) {
            state.dataList[state.index].userAnswer = target;
        },
        //单选
        singleSelect(state, target) {
            state.dataList[state.index].userAnswer = target;
        },
        //多选
        multipleSelect(state, target) {
            for (let i = 0; i < state.dataList[state.index].userAnswer.length; i++)
                if (state.dataList[state.index].userAnswer[i] === target) {
                    state.dataList[state.index].userAnswer.splice(i, 1);
                    return;
                }
            state.dataList[state.index].userAnswer.push(target);
        },
        //设置答题开始时间
        setStartTime(state, target) {
            state.startTime = target;
        },
        //设置答题总时间
        setTotalTime(state, target) {
            state.totalTime = target;
        },
        //设置回答正确题目数
        setCorrectQuestionNum(state, target) {
            state.correctQuestionNum = target;
        },
        //设置已完成题目数
        setDoneQuestionNum(state, target) {
            state.doneQuestionNum = target;
        },
    }
})