<template>
  <content-box>
    <h2 class="content-title">{{ title }}</h2>
  </content-box>
</template>

<script>
import Content from '@/components/content'
export default {
  props: ['title'],
  components: {
    'content-box': Content,
  },
}
</script>

<style scoped>
.content-title {
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
  color: #ffffff;
}
</style>
