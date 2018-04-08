<template>
  <main class="main">
    <my-validator class="container" ref="form" :form="form" :formState="formState" :rules="rules">
      <mt-field class="j-name" label="授权人姓名" placeholder="请输入授权人姓名"
        v-model="form.name" :state="formState.nameState">
      </mt-field>
      <mt-field class="j-tel" label="授权人电话" placeholder="请输入授权人电话" type="tel"
        v-model="form.tel" :state="formState.telState">
      </mt-field>
      <mt-field class="j-IDnumber" label="身份证号" placeholder="请输入身份证号码"
        v-model="form.IDnumber" :state="formState.IDnumberState">
      </mt-field>
      <div class="pic-list">
        <image-upload title="身份证正面" :state="formState.IDFaceState" class="pic" v-model="form.IDFace"/>
        <image-upload title="身份证反面" class="pic" v-model="form.IDRear"/>
        <image-upload title="授权书(公章)" class="pic" v-model="form.authLetter"/>
      </div>
    </my-validator>
    <!-- button -->
    <my-button title="提交" @click="handleSubmit"/>
  </main>
</template>

<script>
import MyValidator from 'components/form/validator';
import MyButton from 'components/form/button';
import ImageUpload from 'components/form/image-upload';
import Reg from '@/utils/reg.js';

export default {
  data () {
    return {
      form: {
        name: '',
        tel: '',
        IDnumber: '',
        IDFace: '',
        IDRear: '',
        authLetter: '',
      },
      formState: {
        nameState: '',
        telState: '',
        IDnumberState: '',
        IDFaceState: '',
      },
      rules: [
        {
          prop: 'name',
          rules: [{ required: true, message: '请输入授权人姓名' }],
        },
        {
          prop: 'tel',
          rules: [
            { required: true, message: '请输入授权人电话' },
            { validator: this.telValidator, message: '请输入正确格式的手机号码' },
          ],
        },
        {
          prop: 'IDnumber',
          rules: [{ required: true, message: '请输入授权人身份证号码' }],
        },
        {
          prop: 'IDFace',
          rules: [{ required: true, message: '请上传身份证正面照' }],
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate();
    },
    telValidator(value) {
      console.log('this', this);
      return Reg.tel.test(value);
    },
  },
  components: {
    MyButton,
    ImageUpload,
    MyValidator,
  }
}
</script>

<style lang="less" scoped>
@import '~css/company-auth/authorizer-info.less';
</style>
