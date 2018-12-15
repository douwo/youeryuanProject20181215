/**--------------公共变量 begin------------*/
var this_url = window.location.href.toLowerCase();
var regemail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regtelphone = /(^(\d{11})$|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
var regnum = /^\d+$/;
var regcode = /[1-9]\d{5}(?!\d)/;
var regID = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])(\d{4}|\d{3}x)$/;
var this_protocol = window.location.protocol;
var this_host = window.location.host;
var GetDomain = this_protocol + '//' + this_host;
var showLoading = true;
var hash = {
    'qq.com': 'http://mail.qq.com',
    'gmail.com': 'http://mail.google.com',
    'sina.com': 'http://mail.sina.com.cn',
    '163.com': 'http://mail.163.com',
    '126.com': 'http://mail.126.com',
    'yeah.net': 'http://www.yeah.net/',
    'sohu.com': 'http://mail.sohu.com/',
    'tom.com': 'http://mail.tom.com/',
    'sogou.com': 'http://mail.sogou.com/',
    '139.com': 'http://mail.10086.cn/',
    'hotmail.com': 'http://www.hotmail.com',
    'live.com': 'http://login.live.com/',
    'live.cn': 'http://login.live.cn/',
    'live.com.cn': 'http://login.live.com.cn',
    '189.com': 'http://webmail16.189.cn/webmail/',
    'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
    'yahoo.cn': 'http://mail.cn.yahoo.com/',
    'eyou.com': 'http://www.eyou.com/',
    '21cn.com': 'http://mail.21cn.com/',
    '188.com': 'http://www.188.com/',
    'foxmail.coom': 'http://www.foxmail.com'
};


/**--------------公共变量 end------------*/

