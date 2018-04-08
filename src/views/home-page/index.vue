<template>
  <section class="home-page">
    <router-view></router-view>
    <Footer />
  </section>
</template>

<script>
import Footer from '@/components/footer';

export default {
  data () {
    return {}
  },
  components: {
    Footer,
  }
}
</script>

<style lang="less" scoped>
@import '~css/home-page/index.less';
</style>
