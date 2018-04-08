<template>
  <div class="header">
    <!-- header -->
    <header-component title="联系人">
      <i class="u-icon add" slot="right"></i>
    </header-component>

    <!-- 过滤选择 -->
    <filter-component :list="list" :value="currentIndex" @input="$emit('update:currentIndex', arguments[0])"/>

    <!-- 背景蓝块 -->
    <section class="bg-block"></section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header';
import FilterComponent from '@/components/filter';

export default {
  props: {
    currentIndex: {
      required: true,
    },
  },
  data () {
    return {
      list: [ { label: '个人', value: 0 }, { label: '企业', value: 1 }, ],
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
  },
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contacts/header.less';
</style>
