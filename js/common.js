
$(function(){

        $(".system dl:odd").addClass("current");
        $(document).on("click", ".sty_more", function () {
          
          $(this).toggleClass("on");
          $(this).parent("dd").toggleClass("ones");
          $(this).siblings(".sty_text").stop().slideToggle()

        })

		$(".home_block01 dd ul").each(function(){
			if($(this).find("li").size()<=3){
				$(this).find("li").addClass("onwidth")
			}
		})






  

	$(window).load(function(){
		
		$(window).resize(function(){
			$("#intr_0").mCustomScrollbar({});
			$(".intr_02 .right li:last").addClass("last");
			$(".intr_02 .right li").eq(0).addClass("current")
			$(".intr_02 .right").outerHeight($(".intr_02 .left").outerHeight(true));
			var ddheight=$(".intr_02 .right li dt").height()*4+36;
			

			
			$(".intr_02 .right dd").height(0);
			$(".intr_02 .right li.current dd").outerHeight($(".intr_02 .right").outerHeight()-ddheight);
			$(".intrqus_0").mCustomScrollbar("destroy");
			 $(".intrqus_0").mCustomScrollbar({});

			 if($(".intr_02 .right li").hasClass("current")){
			 	
			 }

			$(document).on("click", ".intr_02 .right dt", function () {

				$(this).parent().parent().addClass("current");
				$(this).parent().parent().siblings().removeClass("current");
				$(".intr_02 .right dd").height(0);
				$(".intr_02 .right li.current dd").outerHeight($(".intr_02 .right").outerHeight()-ddheight);
				$(".intrqus_0").mCustomScrollbar("destroy");
				$(".intrqus_0").mCustomScrollbar({});

		    })

		    // 课程体系
		    // $(".system dl:odd").addClass("current");
		    // $(document).on("click", ".sty_more", function () {
		      
		    //   $(this).toggleClass("on");
		    //   $(this).siblings(".sty_text").stop().slideToggle()

		    // })
		    // 课程体系

			// 教育特色
			$(".spe_text").outerHeight($(".spe_top dt").height()-$(".spe_top dd h1").height());
			$(".block_01_text .special_block01:last").addClass("last");

			$(document).on("click", ".sp_more a", function () {
				$(this).parent().stop().toggleClass("mare");
				$(this).parent().siblings(".sptextin").stop().toggleClass("ones");
		    })
		    // 教育特色
			// 企业概括
			// $(".pro_two03 .left li").eq(0).addClass("on");
			// $(".pr_rightin ul").eq(0).show();
			// $(document).on("click", ".pro_two03 .left li", function () {
				
			// 	$(this).addClass("on").siblings().removeClass("on");
			// 	$(".pr_rightin ul").eq($(this).index()).show().siblings().hide();

		 //    })
			// 企业概括
			// 伊顿校刊
			$(".mag_in .right").height($(".mag_in .left").height())
			// 伊顿校刊
			// Etonkids 
			$(".eton2_lock_b").each(function(){
				$(this).find(".et_text ul:last").addClass("last");
			})

			$(".etonb_top li").eq(0).addClass("on");
			$(".etonb_bottom>div").eq(2).show();
			$(document).on("click", ".etonb_top li", function () {
				$(this).addClass("on").siblings().removeClass("on");
		    })
	        $(".eton_bottom .left ul li,.etonb_top li").each(function(index, el) {

	        	$(this).click(function(event) {

	        		$(".etonb_bottom>div").eq(index).show().siblings().hide();
	        	});
	        });

			


			


		    





			// Etonkids 


	   	})
    	$(window).resize();     
	})   


})


    $(function(){
            // 企业概括
            $(".pro_two03 .left li").eq(0).addClass("on");
            $(".pr_rightin>div").eq(0).show();
            $(document).on("click", ".pro_two03 .left li", function () {
                
                $(this).addClass("on").siblings().removeClass("on");
                $(".pr_rightin>div").eq($(this).index()).show().siblings().hide();

            })
            // 企业概括

            $(".et_towtop li").eq(0).addClass("on");
			$(".et_toebottom>div").eq(0).show();
			$(document).on("click", ".et_towtop li", function () {
				$(this).addClass("on").siblings().removeClass("on");
				$(".et_toebottom>div").eq($(this).index()).show().siblings().hide();

		    })
    })

