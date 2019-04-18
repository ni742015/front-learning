<template>
    <div class="topic-Conent" style="margin-bottom:30px;">
        <div :class="['topic',i === index ? 'checkTopic':'']" v-for="i in list" :key="i._id" @click="chooseTopic(i)">
            {{i+1}}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  props: ["index", "len"],
  methods: {
    chooseTopic(i) {
      this.$emit("check", i);
    },
    topicFn() {
      for (let i = 0; i < this.len; i++) {
        this.list.push(i);
      }
    }
  },
  created() {
    this.topicFn();
  }
};
</script>
<style>
</style>


