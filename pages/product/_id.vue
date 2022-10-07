<template>
  <div>
    <div class="container">
      <div
        class="category mt-3 d-flex justify-content-start align-items-center"
      >
        <div class="">
          <span class="t-title"
            ><nuxt-link :to="'/category/'+item?.category?._id">{{item?.category?.name}}</nuxt-link></span
          >
        </div>
        <div class="ml-2">
          <span><i class="fa fa-chevron-right"></i></span>
        </div>
        <div class="ml-2">
          <span class="s-title">{{item?.name}}</span>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="slider">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">

            <b-carousel-slide v-for="img,i in item?.images" :key="i"  :img-src="img"></b-carousel-slide>
        </b-carousel>
          </div>
        </div>
        <div class="col-md-6">
          <div class="product-title">
            <h3 class="t-title">{{item?.name}}</h3>
          </div>
          <div class="sku">
            <span class="s-title">SKU: {{item.sku}}</span>
          </div>
          <div class="price mt-5">
            <h3 class="t-title">${{item.price}}</h3>
          </div>
          <div class="add-cart mt-5">
            <button class="add-cart-btn" @click="addCart(item._id)">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <h4 class="s-title">Description</h4>
        <div class="desc">
          <p>
            {{item.desc}}
          </p>
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="other">
          <div class="title d-flex justify-content-center">
            <h3 class="t-title">Other Products</h3>
          </div>
          <div class="products">
            <div class="row p-5">
              <div class="col-md-3" v-for="(item, index) in otherList" :key="index">
                <ProductCard :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  components:{ProductCard},
  data() {
    return {
      item:{},
      otherList: [],
    };
  },
  created() {
    this.getOther();
    this.getProduct();
  },
  methods: {
    addCart(id){

            const Toast = this.$swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Added to Cart",
        background: "#47C78E",
      });
      this.$store.dispatch('addCart', id)
    },
    getProduct(){
      this.$axios.get(`/api/product/${this.$route.params.id}`)
        .then((result) => {
          this.item=result.data
        }).catch((err) => {
                        res.json(err)

        });
    },
    getOther() {
      this.$axios
        .get("/api/product/best-seller")
        .then((result) => {
          this.otherList = result.data;
        })
        .catch((err) => {
                        res.json(err)

        });
    },
  },
};
</script>

<style scoped>
.add-cart-btn {
  background-color: #2f8f9d;
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
a {
  color: #2f8f9d;
}
a:hover {
  color: #2f8f9d;
  text-decoration: none;
}
</style>
