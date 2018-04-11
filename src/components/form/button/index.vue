<template>
  <p class="btn" :class="type" @click="$emit('click')">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    type: {
      default: 'primary',
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

<style lang="less" scoped>
@import './index.less';
</style>
