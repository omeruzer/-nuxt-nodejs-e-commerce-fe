<template>
  <div>
    <div class="container">
      <div class="title my-3">
        <h3 class="t-title">{{ $route.query.q }}</h3>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-md-3 col-sm-6 col-xs-6 mt-3 mb-5"
              v-for="(item, index) in list"
              :key="index"
            >
              <ProductCard :item="item" />
            </div>
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
      list: [],
    };
  },
  created() {
    this.searchList();
  },
  methods: {
    async searchList() {
      await this.$axios
        .get(`/api/product/search/data?q=${this.$route.query.q}`)
        .then((result) => {
          this.list = result.data;
          console.log(result.data);
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
