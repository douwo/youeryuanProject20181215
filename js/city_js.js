$(function(){


//获取json数据
    $.getJSON(city_url,function(data){
        areaJson = data;
        province();
    });

    $(".public_search").parents('.input').addClass('input_pos');
    var temp_html='';
    var oProvince = $(".public_search").find(".province");
    var oCity = $(".public_search").find(".city");
    var oDistrict = $(".public_search").find(".district");

    //初始化省
    var province = function(){

            $.each(areaJson.citylist,function(i,province){
                temp_html+="<li data-value='"+province.p+"'><span>"+province.p+"</span></li>";
            });

            oProvince.html(temp_html);
            public_search_city($('.f_s_list07 .show_text'));
            public_search_city($('.f_s_list07 .down_btn'));
            liClick('.f_s_list07 li');
            public_search_city($('.f_s_list01 .show_text'));
            public_search_city($('.f_s_list01 .down_btn'));
            liClick('.f_s_list01 li');

    };

}) 
function liClick (liClick){
    $(document).on('click',liClick,function(e){
            $(this).parents('.search_list').find('.show_text').html($(this).text());
            $(this).parents('.search_list').removeClass('city_style');
            $(this).parents('.selec_con').hide();
           
           city_index=$(this).index()
           var select02 =$(this).parents('.public_search');
           getslt(select02,$(this).index(),city_index);

           e.stopPropagation();
    });
}

var areaJson;
var city_index;
var cold=false;


function getslt(select02,idx,city_index){
    var temp_html2='';
    select02.find('.f_s_list08 .show_text').html('-选择市/区-');
    select02.find('.f_s_list02 .show_text').html('-选择市/区-');
    select02.find('.f_s_list09 .show_text').html('-选择县-');
    var n = idx;
    $.each(areaJson.citylist[n].c,function(i,city){
        temp_html2+="<li data-value='"+city.n+"'><span>"+city.n+"</span></li>";
    });
    select02.find('ul.city').html(temp_html2);
    public_search_city($('.f_s_list08 .show_text'));
    public_search_city($('.f_s_list08 .down_btn'));
    $(".f_s_list08 .mScrol").mCustomScrollbar("update");
    liClick2('.f_s_list08 li',city_index);

    public_search_city($('.f_s_list02 .show_text'));
    public_search_city($('.f_s_list02 .down_btn'));
    liClick2('.f_s_list02 li',city_index);
    
}
function liClick2 (liClick,city_index){
    $(document).on('click',liClick,function(e){
        
            $(this).parents('.search_list').find('.show_text').html($(this).text());
            $(this).parents('.search_list').removeClass('city_style');
            $(this).parents('.selec_con').hide();
           
           
           var select03 =$(this).parents('.public_search');
           getslt2(select03,$(this).index(),city_index);

           if($(this).parents('.public_search').find('.search_list').size()>2){
                 cold=true
            }

           e.stopPropagation();
    });
}
function getslt2(select03,idx,pidx){
    var temp_html3=''; 
    select03.find('.f_s_list09 .show_text').html('-选择县-');
    var m = pidx;
    var n = idx;
    if(typeof(areaJson.citylist[m].c[n].a) == "undefined"){
        select03.find('.f_s_list09').css("display","none");
        if(cold){
            select03.find('.f_s_list09 .show_text').html('-选择县-')
        }
        
    }else{
        select03.find('.f_s_list09').css("display","block");
        $.each(areaJson.citylist[m].c[n].a,function(i,district){
            temp_html3+="<li data-value='"+district.s+"'><span>"+district.s+"</span></li>";
        });
        select03.find('ul.district').html(temp_html3);
        public_search_city($('.f_s_list09 .show_text'));
        public_search_city($('.f_s_list09 .down_btn'));
    };
    $(".f_s_list09 .mScrol").mCustomScrollbar("update");
    liClick3('.f_s_list09 li')
    
}

function liClick3 (liClick){
    $(document).on('click',liClick,function(e){
            $(this).parents('.search_list').find('.show_text').html($(this).text());
            $(this).parents('.search_list').removeClass('city_style');
            $(this).parents('.selec_con').hide();
           e.stopPropagation();
    });
}


function public_search_city(scroll){
    scroll.unbind("click");
    scroll.bind("click",function(e){
        var s_h=$(this).parents('.search_list').find('.selec_con');
        if(s_h.css('display')=='none'){
            s_h.show();
            $(this).parents('.search_list').addClass('city_style');
            $(this).parents('.search_list').find(".mScrol").mCustomScrollbar("update");
            e.stopPropagation();
        }else{
            s_h.hide();
            $(this).parents('.search_list').removeClass('city_style');
        }
        
    });
}