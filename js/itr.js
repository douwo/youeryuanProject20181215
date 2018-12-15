
$(function () {
    window.onload = function () {

        history_tab($('.inr_ftop a').eq(0))
        
        $(document).on("click", ".inr_ftop a", function () {
          var $_this=$(this);
          history_tab($_this)
          $_this.addClass("on").siblings().removeClass("on");
          imgratio()
        })
        $(".inr_fbottom>div").eq(0).show();
        // $(".inr_fbottom .bx-viewport").height($(".inr_fbottom .bx-viewport li").height())
    }

  

})


$(function () {


    backslider($('.inr_fbottom'));
    // var rtime = new Date();
    // var timeout = false;
    // var delta = 200;
    // $(window).resize(function () {
    //     rtime = new Date();
    //     if (timeout === false) {
    //         timeout = true;
    //         if (!$("html").hasClass("ie7")) {
    //             setTimeout(resizeend, delta); 
    //         }
    //     }
    // });
    // function resizeend() { 
    //     if (new Date() - rtime < delta) {
    //         setTimeout(resizeend, delta);
    //     } else {
    //         timeout = false;
    //         backslider($('.inr_fbottom'));
    //     }
    // }
});



function backslider(aaa) {
    aaa.each(function (index, element) {
        var obj = $(this)
        var num = 4;
        obj.find(".bx-clone").remove()
        obj.find("ul li,ul").attr({ "style": "" })
        var ulhtml = obj.find("ul")
        obj.remove(".bx-wrapper");
        obj.html(ulhtml);
        if($(window).width()>990){
            if($(".inr_fbottom li").length<4){
                obj.find("ul li").addClass("one").css("width","25%");
                obj.find("ul li").css("float","left")
                num = 4;
            }
        }
        if ($(window).width() < 1200) num =4;
        if ($(window).width() < 900) num = 3;
        if ($(window).width() < 768) num = 2;

        

        var xl = obj.width() / num;
        if (obj.find("ul li").size() >= num) {
            obj.find("ul").bxSlider({
                auto: false,
                mode: 'horizontal',
                minSlides: num,
                maxSlides: num,
                moveSlides: 1,
                slideWidth: xl,
                slideMargin:0,
                infiniteLoop: false,   
                pager:false,
                onSliderLoad:function(){
                    // $(".inr_fbottom .bx-viewport").height($(".inr_fbottom .bx-viewport li").height())
                 
                }
            });
        }
    });
}



function history_tab($_this){
    var url=$_this.data("src");
    if(url==null)return false;
    $.ajax({
        url:url,
        type:"GET",
        success: function (msg) {
            $(".inr_fbottom ul").html(msg);

            // if($(window).width()>990){
            //     if($(".inr_fbottom li").length<4){
                    
            //         $(msg).find("li").addClass("one")
            //         console.log($(msg).find("li"));

            //     }
            // }

            backslider($('.inr_fbottom'));
            imgratio();
            
            $(".vide0_close").click(function() {

            $(this).parents(".video_appbox").hide();
       
     });



    var srcl="",simg='',src2="";
    //高度计算
    // $(window).resize(function(){
    //     video()
    // })
    // $(window).resize();
    
    var isSupportTouch = "ontouchend" in document ? true : false;
    $(".video_button").click(function(e){
        srcl=$(this).data("video");
        src2=$(this).data("video1");
        simg=$(this).data("img");
        $(".video_appbox").fadeIn();
        video()
    })
    
    $(".video_appbox .mask").click(function(){
        $(".video_appbox").fadeOut();
        $(".video_t").html("")
    })
    

    
    function video(){

        if(isSupportTouch) {
            $(".video_t").html("<video width='500' height='400' src='"+ srcl +"' type='video/mp4' id='media' poster='"+ simg +"' controls='controls' preload='none'></video>")
            //
            $(".video_t video").attr({width:$(".video_t").width(),height:$(".video_t").height()})
        } else {
            videoBox($(".video_t").width(), $(".video_t").height(), src2,simg);
        }

    }
    
    function videoBox(width, height, url,img) {
        var s1 = new SWFObject("../flash/flvplayer.swf","single",width,height,"7");
        s1.addParam("allowfullscreen","true");
        s1.addParam("wmode","transparent");
        s1.addVariable("file",url);
        s1.addVariable("autostart","true");
        s1.addVariable("width",width);
        s1.addVariable("backcolor",0x000000);
        s1.addVariable("frontcolor",0xFFFFFF);
        s1.addVariable("lightcolor",0x000000);
        s1.addVariable("height",height);
        s1.write("player1");
    }
        }
    });
};





