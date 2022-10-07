<template>
  <div>
    <div class="carusel">
      <Slider />
    </div>
    <div class="bestsellers mt-5">
      <BestSeller />
    </div>
    <div class="newProducts mt-5">
      <NewProducts />
    </div>
    <div class="bannner mt-5 mb-5">
      <Banner
        img="https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png"
      />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import BestSeller from "../components/BestSeller.vue";
import NewProducts from "../components/NewProducts.vue";
import Slider from "../components/Slider.vue";
export default {
  components: { Slider, BestSeller, NewProducts, Banner },
};
</script>

<style lang="scss" scoped>
</style>
