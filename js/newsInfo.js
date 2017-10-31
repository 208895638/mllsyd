$(function(){
	var newsInfo={
		init:function(){
			this.bindEvent();
		},
		bindEvent:function(){
			var addr=location.search.split("?");
			if(addr[1]){
				var id =addr[1].split("=")[1]; 
				$(".navBar li a").removeClass("on");
				$(".navBar li").eq(id).find("a").addClass("on");
			};
			//返回上一级
			$(".back").on("click",function(){
				window.history.go(-1);
			});
			//下拉菜单
			$(".hbb h3").on("click",function(){
				$(".nav").slideDown();
			});
			$(".hbbs h3").on("click",function(){
				$(".nav").slideUp();
			});
			
		},
		render:function(){
			var that=this;
			
		}
	};
	newsInfo.init();
})