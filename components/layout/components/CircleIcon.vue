<template>
  <div>
    <nuxt-link :to="`/${link}`">
      <div class="icon-circle d-flex justift-content-center align-items-center">
        <div class="">
          <i id="icon" :class="icon"></i>
          <span
            v-if="link == 'cart'"
            class="badge badge-warning"
            id="lblCartCount"
          >
            {{ $store.getters.getCart.length }}
          </span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["link", "icon"],
};
</script>

<style scoped>
#icon {
  color: #3bacb6;
}
.badge {
  padding-left: 9px;
  padding-right: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #c67605;
}
#lblCartCount {
  font-size: 16px;
  background: #2f8f9d;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-left: -10px;
}
</style>
