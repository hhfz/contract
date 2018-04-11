<template>
  <section class="wrap">
    <header-component v-model="status" />
    <main-component />
  </section>
</template>

<script>
import HeaderComponent from './header';
import MainComponent from './main';

export default {
  data () {
    return {
      status: 1,
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
  }
}
</script>

<style lang="less" scoped>
@import '~css/my-signature/index.less';
</style>
