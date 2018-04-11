<template>
  <div class="header">
    <!-- header -->
    <header-component title="个人认证" :leftVisible="true"/>

    <!-- 背景蓝块 -->
    <section class="bg-block"></section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header';

export default {
  data () {
    return {
    }
  },
  components: {
    HeaderComponent,
  }
}
</script>

<style lang="less" scoped>
@import '~css/person-auth/header.less';
</style>
