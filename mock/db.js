const Mock = require('mockjs');

module.exports = {
  getList: Mock.mock({
    status: 1,
    data: {
      list: [
        { id: 1, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
        { id: 2, number: 'C00023698', status: 1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
        { id: 3, number: 'C00023698', status: -1, content: '全日制劳动合同', time: '2017-6-9 12:12:12', },
      ],
    }
  }),
};
