<template>
  <div>
    <div class="container">
      <div class="title my-3">
        <h3 class="t-title">{{ item.name }}</h3>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div
              class="col-md-3 col-sm-6 col-xs-6 mt-3 mb-5"
              v-for="(item, index) in item.products"
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
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.$axios
        .get(`/api/category/${this.$route.params.id}`)
        .then((result) => {
          this.item = result.data;
        })
        .catch((err) => {
                        res.json(err)

        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
