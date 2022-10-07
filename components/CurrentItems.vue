<template>
  <div>
            <div class="item">
              <div class="d-flex justify-content-start align-items-center">
                <div class="img" style="height: 100px; width: 80px">
                  <img
                    style="height: 100%; width: 100%"
                    :src="item.item.images[0]"
                    alt=""
                  />
                </div>
                <div class="info ml-3 d-flex justify-content-around align-items-center" style="width:100%">
                  <div class="title t-title ml-3">{{item.item.name.length>20?item.item.name.substr(0,20)+"...":item.item.name}}</div>
                  <div class="qty ml-3">{{item.amount}}</div>
                  <div class="current t-title ml-3">x</div>
                  <div class="price ml-3">${{item.item.price}}</div>
                  <div class="total ml-3">${{item.item.price * item.amount}}</div>
                </div>
              </div>
            </div>
  </div>
</template>

<script>
  export default {
    props:["item"]
  }
</script>

<style lang="scss" scoped>

</style>
