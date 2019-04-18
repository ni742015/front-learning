<template>
  <div id="app">
    
    <keep-alive>
<router-view/> 
    </keep-alive>

  </div>
</template>

<script>
import FirstIndex from './components/FirstIndex.vue'
import EndAnswer from './components/EndAnswer.vue'
export default {
  name: 'app',
  // components: {
  //  'FirstIndex':FirstIndex,
  //   'EndAnswer':EndAnswer
  // }
}
</script>


