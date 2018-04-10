<template>
  <main class="main">
    <my-validator class="container" ref="form" :form="form" :formState="formState" :rules="rules">
      <mt-field label="授权人姓名" placeholder="请输入授权人姓名" class="j-name"
        v-model="form.name" :state="formState.nameState">
      </mt-field>
      <mt-field label="授权人电话" placeholder="请输入授权人电话" class="j-tel" type="tel"
        v-model="form.tel" :state="formState.telState">
      </mt-field>
      <mt-field label="身份证号" placeholder="请输入身份证号码" class="j-IDnumber"
        v-model="form.IDnumber" :state="formState.IDnumberState">
      </mt-field>
      <div class="pic-list">
        <image-upload title="身份证正面" class="pic" :state="formState.IDFaceState" v-model="form.IDFace"/>
        <image-upload title="身份证反面" class="pic" :state="formState.IDRearState" v-model="form.IDRear"/>
        <image-upload title="授权书(公章)" class="pic" :state="formState.authLetterState" v-model="form.authLetter"/>
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

function telValidator(value) {
  return Reg.tel.test(value);
}
function IDnumberValidator(value) {
  return Reg.IDnumber.test(value);
}

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
        IDRearState: '',
        authLetterState: '',
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
            { validator: telValidator, message: '请输入正确格式的手机号码', trigger: 'blur' },
          ],
        },
        {
          prop: 'IDnumber',
          rules: [
            { required: true, message: '请输入身份证号码' },
            { validator: IDnumberValidator, message: '请输入正确格式的身份证号码', trigger: 'blur' },
          ],
        },
        {
          prop: 'IDFace',
          rules: [{ required: true, message: '请上传身份证正面照' }],
        },
        {
          prop: 'IDRear',
          rules: [{ required: true, message: '请上传身份证反面照' }],
        },
        {
          prop: 'authLetter',
          rules: [{ required: true, message: '请上传授权书' }],
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      const res = this.$refs.form.validate();
      if (res) {
        this.$router.replace('company-list');
      }
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
