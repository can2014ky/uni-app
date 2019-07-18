import baseURL from './config.js';

function request(method, url, params={}, resolve, reject) {
  uni.showLoading({'title': '加载中...'});
  const options = {
    method,
    url: `${baseURL}${url}`,
    header: 'application/json;charset=UTF-8',
    data: params,
  }
  uni.request(options).then((res) => {
    uni.hideLoading();
    resolve(res[1].data);
  }).catch((error) => {
    uni.hideLoading();
    reject(error)
  })
}
export const get = (url, params) => new Promise((resolve, reject) => {
  request('GET', url, params, resolve, reject)
});
export const post = (url, params) => new Promise((resolve, reject) => {
  request('POST', url, params, resolve, reject)
});

