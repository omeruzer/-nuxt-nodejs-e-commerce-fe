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
        <h3 class="t-title">Traking</h3>
      </div>
      <div class="content">
        <div class="" style="width: 100%; margin-top: 80px; margin-bottom: 100px">
          <div class="">
            <div class="icon d-flex justify-content-center">
              <i style="font-size:80px;" class="fa fa-truck t-title"></i>
            </div>
            <div class="input mt-4 d-flex justify-content-center align-items-center">
              <div>
                <input type="text" class="form-control" placeholder="Kargom Nerede?" />
              </div>
              <div>
                <button class="btn btn-primary ml-2">Ara</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
