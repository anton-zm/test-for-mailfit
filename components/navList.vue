<template>
  <content-box>
    <ul class="nav-list">
      <li
        class="nav-list__item"
        v-for="(item, index) in array"
        :key="index"
        :class="{ navList__item_active: item.active }"
        @click="chooseCity(item)"
      >
        {{ item.name }}
      </li>
    </ul>
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
    chooseCity(elem) {
      const cities = Array.from(document.querySelectorAll('.nav-list__item'))
      cities.forEach((e) => {
        e.classList.remove('navList__item_active')
        event.target.classList.add('navList__item_active')
      })
    },
  },
}
</script>

<style scoped>
.nav-list {
  display: flex;
  flex-direction: row;
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
  margin-left: 34px;
  cursor: pointer;
}
.nav-list__item:first-of-type {
  margin-left: 0;
}
.navList__item_active {
  background: #80a0f2;
  border-radius: 8px;
  padding: 8px 20px;
}
</style>
