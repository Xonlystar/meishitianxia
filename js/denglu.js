/***3 点击头部登录a标签弹出modal登录窗口***/


$('#login').click(function(e){
	e.preventDefault();
	$('.modal').fadeIn();
});

//TODO 封装用户登录功能
$('#bt-login').click(function(){
    //把用户的输入序列化为k=v字符串
	var  loginName = $('[name="username"]').val();
    var data = $('#login-form').serialize();
    //$.ajax  $.post
    $.post('data/denglu.php', data, function(obj){
        //console.log('开始处理登录验证结果');

        if(obj.code===1000){ //验证成功
            $('.modal').fadeOut();  //摸态框淡出
//            loginName = $('[username="username"]').val();
//			var loginName = sessionStorage.getItem("loginName");
		
            $('#welcome').html('欢迎回来：'+loginName);
            //TODO 将用户信息保存到sessionStorage中
            sessionStorage.setItem("loginName",loginName);
        }else {
            $('.modal .alert').html(obj.msg);
        }
    });
});

//TODO 1.验证是否登录


//$(function(){
//   //TODO 处理验证是否登录后的逻辑
//if(loginName){//TODO 登录过
//	$("#welcome").html("欢迎回来: "+loginName);
//		
//   //TODO 执行默认的订单查询功能
//		 }else{//TODO 没有登录
//	
//       $(".modal").css("display","block");
//    }
//});



