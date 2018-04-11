<template>
  <footer class="footer">
    <ul class="list">
      <li class="item" :class="{active: currentIndex === index }" @click="jumpTo(item.path)"
        v-for="(item, index) in list" :key="index">
        <i class="icon" :class="[ item.icon ]"></i>
        <label class="text">
          <p>{{ item.title }}</p>
        </label>
      </li>
    </ul>
  </footer>
</template>

<script>
const list = [
  { icon: 'home-page', title: '首页', path: '/home-page/home' },
  { icon: 'contract', title: '合同', path: '/home-page/contract' },
  { icon: 'contacts', title: '联系人', path: '/home-page/contacts' },
  { icon: 'me', title: '我的', path: '/home-page/my' },
];

export default {
  data() {
    return {
      list,
      currentIndex: 0,
    };
  },
  watch: {
    $route(curRoute) {
      const { path } = curRoute;
      this.handleSelect(path);
    },
  },
  mounted() {
    const { path } = this.$route;
    this.handleSelect(path);
  },
  methods: {
    handleSelect(path) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].path === path) {
          this.currentIndex = i;
        }
      }
    },
    jumpTo(url) {
      this.$router.push(url);
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
@import './css/index.less';
</style>
