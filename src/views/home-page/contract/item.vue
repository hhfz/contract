<template>
  <div class="item">
    <section v-for="(item, index) in contract" :key="index" v-if="!index || ifSeeMore">
      <header class="title">
        <h1 class="number">{{ item.number }}</h1>
        <label class="status" :class="{ grey: item.status == -1 }">{{ statusMap[item.status] }}</label>
      </header>
      <main class="content" :class="{ grey: item.status == -1 }">{{ item.content }}</main>
      <footer class="time">
        <time>{{ item.time }}</time>
      </footer>
      <div class="icon" :class="ifSeeMore ? 'take-back': 'pull-down'" @click="changeClass" v-if="contract.length > 1 && !index"></div>
    </section>
  </div>
</template>

<script>
const statusMap = { 1: '待签署', 2: '已签署', 3: '待修改', 4: '已生效', '-1': '已失效' };

export default {
  props: {
    contract: {
      required: true,
      type: Array,
    },
  },
  data () {
    return {
      statusMap,
      className: 'pull-down',
      ifSeeMore: false,
    }
  },
  watch: {
    contract() {
      this.ifSeeMore = false;
    },
  },
  methods: {
    changeClass () {
      this.ifSeeMore = !this.ifSeeMore;
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contract/item.less';
</style>
