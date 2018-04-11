<template>
  <section class="main">
    <!-- 设置z-index -->
    <div class="box">
      <!-- 创建新签名 -->
      <section class="add block" @click="handleAdd">
        <img src="~img/my-signature/add.png" class="add-btn"/>
        <span>创建新签名</span>
      </section>
      <!-- 默认签名 -->
      <section class="list">
        <div class="block item" v-for="(item, index) in list" :key="index">
          <main class="signature"></main>
          <footer class="handler">
            <p class="select middle selected" v-if="item.selected">
              <i class="icon"></i>
              <span class="text">默认签名</span>
            </p>
            <p class="select middle" v-else @click="handleSelect(item)">
              <i class="icon border"></i>
              <span class="text">设为默认</span>
            </p>
            <p class="delete middle" @click="handleDelete(index)">
              <i class="icon delete-btn"></i>
              <span class="text">删除</span>
            </p>
          </footer>
        </div>
      </section>
    </div>
    <!-- 新增签名弹窗 -->
    <add-dialog :visible.sync="addVisible" />
  </section>
</template>

<script>
import AddDialog from './add';

export default {
  data () {
    return {
      list: [
        { selected: 1, },
        { selected: 0, },
      ],
      addVisible: false,
    }
  },
  methods: {
    handleSelect(item) {
      const { list } = this;
      list.forEach(item => item.selected = 0);
      item.selected = 1;
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    },
    handleAdd() {
      this.addVisible = true;
    },
  },
  components: {
    AddDialog,
  }
}
</script>

<style lang="less" scoped>
@import '~css/my-signature/main.less';
</style>