$(document).on("click", "#btnParkVisitSS", function () {
    var _k = $('#txtajaxZJXY').val();
    if (_k.length <= 0) {
        layer.msg('请输入校园名称');
        return;
    }
    var data = "cmd=btnParkVisitSS&k=" + TDES.encrypt(_k) + "";
    ajaxhelpS(data, function (msg) {
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == '1') {
            if (unescape(obj.info) != null && unescape(obj.info) != 'null') {
                $('#ajaxZJXY').html(unescape(obj.info));
                $(".f_leinput ul").show();
                $(document).on("click", "#ajaxZJXY>li", function () {
                    var _e = $(this);
                    $('#txtajaxZJXY').val($(_e).text());
                    var _sheng = $(_e).data("sheng");
                    var _shi = $(_e).data("shi");
                    var _qu = $(_e).data("qu");
                    var _xy = $(_e).data("xy");
                    $('#ajaxShengtxt').text(_sheng);
                    $('#ajaxShitxt').text(_shi);
                    $('#ajaxQutxt').text(_qu);
                    $('#ajaxXYtxt').text(_xy);
                    $(".f_leinput ul").hide();
                });
            } else layer.msg('没有查到结果');
        }
    });
});
$(document).on("click", "#btnParkVisitSS2", function () {
    var _k = $('#txtZJXY').val();
    if (_k.length <= 0) {
        layer.msg('请输入校园名称');
        return;
    }
    var data = "cmd=btnParkVisitSS&k=" + TDES.encrypt(_k) + "";
    ajaxhelpS(data, function (msg) {
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == '1') {
            if (unescape(obj.info) != null && unescape(obj.info) != 'null') {
                $('#slZJXY').html(unescape(obj.info));
                $(".f_leinput ul").show();
                $(document).on("click", "#slZJXY>li", function () {
                    var _e = $(this);
                    $('#txtZJXY').val($(_e).text());
                    var _sheng = $(_e).data("sheng");
                    var _shi = $(_e).data("shi");
                    var _qu = $(_e).data("qu");
                    var _xy = $(_e).data("xy");
                    $('#slShengtxt').text(_sheng);
                    $('#slShitxt').text(_shi);
                    $('#slQutxt').text(_qu);
                    $('#slXYtxt').text(_xy);
                    $(".f_leinput ul").hide();
                });
            } else layer.msg('没有查到结果');
        }
    });
});
$(document).on("click", "#btnParkVisit", function () {
    
    var ajaxShengtxt = $('#ajaxShengtxt').text();
    if (ajaxShengtxt == '-请选择所在省-') {
        layer.msg('-请选择所在省-');
        return;
    }
    var ajaxShitxt = $('#ajaxShitxt').text();
    if (ajaxShitxt == '-请选择所在市-') {
        layer.msg('-请选择所在市-');
        return;
    }
    var ajaxQutxt = $('#ajaxQutxt').text();
    if (ajaxQutxt == '-请选择所在区-') {
        layer.msg('-请选择所在区-');
        return;
    }
    var ajaxXYtxt = $('#ajaxXYtxt').text();
    if (ajaxXYtxt == '-请选择校园-') {
        layer.msg('-请选择校园-');
        return;
    }
    var ajaxSex = "";
    $('#TitleHid').val(ajaxShengtxt);
    $('#Title1Hid').val(ajaxShitxt);
    $('#SingleLine3Hid').val(ajaxQutxt);
    $('#SingleLine4Hid').val(ajaxXYtxt);
    $('#Title').val(ajaxShengtxt);
    $('#Title1').val(ajaxShitxt);
    $('#SingleLine3').val(ajaxQutxt);
    $('#SingleLine4').val(ajaxXYtxt);

    var ajaxRelationship = $('#ajaxSingleLine8>li.on span').text();
    if (ajaxRelationship == null || ajaxRelationship == 'null' || ajaxRelationship == undefined || ajaxRelationship == 'undefined') ajaxRelationship = '';
    $('#SingleLine8Hid').val(ajaxRelationship);

    try {
        if ($.trim($('#ajaxXingB>label.radio_img').text()).length > 0)
            ajaxSex = $.trim($('#ajaxXingB>label.radio_img').text());
        else if ($.trim($('#ajaxXingB>label.on').text()).length > 0)
            ajaxSex = $.trim($('#ajaxXingB>label.on').text());

        $('#SingleLine6Hid').val(ajaxSex);
        $('#SingleLine6').val(ajaxSex);
    } catch (e) { }
    try {

        var province = ajaxShengtxt;
        var city = ajaxShitxt;
        var area = ajaxQutxt;
        var name = $('#ajaxSingleLine5').val();
        var sex = ajaxSex;
        var birthday = $('#ajaxSingleLine7').val();
        var school = ajaxXYtxt;
        var jointime = $('#ajaxSingleLine9').val();
        var relationship = $('#SingleLine8Hid').val();
        var parentsname = $('#ajaxSingleLine10').val();
        var parentsphone = $('#ajaxSingleLine11').val();
        
        if (name.length <= 0 || name == '请输入姓名') {
            layer.msg('请输入姓名');
            $('#ajaxSingleLine5').focus();
            return;
        }
        if (birthday.length <= 0 || birthday == '请选择生日') {
            layer.msg('请选择生日');
            $('#ajaxSingleLine7').focus();
            return;
        }
        if (jointime.length <= 0 || jointime == '请选择计划入园日期') {
            layer.msg('请选择计划入园日期');
            $('#ajaxSingleLine9').focus();
            return;
        }
        if (relationship.length <= 0 || relationship == '与孩子的关系') {
            layer.msg('与孩子的关系');
            return;
        }
        if (parentsname.length <= 0 || parentsname == '请输入家长姓名') {
            layer.msg('请输入家长姓名');
            $('#ajaxSingleLine10').focus();
            return;
        }
        if (parentsphone.length <= 0 || parentsphone == '请输入手机') {
            layer.msg('请输入手机');
            $('#ajaxSingleLine11').focus();
            return;
        }

        var data = "cmd=sendCloudCCAPI&province=" + TDES.encrypt(province) + "&city=" + TDES.encrypt(city) + "&area=" + TDES.encrypt(area) + "&name=" + TDES.encrypt(name) + "&sex=" + TDES.encrypt(sex) + "&birthday=" + TDES.encrypt(birthday) + "&school=" + TDES.encrypt(school) + "&jointime=" + TDES.encrypt(jointime) + "&relationship=" + TDES.encrypt(relationship) + "&parentsname=" + TDES.encrypt(parentsname) + "&parentsphone=" + TDES.encrypt(parentsphone) + "";
        ajaxhelpS(data, function (msg) {
            var obj = eval('(' + msg + ')');
            if (unescape(obj.state) == '1') {
                $('#btnSubmitPark').click();
            }
        });
    } catch (e) {
    }
});
$(document).on("click", "#btnParkVisit2", function () {

    var ajaxShengtxt = $('#ajaxShengtxt').text();
    if (ajaxShengtxt == '-请选择所在省-') {
        layer.msg('-请选择所在省-');
        return;
    }
    var ajaxShitxt = $('#ajaxShitxt').text();
    if (ajaxShitxt == '-请选择所在市-') {
        layer.msg('-请选择所在市-');
        return;
    }
    var ajaxQutxt = $('#ajaxQutxt').text();
    if (ajaxQutxt == '-请选择所在区-') {
        layer.msg('-请选择所在区-');
        return;
    }
    var ajaxXYtxt = $('#ajaxXYtxt').text();
    if (ajaxXYtxt == '-请选择校园-') {
        layer.msg('-请选择校园-');
        return;
    }
    var ajaxSex = "";
    $('#Title').val(ajaxShengtxt);
    $('#Title1').val(ajaxShitxt);
    $('#SingleLine3').val(ajaxQutxt);
    $('#SingleLine4').val(ajaxXYtxt);

    var ajaxRelationship = $('#ajaxSingleLine8>li.on span').text();
    if (ajaxRelationship == null || ajaxRelationship == 'null' || ajaxRelationship == undefined || ajaxRelationship == 'undefined') ajaxRelationship = '';
    $('#SingleLine8').val(ajaxRelationship);
    
    try {
        if ($.trim($('#ajaxXingB>label.radio_img').text()).length > 0)
            ajaxSex = $.trim($('#ajaxXingB>label.radio_img').text());
        else if ($.trim($('#ajaxXingB>label.on').text()).length > 0)
            ajaxSex = $.trim($('#ajaxXingB>label.on').text());

        $('#SingleLine6').val(ajaxSex);

        
    } catch (e) { }
    try {

        var province = ajaxShengtxt;
        var city = ajaxShitxt;
        var area = ajaxQutxt;
        var name = $('#ajaxSingleLine5').val();
        var sex = ajaxSex;
        var birthday = $('#ajaxSingleLine7').val();
        var school = ajaxXYtxt;
        var jointime = $('#ajaxSingleLine9').val();
        var relationship = $('#SingleLine8').val();
        var parentsname = $('#ajaxSingleLine10').val();
        var parentsphone = $('#ajaxSingleLine11').val();

        if (name.length<=0 || name == '请输入姓名') {
            layer.msg('请输入姓名');
            $('#ajaxSingleLine5').focus();
            return;
        }
        if (birthday.length <= 0 || birthday == '请选择生日') {
            layer.msg('请选择生日');
            $('#ajaxSingleLine7').focus();
            return;
        }
        if (jointime.length <= 0 || jointime == '请选择计划入园日期') {
            layer.msg('请选择计划入园日期');
            $('#ajaxSingleLine9').focus();
            return;
        }
        if (relationship.length <= 0 || relationship == '与孩子的关系') {
            layer.msg('与孩子的关系');
            $('#SingleLine8').focus();
            return;
        }
        if (parentsname.length <= 0 || parentsname == '请输入家长姓名') {
            layer.msg('请输入家长姓名');
            $('#ajaxSingleLine10').focus();
            return;
        }
        if (parentsphone.length <= 0 || parentsphone == '请输入手机') {
            layer.msg('请输入手机');
            $('#ajaxSingleLine11').focus();
            return;
        }

        var data = "cmd=sendCloudCCAPI&province=" + TDES.encrypt(province) + "&city=" + TDES.encrypt(city) + "&area=" + TDES.encrypt(area) + "&name=" + TDES.encrypt(name) + "&sex=" + TDES.encrypt(sex) + "&birthday=" + TDES.encrypt(birthday) + "&school=" + TDES.encrypt(school) + "&jointime=" + TDES.encrypt(jointime) + "&relationship=" + TDES.encrypt(relationship) + "&parentsname=" + TDES.encrypt(parentsname) + "&parentsphone=" + TDES.encrypt(parentsphone) + "";
        ajaxhelpS(data, function (msg) {
            var obj = eval('(' + msg + ')');
            if (unescape(obj.state) == '1') {
                $('#btnSubmit').click();
            }
        });
    } catch (e) {
    }
});
//园所分布
function getDPType(pid, showID, _e) {
    if (showID.length <= 0) {
        $('#ajaxXYtxt').text($(_e).find("span").text());
        $(_e).addClass("on").siblings().removeClass("on");
    } else {
        var data = "cmd=getDPType&id=" + TDES.encrypt(pid) + "";
        ajaxhelpS(data, function (msg) {
            var obj = eval('(' + msg + ')');
            if (unescape(obj.state) == 1) {
                $('#' + showID).html(unescape(obj.info));
                switch (showID) {
                    case 'ajaxSheng':
                        $('#ajaxShi').html("");
                        $('#ajaxQu').html("");
                        $('#ajaxXY').html("");
                        break;
                    case 'ajaxShi':
                        $('#ajaxQu').html("");
                        $('#ajaxXY').html("");
                        $('#ajaxShengtxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                    case 'ajaxQu':
                        $('#ajaxXY').html("");
                        $('#ajaxShitxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                    case 'ajaxXY':
                        $('#ajaxQutxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                }
            }
        });
    }
}
function getDPTypeSL(pid, showID, _e) {
    if (showID.length <= 0) {
        $('#slXYtxt').text($(_e).find("span").text());
        $(_e).addClass("on").siblings().removeClass("on");
    } else {
        var data = "cmd=getDPTypeSL&id=" + TDES.encrypt(pid) + "";
        ajaxhelpS(data, function (msg) {
            var obj = eval('(' + msg + ')');
            if (unescape(obj.state) == 1) {
                $('#' + showID).html(unescape(obj.info));
                switch (showID) {
                    case 'slSheng':
                        $('#slShi').html("");
                        $('#slQu').html("");
                        $('#slXY').html("");
                        break;
                    case 'slShi':
                        $('#slQu').html("");
                        $('#slXY').html("");
                        $('#slShengtxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                    case 'slQu':
                        $('#slXY').html("");
                        $('#slShitxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                    case 'slXY':
                        $('#slQutxt').text($(_e).find("span").text());
                        $(_e).addClass("on").siblings().removeClass("on");
                        break;
                }
            }
        });
    }
}
function getDistributePark(p) {

    var ajaxGJ = $('#slGJ>li.on').data("id");
    var ajaxSheng = $('#slSheng>li.on').data("id");
    var ajaxShi = $('#slShi>li.on').data("id");
    var ajaxQu = $('#slQu>li.on').data("id");
    var ajaxXY = $('#slXY>li.on').data("id");

    if (ajaxGJ == null || ajaxGJ == 'undefined') ajaxGJ = '';
    if (ajaxSheng == null || ajaxSheng == 'undefined') ajaxSheng = '';
    if (ajaxShi == null || ajaxShi == 'undefined') ajaxShi = '';
    if (ajaxQu == null || ajaxQu == 'undefined') ajaxQu = '';
    if (ajaxXY == null || ajaxXY == 'undefined') ajaxXY = '';

    var data = "cmd=getDistributePark&GJ=" + TDES.encrypt(ajaxGJ) + "&Sheng=" + TDES.encrypt(ajaxSheng) + "&Shi=" + TDES.encrypt(ajaxShi) + "&Qu=" + TDES.encrypt(ajaxQu) + "&XY=" + TDES.encrypt(ajaxXY) + "&p=" + TDES.encrypt(p) + "";
    ajaxhelpS(data, function (msg) {
        var obj = eval('(' + msg + ')');
        $('#ajaxList').html(unescape(obj.list));
        if (unescape(obj.page) != null && unescape(obj.page) != 'null') $('#ajaxPage').html(unescape(obj.page));
        else $('#ajaxPage').html("");
    });
}
$(document).on("click", "#btnDistributePark", function () {
    getDistributePark(1);
});
$(document).on("click", "#btnProfileApply", function () {
    var slgsxz = $('#slgsxz>label.radio_img').text();
    $('#TitleApply').val(slgsxz);

    var SingleLine4 = "";
    var slSheng = $('#slSheng').text();
    var slShi = $('#slShi').text();
    var slQu = $('#slQu').text();
    var txtDizhi = $('#txtDizhi').val();
    if (slSheng.length <= 0 || slShi.length <= 0 || slSheng == '-请选择所在省-' || slShi == '-请选择所在市-' || slShi == '-选择市/区-' || (slQu.length <= 0 || slQu == '-请选择所在县-' || slQu == '-选择县-' && $('div.f_s_list09').is(':visible'))) {
        layer.msg('请选择详细地址');
        return;
    } else SingleLine4 = slSheng + '-' + slShi + '-' + slQu + ',' + txtDizhi;
    $('#SingleLine4Apply').val(SingleLine4);
    var SingleLine8 = "";
    var txthzgdgs1 = $('#txthzgdgs1').val();
    var txthzgdgs2 = $('#txthzgdgs2').val();
    var txthzgdgs3 = $('#txthzgdgs3').val();
    if (txthzgdgs1.length <= 0 || txthzgdgs2.length <= 0 || txthzgdgs3.length <= 0) {
        layer.msg('请输入合作过的公司(3个)');
        return;
    } else SingleLine8 = txthzgdgs1 + '-' + txthzgdgs2 + '-' + txthzgdgs3;
    $('#SingleLine8Apply').val(SingleLine8);
    var SingleLine10 = $('div.sex_change>div.show_text').text();
    if (SingleLine10.length <= 0) {
        layer.msg('请选择性别');
        return;
    }
    $('#SingleLine10Apply').val(SingleLine10);
    $('#btnSubmit').click();
});
$(document).on("click", "#btnProfileApply2", function () {
    var sllx = $('#sllx>label.radio_img').text();
    $('#TitleApply2').val(sllx);

    var SingleLine4 = "";
    var slSheng = $('#slSheng').text();
    var slShi = $('#slShi').text();
    var slQu = $('#slQu').text();
    var txtDizhi = $('#txtDizhi').val();
    if (slSheng.length <= 0 || slShi.length <= 0 || slSheng == '-请选择所在省-' || slShi == '-请选择所在市-' || slShi == '-选择市/区-' || (slQu.length <= 0 || slQu == '-请选择所在县-' || slQu == '-选择县-' && $('div.f_s_list09').is(':visible'))) {
        layer.msg('请选择详细地址');
        return;
    } else SingleLine4 = slSheng + '-' + slShi + '-' + slQu + ',' + txtDizhi;
    $('#SingleLine4Apply2').val(SingleLine4);
    var SingleLine7 = $('div.sex_change>div.show_text').text();
    if (SingleLine7.length <= 0) {
        layer.msg('请选择性别');
        return;
    }
    $('#SingleLine7Apply2').val(SingleLine7);
    $('#btnSubmit').click();
});
$(document).on("click", "#btnProfileApply3", function () {
    var sllx = $('#sllx>label.radio_img').text();
    $('#TitleApply3').val(sllx);
    var SingleLine4 = "";
    var slSheng = $('#slSheng').text();
    var slShi = $('#slShi').text();
    var slQu = $('#slQu').text();
    var txtDizhi = $('#txtDizhi').val();
    if (slSheng.length <= 0 || slShi.length <= 0 || slSheng == '-请选择所在省-' || slShi == '-请选择所在市-' || slShi == '-选择市/区-' || (slQu.length <= 0 || slQu == '-请选择所在县-' || slQu == '-选择县-' && $('div.f_s_list09').is(':visible'))) {
        layer.msg('请选择详细地址');
        return;
    } else SingleLine4 = slSheng + '-' + slShi + '-' + slQu + ',' + txtDizhi;
    $('#SingleLine4Apply3').val(SingleLine4);
    var slcqgs = $('#slcqgs>label.radio_img').text();
    $('#SingleLine8Apply3').val(slcqgs);
    var SingleLine11 = $('div.sex_change>div.show_text').text();
    if (SingleLine11.length <= 0) {
        layer.msg('请选择性别');
        return;
    }
    $('#SingleLine11Apply3').val(SingleLine11);
    $('#btnSubmit').click();
});
$(document).on("click", "#btnProfileApply4", function () {
    var Title1 = $('div.sex_change>div.show_text').text();
    if (Title1.length <= 0) {
        layer.msg('请选择性别');
        return;
    }
    $('#Title1Apply4').val(Title1);
    $('#btnSubmit').click();
});
$(document).on("click", "#btnNewsSignup", function () {
    var SingleLine3 = "";
    var slbmhdSheng = $('#slbmhdSheng').text();
    var slbmhdShi = $('#slbmhdShi').text();
    if (slbmhdSheng.length <= 0 || slbmhdShi.length <= 0 || slbmhdSheng == '请选择省' || slbmhdShi == '请选择市' || slbmhdShi == '-选择市/区-') {
        layer.msg('请选择报名城市');
        return;
    } else SingleLine3 = slbmhdSheng + '-' + slbmhdShi;
    $('#SingleLine3Signup').val(SingleLine3);

    var SingleLine4 = $('#slbmxy>li.on').text();
    if (SingleLine4.length <= 0) {
        layer.msg('请选择报名校园');
        return;
    }
    $('#SingleLine4Signup').val(SingleLine4);

    var rdsfzxs = $('#rdsfzxs>label.radio_img').text();
    $('#SingleLine5Signup').val(rdsfzxs);

    var SingleLine11 = "";
    var sljzqySheng = $('#sljzqySheng').text();
    var sljzqyShi = $('#sljzqyShi').text();
    var sljzqyQu = $('#sljzqyQu').text();
    var txtDizhi = $('#txtDizhi').val();
    if (sljzqySheng.length <= 0 || sljzqyShi.length <= 0 || sljzqySheng == '请选择省' || sljzqyShi == '请选择市' || sljzqyShi == '-选择市/区-' || (sljzqyQu.length <= 0 || sljzqyQu == '请选择区/县' || sljzqyQu == '-选择县-' && $('div.f_s_list09').is(':visible'))) {
        layer.msg('请选择居住区域');
        return;
    } else SingleLine11 = sljzqySheng + '-' + sljzqyShi + '-' + sljzqyQu + ',' + txtDizhi;
    $('#SingleLine11Signup').val(SingleLine11);
    $('#btnSubmit').click();
});
$(document).on("click", "#btnParentProblem", function () {
    var txtKey = $('#txtKey').val();
    if (txtKey == null || txtKey == 'null') txtKey = '';
    getList_LB(txtKey, 1);
});
$(document).on("click", "#btnNewsActive", function () {
    var txtKey = $('#txtKey').val();
    if (txtKey == null || txtKey == 'null') txtKey = '';
    getList_LB(txtKey, 1);
});
$(document).on("click", "div.new_acti>div>ul>li", function () {
    $('#txtKey').val("");
});
$(document).on("click", ".wybmLink", function () {
    var _e = $(this);
    var _id = $(_e).data("id");
    var _k = $(_e).data("k");
    var data = "cmd=wybmLink&id=" + TDES.encrypt(_id) + "";
    ajaxhelpS(data, function (msg) {
        var obj = eval('(' + msg + ')');
        
        if (unescape(obj.state) == '1') {
            window.location.href = "/content/signup" + _id + ".html";
        } else layer.msg(unescape(obj.info));
    });
});
function GetybmSpan() {
    var ids = '';
    $('.ybmSpan').map(function () {
        ids += $(this).attr('data-id') + ',';
    });
    if (ids.length == 0) {
        return;
    }
    var data = "cmd=getybmSpan&ids=" + TDES.encrypt(ids) + "";
    ajaxhelpS(data, function (msg) {
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == 1) {
            var hits = unescape(obj.info);
            for (var i = 0; i < hits.split(',').length; i++) {
                $('.ybmSpan').eq(i).text(hits.split(',')[i]);
            }
        }
    });
}
$(document).on("click", "#btnDistribute", function () {
    var _t1 = $('#ajaxShow_text').text();
    $('#ajaxBg>li').map(function () {
        var _e = $(this);
        if ($(_e).find("span").text() == _t1)
        {
            var _id = $(_e).data("id");
            var _cid = $(_e).data("cid");
            if (_cid > 0 && _id > 0)
                window.location.href = "/content/details" + _cid + "_" + _id + ".html";
        }
    });
});

/*-----------------------------新全站搜索-------------------------------------------------------------------------*/

$(document).on("click", "#btnSearch", function () {
    if ($.trim($("#formd_search_id").val()) == '' || $.trim($('#formd_search_id').val()) == '请输入关键字') {
        $('#formd_search_id').focus();
        alert("请输入搜索内容！");
        return;
    }
    else {
        window.location = "/other/search.html?key=" + escape($.trim($("#formd_search_id").val())) + "";
    }
});
$(document).on("click", "#btnSearch2", function () {
    if ($.trim($("#formd_search_id2").val()) == '' || $.trim($("#formd_search_id2").val()) == '请输入搜索关键词') {
        $('#formd_search_id2').focus();
        alert("请输入搜索内容！");
        return;
    }
    $('#resultem').text($("#formd_search_id2").val());
    //getList_LB(escape($.trim($("#formd_search_id2").val())), 1);
    //全新搜索
    //getLucenesSearch(escape($.trim($("#formd_search_id2").val())), 1);
    //全新搜索加载更多
    getLucenesSearchMore(escape($.trim($("#formd_search_id2").val())), 1);
});
$(document).on("click", "#btnSearch3", function () {
    if ($.trim($("#formd_search_id3").val()) == '' || $.trim($('#formd_search_id3').val()) == '请输入关键字') {
        $('#formd_search_id3').focus();
        alert("请输入搜索内容！");
        return;
    }
    else {
        window.location = "/other/search.html?key=" + escape($.trim($("#formd_search_id").val())) + "";
    }
});
/*----------------------当前位置定位-------------------*/
$(function () {
    var MenuName = $.trim($("div.site a:eq(1)").text());
    $('div.nav>ul>li>a').map(function () {
        if ($.trim($(this).text()) == MenuName) {
            $(this).parent().addClass('on').siblings().removeClass('on');
        }
    });


    MenuName = $.trim($("div.site a:eq(2)").text());

    $('div.nav>ul>li>a').map(function () {
        if ($.trim($(this).text()) == MenuName) {
            $(this).parent().addClass('on').siblings().removeClass('on');
        }
    });

    MenuName = $.trim($("div.site span").text());

    $('div.nav>ul>li>a').map(function () {
        if ($.trim($(this).text()) == MenuName) {
            $(this).parent().addClass('on').siblings().removeClass('on');
        }
    });
})




/*---------------------下载点击----------------------*/
$(document).on('click', '.DownFile', function () {
    var strid = $(this).attr("data-id");//ID
    var objMylike = $(this);
    $(objMylike).parent().parent().find(".hits").text(Number($(objMylike).parent().parent().find(".hits").text()) + Number(1));
    var data = "cmd=onCKhits&id=" + strid + "";
    ajaxhelpS(data, function (msg) {
        
    })
});
/*------------点赞事件绑定 给目标加上 class="Mylikelist" data-id="{Content.ID}"-------------*/
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(b).l(\'8\', \'.3\',e() {    s o = $(q).7("a-f");    s k = $(q); s a = "9=m&f=" + o + "&2=1";    5(a, e (i) {        s j = d(\'(\' + i + \')\');        g (r(j.n) == "0") {            k.p(4(k.p()) + 4(0))        } c {            6(r(j.h));        }    })});	', 62, 29, '1|E91AD3948CAC48995386DD4F02C8DB76|Fieldlike|Mylikelist|Number|ajaxhelpS|alert|attr|click|cmd|data|document|else|eval|function|id|if|info|msg|obj|objMylike|on|praise|state|strid|text|this|unescape|var'.split('|'), 0, {}));

/*---------------------获取列表点赞 给目标加上 class="Mylikelist" data-id="{Content.ID}"区分大小写----------------------*/
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(f() {	w j = \'\';	$(\'.5\').n(f() {		j += $(u).8(\'a-i\') + \',\';	});	k (j.m == 0) {		q;	}	w a = "9=4&j=" + 6.b(j) + "&3=2";	7(a,	f(o) {		w p = d(\'(\' + o + \')\');		k (v(p.s) == 1) {			w g = v(p.l);			e (w h = 0; h < g.r(\',\').m; h++) {				$(\'.5\').c(h).t(g.r(\',\')[h]);			}		}	});});', 62, 33, '||E91AD3948CAC48995386DD4F02C8DB76|Field|GetHitsField|Mylikelist|TDES|ajaxhelpS|attr|cmd|data|encrypt|eq|eval|for|function|hits|i|id|ids|if|info|length|map|msg|obj|return|split|state|text|this|unescape|var'.split('|'), 0, {}));

/*--------------浏览次数绑定 给目标加上 class="hits" data-id="{Content.ID}"区分大小写-------------*/
eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(b() {	t g = \'\';	$(\'.d\').k(b() {		g += $(r).4(\'6-f\') + \',\';	});	h (g.j == 0) {		n;	}	t 6 = "5=c&g=" + 2.7(g) + "";	3(6,	b(l) {		t m = 9(\'(\' + l + \')\');		h (s(m.p) == 1) {			t d = s(m.i);			a (t e = 0; e < d.o(\',\').j; e++) {				$(\'.d\').8(e).q(d.o(\',\')[e]);			}		}	});});', 62, 30, '||TDES|ajaxhelpS|attr|cmd|data|encrypt|eq|eval|for|function|getHits|hits|i|id|ids|if|info|length|map|msg|obj|return|split|state|text|this|unescape|var'.split('|'), 0, {}));

$(function () {
    $(document).on("click", "#btnReset", function () {
        window.location.href = this_url;
    });
    EnterFunction('#formd_search_id', '#btnSearch');
    EnterFunction('#formd_search_id2', '#btnSearch2');
    EnterFunction('#formd_search_id3', '#btnSearch3');


    EnterFunction('#txtKey', '#btnNewsActive');
    EnterFunction('#txtKey', '#btnParentProblem');
})

function getSearch(key, page) {
    $('#ajaxList').html('');
    $('#ajaxPage').html('');
    var searchKey = unescape(key);
    var thisIndex = layer.msg('数据搜索中，请稍后…', {
        time: 0,
        icon: 16
    });
    var data = "cmd=getSearch&k=" + TDES.encrypt(searchKey) + "&pi=" + TDES.encrypt(page) + "&lh=" + $('.lucenes>#lh').val() + "&ph=" + $('.lucenes>#ph').val() + "&ps=" + $('.lucenes>#ps').val() + "&pt=" + $('.lucenes>#pt').val() + "&nt=" + $('.lucenes>#nt').val() + "&fs=" + $('.lucenes>#fs').val() + "";
    ajaxhelpS(data, function (msg) {
        layer.close(thisIndex);
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == '2') {
            thisIndex = layer.alert(unescape(obj.info), {
                time: 0,
                title: '提示信息',
                closeBtn: 0,
                btn: ['确定'],
                yes: function (index) {
                    window.location = '/';
                }
            });
        } else {
            $('#ajaxList').html(unescape(obj.list));
            $('#ajaxPage').html(unescape(obj.page));
            $("#SearchNum").html(unescape(obj.count));
        }
    });
}

/*---全文检索通用搜索---*/
function getLucenesSearch(key, page) {
    if (!checkAjaxSql(unescape(unescape(key)))) {
        return false;
    }
    $('#ajaxList').html('');
    $('#ajaxPage').html('');
    var searchKey = unescape(unescape(key));

    $('#formd_search_id').val(searchKey);
    $('#formd_search_id2').val(searchKey);
    $('#resultem').html(searchKey);

    var thisIndex = 0;
    if (showLoading) {
        thisIndex = layer.msg('数据搜索中，请稍后…', {
            time: 0,
            icon: 16
        });
    }
    var data = "cmd=getLucenesSearch&k=" + TDES.encrypt(searchKey) + "&pi=" + TDES.encrypt(page) + "&lh=" + $('.lucenes>#ListHtml').val() + "&ph=" + $('.lucenes>#PageHtml').val() + "&ps=" + $('.lucenes>#PageSize').val() + "&pt=" + $('.lucenes>#PrevHtml').val() + "&nt=" + $('.lucenes>#NextHtml').val() + "&fs=" + $('.lucenes>#SubString').val() + "";
    ajaxhelpS(data, function (msg) {
        if (showLoading) {
            layer.close(thisIndex);
        }
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == '2') {
            if (showLoading) {
                thisIndex = layer.alert(unescape(obj.info), {
                    time: 0,
                    title: '提示信息',
                    closeBtn: 0,
                    btn: ['确定'],
                    yes: function (index) {
                        window.location = '/';
                    }
                });
            } else {
                window.location = '/';
            }
        } else {
            $('#ajaxList').html(unescape(obj.list));
            $('#ajaxPage').html(unescape(obj.page));
            $("#SearchNum").html(unescape(obj.count));
        }
    });
}
/*--------------------根据查询条件，加载更多-------------------------------*/
function getLucenesSearchMore(key, page) {
    if (!checkAjaxSql(unescape(unescape(key)))) {
        return false;
    }
    if (Number(page) <= 1) {
        $('#ajaxList').html('');
    }
    $('#ajaxPage').html('');
    var searchKey = unescape(unescape(key));

    $('#formd_search_id').val(searchKey);
    $('#formd_search_id2').val(searchKey);
    $('#resultem').html(searchKey);

    var thisIndex = 0;
    if (showLoading) {
        thisIndex = layer.msg('数据搜索中，请稍后…', {
            time: 0,
            icon: 16
        });
    }
    var data = "cmd=getLucenesSearch&k=" + TDES.encrypt(searchKey) + "&pi=" + TDES.encrypt(page) + "&lh=" + $('.lucenes>#ListHtml').val() + "&ph=" + $('.lucenes>#PageHtml').val() + "&ps=" + $('.lucenes>#PageSize').val() + "&pt=" + $('.lucenes>#PrevHtml').val() + "&nt=" + $('.lucenes>#NextHtml').val() + "&fs=" + $('.lucenes>#SubString').val() + "";
    ajaxhelpS(data, function (msg) {
        if (showLoading) {
            layer.close(thisIndex);
        }
        var obj = eval('(' + msg + ')');
        if (unescape(obj.state) == '2') {
            if (showLoading) {
                thisIndex = layer.alert(unescape(obj.info), {
                    time: 0,
                    title: '提示信息',
                    closeBtn: 0,
                    btn: ['确定'],
                    yes: function (index) {
                        window.location = '/';
                    }
                });
            } else {
                window.location = '/';
            }
        } else {
            $('#ajaxList').append(unescape(obj.list));
            $('#ajaxPage').append(unescape(obj.page));
            $("#SearchNum").html(unescape(obj.count));
            /*--------------------加载更多------------------------------------------*/
            var intval = Number(page) + Number(1);
            if (Number(intval) <= Number(unescape(obj.count))) {
                $('#more').html('<a href="javascript:getLucenesSearchMore(' + key + ',' + intval + ');" data-max="' + unescape(obj.count) + '"></a>')
                $('.addmore').attr('data-next', intval).attr('data-max', unescape(obj.count)).attr('data-key', key).show();
            } else {
                $('#more').remove();
                $('.addmore').remove();

            }
        }
    });
}

$(document).on('click', '.addmore', function () {
    if (Number($('.addmore').attr('data-next')) < Number($('.addmore').attr('data-max')) + 1) {
        getLucenesSearchMore($('.addmore').attr('data-key'), Number($('.addmore').attr('data-next')));
    }
});
//全站搜索功能js方法
function getList(keyserch, page) {
    if (!checkAjaxSql(unescape(keyserch))) {
        return false;
    }
    $('#ajaxList').html(lang.loading);
    $('#ajaxPage').html('');
    var ajaxListDate = $('#ajaxListDate').val();
    var ajaxPageDate = $('#ajaxPageDate').val();
    var ajaxSiteId = $('#ajaxSiteId').val();
    var ajaxGroupId = $('#ajaxGroupId').val();
    var ajaxPageSite = $('#ajaxPageSite').val();

    $('#formd_search_id').val(unescape(keyserch));
    $("#formd_search_id2").val(unescape(keyserch));
    $("#resultem").html(unescape(keyserch));


    var data = "cmd=_saveListAndPageDate&ajaxListDate=" + ajaxListDate + "&ajaxPageDate=" + ajaxPageDate + "&ajaxSiteId=" + ajaxSiteId + "&ajaxGroupId=" + ajaxGroupId + "&ajaxPageSite=" + ajaxPageSite + "";
    ajaxhelpS(data, function () {
        data = "cmd=search&key=" + keyserch + "&page=" + page + "";
        ajaxhelpS(data, function (msg) {
            var obj = eval('(' + msg + ')');
            $('#ajaxList').html(unescape(obj.list));
            $('#ajaxPage').html(unescape(obj.page));

            $("#SearchNum").html(unescape(obj.count));
        });
    });
}

//全站列表功能js方法
function getList_LB(key, page) {
    if (!checkAjaxSql(unescape(key))) {
        return false;
    }

    var _ajaxlist = "ajaxList";
    var _ajaxpage = "ajaxPage";

    var listidx = "", listcls = "", pageidx = "", pagecls = "";//列表索引 列表Class 分页索引 分页Class

    if ($('#ajaxListIndex').val() != undefined) {
        listidx = $.trim($('#ajaxListIndex').val());
    }
    if ($('#ajaxListClass').val() != undefined) {
        listcls = $.trim($('#ajaxListClass').val());
    }
    if ($('#ajaxPageIndex').val() != undefined) {
        pageidx = $.trim($('#ajaxPageIndex').val());
    }
    if ($('#ajaxPageClass').val() != undefined) {
        pagecls = $.trim($('#ajaxPageClass').val());
    }

    var bon = false;//是否是切换类型
    var dataBon = false;
    //如果列表索引 列表Class 分页索引 分页Class都不为空时 则是切换类型
    if (listidx != '' && listcls != '' && pageidx != '' && pagecls != '') {
        bon = true;
    }

    var listi = 0;
    var pagei = 0;
    //判断是否加载数据
    if (bon) {
        $('.' + listcls).map(function () {
            if (listi == listidx && ((($.trim($(this).html()) == lang.loading || $.trim($(this).html()) == lang.loading) && page == -1) || page >= 1)) {
                if (page == -1) page = 1;
                dataBon = true;
            }
            listi++;
        });
    }
    else {
        $('#' + _ajaxlist).html(lang.loading);
        $('#' + _ajaxlist).html('');
        $('#' + _ajaxpage).html('');
        dataBon = true;
    }
    var ajaxListDate = $('#ajaxListDate').val();
    var ajaxPageDate = $('#ajaxPageDate').val();
    var ajaxSiteId = $('#ajaxSiteId').val();
    var ajaxGroupId = $('#ajaxGroupId').val();
    var ajaxPageSite = $('#ajaxPageSite').val();

    var ajaxClassId = $('#ajaxClassId').val();
    var ajaxXgid = $('#ajaxXgid').val();
    var ajaxCategory = $('#ajaxCategory').val();
    var ajaxAboutDownload = $('#ajaxAboutDownload').val();
    var ajaxParentId = $('#ajaxParentId').val();
    if (dataBon) {

        var data = "cmd=_saveListAndPageDate_LB&ajaxListDate=" + ajaxListDate + "&ajaxPageDate=" + ajaxPageDate + "&ajaxSiteId=" + ajaxSiteId + "&ajaxGroupId=" + ajaxGroupId + "&ajaxPageSite=" + ajaxPageSite + "&ajaxClassId=" + ajaxClassId + "&ajaxXgid=" + ajaxXgid + "&ajaxCategory=" + ajaxCategory + "&ajaxAboutDownload=" + ajaxAboutDownload + "&ajaxParentId=" + ajaxParentId + "";
        ajaxhelpS(data, function () {
            data = "cmd=search_LB&key=" + key + "&page=" + page + "";
            ajaxhelpS(data, function (msg) {
                var obj = eval('(' + msg + ')');
                if (bon) {
                    listi = 0;
                    $('.' + listcls).map(function () {
                        if (listi == listidx && ($.trim($(this).html()) == lang.loading || page >= 1)) {
                            $(this).html(unescape(obj.list));
                        }
                        listi++;
                    });
                    pagei = 0;
                    $('.' + pagecls).map(function () {
                        if (pagei == pageidx && ($.trim($(this).html()) == '' || page >= 1)) {
                            $(this).html(unescape(obj.page));
                        }
                        pagei++;
                    });

                } else {
                    $('#' + _ajaxlist).html(unescape(obj.list));
                    $('#' + _ajaxpage).html(unescape(obj.page));
                    $("#SearchNum").html(unescape(obj.count));
                }

                //伊顿幼儿园专有
                try {
                    GetybmSpan();
                    $(".active_in .left").height($(".active_in .right").height());
                } catch (e) {

                }
            }, false);
        });
    }
}

function getList_FC(key, page) {
    if (!checkAjaxSql(unescape(key))) {
        return false;
    }
    var _ajaxlist = "ajaxList";
    var _ajaxpage = "ajaxPage";

    var listidx = "", listcls = "", pageidx = "", pagecls = "";//列表索引 列表Class 分页索引 分页Class

    if ($('#ajaxListIndex').val() != undefined) {
        listidx = $.trim($('#ajaxListIndex').val());
    }
    if ($('#ajaxListClass').val() != undefined) {
        listcls = $.trim($('#ajaxListClass').val());
    }
    if ($('#ajaxPageIndex').val() != undefined) {
        pageidx = $.trim($('#ajaxPageIndex').val());
    }
    if ($('#ajaxPageClass').val() != undefined) {
        pagecls = $.trim($('#ajaxPageClass').val());
    }

    var bon = false;//是否是切换类型
    var dataBon = false;
    //如果列表索引 列表Class 分页索引 分页Class都不为空时 则是切换类型
    if (listidx != '' && listcls != '' && pageidx != '' && pagecls != '') {
        bon = true;
    }

    var listi = 0;
    var pagei = 0;
    //判断是否加载数据
    if (bon) {
        $('.' + listcls).map(function () {
            if (listi == listidx && ((($.trim($(this).html()) == lang.loading || $.trim($(this).html()) == lang.loading) && page == -1) || page >= 1)) {
                if (page == -1) page = 1;
                dataBon = true;
            }
            listi++;
        });
    }
    else {
        $('#' + _ajaxlist).html(lang.loading);
        $('#' + _ajaxlist).html('');
        $('#' + _ajaxpage).html('');
        dataBon = true;
    }
    var ajaxListDate = $('#ajaxListDate').val();
    var ajaxPageDate = $('#ajaxPageDate').val();
    var ajaxSiteId = $('#ajaxSiteId').val();
    var ajaxGroupId = $('#ajaxGroupId').val();
    var ajaxPageSite = $('#ajaxPageSite').val();

    var ajaxClassId = $('#ajaxClassId').val();
    var ajaxXgid = $('#ajaxXgid').val();
    var ajaxCategory = $('#ajaxCategory').val();
    var ajaxAboutDownload = $('#ajaxAboutDownload').val();
    var ajaxParentId = $('#ajaxParentId').val();
    if (dataBon) {

        var data = "cmd=_saveListAndPageDate_LB&ajaxListDate=" + ajaxListDate + "&ajaxPageDate=" + ajaxPageDate + "&ajaxSiteId=" + ajaxSiteId + "&ajaxGroupId=" + ajaxGroupId + "&ajaxPageSite=" + ajaxPageSite + "&ajaxClassId=" + ajaxClassId + "&ajaxXgid=" + ajaxXgid + "&ajaxCategory=" + ajaxCategory + "&ajaxAboutDownload=" + ajaxAboutDownload + "&ajaxParentId=" + ajaxParentId + "";
        ajaxhelpS(data, function () {
            var data = "cmd=SaveCiphertexDate_FC&Ciphertext=" + $('#ajaxCiphertext').val() + "&CiphertextField=" + $('#ajaxCiphertextField').val();
            ajaxhelpS(data, function () {
                data = "cmd=search_FC&key=" + key + "&page=" + page;
                ajaxhelpS(data, function (msg) {
                    var obj = eval('(' + msg + ')');

                    if (bon) {
                        listi = 0;
                        $('.' + listcls).map(function () {
                            if (listi == listidx && ($.trim($(this).html()) == lang.loading || page >= 1)) {
                                $(this).html(unescape(obj.list));
                            }
                            listi++;
                        });
                        pagei = 0;
                        $('.' + pagecls).map(function () {
                            if (pagei == pageidx && ($.trim($(this).html()) == '' || page >= 1)) {
                                $(this).html(unescape(obj.page));
                            }
                            pagei++;
                        });

                    } else {

                        $('#' + _ajaxlist).html(unescape(obj.list));

                        $('#' + _ajaxpage).html(unescape(obj.page));
                    }

                });
            }, false);
        }, false);
    }

}

/*--------------------根据查询条件，加载更多-------------------------------*/

function getList_CZ(key, page) {
    if (!checkAjaxSql(unescape(key))) {
        return false;
    }
    var _ajaxlist = "ajaxList";
    var _ajaxpage = "ajaxPage";

    var listidx = "", listcls = "", pageidx = "", pagecls = "";//列表索引 列表Class 分页索引 分页Class

    if ($('#ajaxListIndex').val() != undefined) {
        listidx = $.trim($('#ajaxListIndex').val());
    }
    if ($('#ajaxListClass').val() != undefined) {
        listcls = $.trim($('#ajaxListClass').val());
    }
    if ($('#ajaxPageIndex').val() != undefined) {
        pageidx = $.trim($('#ajaxPageIndex').val());
    }
    if ($('#ajaxPageClass').val() != undefined) {
        pagecls = $.trim($('#ajaxPageClass').val());
    }

    var bon = false;//是否是切换类型
    var dataBon = false;
    //如果列表索引 列表Class 分页索引 分页Class都不为空时 则是切换类型
    if (listidx != '' && listcls != '' && pageidx != '' && pagecls != '') {
        bon = true;
    }

    var listi = 0;
    var pagei = 0;
    //判断是否加载数据
    if (bon) {
        $('.' + listcls).map(function () {
            if (listi == listidx && ((($.trim($(this).html()) == lang.loading || $.trim($(this).html()) == lang.loading) && page == -1) || page >= 1)) {
                if (page == -1) page = 1;
                dataBon = true;
            }
            listi++;
        });
    }
    else {
        $('#' + _ajaxlist).html(lang.loading);
        $('#' + _ajaxlist).html('');
        $('#' + _ajaxpage).html('');
        dataBon = true;
    }
    var ajaxListDate = $('#ajaxListDate').val();
    var ajaxPageDate = $('#ajaxPageDate').val();
    var ajaxSiteId = $('#ajaxSiteId').val();
    var ajaxGroupId = $('#ajaxGroupId').val();
    var ajaxPageSite = $('#ajaxPageSite').val();

    var ajaxClassId = $('#ajaxClassId').val();
    var ajaxXgid = $('#ajaxXgid').val();
    var ajaxCategory = $('#ajaxCategory').val();
    var ajaxAboutDownload = $('#ajaxAboutDownload').val();
    var ajaxParentId = $('#ajaxParentId').val();
    if (dataBon) {
        var data = "cmd=_saveListAndPageDate_LB&ajaxListDate=" + ajaxListDate + "&ajaxPageDate=" + ajaxPageDate + "&ajaxSiteId=" + ajaxSiteId + "&ajaxGroupId=" + ajaxGroupId + "&ajaxPageSite=" + ajaxPageSite + "&ajaxClassId=" + ajaxClassId + "&ajaxXgid=" + ajaxXgid + "&ajaxCategory=" + ajaxCategory + "&ajaxAboutDownload=" + ajaxAboutDownload + "&ajaxParentId=" + ajaxParentId + "";
        ajaxhelpS(data, function () {
            data = "cmd=search_CZ&key=" + key + "&page=" + page + "";
            ajaxhelpS(data, function (msg) {
                var obj = eval('(' + msg + ')');

                if (bon) {
                    listi = 0;
                    $('.' + listcls).map(function () {
                        if (listi == listidx && ($.trim($(this).html()) == lang.loading || page >= 1)) {
                            $(this).html(unescape(obj.list));
                        }
                        listi++;
                    });
                    pagei = 0;
                    $('.' + pagecls).map(function () {
                        if (pagei == pageidx && ($.trim($(this).html()) == '' || page >= 1)) {
                            $(this).html(unescape(obj.page));
                        }
                        pagei++;
                    });

                } else {
                    $('#' + _ajaxlist).html(unescape(obj.list));
                    $('#' + _ajaxpage).html(unescape(obj.page));
                }
            });
        });
    }
}
/*--------------------过滤危险字符---------------------------------------------------*/

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(3() {	$(2).7(\'6\', \'5[c=9],a,5[c=8]\',	3() {		e d = $(b).d();		4 (!1(d)) {			0(\'不能包含危险字符!\');			$(b).d(\'\');		}	});})', 62, 15, 'alert|checkAjaxSql|document|function|if|input|keyup|on|password|text|textarea|this|type|val|var'.split('|'), 0, {}));

function checkAjaxSql(val) {
    var otherKey = " and | exec | count | chr | mid | master | or | truncate | char | declare | join |<|>|*|/*|*/|'|;|\\u|insert|select|delete|update|create|drop|script|javascript|alert";
    for (var i = 0; i < otherKey.split('|').length ; i++) {
        if (val.indexOf(otherKey.split('|')[i]) != -1) {
            return false;
        }
    }
    return true;
}
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-24]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('0 EnterFunction(1,2){$(1).keydown(0(e){var 4=e.which;if(4==13){$(2).click()}})}', [], 5, 'function|ElementInput|ElementBtn||curKey'.split('|'), 0, {}));

eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function getValue(0){return $.trim($(0).val())}', [], 1, 'obj'.split('|'), 0, {}));

eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(36) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-9a-g]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function getValueDefaultError(3,6,7,5,4,8){9 1=true;9 0=$.trim($(3).val());2(0==6||0==\'\'){a.b(7);1=c;2(5){$(3).d()}}2((4!=""||4!=null)&&0!=\'\'){2(0.length<4){a.b(8);1=c;2(5){$(3).d()}}e f g(0,1)}e f g(0,1)}', [], 17, 'Temp|Validator|if|Element|Length|Focus|DefaultVal|ErrorInfo|LengthErrorInfo|var|layer|alert|false|focus|return|new|Array'.split('|'), 0, {}));

eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-7]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function getLengthDefaultError(1,3,4,5){6 2=true;6 0=$.trim($(1).val());7(0.length<3||0==\'\'){alert(4);2=false;7(5){$(1).focus()}}return new Array(0,2)}', [], 8, 'Temp|Element|Validator|DefaultVal|ErrorInfo|Focus|var|if'.split('|'), 0, {}));
/*------------取元素value值  end-----------*/

/*----------------取元素text值-------------*/
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function getText(0){return $.trim($(0).text())}', [], 1, 'obj'.split('|'), 0, {}));

eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-7]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function getTextDefaultError(0,3,4,5){6 1=true;6 2=$.trim($(0).val());7(2==3){alert(4);1=false;7(5){$(0).focus()}}return new Array(2,1)}', [], 8, 'Element|Validator|Temp|DefaultVal|ErrorInfo|Focus|var|if'.split('|'), 0, {}));

/*--------------验证元素输入的电话号码|手机号码格式是否正确-------------------*/
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function IsTelOrPhone(0){if(!regtelphone.test($(0).val())){alert(lang.telformat);$(0).focus()}}', [], 1, 'obj'.split('|'), 0, {}));
/*-----------------元素输入的数字格式,如果输入非数字的字符 将默认设置为1------------*/

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(6 () {    $(\'.1>8\').9(6 (5) {        d 7 = $(\'.1>8\').7($(b));        $(\'#2\').c($(b).3("4-0"));        a(7);    });});', 62, 14, 'ClassId|ajaxBQQH|ajaxClassId|attr|data|e|function|index|li|mouseover|setListAndPageHtml|this|val|var'.split('|'), 0, {}));

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('6 e(a) {    $(\'#3\').h(a);    $(\'#4\').h(a);    9 ($.g($(\'.\' + $(\'#2\').h()).5(a).f()).c == 0) {        $(\'.\' + $(\'#2\').h()).5(a).8(b.d);    }    7("", -1);}', 62, 18, '||ajaxListClass|ajaxListIndex|ajaxPageIndex|eq|function|getList_LB|html|if|index|lang|length|loading|setListAndPageHtml|text|trim|val'.split('|'), 0, {}));

