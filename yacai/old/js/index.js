$('.content img').mouseenter(function(){
    $(this).addClass('animated pulse')
})
$('.content img').mouseleave(function(){
    $(this).removeClass('animated pulse')
})
// 判断移动端还是PC端
let isPhone=false
if (/(ipad|ipod|iphone|android|midp|mobile)/i.test(navigator.userAgent.toLowerCase())) { //移动端
    isPhone=true
}
$("#qrcodeCon").hide()
showDownloadApp = function () {
    if (!isPhone) {
        $("#qrcodeCon").show()
    }
}
hideDownloadApp = function () {
    if (!isPhone) {
        $("#qrcodeCon").hide()
    }
}
showDownloadApp1 = function () {
    if (isPhone) {
        window.location.href='https://www.wericher.com/app/index.html'
    }
}
$(window).scroll(function () {
    var headerHei = Number($(".header").css('height').split("px")[0])
    var bannerHei = Number($(".header").css('height').split("px")[0]-(-$(".banner").css('height').split("px")[0]))
    var appIndex =  Number($(".app-index").css('height').split("px")[0])
    var appQingdan =  Number($(".app-qingdan").css('height').split("px")[0])
    var appDetails =  Number($(".app-details").css('height').split("px")[0])
    var appMy =  Number($(".app-my").css('height').split("px")[0])
    var a = $(window).scrollTop()
    if (a > headerHei) {
        $('.header').addClass('header-position animated bounce')
    } else if (a <= 0) {
        $('.header').removeClass('header-position animated bounce')
    }
    if (a >= bannerHei-50) {
        $('.app-index .left').addClass('animated bounceInLeft')
        $('.app-index .right').addClass('animated bounceInRight')
    }else{
        $('.app-index .left').removeClass('animated bounceInLeft')
        $('.app-index .right').removeClass('animated bounceInRight')
    }
    if (a >= bannerHei+appIndex-50) {
        $('.app-qingdan .left').addClass('animated bounceInLeft')
        $('.app-qingdan .right').addClass('animated bounceInRight')
    }else{
        $('.app-qingdan .left').removeClass('animated bounceInLeft')
        $('.app-qingdan .right').removeClass('animated bounceInRight')
    }

    if (a >=  bannerHei+appIndex+appQingdan-50) {
        $('.app-details  .left').addClass('animated bounceInLeft')
        $('.app-details  .right').addClass('animated bounceInRight')
    }else{
        $('.app-details  .left').removeClass('animated bounceInLeft')
        $('.app-details  .right').removeClass('animated bounceInRight')
    }

    if (a >= bannerHei+appIndex+appQingdan+appDetails-100) {
        $('.app-my .left').addClass('animated bounceInLeft')
        $('.app-my .right').addClass('animated bounceInRight')
    }else{
        $('.app-my .left').removeClass('animated bounceInLeft')
        $('.app-my .right').removeClass('animated bounceInRight')
    }
})