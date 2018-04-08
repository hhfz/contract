<template>
  <div class="wrap grey-bg">
    <Header :currentIndex.sync="currentIndex"/>
    <List :currentIndex.sync="currentIndex"/>
  </div>
</template>

<script>
import Header from './header.vue';
import List from './list.vue';

export default {
  data () {
    return {
      currentIndex: 0,
    }
  },
  components: {
    Header,
    List,
  }
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contacts/index.less';
</style>
