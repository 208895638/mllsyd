$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.swiper();
		},
		bindEvent:function(){
			var k = 0;//记录职业介绍是第几个职业
			//三条杠按钮点击出现下拉菜单
//			var m = true;//记录顶部按钮点击状态
			$(".hbb h3").on("click",function(){
				$(".nav").slideDown();
			});
			$(".hbbs h3").on("click",function(){
				$(".nav").slideUp();
			});
			//魔龙猎手导航栏的游戏资料和游戏特色划过切换到对应的位置
			$(".nav li").on("click",function(){
				var i = $(this).index();
				if(i == 3){
					var h = $(".game").offset().top;
					$('body,html').animate({scrollTop:h},500);
				};
			});
			//新闻攻略中的导航栏切换
			$(".newsNav ul li a").on("click",function(){
				var i = $(this).parent().index();
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".newsR .info .per").eq(i).show().siblings().hide();
			});
			
			//职业角色的技能切换
			$(".skillTop").on("click","li",function(){
				var i = $(this).index();
				console.log(i);
				$(this).addClass("on").siblings().removeClass("on");
				$(this).parent().siblings().find("li").eq(i).show().siblings().hide();
			});
			//游戏特色滑动切换
			$(".game .games li").hover(function(){
				var i = $(this).index();
				$(this).siblings().find("h3").show().siblings().hide();
				$(this).find("h4").show().siblings().hide();
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
			
		},
		swiper:function(){
			var swiper = new Swiper('.bans', {
		        pagination: '.pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction : true		        
		    });
		    $(".bans").mouseenter(function(){
		    	swiper.stopAutoplay();
		    }).mouseout(function(){
		    	swiper.startAutoplay();
		    });
		    var swiper = new Swiper('.content', {
		        pagination: '.roles',
		        paginationClickable: true,
		        paginationType : 'progress',
		        loop:true,
		        speed: 2000,
		        autoplay:150000,
//	            observer:true,
//	            observeParents:true,
//	            autoplayDisableOnInteraction : true
		    });
		    var swiperss = new Swiper('.charac', {
		    	pagination: '.characPage',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        grabCursor : true,
		        autoplay: 300000,
		        autoplayDisableOnInteraction : true,	 
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',	
		       	effect : 'coverflow',
		       	tdFlow: {
			        rotate : 30,
			        stretch :800,
			        depth: 50,
			        modifier : 1,
			        shadows : false
		      	}    
		    });
		}
	};
	index.init();
})