<template>
  <div class="header">
    <!-- header -->
    <header-component title="企业认证" :leftVisible="true"/>

    <!-- 过滤选择 -->
    <filter-component :list="list" :clickable="false" type="progress"
      :value="currentIndex" @input="$emit('update:currentIndex', arguments[0])"/>

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
      list: [{ label: '企业信息', value: 0 }, { label: '法人信息', value: 1 }, { label: '授权人信息', value: 2 }],
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
  }
}
</script>

<style lang="less" scoped>
@import '~css/company-auth/header.less';
</style>
