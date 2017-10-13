SET NAMES UTF8;
DROP DATABASE IF EXISTS ms;
CREATE DATABASE ms CHARSET=UTF8;
USE ms;

CREATE TABLE ms_user(
  uid INT PRIMARY KEY AUTO_INCREMENT, 
  username VARCHAR(32),
  password VARCHAR(32),
  email VARCHAR(100),
  home VARCHAR(100) ,
  age VARCHAR(32) ,
  birth BIGINT
);
INSERT INTO ms_user VALUES
('1','weifang','123456','360014469@qq.com','武汉','22',19940812),
('2','zhuzhu','456789','96090469@qq.com','武汉','22',19941030);



/**用户的抽奖记录表**/
CREATE  TABLE  jd_lottery(
	id  INT  PRIMARY KEY  AUTO_INCREMENT,
	user_name VARCHAR(40),
	lottery_time  VARCHAR(20),
	level  VARCHAR(16)
);