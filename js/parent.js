

(function($){
      $(document).ready(function(){
          $(".parent_text").mCustomScrollbar();
          $(".univer_02 .right").outerHeight($(".univer_02 .left img").height());
          $(".univer_02 .right").mCustomScrollbar();
          // 常见问题
          $(".problem_box dl").eq(0).addClass("current");
          $(".problem_box dl").eq(0).find("dd").show();
          $(document).on("click", ".problem_box dt", function () {
				$(this).parent().toggleClass("current");
				 $(this).siblings().slideToggle(100);
		   })


      });
 })(jQuery);

