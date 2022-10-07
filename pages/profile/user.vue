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
        <h3 class="t-title">User Account</h3>
      </div>
      <div class="content">
        <div class="" style="width: 50%; margin-top: 20px; margin-bottom: 60px">
          <div class="form">
            <div class="form-group">
              <label for="">Name</label>
              <input
                v-model="user.name"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="">E-mail</label>
              <input
                v-model="user.email"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group">
              <label for="">Phone</label>
              <input
                v-model="user.phone"
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Phone"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" @click="updateUser()">
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
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      await this.$axios
        .get("/api/auth/user")
        .then((result) => {
          this.user = result.data;
        })
        .catch((err) => {});
    },
    async updateUser() {
      await this.$axios
        .patch("/api/auth/user-update", this.user)
        .then((result) => {
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
            title: "Update",
            background: "#47C78E",
          });
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
