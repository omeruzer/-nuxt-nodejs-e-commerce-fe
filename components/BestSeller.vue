<template>
  <div>
    <div class="container">
      <div class="title d-flex justify-content-center">
        <h3 class="t-title">Best Seller</h3>
      </div>
      <div class="row  p-5">
        <div class="col-md-3 col-sm-6 col-xs-6" v-for="(item, index) in list" :key="index">
          <ProductCard :item='item'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  components: { ProductCard },
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.getData()
  },
  methods:{
    getData(){
      this.$axios.get('/api/product/best-seller')
        .then((result) => {
          this.list=result.data
        }).catch((err) => {
                        res.json(err)

        });
    }
  }
  };
</script>

<style lang="scss" scoped>
</style>
