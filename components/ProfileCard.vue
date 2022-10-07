<template>
  <div>
    <div v-if="title != 'Logout'" class="">
      <nuxt-link :to="link">
        <div class="card px-2 py-5">
          <div class="icon d-flex justify-content-center">
            <i :class="icon" class="fa-3x t-title"></i>
          </div>
          <div class="title d-flex mt-2 justify-content-center">
            <h5 class="t-title">{{ title }}</h5>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div v-else class="">
      <div @click="logout" class="card px-2 py-5">
        <div class="icon d-flex justify-content-center">
          <i :class="icon" class="fa-3x t-title"></i>
        </div>
        <div class="title d-flex mt-2 justify-content-center">
          <h5 class="t-title">{{ title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "link"],
  methods: {
    async logout(){
      await this.$auth.logout()
    }
  },
};
</script>

<style scoped>
.card{
  cursor: pointer;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
