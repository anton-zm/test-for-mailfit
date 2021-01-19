<template>
  <main class="main">
    <Title class="main__title" :title="'Наши направления'" />
    <Slider />
  </main>
</template>

<script>
import Title from '@/components/Title'
import Slider from '@/components/Slider'
export default {
  components: {
    Title,
    Slider,
  },
}
</script>

<style>
.main {
  padding-top: 44px;
}
</style>
