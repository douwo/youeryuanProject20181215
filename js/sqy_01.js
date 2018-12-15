
$(function () {


    //头部右侧搜索下拉
    $(document).on('click','.search_city',function(e){
        var s_h=$(this).find('.selec_con');
        if(s_h.css('display')=='none'){

            $('.search_city .selec_con').hide();
            $('.search_city').removeClass('city_style');
            if(s_h.find('li').length>0){
                s_h.show();
                $(this).addClass('city_style');
            }
            
        }else{
            s_h.hide();
            $(this).removeClass('city_style');
        }

        $(".search01 .mScrol").mCustomScrollbar("update");
        $(".search02 .mScrol").mCustomScrollbar("update");

        e.stopPropagation();
    });


    $(function(){
        $(".visit_sele .search_list ").click(function(e){
           
         
            e.stopPropagation();
           
            
        })
        $(document).click(function(){           
            $(".public_search .selec_con").hide();
            $(".public_search .search_list").removeClass("city_style")
        })
    })



    var aLi=$('.selec_con li');
    for(var i=0;i<aLi.length;i++){
      aLi.eq(i).click(function(e){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents('.search_city').find('.show_text').html($(this).text());
        $(this).parents('.search_city').find('.selec_con').css('display','none');
        $(this).parents('.search_city').removeClass('city_style');
        e.stopPropagation();
      });
    };
    $(document).click(function(){
        $('.search_city').removeClass('city_style');
      $('.search_city .selec_con').hide();
    });
    
    (function($){
        $(window).load(function(){
            $(".mScrol").mCustomScrollbar({
                theme:"rounded-dots",
                autoHideScrollbar:true
            });
        });
    })(jQuery);
    (function($){
        $(window).load(function(){
            $(".mScrol2").mCustomScrollbar({
                theme:"rounded-dots",
                autoHideScrollbar:true
            });
        });
    })(jQuery);




    //         $(".search_list ").click(function(e){
           
//             e.preventDefault();
//             e.stopPropagation();
           
            
//         })
//         $(document).click(function(){           
//             $(".public_search .selec_con").hide();
//             $(".search_list").removeClass("city_style")
//         })
  
});

function public_search(scroll){
    scroll.click(function(){
        var s_h=$(this).find('.selec_con');
        if(s_h.css('display')=='none'){
            
            $('.search_list').find('.selec_con').css('display','none');
            $('.search_list').removeClass('city_style');
            if(s_h.find('li').length>0){
                s_h.show();
                $(this).addClass('city_style');
            }
        }else{
            s_h.hide();
            $(this).removeClass('city_style');
        }
        scroll.find(".mScrol").mCustomScrollbar("update");
   
    });
    var aLi=$('.selec_con li');
    for(var i=0;i<aLi.length;i++){
      aLi.eq(i).click(function(e){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents('.search_list').find('.show_text').html($(this).text());
        $(this).parents('.search_list').find('.selec_con').css('display','none');
        $(this).parents('.search_list').removeClass('city_style');
        e.stopPropagation();
      });
    };
 
}

function public_search_sex(scroll){
    scroll.click(function(){
        var s_h=$(this).find('.selec_con');
        if(s_h.css('display')=='none'){
            
            $('.search_list').find('.selec_con').css('display','none');
            $('.search_list').removeClass('city_style');
            if(s_h.find('li').length>0){
                s_h.show();
                $(this).addClass('city_style');
            }
        }else{
            s_h.hide();
            $(this).removeClass('city_style');
        }
   
    });
    var aLi=$('.selec_con li');
    for(var i=0;i<aLi.length;i++){
      aLi.eq(i).click(function(e){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents('.sex_change').find('.show_text').html($(this).text());
        $(this).parents('.sex_change').find('.selec_con').css('display','none');
        $(this).parents('.sex_change').removeClass('city_style');
        e.stopPropagation();
      });
    };
    
}
