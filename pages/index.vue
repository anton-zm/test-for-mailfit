<template>
  <main class="main">
    <Title class="main__title" :title="'Наши направления'" />
    <List :array="countryList" />
    <Slider :array="cityList" />
  </main>
</template>

<script>
import Title from '@/components/Title'
import List from '@/components/navList'
import Slider from '@/components/Slider'
export default {
  components: {
    Title,
    List,
    Slider,
  },
  computed: {
    countryList() {
      return this.$store.getters['data/getCountries']
    },
    cityList() {
      return this.$store.getters['data/getCities']
    },
  },
}
</script>

<style>
.main {
  padding-top: 44px;
}
</style>
