<template>
  <div class="answer_Card">
    <div class="answer_Card_content">
      <div class="answer_Card_title">答题卡</div>
      <div class="answer_Card_numbers" id="answer_Card_numbers">
        <div class="answer_Card_number"  v-for="(number,index) in length" @click="changeProplem(index,$event)" :key="number">
          {{number}}
          </div>
      </div>
    </div>
  </div>
</template>


<script>

import './style.css'
export default {
  name: "Answer",
  props: ["length"],
  data: function() {
    return {};
  },
  methods:{
            changeProplem: function (number, event) {
                var p = event.target.parentNode.children; //获取父级的所有子节点
                for (var i = 0; i < p.length; i++) {  //循环
                    if (p[i].nodeType == 1 && p[i] != event) {  //如果该节点是元素节点与不是这个节点本身
                        p[i].style.background = "white"     //
                    }
                }
                event.target.style.background = "darkcyan";
                this.$parent.index = number;
            },
          
        },

};
</script>