// Etonkids 行高01

  window.onload = function () {
    $(window).resize(function(){
    function height1(divHight,divName){
        var num = Math.round($('.et_four_top').width()/$('.et_four_top li:eq(0)').width());
        var h=divHight;
        var liCount=divName;
        var storkCount=0;
        h.each(function(i){
            var prevLi=i-1;
            if(prevLi<0){
                prevLi=0;
            };
            if(i%num==0){
                storkCount++;
            }; 
            $(this).addClass(liCount+storkCount);
        });
        Array.prototype.max = function() {
            return Math.max.apply({},this);
        };

        var storkArr=[];
        var maxNum=0;
        for(var i=1; i<(storkCount+1); i++){
            $("."+liCount+i).each(function(){
                storkArr.push($(this).find(".et_four_toptext").height());
            });
            maxNum=storkArr.max();
            $("."+liCount+i+" .et_four_toptext").height(maxNum);
            storkArr=[];
        };
   };


     height1($(".et_four_top li"),"et_four_top");
    
    })
    $(window).resize();
}

 
// Etonkids 行高02
  window.onload = function () {
    $(window).resize(function(){
    function height2(divHight,divName){
        var num = Math.round($('.etab_table').width()/$('.etab_table li:eq(0)').width());
        var h=divHight;
        var liCount=divName;
        var storkCount=0;
        h.each(function(i){
            var prevLi=i-1;
            if(prevLi<0){
                prevLi=0;
            };
            if(i%num==0){
                storkCount++;
            }; 
            $(this).addClass(liCount+storkCount);
        });
        Array.prototype.max = function() {
            return Math.max.apply({},this);
        };

        var storkArr=[];
        var maxNum=0;
        for(var i=1; i<(storkCount+1); i++){
            $("."+liCount+i).each(function(){
                storkArr.push($(this).find(".p_in").height());
            });
            maxNum=storkArr.max();
            $("."+liCount+i+" .p_in").height(maxNum);
            storkArr=[];
        };
   };


     height2($(".etab_table li"),"etab_table");
    
    })
    $(window).resize();
} 

// Etonkids 行高03
  window.onload = function () {
    $(window).resize(function(){
    function height2(divHight,divName){
        var num = Math.round($('.eton_tabheight').width()/$('.eton_tabheight .eton2_lock_b:eq(0)').width());
        var h=divHight;
        var liCount=divName;
        var storkCount=0;
        h.each(function(i){
            var prevLi=i-1;
            if(prevLi<0){
                prevLi=0;
            };
            if(i%num==0){
                storkCount++;
            }; 
            $(this).addClass(liCount+storkCount);
        });
        Array.prototype.max = function() {
            return Math.max.apply({},this);
        };

        var storkArr=[];
        var maxNum=0;
        for(var i=1; i<(storkCount+1); i++){
            $("."+liCount+i).each(function(){
                storkArr.push($(this).find(".eton2_lock_btext").height());
            });
            maxNum=storkArr.max();
            $("."+liCount+i+" .eton2_lock_btext").height(maxNum);
            storkArr=[];
        };
   };


     height2($(".eton_tabheight .eton2_lock_b"),"eton_tabheight");
    
    })
    $(window).resize();
} 
// 加载
$(function () {
    window.onload = function () {

        etonkid($('.etonkid_01 li').eq(0).addClass("on"))
        
        $(document).on("click", ".etonkid_01 li", function () {
          var $_this=$(this);

          etonkid($_this)
          $_this.addClass("on").siblings().removeClass("on");
          imgratio()

        })
       
    }

  

})

