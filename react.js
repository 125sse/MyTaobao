$(document).ready(function () {

    $("#seachHistory a:lt(3)").css({"color":"rgba(255,66,0,1)"});

    // header的文字鼠标进出
    $("#header>a:gt(0)").hover(function () {
       $(this).css({"color":"rgba(255,66,0,1)"});
    },function () {
        $(this).css({"color":"rgba(0,0,0,0.6)"});
    });

    // seachHistory的文字鼠标进出
    $("#seachHistory a:gt(2)").hover(function () {
        $(this).css({"color":"rgba(255,66,0,1)"});
    },function () {
        $(this).css({"color":"rgba(0,0,0,1)"});
    });

    // 保存图片的路径的数组
    var picArray = ["bb.jpg","cs.jpg","dn.jpg","sb.jpg","sj.jpg","xz.jpg","yx.jpg",
        "a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.jpg","i.jpg","j.jpg","k.jpg",
        "l.jpg","m.jpg","n.jpg","o.jpg","p.jpg",];
    var pLength = picArray.length;
    var hot_img = ["hot_a.jpg","hot_b.jpg","hot_c.jpg","hot_d.jpg","hot_e.jpg"]

    // 鼠标的进出显示边框
    $(".container").hover(function () {
        $(this).addClass("container_hover");
        $(this).find(".des").css("text-decoration","underline");
    },function () {
        $(this).removeClass("container_hover");
        $(this).find(".des").css("text-decoration","none");
    });

    // 给每个商品设置图片
    $(".picture").each(function () {
        var index = Math.floor(Math.random()*pLength);
        $(this).css("background-image","url("+"images/"+picArray[index]+")");
    });

    // 给掌柜热卖的商品设置图片
    $(".hot_picture").each(function (index) {
        $(this).css("background-image","url("+"images/"+hot_img[index]+")");
    });

    // 价格区间的焦点事件
    $("#select_left_price>input").focus(function () {
        $("#select_left_price").css({"z-index":"1","box-shadow":"0 1px 5px rgba(0,0,0,0.4)","border":"1px solid rgba(0,0,0,0.1)"});
        $("#select_left_price>button").css("visibility","visible");
        $("#select_left_address").css({"z-index":"0","left":"-4.3%"});
    });

    $("#select_left_price>input").blur(function () {
        $("#select_left_price").css({"z-index":"0","box-shadow":"none","border":"none"});
        $("#select_left_price>button").css("visibility","hidden");
        $("#select_left_address").css({"z-index":"1","left":"-5%"});
    });

    // 窗口滚动时显示scrollShow_DIV
    $(window).scroll(function () {
        if($(window).scrollTop()>=232){
            $("#scrollShow").css({"width":"100%","height":"60px","border-bottom":"1px solid rgba(255,255,255,1)"});
            $("#scrollShow_logo").css({"height":"100%"});
            $("#scrollShow_seach").css({"height":"65%","border":"2px solid rgba(255,66,0,1)"});
            // $("#scrollShow_seach").focus();
            $("#scrollShow_btn").css({"height":"65%"});
            $("#scrollShow_btn").html("搜索");
        }else{
            $("#scrollShow").css({"width":"0","height":"0","border-bottom":"none"});

            $("#scrollShow_logo").css({"height":"0"});

            $("#scrollShow_seach").css({"height":"0","border":"none"});
            $("#scrollShow_seach").val("");
            // $("#scrollShow_seach").blur();

            $("#seachInput").focus();

            $("#scrollShow_btn").css({"height":"0"});
            $("#scrollShow_btn").html("");
        }
    });



});