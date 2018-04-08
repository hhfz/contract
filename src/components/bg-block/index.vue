<template>
  <div class="block" :style="{ top: `${top}px` }"></div>
</template>

<script>
export default {
  props: {
    top: {
      type: Number,
      default: 212,
    },
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
@import './index.less';
</style>
