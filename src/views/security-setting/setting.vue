<template>
  <section class="main">
    <!-- 手机验证 -->
    <btn-item class="item">
      <mt-cell title="手机号" value="未绑定" is-link></mt-cell>
      <my-validator class="form" :form="telForm" :rules="telFormRules" ref="telForm">
        <mt-field label="手机号" placeholder="请输入需要绑定的手机号码" v-model="telForm.tel"></mt-field>
        <mt-field label="验证码" placeholder="请输入验证码" v-model="telForm.verCode">
          <verify-code-btn />
        </mt-field>
      </my-validator>
    </btn-item>
    <!-- 邮箱验证 -->
    <btn-item class="item">
      <mt-cell title="邮箱" value="123*****@qq.com" is-link></mt-cell>
      <my-validator class="form" :form="emailForm" :rules="emailFormRules" ref="emailForm">
        <mt-field label="原邮箱" placeholder="请输入原邮箱号码" v-model="emailForm.oldEmail"></mt-field>
        <mt-field label="验证码" placeholder="请输入原邮箱验证码" v-model="emailForm.oldVerCode">
          <verify-code-btn />
        </mt-field>
        <mt-field label="新邮箱" placeholder="请输入需要绑定的新邮箱" v-model="emailForm.newEmail"></mt-field>
        <mt-field label="验证码" placeholder="请输入新邮箱验证码" v-model="emailForm.newVerCode">
          <verify-code-btn />
        </mt-field>
      </my-validator>
    </btn-item>
    <!-- 登陆密码 -->
    <btn-item class="item">
      <mt-cell title="登陆密码" is-link></mt-cell>
      <my-validator class="form" :form="passwordForm" :rules="passwordFormRules" ref="passwordForm">
        <mt-field label="原密码" placeholder="请输入原密码" v-model="passwordForm.oldPass"></mt-field>
        <mt-field label="新密码" placeholder="请设置新密码" v-model="passwordForm.newPass"></mt-field>
      </my-validator>
    </btn-item>
  </section>
</template>

<script>
import BtnItem from 'components/btn-item';
import MyValidator from 'components/form/validator';
import verifyCodeBtn from 'components/form/verify-code-btn';

export default {
  data () {
    return {
      telForm: {
        tel: '',
        verCode: '',
      },
      telFormRules: [
      ],
      emailForm: {
        oldEmail: '123*****@qq.com',
        oldVerCode: '',
        newEmail: '',
        newVerCode: '',
      },
      emailFormRules: [
      ],
      passwordForm: {
        oldPass: '',
        newPass: '',
      },
      passwordFormRules: [
      ],
    }
  },
  components: {
    BtnItem,
    MyValidator,
    verifyCodeBtn,
  }
}
</script>

<style lang="less" scoped>
@import '~css/security-setting/setting.less';
</style>
