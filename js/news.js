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
				$(".container .groups").eq(id).show().siblings().hide();
			};
			//下拉菜单
			$(".hbb h3").on("click",function(){
				$(".nav").slideDown();
			});
			$(".hbbs h3").on("click",function(){
				$(".nav").slideUp();
			});
			//新闻攻略中的导航栏切换
			$(".navBar li a").on("click",function(){
				var i = $(this).parent().index();
				console.log(i);
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".container .groups").eq(i).show().siblings().hide();
			});
			//返回上一级
			$(".back").on("click",function(){
				window.history.go(-1);
			});
			//返回顶部
		    $('.go-back').on('click',function(){
		        var top = $(window).scrollTop();
		        var interval = setInterval(function(){
		            top -= 50;
		            if(top >= 50){
		                $(window).scrollTop(top);
		            }else {
		                $(window).scrollTop(0);
		                clearInterval(interval);
		            }
		        },20)
		    });
		     //底部按钮显示隐藏
		    $(window).on('scroll',function(){
		        var top = $(window).scrollTop();
		        var height = document.body.offsetHeight;
		        if(top >= height/2){
		            $('.go-back').show();
		        }else{
		            $('.go-back').hide();
		        }
		    });
		},
		render:function(){
			var that=this;
			
		}
	};
	news.init();
})