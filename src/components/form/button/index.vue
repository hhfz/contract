<template>
  <p class="btn" @click="$emit('click')">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
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
