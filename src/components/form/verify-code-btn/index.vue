<template>
  <button class="btn" :class="clickable ? 'access-btn' : 'disable-btn'" @click="handleAccess">{{ info }}</button>
</template>

<script>

export default {
  props: {
    verCode: null,
  },
  data () {
    return {
      clickable: true,
      info: '获取验证码',
    }
  },
  methods: {
    handleAccess() {
      const { clickable } = this;
      if (!clickable) {
        return false;
      }
      // 发送验证码
      this.$emit('update', 123456);
      this.$emit('update:verCode', 123456);
      this.clickable = false;
      let intervalId = null;
      let i = 60;
      this.info = `${i}s后重新获取`;
      intervalId = setInterval(() => {
        i--;
        if (i === 0) {
          clearInterval(intervalId);
          this.clickable = true;
          this.info = '获取验证码';
          return;
        }
        this.info = `${i}s后重新获取`;
      }, 1000);
    },
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
