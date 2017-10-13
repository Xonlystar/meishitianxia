
///*广告图片数组*/
//var imgs=[
//	{"i":0,"img":"images/1.jpg"},
//    {"i":1,"img":"images/2.jpg"},
//    {"i":2,"img":"images/3.jpg"},
//    {"i":3,"img":"images/4.jpg"},
//    {"i":4,"img":"images/5.jpg"},
//	{"i":5,"img":"images/6.jpg"},
//];
//var adv={
//  LIWIDTH:0,//保存每个li的宽度
//  DISTANCE:0,//保存总距离
//  DURATION:1000,//保存总时间
//  STEPS:150,//保存总步数
//  interval:0,//保存步频
//  step:0,//保存步长
//  moved:0,//保存已经移动的位移
//  timer:null,//保存定时器序号
//  WAIT:500,
//  canAuto:true,//标识是否可以启动自动轮播
//  init:function(){
//    //获得id为slider的div的宽,保存在LIWIDTH中
//    this.LIWIDTH=parseFloat(
//      getComputedStyle($("#slider")[0]).width
//    );
//    //计算interval: DURATION/STEPS
//    this.interval=this.DURATION/this.STEPS;
//    this.updateView();//更新页面
//    //为id为indexs的ul绑定鼠标进入事件为function
//    $("#indexs").on("mouseover",
//      function(e){
//        var target=e.target;//获得target
//        //如果target是li
//        if(target.nodeName=="LI"){
//          //求n: target的内容-id为indexs下class为hover的元素的内容
//          var n=target.innerHTML
//                 -$("#indexs>.hover")[0].innerHTML;
//          this.move(n);//调用move(n)
//        }
//      }.bind(this)
//    ); 
//	  this.autoMove(),
//	$("#slider").on("mouseover",function(e){
//		this.canAuto=false;
//		}.bind(this));
//	$("#slider").on("mouseout",function(e){
//		this.canAuto=true;
//		}.bind(this));
//  },
//  updateView:function(){
//    for(var i=0,
//            htmlImgs="",
//            htmlIdxs="";
//        i<imgs.length;
//        i++){
//      htmlImgs+=
//        '<li><img src="'+imgs[i].img+'"></li>';
//      htmlIdxs+="<li>"+(i+1)+"</li>";
//    }
//    $("#imgs").innerHTML=htmlImgs;
//    $("#imgs").style.width=
//      this.LIWIDTH*imgs.length+"px";
//    $("#indexs").innerHTML=htmlIdxs;
//    $("#indexs>li")[imgs[0].i].className="hover";
//  },
// autoMove:function(){
//	this.timer=setTimeout(function(){
//		if(this.canAuto==true)
//			this.move(1);
//		else
//			this.autoMove();
//	}.bind(this),this.WAIT);
//	},
//  move:function(n){
//    clearInterval(this.timer);
//    this.timer=null;
//    if(n<0){
//      imgs=imgs.splice(imgs.length+n,-n)
//               .concat(imgs);
//      this.updateView();
//      var left=parseFloat(
//        getComputedStyle($("#imgs")[0]).left
//      );
//      var start=left-this.LIWIDTH*(-n);
//      $("#imgs").style.left=start+"px";
//      var end=0;
//    }else{
//      var start=parseFloat(
//        getComputedStyle($("#imgs")).left
//      );
//      var end=-this.LIWIDTH*n;
//    }
//    this.DISTANCE=-(end-start);
//    this.step=this.DISTANCE/this.STEPS;
//    this.timer=setInterval(
//      this.moveStep.bind(this,n),this.interval
//    );
//  },
//  moveStep:function(n){
//    var left=parseFloat(
//      getComputedStyle($("#imgs")).left
//    );
//    $("#imgs").style.left=left-this.step+"px";
//    this.moved++;
//    if(this.moved==this.STEPS){
//      clearInterval(this.timer);
//      this.timer=null;
//      this.moved=0;
//      if(n>0){
//        imgs=imgs.concat(imgs.splice(0,n));
//        this.updateView();
//      }
//      $("#imgs").style.left="";
//	  this.autoMove();
//    }
//  }
//}
//adv.init();
var imgs=[
{"i":0,"img":"images/1.jpg"},
{"i":1,"img":"images/2.jpg"},
{"i":2,"img":"images/3.jpg"},
{"i":3,"img":"images/4.jpg"},
{"i":4,"img":"images/5.jpg"},
{"i":5,"img":"images/6.jpg"},
];
var adv={
  LIWIDTH:0,//每个li的宽度
  $ulImgs:null,//移动的ul
  INTERVAL:500,//动画的时间间隔
  timer:null,

  time:500,

  init(){
    this.LIWIDTH=parseFloat($("#slider").css("width"));
    this.$ulImgs=$("#imgs");
    this.updateView();
    $("#indexs").on("mouseover","li",(e)=>{
      $("[class='hover']").removeClass("hover");
      var target=$("#indexs>li").index(e.target);
      var old=imgs[0].i;
      this.move(target-old);
    });
    this.moveOut();
  },
  moveOut(){
    this.timer=setTimeout(()=>this.move(1),this.time);
  },
  moveprev(n){
    imgs=imgs.splice(n,-n).concat(imgs);
    this.updateView();
    this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))+n*this.LIWIDTH);

  },
  move(n){
    clearTimeout(this.timer);
    if(n<0){
      this.moveprev(n);
      this.$ulImgs.stop(true).animate({left:0},this.INTERVAL,()=>this.moveOut());
    }
    else{
      this.$ulImgs.stop(true).animate({left:-n*this.LIWIDTH},this.INTERVAL,
        ()=>this.moveLeftCallback(n));}
  },
  moveLeftCallback(n){
    imgs=imgs.concat(imgs.splice(0,n));
    this.updateView();
    this.$ulImgs.css("left","");
    this.moveOut();
  },
  updateView(){
    for(var i=0,lis="",idxs="";i<imgs.length;i++){
      lis+="<li><img src="+imgs[i]["img"]+"></li>";
      idxs+="<li>"+(i+1)+"</li>";
    }
    this.$ulImgs.html(lis).css("width",imgs.length*this.LIWIDTH);
    $("#imgs li img").css({width:"100%",height:"300"});
    $("#indexs").html(idxs);
    $("#indexs").children(`li:eq(${imgs[0].i})`).addClass("hover");

  }
}
adv.init();










