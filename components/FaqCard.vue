<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="'accordion-' + index" variant="info">{{
        title
      }}</b-button>
    </b-card-header>
    <b-collapse
      :id="'accordion-' + index"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text>{{ answer }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: ["title", "answer", "index"],
};
</script>

<style lang="scss" scoped>
</style>
