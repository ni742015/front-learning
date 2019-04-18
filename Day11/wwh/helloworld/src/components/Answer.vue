<template>
  <div class="answer_Card">
    <div class="answer_Card_content">
      <div class="answer_Card_title">答题卡</div>
      <div class="answer_Card_numbers" id="answer_Card_numbers">
        <div
          class="answer_Card_number"
          v-for="(item,index) in forms"
          @click="changeProplem(index,$event)"
          :key="item._id"
        >{{index+1}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import "./style.css";
import store from "../store/store";
export default {
  name: "Answer",
  // props: ["length"],
  data: function() {
    return {};
  },
  methods: {
    changeProplem: function(number, event) {
      var p = event.target.parentNode.children; //获取父级的所有子节点
      for (var i = 0; i < p.length; i++) {
        //循环
        if (p[i].nodeType == 1 && p[i] != event) {
          //如果该节点是元素节点与不是这个节点本身
          p[i].style.background = "white"; //
        }
      }
      event.target.style.background = "darkcyan";
      store.commit("equalIndex", number);
    }
  },
  computed: {
    forms: function() {
      return store.state.forms;
    }
  },
  mounted: function() {
    document.getElementById(
      "answer_Card_numbers"
    ).children[0].style.background = "darkcyan";
  }
};
</script>