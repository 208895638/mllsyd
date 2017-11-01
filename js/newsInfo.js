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
	newsInfo.init();
})