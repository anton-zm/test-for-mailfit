<template>
  <content-box class="slider__content">
    <ul class="nav-list">
      <li
        class="nav-list__item"
        v-for="(item, index) in countries"
        :key="index"
        :class="{ navList__item_active: item.active }"
        @click="chooseCountry(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div class="slider" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in renderSlide"
          :key="index"
          @click.self="openPanel(item)"
          :class="{ tablet_slide: tablet }"
        >
          <img :src="item.img" :alt="item.name" class="slider__img" />
          <div class="slider__info">
            <h3 class="slider__title">{{ item.name }}</h3>
            <p class="slider__subtitle">{{ item.country }}</p>
            <transition name="fade">
              <div
                v-if="item.panel"
                class="slider__panel"
                :class="{ slider__panel_left: item.panelLeft }"
              >
                <p class="slider__panel-text">
                  {{ item.description }}
                </p>
                <nuxt-link :to="item.url" class="slider__panel-btn"
                  >Подробнее</nuxt-link
                >
                <img
                  @click="item.panel = false"
                  src="close.png"
                  alt="Закрыть"
                  class="slider__panel-close"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
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

  methods: {
    chooseCountry(elem) {
      const countries = Array.from(document.querySelectorAll('.nav-list__item'))
      countries.forEach((e) => {
        e.classList.remove('navList__item_active')
        event.target.classList.add('navList__item_active')
      })
      this.slideFilter(elem.name)
    },
    onloadRender() {
      this.cities.forEach((e) => {
        this.renderSlide.push(e)
      })
    },
    slideFilter(country) {
      this.renderSlide = this.cities
      if (country === 'Все страны') {
        this.renderSlide = this.cities
      } else {
        const result = this.renderSlide.filter((e) => {
          return e.country === country
        })
        return (this.renderSlide = result)
      }
    },
    openPanel(card) {
      const position = event.clientX
      const width = window.innerWidth
      if (width < 769) {
        this.tablet(true)
      }

      if (position > (width / 3) * 2) {
        card.panelLeft = true
      }
      card.panel = !card.panel
    },
    tablet(a) {
      if (a) {
        return true
      } else {
        return false
      }
    },
  },
  data() {
    return {
      renderSlide: [],
      countries: [
        {
          name: 'Все страны',
          active: true,
        },
        {
          name: 'Италия',
          active: false,
        },
        {
          name: 'Германия',
          active: false,
        },
        {
          name: 'Греция',
          active: false,
        },
        {
          name: 'Турция',
          active: false,
        },
        {
          name: 'Испания',
          active: false,
        },
        {
          name: 'Португалия',
          active: false,
        },
      ],
      cities: [
        {
          name: 'Милан',
          country: 'Италия',
          img: '/milan.png',
          url: '',
          panel: false,

          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Фрайбург',
          country: 'Германия',
          img: '/friburg.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау2 – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Лиссабон',
          country: 'Португалия',
          img: '/lisbon.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Виченца',
          country: 'Италия',
          img: '/vicenca.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Барселона',
          country: 'Испания',
          img: '/barselona.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Порту',
          country: 'Португалия',
          img: '/porto.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Гуарда',
          country: 'Португалия',
          img: '/guardo.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Генуя',
          country: 'Италия',
          img: '/genoa.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Падуя',
          country: 'Италия',
          img: '/padua.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Валенсия',
          country: 'Испания',
          img: '/valensia.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Салоники',
          country: 'Греция',
          img: '/saloniki.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Афины',
          country: 'Греция',
          img: '/athens.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Каш',
          country: 'Турция',
          img: '/kash.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Мадрид',
          country: 'Испания',
          img: '/madrid.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Берлин',
          country: 'Германия',
          img: '/berlin.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Анталия',
          country: 'Турция',
          img: '/antalia.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Венеция',
          country: 'Италия',
          img: '/vicenca.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
        {
          name: 'Стамбул',
          country: 'Турция',
          img: '/stambul.png',
          url: '',
          panel: false,
          description:
            'Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом.',
        },
      ],
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
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          220: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },

          480: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },

          860: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },
        },
      },
    }
  },
  mounted() {
    this.onloadRender()
    this.renderSlide.forEach((e) => {
      e.panelLeft = false
    })
  },
}
</script>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style-type: none;
  padding-left: 0;
  margin: 17px auto 32px 0;
}
.nav-list__item {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin: 14px 17px 0 17px;
  cursor: pointer;
}
.nav-list__item:first-of-type {
  margin: 14px 17px 0 0;
}
.navList__item_active {
  background: #80a0f2;
  border-radius: 8px;
  padding: 8px 20px;
}
.slider__content {
  position: relative;
}
.slider {
  width: 100%;
  position: relative;
  padding-bottom: 60px;
}

.swiper-slide {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
}
.swiper-pagination {
  visibility: hidden;
  margin-top: 20px;
}
.swiper-pagination-bullet {
  background: #ffffff;
}
.swiper-pagination-bullet-active {
  background: #0047ff;
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
  bottom: 250px;
  left: -90px;
}

.button-next {
  position: absolute;
  bottom: 250px;
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

.slider__panel {
  position: absolute;
  top: 0;
  right: -400px;
  width: 400px;
  padding: 25px 30px;
  background: linear-gradient(0deg, #254595, #254595);
  min-height: 250px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 2;
}
.slider__panel_left {
  position: absolute;
  top: 0;
  left: -400px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.slider__panel-text {
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
}
.slider__panel-btn {
  margin-top: 14px;
  border-radius: 8px;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  padding: 13px 21px;
  display: inline-block;
}
.slider__paner-btn:hover {
  border: none;
  background: #0047fe;
}
.slider__panel-close {
  position: absolute;
  top: 25px;
  right: 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.tablet_slide {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .swiper-pagination {
    visibility: visible;
  }
  .swiper-slide {
    min-height: 330px;
  }
  .slider__panel {
    min-height: 330px;
  }
}
</style>
