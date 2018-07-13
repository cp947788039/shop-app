/**
 * 作者：yujinjin9@126.com
 * 时间：2016-03-03
 * 描述：app 核心框架
 */
const site = {
	Config: {
		resourecePath: "", //资源服务路径
		serverPath: "", //服务路径
		version: "", //app版本
		releaseTime: "", //发布时间
		isDebug: true, //是否是前端调试状态
		innerVersion : "999.999.999", // 获得当前终端的版本号
		startVersion: "0.1.1", //app启动动画版本号
		isInsideApp : false, // 是否在APP应用环境内
		isWeiXin : false, //是否在微信环境内
		isApp: false, //是否是在app内
		device: {
			isAndroid : false, //是否在安卓环境内
			isIOS : false, //是否在IOS环境内
			model: null, //设备的型号
			imsi: null, //设备的国际移动用户识别码 ,//Android - 2.2+ (支持): 如果设备没有插入SIM卡，则返回空数组。|iOS - 4.5+ (不支持): iOS设备不支持获取SIM卡信息，返回空数组。
			vendor: null, // 设备的生产厂商
			uuid: null, //设备的唯一标识
			resolutionHeight: null, //设备屏幕高度分辨率
			resolutionWidth: null, //设备屏幕宽度分辨率
			scale: null, //逻辑分辨率与实际分辨率的比例
			version: null, //系统版本信息
			osName: null, //系统的名称
		}//设备信息
	},

	initApp() {
		//获取当前环境
		if(window.navigator && window.navigator.userAgent) {
			var ua = window.navigator.userAgent.toLocaleLowerCase();
			site.Config.isWeiXin = (ua.match(/MicroMessenger/i) == 'micromessenger');
		}
	},
};
site.initApp();
module.exports = site;