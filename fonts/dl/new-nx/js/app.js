// 初始化js



var App = function() {
    var handleInitializeLoad = function() {
        // if (!/msie/.test(navigator.userAgent.toLowerCase())) {
        //     $("#scene").parallax();
        // }
        $("#jgsz-menu a").on("click", function(event) {
            event.preventDefault();
            $(this).parent().addClass("active").siblings().removeClass("active");
            var showID = $(this).attr("href");
            $(showID).addClass("active").siblings().removeClass("active");
        });
        $("#department,#bureaus").mouseover(function() {
            $.fn.fullpage.setAllowScrolling(false);
        });
        $("#department,#bureaus").mouseout(function() {
            $.fn.fullpage.setAllowScrolling(true);
        });
        $("#department-cnt,#bureaus-cnt").slimScroll({
            height: '100%',
            alwaysVisible: true
        });

    };
    var showtopNav = function (index) {
        if (index > 2) {
            $(".headerout").show()
        } else {
            $(".headerout").hide()
        }
    }

    var showMoveMenu = ['index', 'szyw', 'djdt', 'zhdk', 'xjdx', 'djyj', 'qtgz', 'djzt', 'dyzq']; //显示漂浮的菜单
    var handleFullPage = function() {

        $("#ad_3").hide(); //默认隐藏漂浮广告

        $('#fullpage').fullpage({

            afterLoad: function(anchorLink, index) {
                //是否显示漂浮广告 start
                showtopNav(index)
                var isShowMove = false;
                for (var i = 0; i < showMoveMenu.length; i++) {
                    if (anchorLink == showMoveMenu[i]) {
                        isShowMove = true;
                    }
                }
                if (isShowMove) {
                    $("#ad_3").show();
                } else {
                    $("#ad_3").hide();
                }
                //是否显示漂浮广告 end

                // var curPage = "section" + index;
                // var a = $("#" + curPage).find(".block");
                // a.each(function() {
                //     $(this).addClass($(this).data("ani")).css("opacity", 1);
                // });
            },
            onLeave: function(index, nextIndex, direction) {
                    //$('#section1').
                if (nextIndex === 2 && index > 2) {
                    showtopNav(index)
                } else {
                    showtopNav(nextIndex)
                }
                var curPage = "section" + index;
                // var a = $("#" + curPage).find(".Tb");
                // console.log(a)
                if ($("#" + curPage).find(".Tb")) {
                    // $(".zt-logo").show();
                    // $(".app-qrcode").show()
                } else {
                    $("#header").show();
                }
                // a.each(function() {
                //     $(this).removeClass($(this).data("ani")).css("opacity", 0);
                // });

            },
            resize: false,
            noscroll: ['sidebar', 'layui-layer', 'layui-layer-shade', 'section'],
            scrollOverflow: true,
            verticalCentered: false,
            fitToSection: false,
            paddingTop: 0,
            paddingBottom: 0,
            anchors: ['index', 'szyw', 'djdt', 'zhdk', 'xjdx', 'djyj', 'qtgz', 'djzt', 'dyzq'],
            menu: '#menu',
            fixedElements: '#fedwm'
        });

    };

    return {
        init: function() {
            handleFullPage();
            handleInitializeLoad();
        }
    }
}();

jQuery(function() {
    App.init();
    
});