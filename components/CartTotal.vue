<template>
  <div>
    <b-card-group deck class="">
      <b-card title="Checkout" header-tag="header" footer-tag="footer">
        <b-card-text
          >Quantity: {{ $store.getters.getCartItemsCount }}</b-card-text
        >
        <b-card-text
          >Amount: {{ $store.getters.getCartSubtotal }} $
        </b-card-text>
        <b-card-text
          >Delivery Pay:{{ $store.state.cart.delivery }} $</b-card-text
        >
        <b-card-text
          >Total: <b>{{ $store.getters.getCartTotal }} $</b>
        </b-card-text>
        <nuxt-link to="/checkout">
          <b-button id="show-btn" class="btn btn-info">Checkout </b-button>
        </nuxt-link>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        name: null,
        surname: null,
        email: null,
        phone: null,
        city: null,
        state: null,
        address: null,
        nameOnCard: null,
        cardNumber: null,
        date: null,
        cvv: null,
      };
    },

  },
};
</script>

<style lang="scss" scoped>
</style>
