<template>
  <div>
    <div class="container">
      <div class="title">
        <h3 class="t-title">Checkout</h3>
      </div>
      <div class="row my-5">
        <div class="col-md-6">
          <div class="card p-3">
            <div class="">
              <form action="">
                <h3>User Info</h3>
                <div class="row">
                  <div class="col-md-6">
                    <b-form-input
                      v-model="form.name"
                      id="payForm"
                      placeholder="Name"
                    ></b-form-input>
                  </div>
                  <div class="col-md-6">
                    <b-form-input
                      v-model="form.surname"
                      id="payForm"
                      placeholder="Surname"
                    ></b-form-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mt-3">
                    <b-form-input
                      v-model="form.email"
                      id="payForm"
                      placeholder="E-mail"
                    ></b-form-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mt-3">
                    <b-form-input
                      v-model="form.phone"
                      id="payForm"
                      placeholder="Phone"
                    ></b-form-input>
                  </div>
                </div>
                <hr />
                <h3>Address</h3>
                <div class="row">
                  <div class="col-md-6">
                    <b-form-input
                      v-model="form.city"
                      id="payForm"
                      placeholder="City"
                    ></b-form-input>
                  </div>
                  <div class="col-md-6">
                    <b-form-input
                      v-model="form.state"
                      id="payForm"
                      placeholder="State"
                    ></b-form-input>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <b-form-input
                      v-model="form.address"
                      id="payForm"
                      placeholder="Address"
                    ></b-form-input>
                  </div>
                </div>
              </form>
            </div>
            <div class="row px-3 mt-3">
              <b-button
                :disabled="
                  form.name == '' ||
                  form.surname == '' ||
                  form.email == '' ||
                  form.phone == '' ||
                  form.city == '' ||
                  form.state == '' ||
                  form.address == ''
                "
                id="show-btn"
                class="btn btn-info"
                @click="$bvModal.show('bv-modal-example')"
                >Payment <i class="fa fa-tags"></i> ({{
                  $store.getters.getCartTotal
                }}
                $)
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card p-3 items">
            <h3 class="t-title">Items</h3>
            <div
              class="mt-2"
              v-for="(item, i) in $store.getters.getCart"
              :key="i"
            >
              <CurrentItems :item="item" />
            </div>
            <hr />
            <div class="total mt-3 d-flex justify-content-end">
              <div class="">
                <b-card-text
                  ><span class="t-title mr-2">Quantity:</span>
                  {{ $store.getters.getCartItemsCount }}</b-card-text
                >
                <b-card-text
                  ><span class="t-title mr-2">Amount:</span>
                  {{ $store.getters.getCartSubtotal }} $
                </b-card-text>
                <b-card-text
                  ><span class="t-title mr-2">Delivery Pay:</span
                  >{{ $store.state.cart.delivery }} $</b-card-text
                >
                <b-card-text
                  ><span class="t-title mr-2">Total:</span>
                  <b>{{ $store.getters.getCartTotal }} $</b>
                </b-card-text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Form -->
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title> Pay </template>
        <div class="d-block text-center">
          <div class="container">
            <div class="row">
              <form action="">
                <h3>Payment Info</h3>
                <div class="row">
                  <div class="col-md-12">
                    <b-form-input
                      v-model="nameOnCard"
                      id="payForm"
                      placeholder="Name on Card"
                    >
                    </b-form-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mt-3">
                    <b-form-input
                      v-model="cardNumber"
                      id="payForm"
                      placeholder="Card Number"
                    >
                    </b-form-input>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <b-form-input
                      v-model="date"
                      id="payForm"
                      placeholder="Expiry"
                    ></b-form-input>
                  </div>
                  <div class="col-md-6">
                    <b-form-input
                      v-model="cvv"
                      id="payForm"
                      placeholder="CVV"
                    ></b-form-input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <b-button class="btn btn-success mt-3" block @click="payment()"
          >Pay <i class="fa fa-tags"></i> ({{ $store.getters.getCartTotal }} $)
        </b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "cart",
  data() {
    return {
      form: {
        name: this.$auth.user ? this.$auth.user.name : "",
        surname: this.$auth.user ? this.$auth.user.surname : "",
        email: this.$auth.user ? this.$auth.user.email : "",
        phone: this.$auth.user ? this.$auth.user.phone : "",
        city: this.$auth.user ? this.$auth.user.city : "",
        state: this.$auth.user ? this.$auth.user.state : "",
        address: this.$auth.user ? this.$auth.user.address : "",
        cardName: "",
        cardNumber: "",
        cardDate: "",
        cardCCV: "",
      },
    };
  },
  methods: {
    a() {
      if (
        this.form.name == "" ||
        this.form.surname == "" ||
        this.form.email == "" ||
        this.form.phone == "" ||
        this.form.city == "" ||
        this.form.state == "" ||
        this.form.address == ""
      ) {
        return false;
      }
    },
    payment() {
      if (
        this.nameOnCard == null ||
        this.cardNumber == null ||
        this.date == null ||
        this.cvv == null
      ) {
        this.$swal
          .fire({
            icon: "danger",
            title: "Warning!",
            text: "Fill in all fields",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false,
          })
          .then((result) => {})
          .catch((err) => {
            res.json(err);
          });
      } else {
        this.$swal
          .fire({
            icon: "success",
            title: "Success",
            text: "we received your order",
            timer: 10000,
            showCancelButton: false,
            showConfirmButton: false,
          })
          .then((result) => {
            this.$store.state.cart.cart = [];
            this.$bvModal.hide("bv-modal-example");
            this.$router.push("/");
          })
          .catch((err) => {
            res.json(err);
          });
      }
    },
  },
};
</script>

<style
CurrentItems lang="scss" scoped>
</style>
