<template>
  <section class="box">
    <slot></slot>
    <button class="btn">{{ title }}</button>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      default: '确定',
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
