$(function () {

    $.ajaxSetup({cache: true});

    // Fix scrolling issue on Mobile Safari.
    if ($(window).width() < 768) {
        $(window).scrollTop(0);
    }

    // Make external links open in a new tab/window.
    (function () {
        var urlRegExp = new RegExp('^(\/|(https?:)?\/\/' + window.location.host + ')');
        $('a').each(function () {
            var $a = $(this);
            if (!urlRegExp.test($a.attr('href'))) {
                $a.attr('target', '_blank');
            }
        });
    })();

});

function makeFullScreen(e) {
    var divObj = e;
    //Use the specification method before using prefixed versions
    if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
    }
    else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();
    }
    else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();
    }
    else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();
    } else {
        console.log("Fullscreen API is not supported");
    }

}
