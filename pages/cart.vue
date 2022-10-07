<template>
  <div>
    <div class="container">
      <div class="title">
        <h3 class="t-title">Cart</h3>
      </div>
      <div v-if="$store.getters.getCart.length > 0" class="">
        <div class="cart">
          <CartTable />
        </div>
        <div class="row justify-content-end">
          <div class="col-md-3 mb-3 mt-3">
            <CartTotal />
          </div>
        </div>
      </div>
      <div v-else class="" style="padding-bottom: 150px">
        <div class="alert alert-warning my-5">Cart Empty!</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartTable from "../components/CartTable.vue";
import CartTotal from "../components/CartTotal.vue";
export default {
  components: { CartTable, CartTotal },
};
</script>

<style lang="scss" scoped>
</style>
