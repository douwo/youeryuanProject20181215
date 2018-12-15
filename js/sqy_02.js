
$(function () {



    
    //教育特色
    public_search($('.s_list01'));
    public_search($('.s_list02'));
    public_search($('.s_list03'));
    public_search($('.s_list04'));
    
    
    /*首页弹窗*/
    $('.fixed_form .mScrol2').css({
        height:$(window).height()-280
    });

    public_search($('.f_s_list02'));
    public_search($('.f_s_list03'));
    public_search($('.f_s_list04'));
    public_search($('.f_s_list05'));
    public_search($('.f_s_list06'));
    public_search($('.f_s_list08'));


    $('.fixed_form_btn').click(function(){
        $('.fixed_form').addClass('transform');
        $(".fixed_form .mScrol2").mCustomScrollbar("update");
    });
    $('.fixed_form .close').click(function(){
        $('.fixed_form').removeClass('transform');
    });

    $(document).on('click','.radio_btn label',function(){
        // $('.radio_btn label').removeClass('radio_img');
        $(this).addClass('radio_img').siblings().removeClass('radio_img');
    });
    
   
    //商务合作
    public_search_sex($('.sex_change'));
    //活动详情页
    
    $(window).resize(function(){
        setTimeout(function(){
        if($(window).width()>=1000){
            $('.active_con_bg .act_con_left').css({
                'height':$('.active_con_bg .act_con_right').height()
            });
        }
        $('.active_con_bg .act_con_edit').css({
            'height':$('.active_con_bg .act_con_right').height()-200
        });
        },200);
    });
    $(window).resize();

    //服务与合作
    maxHeight($('.cooper_con dl'));

   
    //加入我们  自定义下拉
    public_search($('.jion_selec'));
    
});
$(function () {

    $('.active_con02 .act02_con li dl:odd').css({
        'margin-right':0
    });

    if($('.active_con02 .act02_con li').length>1){
        bank_2($(".act02_ul"),1,0);
    }


    //窗口改变大小回调ratio；
    var rtime = new Date();
    var timeout = false;
    var delta = 200;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            if (!$("html").hasClass("ie7")) {
                setTimeout(resizeend, delta); //resize只回调最后一次
            }
        }
    });
    function resizeend() {  //window.resize回调
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;

            if($('.active_con02 .act02_con li').length>1){
                bank_2($(".act02_ul"),1,0);
            }
            // //家长大学
            // if($('.parent_c04_con li').length>3){
            //     $('.parent_c04_con').removeClass('parent_c04_con_other');
            //     if ($(window).width() >= 1024){
            //         bank_2($('.parent_c04_con'),3,25);
            //     }else if($(window).width() > 767 && $(window).width() < 1024){
            //         bank_2($('.parent_c04_con'),2,25);
            //     }else if($(window).width() < 767){
            //         bank_2($('.parent_c04_con'),1,0);
            //     }
                
            // }else{
            //     $('.parent_c04_con').addClass('parent_c04_con_other');
            // }
        }
    }
});

// function bank_2(obj,numb,m_right) {
//     obj.each(function (index, element) {
//         var obj = $(this)
//         var num = numb;
//         obj.find(".bx-clone").remove()
//         obj.find("ul li,ul").attr({ "style": "" })
//         var ulhtml = obj.find("ul")
//         obj.remove(".bx-wrapper");
//         obj.html(ulhtml);
//         var xl = obj.width() / num;
//         if (obj.find("ul li").size() >= num) {
//             slider=obj.find("ul").bxSlider({
//                 infiniteLoop: false,
//                 auto: false,
//                 mode: 'horizontal',
//                 minSlides: num,
//                 maxSlides: num,
//                 moveSlides: 1,
//                 slideWidth: xl,
//                 pager:false,
//                 controls:true,
//                 slideMargin:m_right
//             });
//         }

//     });
// } 

function maxHeight(DomH){

    DomH.attr("style", "");
    var narray = new Array();
    DomH.each(function () {
        narray.push($(this).innerHeight());
    })
    DomH.css({ "height": Math.max.apply(null, narray) })
}
//自动计算长度，并剔除html元素
// function clip(_this,leg){
//     _this.each(function(i) {
//     var leg = leg;
//     $(this).html($(this).text());
//         var copyThis = $(this.cloneNode(true)).hide().css({
//             'position': 'absolute',
//             'width': 'auto',
//             'overflow': 'visible'
//         }); 
//         $(this).after(copyThis);
//         if(copyThis.width()>$(this).width()){
//             $(this).html($(this).text().substring(0,leg)+'...');
//             copyThis.remove();
//         }else{
//             copyThis.remove(); //清除复制
//             return;
//         }
//     });
// }


$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

$(function(){
    $('.cooper_con .wrap>a:nth-child(2n)').addClass('a_ot');
})