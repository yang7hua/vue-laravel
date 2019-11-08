import axios from 'axios'
import qs from 'qs'

//定义Util对象
const Util = {}
/**
 * 这里是Vue插件形式的写法
 * 在main.js中全局Vue.use(Util)后
 * 可以在组件中可以直接用 this.$util.xxx 的方式调用
 */
Util.install = function (Vue) {
    Vue.prototype.$util = {
        //这里定义个方法返回完整的url地址
        apiUrl: function (url) {
            //去掉url前面的'/'
            if (url.substr(0, 1) == '/') url = url.substr(1);

            //这个域名是虚拟的，在系统/etc/hosts中指向了本机127.0.0.1
            return 'http://vue.local.com/' + url;
        },

        //axios封装
        axios: {
            /**
             * GET请求
             * 调用方法：this.$util.axios.get(url, params, function(res) {});
             * @param {string} url url地址
             * @param {object} params get参数
             * @param {function} callback 回调函数
             */
            get(url, params, callback) {
                axios.get(Vue.prototype.$util.apiUrl(url), {
                    params: params,
                }).then((result) => {
                    console.log("axios.get.result:", result)
                    if (typeof (callback) == 'function') {
                        callback(result.data)
                    }
                }).catch((error) => {
                    console.log("axios.get.error:", error);
                });
            },
            /**
             * POST请求
             * 调用方法：this.$util.axios.post(url, params, function(res) {});
             * @param {string} url 
             * @param {object} params 
             * @param {function} callback 
             */
            post(url, params, callback) {
                axios.post(Vue.prototype.$util.apiUrl(url), qs.stringify(params))
                    .then((result) => {
                        console.log("axios.get.result:", result)
                        if (typeof (callback) == 'function') {
                            callback(result.data)
                        }
                    }).catch((error) => {
                        console.log("axios.get.error:", error);
                    });
            }
        }
    }
}
export default Util; //这一句很重要