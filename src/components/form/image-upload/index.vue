<template>
  <section class="image-upload">
    <p class="im-box" :class="state" v-show="!value" @click="handleClick"></p>
    <div class="im-img-wrap" v-if="value">
      <img class="im-img" :src="value" @error="handleImgError" />
      <i class="btn close-btn" @click="handleDelete">x</i>
    </div>
    <p class="im-text" v-if="title">{{ title }}</p>
    <input type="file" style="display: none;" ref="upload" @change="handleSelect"/>
  </section>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  props: {
    title: {
      type: String,
    },
    value: {
      required: true,
    },
    state: {
      default: '',
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick() {
      this.$refs.upload.click();
    },
    handleSelect(ev) {
      const file = ev.target.files[0];
      let { type } = file;
      type = type.split('/')[0];
      if (type !== 'image') {
        Toast('请上传图片');
        return;
      }
      if (FileReader) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ev => {
          this.$emit('input', ev.target.result);
        }
      }
    },
    handleDelete() {
      const obj = this.$refs.upload;
      obj.value = '';
      this.$emit('input', '');
    },
    handleImgError(img) {
      Toast('图片上传失败，请重新上传！');
      this.$emit('input', '');
    },
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
