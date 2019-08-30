<template>
  <div class="installer_object">
    <carousel :per-page="1" :mouse-drag="false" :paginationEnabled="false" :navigationEnabled="true" v-if="user.images">
      <slide v-for="(slide, index) in user.images" :key="index">
        <img class="object_img mw-100" :src="getImage(slide.image)" :alt="user.name">
      </slide>
    </carousel>
    <div class="object_inner">
      <div class="object_name weight-600">{{ user.name }}</div>
      <div class="object_tech" v-for="(item, index) in user.technologies" :key="index">
        {{ item.item }}
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage(source) {
      const fileName = source.toLowerCase();
    //../../assets/image/installer_account/cottage.jpg
      // Request the image as a webpack module by using `require`
      return require(`../../assets/image/installer_account/${fileName}.jpg`);
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/variables/variables";
  .object_name {
    font-size: 18px;
    margin-bottom: 20px;
    color: $dark-blue;
  }
  .object_inner {
    padding: 24px 16px;
  }
  .object_tech {
    font-size: 16px;
    line-height: 30px;
  }
</style>
