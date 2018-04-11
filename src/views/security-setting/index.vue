<template>
  <section class="wrap">
    <header-component />
    <person-auth v-if="!user" @success="user = {}"/>
    <person-info v-else />
  </section>
</template>

<script>
import HeaderComponent from './header';
import PersonAuth from './person-auth';
import PersonInfo from './person-info';

export default {
  data () {
    return {
      user: {},
    }
  },
  components: {
    HeaderComponent,
    PersonAuth,
    PersonInfo,
  }
}
</script>

<style lang="less" scoped>
@import '~css/person-auth/index.less';
</style>
