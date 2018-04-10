<template>
  <main class="main">
    <my-validator class="container" ref="form" :form="form" :formState="formState" :rules="rules">
      <mt-field label="企业名称" placeholder="请输入企业名称" class="j-name"
        v-model="form.name" :state="formState.nameState">
      </mt-field>
      <mt-field label="企业电话" placeholder="请输入企业电话" class="j-tel" type="tel"
        v-model="form.tel" :state="formState.telState">
      </mt-field>
      <mt-field label="企业地址" placeholder="请输入企业地址" class="j-address"
        v-model="form.address" :state="formState.addressState">
      </mt-field>
      <mt-field label="营业执照" placeholder="请输入营业执照号码" class="j-license"
        v-model="form.license" :state="formState.licenseState">
      </mt-field>
      <div class="pic-list">
        <image-upload title="上传营业执照" class="pic" :state="formState.licensePicState" v-model="form.licensePic"/>
      </div>
    </my-validator>
    <!-- button -->
    <my-button title="下一步" @click="handleSubmit"/>
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

export default {
  data () {
    return {
      form: {
        name: '',
        tel: '',
        address: '',
        license: '',
        licensePic: '',
      },
      formState: {
        nameState: '',
        telState: '',
        addressState: '',
        licenseState: '',
        licensePicState: '',
      },
      rules: [
        {
          prop: 'name',
          rules: [{ required: true, message: '请输入企业名称', trigger: 'blur' }],
        },
        {
          prop: 'tel',
          rules: [
            { required: true, message: '请输入企业电话', trigger: 'blur' },
            { validator: telValidator, message: '请输入正确格式的手机号码', trigger: 'blur' },
          ],
        },
        {
          prop: 'address',
          rules: [{ required: true, message: '请输入企业地址', trigger: 'blur' }],
        },
        {
          prop: 'license',
          rules: [{ required: true, message: '请输入营业执照号码', trigger: 'blur' }],
        },
        {
          prop: 'licensePic',
          rules: [{ required: true, message: '请上传上传营业执照' }],
        },
      ],
    }
  },
  methods: {
    handleSubmit() {
      const res = this.$refs.form.validate();
      if (res) {
        this.$emit('update', 1);
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
@import '~css/company-auth/company-info.less';
</style>
