<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="less">
@import '~@/base.less';
@import '~@/global.less';
#app {
  height: 100%;
  overflow: auto;
}
</style>
