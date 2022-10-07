<template>
  <div>
    <div class="container">
      <div class="">
        <nuxt-link to="/profile">
          <div class="d-flex justify-content-start">
            <div class=""><i class="fa fa-arrow-left t-title"></i></div>
            <div class="ml-1"><span class="t-title">Back</span></div>
          </div>
        </nuxt-link>
      </div>
      <div class="title">
        <h3 class="t-title">Password</h3>
      </div>
      <div class="content">
        <div class="" style="width: 50%; margin-top: 20px; margin-bottom: 60px">
          <div class="form">
            <div class="form-group">
              <label for="">Old Password</label>
              <input
                v-model="user.oldPassword"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Old Password"
              />
            </div>
            <div class="form-group">
              <label for="">Phone</label>
              <input
                v-model="user.newPassword"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="New Password"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click="updatePassword()">
                Update
              </button>
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
      user: {},
    };
  },
  methods: {
    updatePassword() {
      console.log("password");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
