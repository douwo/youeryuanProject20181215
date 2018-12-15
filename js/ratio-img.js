

function imgratio() {//ͼƬ ratio��������
    $(".ratio-img").each(function (index, element) {
     
        if($(this).is(":visible"))
        {
            $(this).css({height:Math.floor($(this).width()*$(this).data("ratio"))});
        }
    });
}

$(function () {


    imgratio()//��ʼ��ͼƬratio

    setTimeout(function () {
        imgratio()
    }, 100)

    $(".ratio-img").each(function (index, element) {
        $(this).attr({ "src": $(this).data("src") });//ͼƬԤ���� 
    });
    
    //���ڸı��С�ص�ratio��
    var rtime = new Date();
    var timeout = false;
    var delta = 200;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta); //resizeֻ�ص����һ��
        }
    });
    function resizeend() {  //window.resize�ص�
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            imgratio()
        }
    }
    

})

//��ͼͼ��
var nullimg = '../images/error.png';
function lod(t) {
    t.onerror = null;
    t.src = nullimg;
    //t.className= 'err_position';
    //t.parentNode.className= 'err_position';
}
$(function () {
    $(".ratio-img").each(function () {
        if ($(this).attr("src") == "") {
            $(this).attr({ "src": nullimg })
        }
    })
})

$(function(){
if(!placeholderSupport()){   // �ж�������Ƿ�֧�� placeholder
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