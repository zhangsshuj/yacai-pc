//fontSize
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            console.log(clientWidth)
            if(!clientWidth) return;
            if(clientWidth <= 800) {
                docEl.style.fontSize = clientWidth / 10 + 'px';
            } 
        };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    win.addEventListener('resize', recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
