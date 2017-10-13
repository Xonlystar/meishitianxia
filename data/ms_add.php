<?php
/**
*接收客户端提交的员工信息，保存入数据库
*返回新记录在数据库中的编号
**/
header('Content-Type: text/html');

$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$email = $_REQUEST['email'];
$home = $_REQUEST['home'];
$age = $_REQUEST['age'];
$birth = $_REQUEST['birth'];

$conn = mysqli_connect('127.0.0.1', 'root', '', 'ms', 3306);

$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "INSERT INTO ms_user VALUES(NULL,'$username','$password','$email','$home','$age','$birth')";
$result = mysqli_query($conn,$sql);

if($result===false){
	echo '0';
}else {
	echo mysqli_insert_id($conn);
}
