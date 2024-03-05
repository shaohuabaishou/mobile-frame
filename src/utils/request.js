import axios from "axios";
import { showToast } from "vant";

let instance = axios.create({
  timeout: 6000, //超时时间
  retry: 3, // 重试次数
});
instance.interceptors.request.use(
  function (config) {
    if (sessionStorage.getItem("token")) {
      config.headers.token = sessionStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    if (response.status == 200) {
      if (response.config.responseType == "arraybuffer" || response.config.responseType == "blob") {
        return Promise.resolve(response.data);
      } else {
        if (response.data.code == 0) {
          return Promise.resolve(response.data);
        } else if (response.data.code == 401) {
          showToast("登陆过期，请重新登录!");
        } else {
          showToast(response.data.msg);
          return Promise.reject(response.data.msg);
        }
      }
    } else {
      showToast(response.statusText);
      return Promise.reject(response.statusText);
    }
  },
  function (error) {
    //网络超时处理
    if (error.message.includes("timeout") || error.code == "ECONNABORTED") {
      let config = error.config;
      if (!config || !config.retry) {
        showToast("请求超时啦，请联系系统管理员~");
        return Promise.reject(error);
      }
      config.__retryCount = config.__retryCount || 0;
      if (config.__retryCount >= config.retry - 1) {
        showToast("请求超时啦，请联系系统管理员~");
        return Promise.reject(error);
      }
      config.__retryCount += 1;
      return instance(config);
    } else {
      showToast("系统出错啦，请联系系统管理员~");
      return Promise.reject(error);
    }
  }
);
export default instance;
