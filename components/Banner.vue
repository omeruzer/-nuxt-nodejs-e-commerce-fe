<template>
  <div class='container'>
    <div class="banner" style="height:100px">
      <img class="img" :src="img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props:["img"]
  }
</script>

<style  scoped>
.img{
  width: fill-available;
  height:100%
}
</style>
