<template>
  <div>
    <TopHeader />
    <div class="container-fluid">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div
            class="col-md-4 col-xs-12 col-sm-12 d-flex justify-content-center"
          >
            <div class="logo">
              <nuxt-link to="/">
                <img style="width: 100%" src="@/static/logo.png" alt="" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-4 col-xs-12 col-sm-12">
            <div class="search">
              <form @submit.prevent="search" action="">
                <input
                  v-model="searchText"
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="Ara..."
                />
              </form>
            </div>
          </div>
          <div class="col-md-4 col-xs-12 col-sm-12 my-4">
            <div class="items">
              <div class="d-flex justify-content-center align-items-center">
                <div
                  v-if="!$auth.loggedIn"
                  class="d-flex justify-content-center align-items-center"
                >
                  <CircleIcon class="ml-4" link="login" icon="fa fa-user" />
                  <CircleIcon
                    class="ml-4"
                    link="register"
                    icon="fa fa-user-plus"
                  />
                </div>
                <div class="" v-else>
                  <nuxt-link to="/profile"
                    ><span class="t-title">Profile</span></nuxt-link
                  >
                </div>
                <CircleIcon
                  class="ml-4"
                  link="cart"
                  icon="fa fa-shopping-cart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CategoryTab />
  </div>
</template>

<script>
import CategoryTab from "./CategoryTab.vue";
import CircleIcon from "./components/CircleIcon.vue";
import TopHeader from "./TopHeader.vue";
export default {
  components: { TopHeader, CircleIcon, CategoryTab },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    async search(){
      if(this.searchText.length>0){
        await this.$router.push(`/search?q=${this.searchText}`)
      }

    }
  },
};
</script>

<style  scoped>
.items {
  display: flex;
  justify-content: end;
  align-items: center;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
}
a:hover {
  text-decoration: none;
}
@media only screen and (max-width: 800px) {
  .items {
    display: flex;
    justify-content: center;
  }
  .search {
    display: flex;
    justify-content: center;
  }
  .logo {
    display: flex;
    justify-content: center;
  }
}
</style>
