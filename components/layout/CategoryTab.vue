<template>
  <div>
    <div class="container-fluid category-tab mb-3">
      <div class="container">
        <div class="categories d-flex justify-content-around">
          <div class="" v-for="item,i in list" :key="i">
            <nuxt-link :to="'/category/'+item._id">{{item.name}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$axios.get('/api/category')
        .then((result) => {
          this.list=result.data
        }).catch((err) => {
                        res.json(err)

        });
    }
  }
};
</script>

<style scoped>
a {
  color: #fff;
}
a:hover {
  color: #fff;
  text-decoration: none;
}
.category-tab {
  background: #2f8f9d;
}
</style>
