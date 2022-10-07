<template>
  <div>
    <div class="container">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://i.pinimg.com/originals/30/1d/58/301d58d5b968b1577a772c95c91ec39f.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/345e4760436865.5a4d145b566db.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
