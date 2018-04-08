<template>
  <div class="wrap">
    <!-- header -->
    <header-component :currentIndex.sync="currentIndex"/>
    <!-- component -->
    <component :is="componentList[currentIndex]" @update="handleJump(arguments[0])"></component>
  </div>
</template>

<script>
import HeaderComponent from './header.vue';
import CompanyInfo from './company-info.vue';
import LegalPersonInfo from './legal-person-info.vue';
import AuthorizerInfo from './authorizer-info.vue';

const componentList = [ CompanyInfo, LegalPersonInfo, AuthorizerInfo ];

export default {
  data () {
    return {
      currentIndex: 0,
      componentList,
      minIndex: 0,
      maxIndex: 2,
    }
  },
  watch: {
    '$route': function(route) {
      this.handleRouteChange(route);
    },
  },
  mounted() {
    this.handleRouteChange(this.$route);
  },
  methods: {
    handleJump(currentIndex) {
      this.currentIndex = currentIndex;
      this.$router.replace({ name, query: { index: currentIndex } });
    },
    handleRouteChange(route) {
      const { minIndex, maxIndex } = this;
      const { name } = route;
      const { index } = route.query;
      if (name !== 'company-auth') {
        return;
      }
      /* if (name !== ) {

      } */
      // 1.index不存在 2. index不是数字 3.index超出范围，如果符合其中一种条件，表示index无效，为index设置默认值
      if (!index || isNaN(index) || index < minIndex || index > maxIndex) {
        this.$router.replace({ name, query: { index: 0 } });
      } else {
        this.currentIndex = index;
      }
    },
  },
  components: {
    HeaderComponent,
    CompanyInfo,
    LegalPersonInfo,
    AuthorizerInfo,
  }
}
</script>

<style lang="less" scoped>
@import '~css/company-auth/index.less';
</style>
