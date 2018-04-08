<template>
  <section class="main">
    <div class="box">
      <!-- list -->
      <div class="list-box">
        <div v-if="list.length">
          <mt-cell v-for="(item, index) in list" :key="index"
            :title="item.title" :value="item.value" is-link>
          </mt-cell>
        </div>
        <div v-else class="empty">
          <i class="empty-icon"></i>
          <p class="empty-text">无企业认证</p>
        </div>
      </div>
      <!-- info -->
      <div class="info">添加企业认证</div>
      <!-- button -->
      <button class="fix-btn" @click="handleJump"></button>
    </div>
  </section>
</template>

<script>
const list = [
  { title: '杭州复杂美科技有限公司', value: '已实名' },
  { title: '杭州复杂美科技有限公司', value: '已实名' },
  { title: '杭州复杂美科技有限公司', value: '已实名' },
];

export default {
  data () {
    return {
      list,
    }
  },
  methods: {
    handleJump() {
      this.$router.push('company-auth');
    },
  }
}
</script>

<style lang="less" scoped>
@import '~css/company-list/list.less';
</style>
