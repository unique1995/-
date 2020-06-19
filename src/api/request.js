import axios from 'axios'
//import { Message } from 'element-ui'
//import { getToken } from '@/public/auth'
//import { Loading, MessageBox } from 'element-ui'
//import { MessageBox } from 'element-ui'
let loading
function startLoading() {
	/*loading = Loading.service({
		lock: true,
		text: '加载中……',
		background: 'rgba(0, 0, 0, 0.5)'
	})*/
}
function endLoading() {
	//loading.close()
}
let needLoadingRequestCount = 0;
function showLoading() {
	if (needLoadingRequestCount === 0) {
		startLoading()
	}
	needLoadingRequestCount++
}
 
function hideLoading() {
	if (needLoadingRequestCount <= 0) {
		return
	}
	needLoadingRequestCount--
	if (needLoadingRequestCount === 0) {
		endLoading()
	}
}
// 创建axios实例
const service = axios.create({
	baseURL: '', // api的base_url
	withCredentials: true, // 是否允许带cookie
	headers: {
		// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		'Content-Type': 'application/json;charset=UTF-8'
	},
	timeout: 15000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(config => {
	//showLoading用来控制是否展示loading
	//if (config.showLoading) {
		//showLoading();
	//}
	if(config.method  === 'post'){
		console.log("拦截器中:"+ config.data)
	}
	/*if (store.getters.token) {
		config.headers['X-Token'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
	}*/
	return config
}, error => {
	//hideLoading();
	return Promise.reject(error)
});

// respone拦截器
service.interceptors.response.use(
	response => {
		//if (response.config.showLoading) {
			//hideLoading()
		//}
		return response
	},
	error => {
		//hideLoading();
		/*MessageBox.alert(error.message, '提示', {
			confirmButtonText: '确定',
			showCancelButton:false,
			type: 'error'
		})*/
		return Promise.reject(error)
	}
);

export default service
