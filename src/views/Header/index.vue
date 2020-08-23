<template>
  <div id = "header" :class="headFlag?'header_in':''">
    
  </div>
</template>

<script>
export default {
  props: ['headFlag'],
  data() {
    return {
      
    }
  }
}
</script>


<style lang="scss">

#header{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  right: -100%;
  top: 0;
  z-index: 999;
}

.header_in{
  animation: rightIn .5s cubic-bezier(.4,0,.2,1) 0s forwards;
  -webkit-animation: rightIn .5s cubic-bezier(.4,0,.2,1) 0s forwards;
}



@keyframes rightIn {
  0%{
    right: -100%;
  }
  100%{
    right: 0%;
  }
}
</style>