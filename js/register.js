$(document).ready(function() {
	var flag = true;
	//手机号码正则判断
	check("#userMobile", ".tip", "请输入正确的手机号码，方便接受订单通知，找回密码。", "输入的号码有误！", /^[1-3]\d{10}$/, "num");
	//验证码判断
	//check("#mobileCode",".tip","","验证码错误！");
	check("#password", ".tip", "必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-20之间", "密码格式错误！", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, "str");

	key();
	$("#agreei").click(function() {

		if ($(this).hasClass("focusin")) {
			$(this).removeClass("focusin");
		} else {

			$(this).addClass("focusin");
		}
	});

	function key() {
		$("#repeatpasswd").focus(function() {
			$(this).parent().parent().find(".tip").addClass("warning").html("再次输入密码,必须包含大小写字母和数字的组合，不能使用特殊字符，长度在6-20之间");

		});
		$("#repeatpasswd").blur(function() {
			var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
			var data = $(this).val();
			var result = reg.test(data);
			$(this).parent().parent().find(".tip").removeClass("warning");
			if (result) {
				var psd1 = $("#password").val();
				var psd2 = $("#repeatpasswd").val();
				//console.log(psd1+"-"+psd2);
				if (psd1 == psd2) {
					flag = true;
					$(this).parent().parent().find(".tip").removeClass("error");
					$(this).parent().parent().find(".tip").addClass("ok").html("");
					//console.log(psd1+"-"+psd2);
				} else {
					flag = false;
					$(this).parent().parent().find(".tip").removeClass("ok");
					$(this).parent().parent().find(".tip").addClass("error").html("两次密码不一致！");
					//console.log("shit");
				}

			} else {
				$(this).parent().parent().find(".tip").removeClass("ok");
				$(this).parent().parent().find(".tip").addClass("error").html("输入的密码有误！");
			}
		});

	}

	function check(ele, find, warning, error, reg, type) {
		$(ele).focus(function() {
			$(this).parent().parent().find(find).addClass("warning").html(warning);

		});
		$(ele).blur(function() {
			$(this).parent().parent().find(find).removeClass("warning");
			if (type == "num") {
				var data = parseInt($(this).val());
			} else {
				var data = $(this).val();
			}

			if (reg) {
				var result = reg.test(data);
				if (result) {
					flag = true;
					//请求ajax验证
					$(this).parent().parent().find(find).removeClass("error");
					$(this).parent().parent().find(find).addClass("ok").html("");

				} else {
					flag = false;
					$(this).parent().parent().find(find).removeClass("ok");
					$(this).parent().parent().find(find).addClass("error").html(error);
				}

			} else {
				//请求ajax验证
				//				$(this).parent().parent().find(find).removeClass("error");
				//				$(this).parent().parent().find(find).addClass("ok").html("");
			}
			//正则验证之后执行比较函数

		});

	}

});