<template>
  <div>
    <div class="container">
      <div class="title">
        <h3 class="t-title">Hello, {{ user.name }}</h3>
      </div>
      <div class="row mt-3 mb-5">
        <div class="col-md-4 mt-3">
          <ProfileCard
            icon="fa fa-user"
            title="User Account"
            link="/profile/user"
          />
        </div>
        <div class="col-md-4 mt-3">
          <ProfileCard
            icon="fa fa-key"
            title="Password"
            link="/profile/password"
          />
        </div>
        <div class="col-md-4 mt-3">
          <ProfileCard
            icon="fa fa-building"
            title="Address"
            link="/profile/address"
          />
        </div>
        <div class="col-md-4 mt-3">
          <ProfileCard
            icon="fa fa-truck"
            title="Traking"
            link="/profile/traking"
          />
        </div>
        <div class="col-md-4 mt-3">
          <ProfileCard icon="fa fa-user" title="FAQ" link="/profile/faq" />
        </div>
        <div class="col-md-4 mt-3">
          <ProfileCard
            icon="fa fa-right-from-bracket"
            title="Logout"
            link="/profile/logout"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "../../components/ProfileCard.vue";
export default {
  components: { ProfileCard },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$axios
        .get("/api/auth/user")
        .then((result) => {
          this.user = result.data;
        })
        .catch((err) => {
                        res.json(err)

        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
