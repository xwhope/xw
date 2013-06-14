$(document).ready(function() {
	//图片自动切换
	$("#center .grid").wrapInner( '<div class="out"></div>' );

	$("#center .win440x220").each(function() {
		$('<div class="over440x220"><span> 多多爱网站上线优惠活动</span> <div class="_over440x220">现在预定5折优惠,并送价值88元礼品!!查看详情...</div> </div>' ).appendTo( this );
	});	
	
	$("#center .win440x220").hover(function() {
			$(".over440x220",this).stop().animate({'top':'-50px'},200); // 向下滑动 - 显示
			$(".out",this).stop().animate({'top':'-50px'},200); // 向下滑动 - 隐藏	
		}, function() {
			$(".over440x220",this).stop().animate({'top':'0px'},600); // 向上滑动 - 隐藏
			$(".out",this).stop().animate({'top':'0px'},600); 
	});
	$("#center .win217x180").hover(function() {
			$(".over",this).stop().animate({'top':'-180px'},200); // 向下滑动 - 显示
			// $(".out",this).stop().animate({'top':'-180px'},400); // 向下滑动 - 隐藏
	
		}, function() {
			$(".over",this).stop().animate({'top':'0px'},400); // 向上滑动 - 隐藏
			$(".out",this).stop().animate({'top':'0px'},400); // 向上滑动 - 显示	
	});
	$("#center .win240x131").hover(function() {
			$(".over",this).stop().animate({'top':'-131px'},200); // 向下滑动 - 显示
			// $(".out",this).stop().animate({'top':'-131px'},2000); // 向下滑动 - 隐藏
	
		}, function() {
			$(".over",this).stop().animate({'top':'0px'},200); // 向上滑动 - 隐藏
			$(".out",this).stop().animate({'top':'0px'},2000); 
	});
	$("#center .win200x200").hover(function() {
			$(".over",this).stop().animate({'top':'-200px'},200); // 向下滑动 - 显示
			// $(".out",this).stop().animate({'top':'-200px'},400); // 向下滑动 - 隐藏	
		}, function() {
			$(".over",this).stop().animate({'top':'0px'},400); // 向上滑动 - 隐藏
			$(".out",this).stop().animate({'top':'0px'},400); // 向上滑动 - 显示	
	});
	
	
function getRandom(n){return Math.floor(Math.random()*n)};

	var colors=['FF3300','6600CC','9933CC','FF5A2C','CC0059'];
	$(".over").each(function(){
		$(".over_bg").css('background','#'+colors[getRandom(5)]);
	});
	 $(".over440x220").css('background','#'+colors[getRandom(5)]);

	
	// sidebar
	$(".list").hover(function(){
		$(this).css({"background":"#ed0da0","color":"#f9f8e4","font-size":"18px","font-weight":"bold"})
	},
	function(){
		$(this).css({'background':'#f9f8e4',"color":"#ed0da0","font-size":"14px","font-weight":"normal"})
	});
	$(".reserve").hover(function(){
		$(this).css({"background":"#e60","color":"#fff"})
	},
	function(){
		$(this).css({'background':'#f9f8e4',"color":"#1bb1f3"})
	});
        $(".submit").hover(function(){
	        $(this).css({"background":"#e60","color":"#fff"})
	},
	function(){
		$(this).css({'background':'#f9f8e4',"color":"#1bb1f3"})
	});
	
// 	$(".about-bg").hover(function(){
// 		$(this).css({"opacity":"0"})
// 	},
// 	function(){
// 		$(this).css({"opacity":"0.3"})
// 	})

	$(".about-bg").hover(function(){
		$(".about-bg").addClass("siblings-bg-opacity");
		$(this).addClass("bg-no-opacity");},
	function(){
	    $(".about-bg").removeClass("siblings-bg-opacity");
		$(this).removeClass("bg-no-opacity");
	});

	
	
	setTimeout(leapOn,3000);
	function leapOn()
	{
				$(".over440x220").stop().animate({'top':'-50px'},200); // 向下滑动 - 显示
		$(".win440x220 .out").stop().animate({'top':'-50px'},200); // 向下滑动 - 隐藏
		setTimeout(leapOff,4000);	
	}
	function leapOff()
	{
		$(".over440x220").stop().animate({'top':'0px'},600); // 向上滑动 - 隐藏
		$(".win440x220 .out").stop().animate({'top':'0px'},600); 
		setTimeout(leapOn,5000);
	}

	function jump200x200(){
		$(".win200x200 .jump1").stop().animate({'left':'-200px'},600); // 向上滑动 - 隐藏
		$(".win200x200 .jump2").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏		
		setTimeout(_jump200x200,5000);
	}
	function _jump200x200(){
		$(".win200x200 .jump1").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏
		$(".win200x200 .jump2").stop().animate({'left':'200px'},600); // 向上滑动 - 隐藏	
		setTimeout(jump200x200,6000);
	}
	setTimeout(jump200x200,2000);
	function jump200x200x2(){
		$(".win200x200 .jump9").stop().animate({'top':'-200px'},600); // 向上滑动 - 隐藏
		$(".win200x200 .jump10").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏		
		setTimeout(_jump200x200x2,3000);
	}
	function _jump200x200x2(){
		$(".win200x200 .jump9").stop().animate({'top':'0px'},600); // 向上滑动 - 隐藏
		$(".win200x200 .jump10").stop().animate({'left':'200px'},600); // 向上滑动 - 隐藏	
		setTimeout(jump200x200x2,6000);
	}
	setTimeout(jump200x200x2,4000);
	
	function jump217x180(){
		$(".win217x180 .jump3").stop().animate({'left':'-217px'},600); // 向上滑动 - 隐藏
		$(".win217x180 .jump4").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏		
		setTimeout(_jump217x180,5000);
	}
	function _jump217x180(){
		$(".jump3").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏
		$(".jump4").stop().animate({'left':'217px'},600); // 向上滑动 - 隐藏	
		setTimeout(jump217x180,6000);
	}
	setTimeout(jump217x180,4000);
	
	function jump240x131(){
		$(".jump5").stop().animate({'top':'-131px'},600); // 向上滑动 - 隐藏
		$(".jump6").stop().animate({'top':'0px'},600); // 向上滑动 - 隐藏		
		setTimeout(_jump240x131,5000);
	}
	function _jump240x131(){
		$(".jump5").stop().animate({'top':'0px'},600); // 向上滑动 - 隐藏
		$(".jump6").stop().animate({'top':'131px'},600); // 向上滑动 - 隐藏	
		setTimeout(jump240x131,6000);
	}
	setTimeout(jump240x131,1000);
	
	function jump240x131x2(){
		$(".jump7").stop().animate({'left':'240px'},600); // 向上滑动 - 隐藏
		$(".jump8").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏		
		setTimeout(_jump240x131x2,3000);
	}
	function _jump240x131x2(){
		$(".jump7").stop().animate({'left':'0px'},600); // 向上滑动 - 隐藏
		$(".jump8").stop().animate({'left':'-240px'},600); // 向上滑动 - 隐藏	
		setTimeout(jump240x131x2,2000);
	}
	setTimeout(jump240x131x2,200);

})
	
	
	
	
	