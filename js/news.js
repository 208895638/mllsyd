$(function(){
	var news={
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
			//三条杠按钮点击出现下拉菜单
			$(".hbb h3").hover(function(){
				$(this).siblings().slideDown();
			},function(){
				$(this).siblings().slideUp();
			});
			//新闻攻略中的导航栏切换
			$(".newsNav ul li a").on("click",function(){
				var i = $(this).parent().index();
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".newsR .info .per").eq(i).show().siblings().hide();
			});
			//导航栏切换
			$(".navBar li").on("click",function(){
				var i = $(this).index();
				$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
				$(".container .news").eq(i).removeClass("hide").siblings().addClass("hide");
			})
			
		},
		render:function(){
			var that=this;
			
		}
	};
	news.init();
})