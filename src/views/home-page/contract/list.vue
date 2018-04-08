<template>
  <div class="main">
    <div class="list">
      <item class="item" v-for="(item, index) in list" :key="index" :contract="item"/>
    </div>
  </div>
</template>

<script>
import Item from './item.vue';

const defaultListMap = {
  0: [
    [
      { id: 1, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 2, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 3, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 4, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 5, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 6, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
  1: [
    [
      { id: 7, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 8, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
  2: [
    [
      { id: 9, number: 'C00023698', status: 2, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 10, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 11, number: 'C00023698', status: 2, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 12, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
  3: [
    [
      { id: 13, number: 'C00023698', status: 3, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 14, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
  4: [
    [
      { id: 15, number: 'C00023698', status: 4, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 16, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 17, number: 'C00023698', status: 4, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      { id: 18, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
  '-1': [
    [
      { id: 19, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 20, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
    [
      { id: 21, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
    ],
  ],
};

export default {
  props: {
    status: {
      required: true,
    },
  },
  data () {
    return {};
  },
  computed: {
    list() {
      const { status } = this;
      return defaultListMap[status];
    }
  },
  components: {
    Item,
  },
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contract/list.less';
</style>
