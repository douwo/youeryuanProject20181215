$(function(){
    $(".back_top").click(function(){
    $("html,body").stop().animate({scrollTop:0});
  })
  
  $(window).scroll(function(){
    if($(window).scrollTop()>0){
      $(".back_top").show().stop().animate({"opacity":0.5});
    }else{
      $(".back_top").stop().animate({"opacity":0},function(){
        $(".back_top").hide();
      });
    }
  })

    //头部导航滚动动画
    $(window).scroll(function () {
        var tp = $(window).scrollTop();
        if (tp > 20) {
            $(".header").addClass("scroll");
            $("body").addClass("dabody");
        }
        else {
            $(".header").removeClass("scroll");
            $("body").removeClass("dabody");
        }


        if (tp > $(".banner").height()/2) {
            $(".banner_right").addClass("seite");
        }
        else {
            $(".banner_right").removeClass("seite");
        }


    })





    $(".header .nav ul li:first").addClass("lifirst")
    $(".header .nav ul li:last").addClass("lilst")
    $(".header .nav ul li").each(function(){
      $(this).find("ul li:last").addClass("last")
    })
    $(".header .nav>ul>li").mouseenter(function(){
      $(this).children("ul").show();
    });
    $(".header .nav>ul>li").mouseleave(function(){
      $(this).children("ul").hide();
    })

     //--------------模拟下拉
  $(document).on("click", ".input_box dt", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass("open");
      if ($(this).hasClass("open")) {
          $(this).parents(".input_box").find("dd").show();
      }
      else {
          $(this).parents(".input_box").find("dd").hide();
      }
    $(this).parents("li").siblings().find("dd").hide();
    $(this).parents("li").siblings().find("dt").removeClass("open");
  })
  $(document).on("click", ".input_box dd a", function (e) {
      $(this).addClass("on").siblings().removeClass("on");
      $(this).parents(".input_box").find("dt").text($(this).text());
      $(this).parents(".input_box").next(".select-hidden").val($(this).attr("data-val"));

      $(".input_box dt").removeClass("open");
      $(".input_box dd").hide();
  })
  $(document).click(function () {
      $(".input_box dt").removeClass("open");
      $(".input_box dd").hide();
  })
    //end

    // 预约开始
    $(".f_sex label").eq(0).addClass("on")

    var headerheight=$(".header").outerHeight();
    // $(".site_y").css("top",headerheight);
    $(".banner_right dl.pc_yy").click(function(e){
       e.preventDefault();
      e.stopPropagation();
      $(".site_y").addClass("y_tam");
      $(".site_ybg").fadeIn();
      
    })
     
     $(document).on("click", ".site_y", function (e) {    
          e.preventDefault();
          e.stopPropagation();

          
          
      })
      $(document).click(function(){           
          $(".site_y").removeClass("y_tam");
            $(".site_ybg").fadeOut();
      })

    $(document).on("click", ".f_sex label", function () {

      $(this).addClass("on").siblings().removeClass("on")
     })

    // end
    // erweima 
    $(".banner_right dl.pc_erm").click(function(event) {
      $(".tac_bg").height($(document).height());
      $(".tac_bg").stop().fadeTo(0,0.3);
      $(".nlock_box").fadeIn().show().css("top",$(window).height()/2-$(".nlock_box").height()/2)
    });
    $(".nlock_box .qiubi_1").click(function(event) {
      $(this).parent().fadeOut().hide();
      $(this).parent().prev().hide();
      
    });


    // 手机导航
    
    $(document).on('click', '.nav_phone_btn,.nav_phone_tit .button', function () {
        $('.nav_phone_con>ul>li').removeClass('on');
        $('.nav_phone_btn').toggleClass('visible_nav');
        $('body').toggleClass('body_nav_phone');
    });

    $(document).on('click', '.nav_phone_con>ul>li', function () {
        $(this).addClass('on');
    });
    $(document).on('click', '.nav_phone_con>ul>li ul>li:first-child', function (e) {
        $('.nav_phone_con>ul>li').removeClass('on');
        e.stopPropagation();
    });


    


  })


$(function(){


   //(function($){
    //    $(window).load(function(){
    //        $(".comm_sele .f_leinput ul").mCustomScrollbar({
    //            theme:"rounded-dots",
     //           autoHideScrollbar:true
     //       });
    //    });
   // })(jQuery);


    
      //comselest();


       //$(".f_center .cx_parktop .public_search .search_list").click(function(e){
           // e.preventDefault();
          //  e.stopPropagation();
       // })

     // $(".site_y_in,.f_bottom li .Wdate").click(function(){
     //   $(".y_tam .public_search .selec_con").hide();
    //    $(".f_center .cx_parktop .public_search .search_list").removeClass("city_style")
    //  })



})


function comselest(){

  $(".f_leinput input").keyup(function(){
        if($(this).val() != ""){
          $(".f_leinput ul").show();

        }else{
          $(".f_leinput ul").hide();
          
        }


        $(".f_leinput input").blur(function(){
            $(".f_leinput ul").hide();
        })
        $(".f_leinput input").focus(function(){
            $(".f_leinput ul").show();
        })


        $(".comm_sele .f_leinput ul").mCustomScrollbar("update");

      });
}


$(function(){
         $(".f_center .cx_parktop .public_search .search_list,.f_bottom .public_search .search_list").click(function(e){
           e.preventDefault();
           e.stopPropagation();
       })

     $(".site_y_in,.f_bottom li .Wdate").click(function(){
       $(".y_tam .public_search .selec_con").hide();
       $(".f_center .cx_parktop .public_search .search_list,.f_bottom .public_search .search_list").removeClass("city_style")
     })

     $(".parent_select .public_search .selec_con ul li").click(function(){
      $(this).parents(".selec_con").siblings(".show_text").removeClass("show_cur")
     })


})

