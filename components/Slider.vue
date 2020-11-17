<template>
  <content-box class="slider__content">
    <div class="slider" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in array" :key="index">
          <img :src="item.img" :alt="item.name" class="slider__img" />
          <div class="slider__info">
            <h3 class="slider__title">{{ item.name }}</h3>
            <p class="slider__subtitle">{{ item.country }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="button-prev navigation" @click="mySwiper.slidePrev()">
      <img src="pagL.png" alt="предыдущий" />
    </div>
    <div class="button-next navigation" @click="mySwiper.slideNext()">
      <img src="pagR.png" alt="следующий" />
    </div>
  </content-box>
</template>

<script>
import Content from '@/components/content'

export default {
  props: ['array'],
  components: {
    'content-box': Content,
  },
  data() {
    return {
      swiperOption: {
        loop: false,
        slidesPerView: 6,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 30,

        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      },
    }
  },
}
</script>

<style scoped>
.slider__content {
  position: relative;
}
.slider {
  width: 100%;
  position: relative;
}
.swiper-slide {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}
.slider__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 8px;
}
.slider__info {
  margin: auto auto 17px 12px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
}
.slider__title {
  font-weight: 500;
}
.slider__subtitle {
  font-weight: normal;
}
.button-prev {
  position: absolute;
  top: 240px;
  left: -90px;
}

.button-next {
  position: absolute;
  top: 240px;
  right: -90px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  content: '';
}
.navigation {
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}
.navigation:hover {
  background: #0047ff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}
.swiper-wrapper {
  width: 100%;
}
</style>
