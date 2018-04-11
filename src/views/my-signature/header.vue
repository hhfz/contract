<template>
  <div class="header">
    <!-- header -->
    <header-component title="我的签名" :leftVisible="true">
    </header-component>

    <!-- 过滤选择 -->
    <filter-component :list="list" :value="value" @input="$emit('input', arguments[0])"/>

    <!-- 背景蓝块 -->
    <section class="bg-block"></section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header';
import FilterComponent from '@/components/filter';

export default {
  props: {
    value: {
      required: true,
    },
  },
  data () {
    return {
      list: [ { label: '有效签名', value: 1 }, { label: '审核中', value: 2 }, { label: '已驳回', value: -1 } ],
    }
  },
  components: {
    HeaderComponent,
    FilterComponent,
  },
}
</script>

<style lang="less" scoped>
@import '~css/my-signature/header.less';
</style>
