define('app', [
    'jquery',
], function(jquery) {
    var moduleMsg = {
        Author: "dinglu",
        Name: "app",
        Version: "1.0.0"
    }
    $(function() {

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

        var showMoveMenu = ['index', 'szyw', 'djdt', 'zhdk', 'xjdx', 'djyj', 'qtgz', 'djzt', 'dyzq']; //显示漂浮的菜单
        var handleFullPage = function() {

            $("#ad_3").hide(); //默认隐藏漂浮广告

            $('#fullpage').fullpage({

                afterLoad: function(anchorLink, index) {
                    //是否显示漂浮广告 start
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
                    console.log(index)
                    console.log(direction)
                        //$('#section1').
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
        handleFullPage();
        handleInitializeLoad();
    })
    $('body').on('click', function() {
        alert(1)
    })
    $('body').on('scroll', function() {
        let oftop = $('.swiper-item').get(2).offsetTop
        if (oftop < 0) {

        } else {

        }
    })

    return {
        moduleMsg: moduleMsg
    }
})