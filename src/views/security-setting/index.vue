<template>
  <section class="wrap">
    <header-component />
    <setting />
  </section>
</template>

<script>
import HeaderComponent from './header';
import Setting from './setting';

export default {
  data () {
    return {
      user: null,
    }
  },
  components: {
    HeaderComponent,
    Setting,
  }
}
</script>

<style lang="less" scoped>
@import '~css/security-setting/index.less';
</style>
