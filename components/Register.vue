<template>
  <div>
    <div class="card px-5 py-3 my-5">
      <div class="row">
        <div class="d-flex justify-content-center">
          <h4 class="t-title">Register</h4>
        </div>
      </div>
      <div class="row">
        <form @submit.prevent="register" method="post">
          <div class="form-register">
            <div class="form-group">
              <label for="">Name</label>
              <input
                class="form-control"
                v-model="form.name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="">Surname</label>
              <input
                class="form-control"
                v-model="form.surname"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="">E-mail</label>
              <input
                class="form-control"
                v-model="form.email"
                type="text"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input
                class="form-control"
                v-model="form.password"
                type="password"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group d-flex justify-content-center">
              <button class="register-btn">register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.$axios
        .post("/api/auth/register", this.form)
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
            title: "Register",
            background: "#47C78E",
          });
          this.$router.push('/login')
        })
        .catch((err) => {
                        res.json(err)

        });
    },
  },
};
</script>

<style scoped>
.register-btn {
  background-color: #2f8f9d;
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
</style>
