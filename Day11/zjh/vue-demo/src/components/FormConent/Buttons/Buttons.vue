<template>
    <div class="buttons">
                <button class="before-button" @click="before" v-if="index!==0">上一步</button>
                <button class="next-button" @click="next" v-if="(index+1)!==len">下一步</button>
                <button class="submit-button" @click="submit" v-if="(index+1)===len">交卷</button>
    </div>
</template>
<script>
export default {
    props:["index","len"],
    methods:{
        next() {
      this.$emit("next");
    },
    before() {
      this.$emit("before");
    },
    submit() {
        this.$emit("submit");
    }
    }
}
</script>
<style>

</style>


