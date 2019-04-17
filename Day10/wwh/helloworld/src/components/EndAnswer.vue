<template>
  <div class="end_Answer">
        <div class="header" @click="back">&lt;返回</div> <div class="total_index">总题数：{{total_length}}
        </div>
        <div class="items">
            <div class="size_style">正确题目:&nbsp;&nbsp;{{success_index.length}}个</div>
             <div class="item_head">
            <div class="item_list" v-for="item in success_index" :key="item._id">{{item}}</div>
             </div>
        </div>

        <div class="items">
                <div class="size_style">错误题目:&nbsp;&nbsp;{{fail_index.length}}个</div>
                <div class="item_head">
             <div class="item_list" v-for="item in fail_index" :key="item._id">{{item}}</div>
                </div>
            </div>

    </div>

</template>

<script>
export default {
  name: "EndAnswer",
  data: function() {
    return {
      success_index: this.$route.params.success_index,
      fail_index: this.$route.params.fail_index,
      total_length: this.$route.params.total_length
    };
  },
  methods: {
    back: function() {
      this.$router.push({
        name: "FirstIndex"
      });
    }
  }
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .size_style{
        font-size: 25px;
    }

    .end_Answer {
        width: 100%;
    }

    .header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: darkcyan;
        color: white;
        cursor: pointer;
    }

    .total_index {
        width: 100%;
        margin-top: 30px;
        font-size: 25px
    }

    .items {
        width: 100%;
        margin-top: 30px;
       
    }
    .item_head{
          width: 100%;
        margin-top: 30px;
         display: flex;
        flex-wrap: wrap;
        justify-content:left
    }

    .item_list {
        width: 50px;
     height: 50px;
     border-radius: 50%;     
      /* -moz-border-radius: 50%; 
       -webkit-border-radius: 50%; */
     border:1px solid #ccc;
     text-align: center;
     line-height: 50px;
     margin-top: 5px
    }
</style>

