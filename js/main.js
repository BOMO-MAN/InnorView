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

	//  视频播放移入mask
	$('.video_ele').mouseenter(function(event) {
		/* Act on the event */
		$(this).find('.mask').show();							
	});

	$('.video_ele').mouseleave(function(event) {
		/* Act on the event */
		$(this).find('.mask').hide();							
	});

});