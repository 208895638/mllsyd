$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.swiper();
		},
		bindEvent:function(){
			var k = 0;//记录职业介绍是第几个职业
			//三条杠按钮点击出现下拉菜单
			$(".hbb h3").hover(function(){
				$(this).siblings().slideDown();
			},function(){
				$(this).siblings().slideUp();
			});
			//魔龙猎手导航栏的游戏资料和游戏特色划过切换到对应的位置
			$(".nav li").on("click",function(){
				var i = $(this).index();
				if(i == 3){
					var h = $(".game").offset().top;
					$('body,html').animate({scrollTop:h},500);
				}
			});
			//新闻攻略中的导航栏切换
			$(".newsNav ul li a").on("click",function(){
				var i = $(this).parent().index();
				$(this).addClass("on").parent().siblings().find("a").removeClass("on");
				$(".newsR .info .per").eq(i).show().siblings().hide();
			});
			
			//职业介绍中的职业切换
			//初始状态
//			$(".purple").css({"background":"url(images/sec_huizhangzi1_41.png) no-repeat center"});
			$(".career li").on("click",function(){
				k = $(this).index();
//				//重置每个按钮的初始状态
//				$(".green").css({"background":"url(images/sec_huizhanglv_41.png) no-repeat center"});
//				$(".red").css({"background":"url(images/sec_huizhanghong_41.png) no-repeat center"});
//				$(".purple").css({"background":"url(images/sec_huizhangzi_41.png) no-repeat center"});
//				$(".orange").css({"background":"url(images/sec_huizhangcheng_41.png) no-repeat center"});
				var i = $(this).index();
//				//每个按钮对应点击之后的状态
//				switch (i){
//					case 2:$(this).css({"background":"url(images/sec_huizhanglv1_41.png) no-repeat center"});
//						break;
//					case 1:$(this).css({"background":"url(images/sec_huizhanghong1_41.png) no-repeat center"});
//					break;
//					case 0:$(this).css({"background":"url(images/sec_huizhangzi1_41.png) no-repeat center"});
//					break;
//					case 3:$(this).css({"background":"url(images/sec_huizhangcheng1_41.png) no-repeat center"});
//					break;
//					default:$(this).css({"background":"url(images/sec_huizhanglv1_41.png) no-repeat center"});
//						break;
//				}
				$(".xq .per").eq(i).show().siblings().hide();
			})
			//点击左右按钮切换职业
			$(".btnNext").on("click",function(){
				k++;
				console.log(k);
				//重置每个按钮初始状态
				$(".green").css({"background":"url(images/sec_huizhanglv_41.png) no-repeat center"});
				$(".red").css({"background":"url(images/sec_huizhanghong_41.png) no-repeat center"});
				$(".purple").css({"background":"url(images/sec_huizhangzi_41.png) no-repeat center"});
				$(".orange").css({"background":"url(images/sec_huizhangcheng_41.png) no-repeat center"});
				
				if(k == 1){
					//四个小按钮的切换
//					$(".red").css({"background":"url(images/sec_huizhanghong1_41.png) center center no-repeat","background-size":"cover"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 2){
//					$(".green").css({"background":"url(images/sec_huizhanglv1_41.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 3){
//					$(".orange").css({"background":"url(images/sec_huizhangcheng1_41.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else{
					k = 0;
//					$(".purple").css({"background":"url(images/sec_huizhangzi1_41.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}
			});
			$(".btnPrev").on("click",function(){
				k--;
				console.log(k);
				//重置每个按钮初始状态
				$(".green").css({"background":"url(images/sec_huizhanglv_41.png) no-repeat center"});
				$(".red").css({"background":"url(images/sec_huizhanghong_41.png) no-repeat center"});
				$(".purple").css({"background":"url(images/sec_huizhangzi_41.png) no-repeat center"});
				$(".orange").css({"background":"url(images/sec_huizhangcheng_41.png) no-repeat center"});
				if(k == 1){
					//四个小按钮的切换
//					$(".red").css({"background":"url(images/sec_huizhanghong1_41.png) center center no-repeat"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 2){
//					$(".green").css({"background":"url(images/sec_huizhanglv1_41.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else if(k == 0){
//					$(".purple").css({"background":"url(images/sec_huizhangzi1_41.png) no-repeat center"});
					
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}else{
					k = 3;
//					$(".orange").css({"background":"url(images/sec_huizhangcheng1_41.png) no-repeat center"});
					//职业的切换
					$(".xq .per").eq(k).show().siblings().hide();
				}
			})
			//职业角色的技能切换
			$(".skillTop li").on("click",function(){
				var i = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(this).parent().siblings().find("li").eq(i).show().siblings().hide();
			});
			//游戏特色滑动切换
			$(".game .games li").hover(function(){
				var i = $(this).index();
				$(this).siblings().find("h3").show().siblings().hide();
				$(this).find("h4").show().siblings().hide();
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
		}
	};
	index.init();
})