/*---------------退订 订阅信息 begin----------*/
/*------------取元素value值-----------*/
eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(36) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-9a-l]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('a getValue(i){5 $.b($(i).c())}a getValueDefaultError(2,6,7,4,8,j){9 1=k;9 0=$.b($(2).c());3(0==6||0==\'\'){d(7);1=e;3(4){$(2).f()}}3((8!=""||8!=null)&&0!=\'\'){3(0.l<8){d(j);1=e;3(4){$(2).f()}}5 g h(0,1)}5 g h(0,1)}a getLengthDefaultError(2,6,7,4){9 1=k;9 0=$.b($(2).c());3(0.l<6||0==\'\'){d(7);1=e;3(4){$(2).f()}}5 g h(0,1)}', [], 22, 'Temp|Validator|Element|if|Focus|return|DefaultVal|ErrorInfo|Length|var|function|trim|val|alert|false|focus|new|Array|obj|LengthErrorInfo|true|length'.split('|'), 0, {}));

/*----------------取元素text值-------------*/
eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(36) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-9a-c]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('3 getText(4){5 $.6($(4).7())}3 getTextDefaultError(0,8,9,a){b 1=true;b 2=$.6($(0).7());c(2==8){alert(9);1=false;c(a){$(0).focus()}}5 new Array(2,1)}', [], 13, 'Element|Validator|Temp|function|obj|return|trim|text|DefaultVal|ErrorInfo|Focus|var|if'.split('|'), 0, {}));

