<template>
  <section class="wrap">
    <div class="contact-info">
      <i class="avatar"></i>
      <div class="info">
        <p class="username">用户名</p>
        <p class="tel">15866668888</p>
        <div class="block">
          <p class="tag">已实名</p>
        </div>
        <p class="btn">&nbsp;&nbsp;&nbsp;切换身份 <span class="en-font">》</span></p>
      </div>
    </div>

    <div class="entry-group">
        <div class="list">
          <div class="item" @click="jumpTo('person-auth')">
            <i class="icon personal-auth"></i>
            <p class="tc">
              个人认证
            </p>
          </div>
          <div class="item" @click="jumpTo('company-list')">
            <i class="icon company-auth"></i>
            <p class="tc">
              企业认证
            </p>
          </div>
        </div>
        <div class="list">
          <div class="item" @click="jumpTo('my-signature')">
            <i class="icon my-signature"></i>
            <p class="tc">
              我的签名
            </p>
          </div>
          <div class="item" @click="jumpTo('security-setting')">
            <i class="icon seurity-seetting"></i>
            <p class="tc">
              安全设置
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    jumpTo(url) {
      this.$router.push(`/${url}`);
    },
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
@import '~css/home-page/my/index.less';
</style>
