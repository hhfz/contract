
<template>
  <div class="wrap">
    <header-component title="区块链合同"/>

    <main class="main">
      <section class="list" v-for="(item, index) in list" :key="index">
        <div class="item" v-for="(obj, i) in item" :key="i">
          <p>
            <i class="icon" :class="obj.icon"></i>
          </p>
          <label class="text">
            {{ obj.text }}
          </label>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header';

const defaultList = [
  [{ icon: 'upload-contract', text: '上传合同' }, { icon: 'template-creation', text: '模板创建' }],
  [{ icon: 'drafts', text: '草稿箱(0)' }, { icon: 'modify', text: '待修改(0)' }],
  [{ icon: 'sign', text: '待签署(0)' }, { icon: 'signed', text: '已签署(0)' }],
  [{ icon: 'effective', text: '已生效(0)' }, { icon: 'expired', text: '已失效(0)' }],
];

export default {
  data() {
    return {
      list: defaultList,
    };
  },
  components: {
    HeaderComponent,
  }
};
</script>

<style lang="less" scoped>
@import "~css/home-page/home/index.less";
</style>
