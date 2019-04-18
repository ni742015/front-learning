<template>
    <div class="hello">
            <p class="title">恭喜提交答案</p>
            <p class="conent">答题时长：{{time}}秒</p>
            <p class="conent">总题目数：{{len}}题</p>
            <p class="conent">答对题数：{{rightLen}}题</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            time:'',
            len:'',
            rightLen:''
        }
    },
    created(){
        this.time = this.$route.query.time
        this.len = this.$route.query.len
        this.rightLen = this.$route.query.rightLen
    }
}
</script>
<style>
.conent{
    padding: 30px;
}
</style>


