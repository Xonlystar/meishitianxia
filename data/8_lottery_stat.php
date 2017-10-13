<?php
	header('Content-Type:application/json;charset=UTF-8');

	$username = $_REQUEST['username'];

	$output=['total'=>0,'used'=>0,'left'=>0];

	$conn = mysqli_connect('127.0.0.1','root','','jd',3306);
	//计算总抽奖次数
	mysqli_query($conn,'SET NAMES UTF8');
	$sql = "SELECT SUM(price) FROM jd_orders WHERE user_name='$username'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$total = floor($row['SUM(price)']/100);
	//计算已使用的抽奖次数
	$sql = "SELECT COUNT(*) FROM jd_lottery WHERE user_name='$username'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	$used = floor($row['COUNT(*)']);
	//计算剩余抽奖次数
	$left = $total-$used;
	
	$output=['total'=>$total,'used'=>$used,'left'=>$left];

	echo json_encode($output);
?>