/*站点前台表单统一客户端验证     2014-08-28*/
var this_url = window.location.href;
var regemail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regtelphone = /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})))$/;
var regnum = /^\d+$/;
var regPcode = /^\d{6}$/;
var regUrl = /^(http|https):\/\/(.+?)\.(.+)/;

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('2 1(0){3 $.5($(0).4())}', 6, 6, 'obj|getValue|function|return|val|trim'.split('|'), 0, {}));

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('4 3(0,1){5(!7.6($(0).2())){$(0).2(1)}}', 8, 8, 'obj|obj2|val|IsNum|function|if|test|regnum'.split('|'), 0, {}));

eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('$(0(){$(\'.3\').2(0(){4(5,1)})});', 6, 6, 'function||keyup|isNum|IsNum|this'.split('|'), 0, {}));

var required = function (cname) {
    var goon = true;
    var IsRunReg = false;
    $(cname+' .get:visible').map(function () {
        if (goon) {
            IsRunReg = false;
            var val = getValue($(this));
            var placeholder = $(this).attr('placeholder');
            if ($(this).hasClass('required')) {
                if (val.length == 0 || $(this).val() == placeholder) {
                    if (placeholder != '' && placeholder != undefined) {
                        layer.msg(placeholder)
                    } else {
                        layer.msg('请输入必填信息!')
                    }
                    $(this).focus();
                    goon = false
                } else if (val.length == 1 && val == "0") {
                    var placeholder = $(this).attr('placeholder');
                    if (placeholder != '') {
                        layer.msg(placeholder)
                    } else {
                        layer.msg('请输入必填信息!')
                    }
                    $(this).focus();
                    goon = false
                }
                IsRunReg = true
            }
            if (!goon) {
                return false
            }
            if (!IsRunReg) {
                if (val != undefined && val.length > 0 && val != placeholder) {
                    IsRunReg = true
                }
            }
            if ($(this).hasClass('tel')) {
                if (IsRunReg && !regtelphone.test($(this).val())) {
                    layer.msg('您输入电话的格式错误!');
                    $(this).focus();
                    goon = false
                }
            } else if ($(this).hasClass('card')) {
                if (IsRunReg && cardValid($(this).val()) != 0) {
                    layer.msg('您输入的身份证号码格式不正确!');
                    $(this).focus();
                    goon = false
                }
            } else if ($(this).hasClass('email')) {
                if (IsRunReg && !regemail.test($(this).val())) {
                    layer.msg('您输入邮箱的格式错误!');
                    $(this).focus();
                    goon = false
                }
            } else if ($(this).hasClass('postalcode')) {
                if (IsRunReg && !regPcode.test($(this).val())) {
                    layer.msg('您输入的邮政编码格式不正确!');
                    $(this).focus();
                    goon = false
                }
            } else if ($(this).hasClass('number')) {
                if (IsRunReg && !regnum.test($(this).val())) {
                    layer.msg('您输入的不是正整数!');
                    $(this).focus();
                    goon = false
                }
                if (IsRunReg && $(this).attr('min')) {
                    if (Number($(this).val().length) < Number($(this).attr('min'))) {
                        layer.msg('您输入的值过小!');
                        $(this).focus();
                        goon = false
                    }
                }
                if (IsRunReg && $(this).attr('max')) {
                    if (Number($(this).val().length) > Number($(this).attr('max'))) {
                        layer.msg('您输入的值过大!');
                        $(this).focus();
                        goon = false
                    }
                }
            } else if ($(this).hasClass('weburl')) {
                if (IsRunReg && !regUrl.test($(this).val())) {
                    layer.msg('您输入的网址格式不正确!');
                    $(this).focus();
                    goon = false
                }
            }
        }
    });
    return goon
}

