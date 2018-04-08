/*
 * @name:
 * @description: 正则表达式
 * @Author: huifen.ling
 * @Date: 2018-04-05 14:30:28
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-04-05 16:14:00
 */
const reg = {
  tel: /^1\d{10}$/,
  IDnumber: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/,
};

export default reg;
