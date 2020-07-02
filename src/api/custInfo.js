import request from './request'
import reqUrl from './reqUrlConf'
//需配置showLoading:true or false来控制是否展示loading层
export function scanQr(param){
	return request({
		url:reqUrl.scanQr,
		method: 'post',
		data:param
	})
}
export function saveSCYzm(param){
    return request({
        url:reqUrl.saveSCYzm,
        method: 'post',
        data:param
    })
}
export function bindingQr(param){
    return request({
        url:reqUrl.bindingQr,
        method: 'post',
        data:param
    })
}
export function querySCUserByPhone(param){
	return request({
		url:reqUrl.querySCUserByPhone,
		method: 'post',
		data:param
	})
}
export function saveSCMessage(param){
	return request({
		url:reqUrl.saveSCMessage,
		method: 'post',
		data:param
	})
}
export function sendMessage(param){
	return request({
		url:reqUrl.sendMessage,
		method: 'post',
		data:param
	})
}
export function checkLicensePlate(param){
    return request({
        url:reqUrl.checkLicensePlate,
        method: 'post',
        data:param
    })
}
export function updateBindingQr(param){
    return request({
        url:reqUrl.updateBindingQr,
        method: 'post',
        data:param
    })
}
export function queryKpAd(param){
    return request({
        url:reqUrl.queryKpAd,
        method: 'post',
        data:param
    })
}
export function checkLogin(param){
    return request({
        url:reqUrl.checkLogin,
        method: 'post',
        data:param
    })
}
export function querySCCarOwner(param){
    return request({
        url:reqUrl.querySCCarOwner,
        method: 'post',
        data:param
    })
}
export function queryLicensePlate(param){
    return request({
        url:reqUrl.queryLicensePlate,
        method: 'post',
        data:param
    })
}
export function saveSCTyreWarranty(param){
    return request({
        url:reqUrl.saveSCTyreWarranty,
        method: 'post',
        data:param
    })
}
export function saveSCZBYzm(param){
    return request({
        url:reqUrl.saveSCZBYzm,
        method: 'post',
        data:param
    })
}
export function storeUserLogin(param){
    return request({
        url:reqUrl.storeUserLogin,
        method: 'post',
        data:param
    })
}
export function queryCGMenuByPhone(param){
	return request({
		url:reqUrl.queryCGMenuByPhone, method: 'post', data:param
	})
}
export function saveCGUser(param){
	return request({
		url:reqUrl.saveCGUser, method: 'post', data:param
	})
}