/*--------------验证元素输入的电话号码|手机号码格式是否正确-------------------*/
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function IsTelOrPhone(0){if(!regtelphone.test($(0).val())){alert(\'电话号码格式不正确!\');$(0).focus()}}', [], 1, 'obj'.split('|'), 0, {}));

/*-----------------元素输入的数字格式,如果输入非数字的字符 将默认设置为1------------*/
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-2]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function IsNum(0,1){if(!regnum.test($(0).2())){$(0).2(1)}}', [], 3, 'obj|obj2|val'.split('|'), 0, {}));

/*-点击次数*/
$(function () {
    UpdateCrt('#dianji')
});

function UpdateCrt(obj) {
    var this_href = window.location.href;
    var reg = /\d{1,}_(\d{1,})\.html/;
    if (reg.test(this_href)) {
        var data = "cmd=updatecrt&id=" + TDES.encrypt(parseInt(reg.exec(this_href)[1])) + "";
        ajaxhelpS(data, function (msg) {
            $(obj).text(msg)
        })
    } else {
        var data = "cmd=updateMenuCrt&cid=" + TDES.encrypt(parseInt(getClassID())) + "&id=" + TDES.encrypt(parseInt(getInfoID())) + "";
        ajaxhelpS(data, function (msg) { })
    }
}

