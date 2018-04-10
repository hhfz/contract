/*
 * @name:
 * @description:
 * @Author: huifen.ling
 * @Date: 2018-04-10 08:27:15
 * @Last Modified by: huifen.ling
 * @Last Modified time: 2018-04-10 10:28:21
 */
import ajax from '@/utils/ajax';

/**
 * @description 获取合同列表
 * @export
 * @returns
 */
export function getList({ status = 0 } = {}) {
  const url = status === 0 ? 'getList' : `getList?status=${status}`;
  return ajax({
    url,
  });
};
