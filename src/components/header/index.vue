<template>
  <div class="g-header">
    <slot name="left" v-if="leftVisible">
      <i class="u-icon back" @click="handleBack"></i>
    </slot>
    <slot>
      <h1 class="text">{{ title }}</h1>
    </slot>
    <slot name="right">
      {{ info }}
    </slot>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
    },
    info: {
      type: String,
    },
    leftVisible: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {};
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
}
</script>

<style lang="less" scoped>
@import './css/index.less';
</style>
