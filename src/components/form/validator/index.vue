<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  props: {
    form: {
      required: true,
    },
    rules: {
      required: true,
    },
    formState: null,
  },
  data () {
    return {

    }
  },
  methods: {
    // 对所有验证规则进行验证
    validate() {
      const { rules, validateField, hint } = this;
      // flag标志是否验证成功
      let flag = true;
      // 如果没有验证规则，返回true
      if (!rules.length) {
        return true;
      }
      for (let item of rules) {
        const { rules: propRules, prop } = item;
        const res = validateField(prop, propRules);
        if (!res.state) {
          // 第一次验证失败 显示提示信息
          if (flag) {
            hint(prop, res.message);
          }
          flag = false;
        }
      }
      return flag;
    },
    /**
     * @description  属性必填性验证器
     * @augments { prop: 属性名 }
     * @augments rule  prop属性定义required的验证规则
    */
    requiredValidator(prop, rule) {
      const { form } = this;
      const value = form[prop];
      return (value !== '');
    },
    /**
     * @param prop 验证属性
     * @param propRules 属性验证规则数组
     * @returns { state: 验证是否成功, message: 验证失败的提示信息 }
    */
    validateField(prop, propRules) {
      const { form, formState, requiredValidator } = this;
      const value = form[prop];
      const stateProp = `${prop}State`;
      const state = formState && formState[stateProp];

      for (let rule of propRules) {
        if (rule.required === true) {
          const res = requiredValidator(prop, rule);
          if (!res) {
            // 如果使用mint-ui的field组件，可以更改state的值
            // state的值可能为空字符串，所以必须判断是否值为undefined
            if (state !== undefined) {
              formState[stateProp] = 'error';
            }
            return { state: false, message: rule.message };
          }
        } else if (typeof rule.validator === 'function') {
          const res = rule.validator(value, prop, rule);
          if (!res) {
            if (state !== undefined) {
              formState[stateProp] = 'error';
            }
            return { state: false, message: rule.message };
          }
        }
      }
      if (state !== undefined) {
        formState[stateProp] = 'success';
      }
      return { state: true };
    },
    // 当同时验证多个规则时，同时hint会很混乱。所以提取出hint函数，在合适时机hint
    hint(prop, message) {
      const { $el: oForm } = this;
      // 获取相应属性的input元素
      const oInput = oForm.querySelector(`.j-${prop}`) && oForm.querySelector(`.j-${prop}`).querySelector('input');
      // 如果存在input框，则获取焦点。 不存在input框或是其他表单元素，例如select，也不获取焦点
      if (oInput) {
        oInput.focus();
      }
      Toast(message);
    },
  }
}
</script>

<style lang="less" scoped>

</style>
