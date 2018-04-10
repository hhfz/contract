import axios from 'axios';
import { Toast } from 'mint-ui';
const baseUrl = 'http://localhost:3000/';

const ajax = ({
  url,
  data,
  method = 'get',
}) => {
  const ajax = axios({
    method,
    url: baseUrl + url,
    data,
  }).then(function (response) {
    const { data, status } = response;
    if (status === 200) {
      return data;
    }
    Toast('服务端报错');
  });
  return ajax;
}

export default ajax;
