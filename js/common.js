$(function(){
	//首页左侧菜单列表
	$('.menu_product').on('click',function(){
		$('.menu_product1').toggle();
		$('.menu_product2').toggle();
	})
	$('.menu_brand').on('click',function(){
		$('.menu_brand1').toggle();
		$('.menu_brand2').toggle();
	})
	//左侧菜单显示隐藏
	$( '.sidebar' ).simpleSidebar({
        settings: {
            opener: '#open-sb',
            wrapper: '.wrapper',
            animation: {
                duration: 500,
                easing: 'easeOutQuint'
            }
        },
        sidebar: {
            align: 'left',
            width: 250,
            closingLinks: 'a',
        }
    });
    //首页share
    $('.index_share_weibo').on('mouseover',function(){
    	$('.index_share').animate({opacity:'1',backgroundColor:'#e12830'},'slow')
    })
    $('.index_share_taobao').on('mouseover',function(){
    	$('.index_share').animate({opacity:'1',backgroundColor:'#f77c0f'},'slow')
    })
    $('.index_share_weibo,.index_share_taobao').on('mouseout',function(){
    	$('.index_share').animate({opacity:'1',backgroundColor:'#a1a4a9'},'slow')
    })
    $('.index_share_wechat').bind('mouseover',function(){
    	$('.index_share_ewm_main').show();
    	$('.index_share').animate({opacity:'1',backgroundColor:'#62c348'},'slow')
    }).bind('mouseout',function(){
        $('.index_share_ewm_main').hide();
        $('.index_share').animate({opacity:'1',backgroundColor:'#a1a4a9'},'slow')
    })
   //商务页图片颜色渐变
    $('.brand_cooperation_content').mouseover(function(){
    $('.brand_cooperation_content_main').animate({opacity:'1'},1200).animate({opacity:'0.5'},'slow').animate({opacity:'0'},'fast')
    return false;
   })
    //新闻页底部页面选中
    
})