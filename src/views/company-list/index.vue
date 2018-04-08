<template>
  <div class="wrap">
    <!-- header -->
    <header-component :leftVisible="true"/>
    <!-- component -->
    <list-component />
  </div>
</template>

<script>
import HeaderComponent from './header.vue';
import ListComponent from './list.vue';

export default {
  data () {
    return {}
  },
  methods: {
  },
  components: {
    HeaderComponent,
    ListComponent,
  }
}
</script>

<style lang="less" scoped>
@import '~css/company-list/index.less';
</style>
