$(document).ready(function($) {
	// 模拟点击登录窗口
	$('.login').click(function(event) {
		/* Act on the event */
		$('.modalBg').show()
	});

	//  直播情况下切换手术室(点击)
	$('.ops_btn').click(function(event) {
		/* Act on the event */
		$('.modalBg').fadeIn('slow/400/fast', function() {
			
		});
	});
		// 关闭
	$('.closeBtn').click(function(event) {
		/* Act on the event */
		$('.modalBg').fadeOut('slow/400/fast', function() {
			
		});
	});	
	//  模态框 移入遮罩
	$('.modal_ele').mouseenter(function(event) {
	/* Act on the event */
		$(this).find('.modalMask').show();							
	});
	$('.modal_ele').mouseleave(function(event) {
		/* Act on the event */
		$(this).find('.modalMask').hide();							
	});


	$('.systemSelect').find('span').click(function(event) {
		/* Act on the event */
		var e = event.target;
		$(this).siblings().removeClass('systemActive');
		$(this).addClass('systemActive');
	});
	// 直播窗口展开、收起函数
	$('.box_btn').click(function() {
		if($(this).hasClass('close_btn')){
				$(this).removeClass('close_btn')
							 .addClass('open_btn');
				// 收起侧边栏
				$('.right').hide(400, function() {
					//  移动窗口到中心位置
					$('.left').animate({
						'left': '200px'
					});
				});
			}else {
				$(this).removeClass('open_btn')
						 	 .addClass('close_btn');
				//  展开侧边栏
				$('.right').show(400, function() {

				});
				//  移动窗口到原来位置
				$('.left').animate({
						'left': '0'
					});
			}
	});

	//  下载按钮移入移出 效果
	$('.downloadMouse').mouseenter(function(event) {
		/* Act on the event */
		$(this).removeClass('downloadBtn');
		$(this).addClass('downloadBtnActive');
	});
	$('.downloadMouse').mouseleave(function(event) {
		/* Act on the event */
		$(this).removeClass('downloadBtnActive');
		$(this).addClass('downloadBtn');
	});


	//  手术简介以及资料下载tab栏切换 函数
	$('.download_tag').click(function(event) {
		/* Act on the event */
		var e = event.target
		console.log(e)
		$(e).siblings().removeClass('activeBtn');
		$(e).addClass('activeBtn');

		if($(e).index()===0){
			$('.doctor').show();
			$('.download_list').hide()
		}else {
			$('.doctor').hide();
			$('.download_list').show()
		}
	});

	//  视频检索处 切换功能
	$('.tag ').click(function(event) {
		/* Act on the event */
		var e = event.target;
		console.log(e)
		$(e).siblings().removeClass('tagActive');
		$(e).addClass('tagActive');

		if($(e).index() === 0){
			$('.move1').show();
			$('.move2').hide();
			$('.move3').hide();
			$('.move4').hide();
		}else if($(e).index() === 1){
			$('.move1').hide();
			$('.move2').show();
			$('.move3').hide();
			$('.move4').hide();
		}else if($(e).index() === 2){
			$('.move1').hide();
			$('.move2').hide();
			$('.move3').show();
			$('.move4').hide();
		} else {
			$('.move1').hide();
			$('.move2').hide();
			$('.move3').hide();
			$('.move4').show();
		}

	});

	//  视频播放首页轮播图
		var $imgs = $('.carousel .img-ct>li')
		var $prevBtn = $('.prev')
		var $nextBtn = $('.next')
		var $dot = $('.dot li')
		var $arrow = $('.arrow')	
		var imgLength = $imgs.length
		var imgWidth =$imgs.width()
		var pageIndex = 0	
		var timer = null	
		// 头尾克隆一个li 注意缓存的问题，
		$('.img-ct').append($imgs.first().clone())
		$('.img-ct').prepend($imgs.last().clone())	
		// 确定img-ct 的宽度以便后期扩展多张轮播图
		$('.img-ct').width((imgLength+2)*imgWidth)	
		//  设置第一页的位置
		$('.img-ct').css({left: -imgWidth})	
		//  点击按钮事件
		$prevBtn.click(function(){
			playPrev(1)
			
		})
		$nextBtn.click(function(){
			playNext(1)
	
		})	
		//  按钮事件函数
		function playNext(len){
			$('.img-ct').animate({
				left: '-='+len*imgWidth
			},function(){
				pageIndex+=len
				if(pageIndex === imgLength){
					pageIndex = 0
					$('.img-ct').css({left: -imgWidth})
				}
				console.log(pageIndex+'next')
				showDot()
			})
		}	
		function playPrev(len){
			$('.img-ct').animate({
				left: '+=' + len*imgWidth
			},function(){
				pageIndex-=len
				if(pageIndex < 0 ){
					pageIndex = imgLength-1
					$('.img-ct').css({left: -imgLength*imgWidth})
				}
				console.log(pageIndex)
				showDot()
			})
		}	
		//  显示点跟随函数
		function showDot(){
			console.log(pageIndex)
			$dot.removeClass('active')
			    .eq(pageIndex)
			    .addClass('active')
		}	
		//  点击点跟随函数
		$('.dot li').click(function(){
			var index = $(this).index()
			console.log(index+ 'dot')	
			if(index < pageIndex){
				playPrev(pageIndex-index)
			}else if(index > pageIndex){
				playNext(index-pageIndex)
			}
		})	
		//  自动播放定时器
		function playAuto(){
			 timer=setInterval(function(){
				playNext(1)
			},3500)
		}	
		playAuto()
		hideBtn()

		//  显示、隐藏按妞函数
		function showBtn(){
			$arrow.show()
		}
		function hideBtn(){
			$arrow.hide()
		}
		//  鼠标移入，移出效果

		$('.carousel').mouseenter(function(){
			clearInterval(timer)
			showBtn()
			console.log('stop')
		})
		$('.carousel').mouseleave(function(){
			playAuto()
			hideBtn()
			console.log('start')
		})

	//  视频播放移入mask
	$('.video_ele').mouseenter(function(event) {
		/* Act on the event */
		$(this).find('.mask').show();							
	});

	$('.video_ele').mouseleave(function(event) {
		/* Act on the event */
		$(this).find('.mask').hide();							
	});

	//  经典视频 移入mask
	$('.videoRight').children('a').mouseenter(function(event) {
		/* Act on the event */
		$(this).find('.videoRightMask').show();							
	});
	$('.videoRight').children('a').mouseleave(function(event) {
		/* Act on the event */
		$(this).find('.videoRightMask').hide();							
	});

});