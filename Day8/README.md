### 任务
vue-router + 练习
### 要求（新）
- 学习官网教程
- 完成红框中选题组件
- 在题目组件中新增填空题

### 要求（旧）
- 学习官网教程
- 完成练习任务1、任务2
    - 点击day6中的**评价、商家**用vue-router实现页面跳转
### 补充
1. [vue-router官网](https://router.vuejs.org/zh/)  
2. 数据结构：
forms: [
    {
        id: '1',
        type: 'join',
        content: '四大名著连一连',
        leftItems: ['《水浒传》', '《西游记》', '《三国演义》', '《红楼梦》'],
        rightItems: ['罗贯中', '施耐庵', '曹雪芹', '吴承恩'],
        answer: [[0, 1], [1, 3], [2, 0], [4, 2]],
        userAnswer: null
    },
    {
        id: '1',
        type: 'judgment',
        content: '所有的苹果都是水果',
        answer: true,
        userAnswer: null
    },
    {
        id: '1',
        type: 'judgment',
        content: '所有的苹果都是水果',
        answer: true,
        userAnswer: null
    },
    {
        id: '2',
        type: 'fill',
        content: '___秋月何时了，往事___',
        answer: ['春花', '知多少'],
        userAnswer: null
    },
    {
        id: '3',
        type: 'aq',
        content: '1+2等于几？',
        answer: '3',
        userAnswer: null
    },
    {
        id: '4',
        type: 'multiple',
        content: '哪些是对的',
        options: ['1+1=2', '1+2=3', '1+1=3', '1+2=2'],
        answer: [0, 1],
        userAnswer: null
    },
    {
        id: '5',
        type: 'single',
        content: '1+1=?',
        options: ['1', '2', '3', '4'],
        answer: 1,
        userAnswer: null
    }
]
