<template>
  <div class="header">
    <!-- header -->
    <header-component class="search">
      <div class="search-box">
          <input class="search-input" placeholder="合同名称或合同编号"/>
          <i class="icon"></i>
      </div>
    </header-component>

    <!-- 过滤选择 -->
    <filter-component :list="list" :value="status" @input="$emit('update:status', arguments[0])"/>

    <!-- 背景蓝块 -->
    <section class="bg-block"></section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header';
import FilterComponent from '@/components/filter';

const statusList = [ // 0, 1, 2, 3, 4, -1
  { label: '全部', value: 0 },
  { label: '待签署', value: 1 },
  { label: '已签署', value: 2 },
  { label: '待修改', value: 3 },
  { label: '已生效', value: 4 },
  { label: '已失效', value: -1 },
];

export default {
  props: {
    status: {
      required: true,
    },
  },
  data () {
    return {
      list: statusList,
    };
  },
  components: {
    HeaderComponent,
    FilterComponent,
  },
};
</script>

<style lang="less" scoped>
@import '~css/home-page/contract/header.less';
</style>
