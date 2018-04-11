<template>
  <section class="dialog" v-show="visible" @click="handleClose">
    <main class="main" @click.stop>
      <my-button title="拍照签名"/>
      <my-button title="手绘签名"/>
      <my-button title="模板签名"/>
      <my-button title="取消" type="text" @click="handleClose"/>
    </main>
  </section>
</template>

<script>
import MyButton from 'components/form/button';

export default {
  props: {
    visible: {
      required: true,
    },
  },
  data () {
    return {
      
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },
  },
  components: {
    MyButton,
  },
}
</script>

<style lang="less" scoped>
@import '~css/my-signature/add.less';
</style>
