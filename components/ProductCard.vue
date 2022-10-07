<template>
  <div>
    <div class="product-cart">
      <div class="img" style="width: 100%; height: 300px">
        <nuxt-link :to="'/product/' + item._id">
          <img
            style="width: 100%; height: 100%"
            :src="this.item?.images[0]"
            alt=""
          />
        </nuxt-link>
      </div>
      <div class="p-3">
        <div class=" title">
          <nuxt-link :to="'/product/' + item._id">
            <h5>
              {{
                item?.name.length > 15
                  ? item?.name.substr(0, 15) + "..."
                  : item?.name
              }}
            </h5>
          </nuxt-link>
        </div>
        <div class="sku">
          <span class="s-title">{{ item?.sku }}</span>
        </div>
        <div class="price d-flex justify-content-end">
          <h4 class="t-title">${{ item?.price }}</h4>
        </div>
        <div class="add-cart">
          <button class="add-cart-btn" @click="addCart(item._id)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    addCart(id) {
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
      this.$store.dispatch("addCart", id);
    },
  },
};
</script>

<style
 scoped>
.card {
  height: 380px;
}
a {
  color: #000;
}
.product-cart{
  border:1px solid #d6d6d6;
  border-radius: 10px;
}
.add-cart-btn {
  background-color: #2f8f9d;
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
a:hover {
  color: #000;
  text-decoration: none;
}
</style>
