import baseURL from './config.js';

function request(method, url, params={}, resolve, reject) {
  uni.showLoading({'title': '加载中...'});
  const options = {
    method,
    url: `${baseURL}${url}`,
    header: {
      "Content-Type": method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
      "token": uni.getStorageSync('token')
    },
    data: params,
  }
  uni.request({
    ...options,
    success: (res) => {
      console.log(999, res)
      resolve(res.data);
    },
    fail: (error) => {
      console.log(999, error);
      reject(error)
    },
    complate: () => {
      uni.hideLoading();
    }
  })
}
export const get = (url, params) => new Promise((resolve, reject) => {
  request('GET', url, params, resolve, reject)
});
export const post = (url, params) => new Promise((resolve, reject) => {
  request('POST', url, params, resolve, reject)
});

export const upload = filePath => new Promise((resolve, reject) => {
  const token = uni.getStorageSync('token');
  uni.showLoading({ title: '正在上传中' });
  uni.uploadFile({
    header: {
      token,
    },
    url: `${srcUrl}/upload`,
    filePath,
    name: 'file',
    success(res) {
      uni.hideLoading();
      resolve(res);
    },
    fail() {
      uni.hideLoading();
      reject();
    },
  });
});
