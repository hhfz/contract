<template>
  <div class="g-main">
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <p class="avatar contact-avatar"></p>
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <p class="tag">{{ statusMap[item.status] }}</p>
          <p class="tel">{{ item.tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultList = [
  [
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
  ],
  [
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
    { name: '齐天大圣', status: 1, tel: '18566668888', },
  ],
];
const statusMap = { 1: '已实名' };

export default {
  props: {
    currentIndex: {
      required: true,
    },
  },
  data () {
    return {
      statusMap,
    }
  },
  computed: {
    list() {
      return defaultList[this.currentIndex];
    },
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
@import '~css/home-page/contacts/list.less';
</style>
