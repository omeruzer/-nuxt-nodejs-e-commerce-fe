<template>
  <div>
    <div class="card px-5 py-3 my-5">
      <div class="row">
        <div class="d-flex justify-content-center">
          <h4 class="t-title">Login</h4>
        </div>
      </div>
      <div class="row">
        <form @submit.prevent="login" method="post">
          <div class="form-login">
            <div class="form-group">
              <label for="">E-mail</label>
              <input
                class="form-control"
                type="text"
                v-model="form.email"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input
                v-model="form.password"
                class="form-control"
                type="password"
                placeholder="E-mail"
              />
            </div>
            <div class="form-group d-flex justify-content-center">
              <button class="login-btn">Login</button>
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
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email:this.form.email,
            password:this.form.password,
          },
        }).then((result) => {
          this.$router.push('/')
          console.log(result);
        }).catch((err) => {
          console.log(err);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.login-btn {
  background-color: #2f8f9d;
  border: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
</style>
