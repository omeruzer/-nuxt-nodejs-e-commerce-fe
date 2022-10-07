<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="">
          <h3 class="t-title">Login</h3>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  components: { Login },
};
</script>

<style lang="scss" scoped>
</style>