$(function () {
    $('#btnSubmit').click(function () {
        if (required('div.main')) {
            var attrArgs = "";
            var valArgs = "";
            $('div.main .get:visible').map(function (i) {
                if (getValue($(this)).length != 0) {
                    attrArgs += $(this).attr('name') + ",";
                    valArgs += escape(getValue($(this))) + ","
                } else {
                    attrArgs += $(this).attr('name') + ",";
                    valArgs += escape("") + ","
                }
            });
            var data = "cmd=insertForm&attrArgs=" + TDES.encrypt(attrArgs) + "&valArgs=" + TDES.encrypt(valArgs) + "";
            ajaxhelpForm(data, function (msg) {
                var obj = eval('(' + msg + ')');
                if (unescape(obj.state) == 1) {
					subtac('恭喜您！提交成功！',unescape(obj.info));
                } else {
                    layer.msg(unescape(obj.info));
                }
            })
        }
    });

    eval(function (p, a, c, k, e, d) { e = function (c) { return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) d[e(c)] = k[c] || e(c); k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1; }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p; }('$(\'1\').0(2(){4 3()});', 5, 5, 'submit|form|function|required|return'.split('|'), 0, {}));

    /*-----------------------身份证号码真伪验证-----------------------------
    **返回结果
    **0   表示身份证号码正确
    **1   表示非法身份证号
    **2   表示非法地区
    **3   表示非法生日
    */

    eval(function (p, a, c, k, e, r) { e = function (c) { return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[579bcefhjl-wyzA-F]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('function cardValid(s){7 t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};7 l=0;7 5=s;7 u=5.v;9(!/^\\d{17}(\\d|x)$/i.w(5)&&!/^\\d{15}$/i.w(5)){b 1}9(t[y(5.c(0,2))]==null){b 2}9(u==15){e="19"+5.c(6,2)+"-"+h(5.c(8,2))+"-"+h(5.c(10,2));7 d=f m(e.n(/-/g,"/"));7 z=d.o().toString()+"-"+(d.A()+1)+"-"+d.B();9(e!=z){b 3}5=5.p(0,6)+"19"+5.p(6,15);5=5+GetVerifyBit(5)}7 C=f m();7 q=C.o();7 D=q-150;7 r=5.p(6,10);9(r<D||r>q){b 3}5=5.n(/x$/i,"a");e=5.c(6,4)+"-"+h(5.c(10,2))+"-"+h(5.c(12,2));7 d=f m(e.n(/-/g,"/"));9(e!=(d.o()+"-"+(d.A()+1)+"-"+d.B())){b 3}E(7 i=17;i>=0;i--){l+=(Math.pow(2,i)%11)*y(5.charAt(17-i),11)}9(l%11!=1){b 1}7 j=f F();j=f F("11111119111111111","12121219121212121","123456789087654321");E(7 k=0;k<j.v;k++){9(5.indexOf(j[k])!=-1){b 1}}b 0}', [], 42, '|||||strIDno||var||if||return|substr||sBirthday|new||Number||words||iSum|Date|replace|getFullYear|substring|nowYear|year|cardID|aCity|idCardLength|length|test||parseInt|dd|getMonth|getDate|nowDate|oldYear|for|Array'.split('|'), 0, {}));

    eval(function (p, a, c, k, e, r) { e = String; if ('0'.replace(0, e) == 0) { while (c--) r[e(c)] = k[c]; k = [function (e) { return r[e] || e }]; e = function () { return '[0-3]' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('0 ajaxhelpForm(1,2){$.ajax({"type":"post","url":"/Ajax/Forms/ValidateHandler.ashx","1":1,"datatype":"html","success":0(3){if(2){2(3)}},"error":0(){}})}', [], 4, 'function|data|fn|msg'.split('|'), 0, {}))

    $("#btnSubmitPark").click(function () {
        if (required('div.ajaxValidate')) {
            var a = "",
                c = "";
            $("div.ajaxValidate .get:visible").map(function (d) {
                0 != getValue($(this)).length ? (a += $(this).attr("name") + ",", c += escape(getValue($(this))) + ",") : (a += $(this).attr("name") + ",", c += escape("") + ",")
            });
            var f = "cmd=insertForm&attrArgs=" + TDES.encrypt(a) + "&valArgs=" + TDES.encrypt(c) + "";
            ajaxhelpForm(f, function (msg) {
			var obj = eval('(' + msg + ')');
                if (unescape(obj.state) == 1) {
					subtac('恭喜您！提交成功！',unescape(obj.info));
                } else {
                    layer.msg(unescape(obj.info));
                }
            })
        }
    });
});
