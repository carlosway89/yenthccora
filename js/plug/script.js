$(document).ready(function(){	
	var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:220,//mandatory property for decktop
		bottomMargin:294,//mandatory property for decktop
		topMarginMobileDevices:220,//mandatory property for mobile devices
		bottomMarginMobileDevices:294,//mandatory property for mobile devices
		bodyMinHeight:815,
		bodyMinHeightMobileDevices:550,
		delaySubMenuHide:100,
//-----menu---------------------------------------------------------------------------------------	
        menuInit:function (classMenu, classSubMenu){
            classMenu.find(">li").each(function(){
                var conText = $("> a", this).find('.base_text').text();
                $("> a", this).append("<div class='button_act'></div>");
			})
		},
		buttonOver:function (item){
		      $(".base_text", item).stop(true).animate({color:'#000'}, 500, 'easeOutSine');
              $(".button_act", item).stop(true).animate({top:0}, 450, 'easeOutExpo');
        },
		buttonOut:function (item){
		          $(".base_text", item).stop(true).animate({color:'#fff'}, 350, 'easeOutExpo');
                  $(".button_act", item).stop(true).animate({top:'-200px'}, 450, 'easeOutExpo');
        },
		subMenuButtonOver:function (item){ 
		      item.stop().animate({"color":"#fff"}, 300, "easeOutCubic");
              item.parent().find('span').stop().animate({opacity:1}, 350, "easeOutSine");
        },
		subMenuButtonOut:function (item){
		      item.stop().animate({"color":"#919191"}, 300, "easeOutCubic");
              item.parent().find('span').stop().animate({opacity:0}, 350, "easeOutSine");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				//subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
                subMenu.stop(true).slideDown(300, "easeOutExpo");
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				/*subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});*/
                subMenu.stop(true).delay(300).slideUp(300, "easeOutExpo");
      
			}
        },		
//-----PAGE-----------------------------------------------------------------------------------------------
		currPageAnimate:function (page){
		    $('#bgNav').stop().animate({'margin-top':'-110px'}, 350, 'easeOutExpo');
			$(".box", page).each(function(index){
			     $(this).css({"left":$(window).width()}).stop(true).delay(400+100*index).animate({"left":"0px"}, 500, "easeOutCubic")
			})
			page.equalHeights()
			$(".box_inner", page).bind("resize.rainbows", height_handler).trigger("resize.rainbows")
		},
		prevPageAnimate:function (page){
			$(".box_inner", page).unbind("*")
			var boxIndex = 0;
			$(".box", page).each(function(index){
					boxIndex ++;
					$(this).stop(true).delay(100*index).animate({"left":-$(window).outerWidth()*2}, 700, "easeInCubic");
			})
			page.delay(boxIndex*500)
		},
		backToSplash:function (){
              $('#bgNav').delay(750).stop().animate({'margin-top':'150px'}, 350, 'easeOutExpo');
              $(window).trigger('resize');        
        },
        pageLoadComplete:function (){ 
		  $('ol.search_list').siblings('h2').css({'margin-top':'24px', 'margin-left':'30px', 'margin-bottom':'16px'});
          //$('ol.search_list').css({width:'580px', 'float':'right'});
		}
	});
    	function height_handler(){
	 	if($(window).width()>767){
			$(this).parents(".currentHolder").equalHeights()
		}else{
			$(this).parents(".currentHolder").find(".maxheight").css({"height":"auto"})
		}
	}
})
$(window).load(function(){
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
//bgStretch------------------------------------------------------------------------------------------   
$('#bgNav ul li a').each(function(){            
    		$('<span class="colorPart" />')
    			.appendTo(this)
    			.css({
    				width:'100%'
    				,height:'100%'
    				,left:0
    				,top:0
                    ,position:'absolute'
    				,display:'inline-block'
    				//,backgroundColor:'#ff0000'
                    ,'z-index':0
    				,opacity:1
    			})
    	})
        
        $('#bgStretch')
    		.bgStretch({
    			align:'leftTop',
                autoPlay: false,
    			navigs:$('#bgNav').navigs({autoPlay:12000, prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
    			.navigs({
    				})
                    .navigs(0)
    		})
            .sImg({
                sleep: 1000,
                spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:.6}).stop().hide(3000)
            });  
            $('#bgNav').navigs(0)
//window resize-----------------------------------------------------------------------------------
        /*var h_cont=611;
    	var h, new_h;
    	setHeight();
    	h=new_h;
    	setSize();
    	function setHeight(){
    		new_h=$(window).height();
    	}
    	function setSize(){
    		if (h>h_cont) {
    			$('.spashBox').stop().animate({paddingTop:~~((h-h_cont)/2)});
                $('#bgNav').stop().animate({paddingTop:~~((h-h_cont)/2)});
    		} else {
    			$('.spashBox').stop().animate({paddingTop:0});
                $('#bgNav').stop().animate({paddingTop:0});
    		}
    	}
    	setInterval(setNew,1);
    	function setNew(){
    		setHeight();
    		if (h!=new_h) {
    			h=new_h;
    			setSize();
    		}
    	}*/
});