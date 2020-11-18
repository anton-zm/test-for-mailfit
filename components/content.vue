<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.content {
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (max-width: 1280px) {
  .content {
    padding: 0 50px;
  }
}
@media screen and (max-width: 768px) {
  .content {
    padding: 0 20px;
  }
}
</style>
