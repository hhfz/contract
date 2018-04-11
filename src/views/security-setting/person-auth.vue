<template>
  <section>
    <main class="main">
      <!-- 表单 -->
      <my-validator class="form" :form="form" :rules="rules" ref="form">
        <mt-field label="姓名" class="j-realname" placeholder="请输入真实姓名" v-model="form.realname"></mt-field>
        <mt-field label="身份证号" class="j-IDnumber" placeholder="请输入身份证号码" v-model="form.IDnumber"></mt-field>
        <mt-field label="银行卡号" class="j-account" placeholder="请输入银行卡号码" v-model="form.account"></mt-field>
        <mt-field label="预留手机" class="j-tel" placeholder="请输入银行预留手机号码" v-model="form.tel"></mt-field>
        <mt-field label="验证码" class="j-verCode" placeholder="请输入验证码" v-model="form.verCode" >
          <verify-code-btn :verCode.sync="verCode"></verify-code-btn>
        </mt-field>
      </my-validator>
      <!-- 按钮 -->
      <my-button title="提交" @click="handleSubmit"></my-button>
    </main>
  </section>
</template>

<script>
import MyValidator from 'components/form/validator';
import MyButton from 'components/form/button';
import VerifyCodeBtn from 'components/form/verify-code-btn';

export default {
  data () {
    return {
      verCode: '',
      form: {
        realname: '',
        IDnumber: '',
        account: '',
        tel: '',
        verCode: '',
      },
      rules: [
        {
          prop: 'realname',
          rules: [{ required: true, message: '请输入真实姓名', }],
        },
        {
          prop: 'IDnumber',
          rules: [{ required: true, message: '请输入身份证号码', }],
        },
        {
          prop: 'account',
          rules: [{ required: true, message: '请输入银行卡号码', }],
        },
        {
          prop: 'tel',
          rules: [{ required: true, message: '请输入银行预留手机号码', }],
        },
        {
          prop: 'verCode',
          rules: [
            { required: true, message: '请输入验证码', },
            { validator: this.validateVerCode, message: '验证码不正确，请重新输入', }
          ],
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      const res = this.$refs.form.validate();
      if (!res) {
        return;
      }
      this.$emit('success');
    },
    validateVerCode(value) {
      console.log('value', value);
      console.log(this.verCode);
      return (value == this.verCode);
    },
  },
  components: {
    MyValidator,
    MyButton,
    VerifyCodeBtn,
  }
}
</script>

<style lang="less" scoped>
@import '~css/person-auth/person-auth.less';
</style>
