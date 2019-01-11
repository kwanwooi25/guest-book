<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'custom-button-group',
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>