<?php
	header('Content-Type:application/json;charset=UTF-8');
	$username=$_REQUEST['username'];
	$password=$_REQUEST['password'];
	
	$conn=mysqli_connect('127.0.0.1','root','','ms',3306);

	mysqli_query($conn,'SET NAMES UTF8');
	$sql="SELECT * FROM ms_user WHERE username='$username' AND password='$password'";
	$result=mysqli_query($conn,$sql);

	$str=[];
	if(!$result){
		$str['code']=1001;
		$str['msg']='SQL语句错误';
	}else{
		if(($row=mysqli_fetch_assoc($result))!==null){
			$str['code']=1000;
			$str['msg']='登录信息验证通过';
		}else{
			$str['code']=1002;
			$str['msg']='用户名或密码错误';
		}
	}
	echo json_encode($str);