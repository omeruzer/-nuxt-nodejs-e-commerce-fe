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
        <h3 class="t-title">FAQ</h3>
      </div>
      <div class="mt-3 mb-5">
        <div class="" v-for="(item, index) in list" :key="index">
          <FaqCard :title="item.title" :answer="item.answer" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqCard from "../../components/FaqCard.vue";
export default {
  components: { FaqCard },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/api/faq")
        .then((result) => {
          this.list = result.data;
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
