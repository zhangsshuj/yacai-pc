
var ua = navigator.userAgent.toLowerCase();
var boInfo = {};
var platform = navigator.platform;
let browser = ''

let androidOrIos =''
// 判断浏览器类型
if (ua.includes('micromessenger')) {
    boInfo.BROWSER = '微信'
    browser='selfBrowser'
} else if (ua.match(/\bqq\b/i) == "qq") {
    boInfo.BROWSER = 'QQ'
    browser='selfBrowser'
} else if (ua.includes('alipayclient')) {
    boInfo.BROWSER = '支付宝浏览器'
    browser='selfBrowser'
} else if (ua.includes('weibo')) {
    boInfo.BROWSER = '新浪微博浏览器'
    browser='selfBrowser'
} else if (ua.includes('ucbrowser')) {
    boInfo.BROWSER = 'UC浏览器'
    browser='openBrowser'
} else if (ua.includes('safari')) {
    boInfo.BROWSER = 'safari浏览器'
    browser='openBrowser'
} else if (ua.includes('chrome')) {
    boInfo.BROWSER = 'chrome浏览器'
    browser='openBrowser'
} else if (ua.includes('msie')) {
    boInfo.BROWSER = 'msie浏览器'
    browser='openBrowser'
} else if (ua.includes('trident')) {
    boInfo.BROWSER = 'trident浏览器'
    browser='openBrowser'
} else {
    boInfo.BROWSER = '其他浏览器';
    browser='openBrowser'
}

// 判断是Android还是iOS
console.log(ua)
if (ua.indexOf('android') > -1 || ua.indexOf('adr') > -1) { // android终端
    androidOrIos= 'android'
} else if (!!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/)) { // ios终端
    androidOrIos= 'ios'
}