//window.$=HTMLElement.prototype.$=function(selector){
//    var elems=(this==window?document:this)
//        .querySelectorAll(selector);
//    return elems.length==0?null:
//           elems.length==1?elems[0]:
//                           elems;
//}
//HTMLElement.prototype.on=function(ename,fun){
//  this.addEventListener(ename,fun);
//}
//NodeList.prototype.each=function(callback){
//  //遍历当前nodeList中每个元素，对每个元素调用相同的callback函数
//  for(var i=0;i<this.length;i++){
//    callback(this[i]);
//  }
//}












 
//广告轮播
//滚动
var zoom={
  OFFSET:0,//保存起始的left值
  LIWIDTH:0,//保存每个li的宽度
  moved:0,//保存已经左移的li个数
  init:function(){
    //查找id为icon_list的ul，获得其计算后的样式中的left，保存在OFFSET
	//console.dir(getComputedStyle($("#icon_list"))[66]);
    this.OFFSET=parseFloat($("#icon_list").css("left"));
    //查找id为icon_list下的第一个li，获得其计算后的样式中的width，保存在LIWIDTH中
    this.LIWIDTH=197;
   
    //查找id为preview下的直接子元素i,调用each方法: function(elem){//this->zoom
      //为elem绑定单击事件为当前对象的move方法,并提前绑定this
    //},提前绑定this
    $("#preview>i").each(
      function(elem,value){
			$(value).on("click",this.move.bind(this))
		}.bind(this)
    );
	},
  
  move:function(e){//this->zoom
	 
    var target=e.target;//获得target
	 
    //如果target的class中不包含disabled
    if(target.className.indexOf("disabled")==-1){
      //将moved+:如果target的class中有forward?1:-1
	 
      this.moved+=
        (target.className.indexOf("forward")!=-1
          ?1:-1); 
      //设置id为icon_list的ul的left为: -LIWIDTH*moved+OFFSET
      icon_list.style.left=
        -this.LIWIDTH*this.moved+this.OFFSET+"px";
		}
	
    this.checkA();
	},
//按钮颜色改变
  checkA:function(){
	  console.log($("#icon_list>li").size());
	  console.log(this.moved);
    if(this.moved==0){//如果moved为0
      //设置class属性以backward开头的元素的class为"backward_disabled"
      $("[class^='backward']").attr('class',"backward_disabled");
    }else if($("#icon_list>li").size()
              -this.moved==5){
		
    //否则，如果id为icon_list下的所有li的个数-moved==5
      //设置class属性以forward开头的元素的class为"forward_disabled"
	  $("[class^='forward']").attr('class',"forward_disabled");
    }else{//否则
      //设置class属性以backward开头的元素的class为"backward"
       $("[class^='backward']").attr('class',"backward");
      //设置class属性以forward开头的元素的class为"forward"
       $("[class^='forward']").attr('class',"forward");
		}
	},
}
zoom.init();
