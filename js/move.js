var move = (function(a) {
    var touchTarget = function(obj) {
        var tar = document.querySelector(obj.tar);
        var startx, movex;
        var falg = false;
        tar.addEventListener('touchstart', function(e) {
            //手指坐标集合
            var touch = e.touches[0];
            falg = true;
            startx = touch.clientX - tar.offsetLeft;

        }, false);
        tar.addEventListener('touchmove', function(e) {
            var touch = e.touches[0];
            if (falg) {
                movex = touch.clientX - startx;
                tar.style.left = movex + 'px';
            }

        }, false);
        tar.addEventListener('touchend', function() {
            falg = false;
        }, false);
    };
    return {
        touchTarget: touchTarget
    }

})(window);