/*-重置按钮*/
eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '^$' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('$(document).on("click","#btnReset",function(){window.location.href=this_url});', [], 1, ''.split('|'), 0, {}));
/*-----------------------身份证号码真伪验证-----------------------------
**返回结果
**0   表示身份证号码正确
**1   表示非法身份证号
**2   表示非法地区
**3   表示非法生日
*/

eval(function (p, a, c, k, e, r) { e = function (c) { return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[579bcefhjl-wyzA-F]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function cardValid(s){7 t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};7 l=0;7 5=s;7 u=5.v;9(!/^\\d{17}(\\d|x)$/i.w(5)&&!/^\\d{15}$/i.w(5)){b 1}9(t[y(5.c(0,2))]==null){b 2}9(u==15){e="19"+5.c(6,2)+"-"+h(5.c(8,2))+"-"+h(5.c(10,2));7 d=f m(e.n(/-/g,"/"));7 z=d.o().toString()+"-"+(d.A()+1)+"-"+d.B();9(e!=z){b 3}5=5.p(0,6)+"19"+5.p(6,15);5=5+GetVerifyBit(5)}7 C=f m();7 q=C.o();7 D=q-150;7 r=5.p(6,10);9(r<D||r>q){b 3}5=5.n(/x$/i,"a");e=5.c(6,4)+"-"+h(5.c(10,2))+"-"+h(5.c(12,2));7 d=f m(e.n(/-/g,"/"));9(e!=(d.o()+"-"+(d.A()+1)+"-"+d.B())){b 3}E(7 i=17;i>=0;i--){l+=(Math.pow(2,i)%11)*y(5.charAt(17-i),11)}9(l%11!=1){b 1}7 j=f F();j=f F("11111119111111111","12121219121212121","123456789087654321");E(7 k=0;k<j.v;k++){9(5.indexOf(j[k])!=-1){b 1}}b 0}', [], 42, '|||||strIDno||var||if||return|substr||sBirthday|new||Number||words||iSum|Date|replace|getFullYear|substring|nowYear|year|cardID|aCity|idCardLength|length|test||parseInt|dd|getMonth|getDate|nowDate|oldYear|for|Array'.split('|'), 0, {}));

/*-------------------公共ajax调用方法-----------------*/

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('c 5(8, b) {    q m = 0;    g (k) {        m = h.i(\'数据请求中，请稍后…\', {            n: 0,            f: 1        });    }    $.4({        "o": "j",        "p": "" + d() + "/2/3.6",        "8": 8,        "9": "e",        "l": c (i) {            g (k) {                h.7(m);            }            g (b) {                b(i);            }        },        "a": c () {            g (k) {                h.7(m);            }        }    })}', 62, 27, '|16|Ajax|AjaxHandler_YDGJYEY|ajax|ajaxhelpS|ashx|close|data|datatype|error|fn|function|getRootPath|html|icon|if|layer|msg|post|showLoading|success|thisIndex|time|type|url|var'.split('|'), 0, {}));


