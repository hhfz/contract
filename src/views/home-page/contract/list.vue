<template>
  <div class="main">
    <div class="list">
      <item class="item" v-for="(item, index) in list" :key="index" :contract="item.list"/>
    </div>
  </div>
</template>

<script>
import Item from './item.vue';
import { getList } from 'api/home-page/contract';

export default {
  props: {
    status: {
      required: true,
    },
  },
  data () {
    return {
      list: [],
    };
  },
  async mounted() {
    this.fetchList();
  },
  watch: {
    status() {
      this.fetchList();
    }
  },
  methods: {
    async fetchList() {
      this.$indicator.open();
      const { status } = this;
      const res = await getList({ status });
      this.list = res;
      this.$indicator.close();
    },
  },
  components: {
    Item,
  },
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contract/list.less';
</style>