function etonkid($_this){
    var url=$_this.data("src");
    if(url==null)return false;
    $.ajax({
        url:url,
        type:"GET",
        success: function (msg) {
            $(".eton_ajax").html(msg);
            imgratio();

            $(".etonb_top li").eq(0).addClass("on");
			$(".etonb_bottom>div").eq(2).show();
			$(document).on("click", ".etonb_top li", function () {
				$(this).addClass("on").siblings().removeClass("on");
		    })
	        $(".eton_bottom .left ul li,.etonb_top li").each(function(index, el) {

	        	$(this).click(function(event) {

	        		$(".etonb_bottom>div").eq(index).show().siblings().hide();
	        	});
	        });
	        $(".eton2_lock_b").each(function(){
				$(this).find(".et_text ul:last").addClass("last");
			})

			$(".etab_five02 .etab_table ul:last").addClass("ullast")

			$(".child_block01 li").eq(0).addClass("on")
			// $(".etab_table ul").each(function(){
			// 	$(this).find("li").eq(1).addClass("twos");
			// })
            	// height01
            	 function height1(divHight,divName){
			        var num = Math.round($('.et_four_top').width()/$('.et_four_top li:eq(0)').width());
			        var h=divHight;
			        var liCount=divName;
			        var storkCount=0;
			        h.each(function(i){
			            var prevLi=i-1;
			            if(prevLi<0){
			                prevLi=0;
			            };
			            if(i%num==0){
			                storkCount++;
			            }; 
			            $(this).addClass(liCount+storkCount);
			        });
			        Array.prototype.max = function() {
			            return Math.max.apply({},this);
			        };

			        var storkArr=[];
			        var maxNum=0;
			        for(var i=1; i<(storkCount+1); i++){
			            $("."+liCount+i).each(function(){
			                storkArr.push($(this).find(".et_four_toptext").height());
			            });
			            maxNum=storkArr.max();
			            $("."+liCount+i+" .et_four_toptext").height(maxNum);
			            storkArr=[];
			        };
			   };


			     height1($(".et_four_top li"),"et_four_top");
			   // height01
			   // height02
			   function height2(divHight,divName){
			        var num = Math.round($('.etab_table').width()/$('.etab_table li:eq(0)').width());
			        var h=divHight;
			        var liCount=divName;
			        var storkCount=0;
			        h.each(function(i){
			            var prevLi=i-1;
			            if(prevLi<0){
			                prevLi=0;
			            };
			            if(i%num==0){
			                storkCount++;
			            }; 
			            $(this).addClass(liCount+storkCount);
			        });
			        Array.prototype.max = function() {
			            return Math.max.apply({},this);
			        };

			        var storkArr=[];
			        var maxNum=0;
			        for(var i=1; i<(storkCount+1); i++){
			            $("."+liCount+i).each(function(){
			                storkArr.push($(this).find(".p_in").height());
			            });
			            maxNum=storkArr.max();
			            $("."+liCount+i+" .p_in").height(maxNum);
			            storkArr=[];
			        };
			   };


			     height2($(".etab_table li"),"etab_table");
			   // height02
			   // height03
			   function height3(divHight,divName){
			        var num = Math.round($('.eton_tabheight').width()/$('.eton_tabheight .eton2_lock_b:eq(0)').width());
			        var h=divHight;
			        var liCount=divName;
			        var storkCount=0;
			        h.each(function(i){
			            var prevLi=i-1;
			            if(prevLi<0){
			                prevLi=0;
			            };
			            if(i%num==0){
			                storkCount++;
			            }; 
			            $(this).addClass(liCount+storkCount);
			        });
			        Array.prototype.max = function() {
			            return Math.max.apply({},this);
			        };

			        var storkArr=[];
			        var maxNum=0;
			        for(var i=1; i<(storkCount+1); i++){
			            $("."+liCount+i).each(function(){
			                storkArr.push($(this).find(".eton2_lock_btext").height());
			            });
			            maxNum=storkArr.max();
			            $("."+liCount+i+" .eton2_lock_btext").height(maxNum);
			            storkArr=[];
			        };
			   };


			     height3($(".eton_tabheight .eton2_lock_b"),"eton_tabheight");
			   // height03


			   $(".etab_table ul").each(function(){
			   	
			   	$(this).children("li:last").addClass("lilast")

			   	
			   })


        }
    });
};






/*手机端链接改为本窗口打开*/
function phoneTargetSelf(context){  
  if ($(window).width()<1024) {
    if(context==undefined){
      context=$(document);
    }
    $('a',context).each(function(){
      var target=$(this);
      var link=target.attr('target');
      target.attr('target','_self');
    })
  }
}

/*电话链接取消默认事件并添加样式*/
function findTel(context){
  if ($(window).width()>1024) {
    var condition = /^tel\:([0-9\-]+)|tel\:\+([0-9\-]+)$/;
    if(context==undefined){
      context=$(document);
    }
    $('a',context).each(function(index, el) {
      var target=$(this);
      var href=target.attr('href');
      if (condition.test(href)) {
        target.addClass('tel_link');
        target.on('click',function(event){
          event.preventDefault();
        })
      }
    });
  }
}


$(function(){
	phoneTargetSelf();
	findTel();
	
})


// 2018-03-13
$(function(){
    var documentheight=$(document).outerHeight(true);
    var headerheight=$(".header").outerHeight(true);
    var bannerheight=$(".banner_site").outerHeight(true);
    var blockheight=$(".block_01").outerHeight(true);
    var blockheight02=$(".block_02").outerHeight(true);
    var editheight=$(".child_block01 .edit_con_original").outerHeight(true);


    var chaheight=blockheight+bannerheight;
    var chaheight01=editheight+bannerheight;
    var chaheight02=blockheight+bannerheight+blockheight02;

    if($(window).width()>800){
        $(document).on("click",".child_block01 li",function(){
            $("html,body").animate({scrollTop:chaheight01},700);
        })

        $(document).on("click",".block_scoll .item_tit li",function(){
            $("html,body").animate({scrollTop:chaheight02},700);
        })


        $(document).on("click",".team_block02 li",function(){
            $("html,body").animate({scrollTop:bannerheight},700);
        })

    }


})









