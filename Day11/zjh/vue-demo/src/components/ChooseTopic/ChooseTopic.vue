<template>
    <div class="topic-Conent" style="margin-bottom:30px;">
        <div :class="['topic',i.check ? 'checkTopic':'']" v-for="i in list" :key="i._id" @click="chooseTopic(i)">
            {{i.name+1}}
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
  watch: {
    index(newVal) {
      for (let index = 0; index < this.len; index++) {
        this.list[index].check = false;
      }
      this.list[newVal].check = true;
    }
  },
  methods: {
    chooseTopic(i) {
      for (let index = 0; index < this.len; index++) {
        this.list[index].check = false;
      }
      i.check = true;
      this.$emit("check", i.name);
    },
    topicFn() {
      for (let i = 0; i < this.len; i++) {
        this.list.push({ name: i, check: false });
      }
       this.list[0].check = true
    }
  },
  created() {
    this.topicFn();
  }
};
</script>
<style>
</style>


