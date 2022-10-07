<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: { Header, Footer },
};
</script>

<style >
body {
  font-family: "Cabin", sans-serif;
}

.t-title{
  color: #2F8F9D;
}
.s-title{
  color: #979797;
}
</style>
