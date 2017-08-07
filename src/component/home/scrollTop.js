var scrolltotop={
	setting:{
		startline:100, //起始行
		scrollto:0, //滚动到指定位置
		scrollduration:400, //滚动过渡时间
		fadeduration:[500,100] //淡出淡现消失
	},
	controlHTML:'<img src="././src/img/top.gif" />', //返回顶部按钮
	controlHTMLPhone:'<img src="././src/img/top.gif" style="height:70px;width:70px" /> ',
	controlattrs:{offsetx:10,offsety:300},//返回按钮固定位置
	anchorkeyword:"#top",
	state:{
		isvisible:false,
		shouldvisible:false
	},scrollup:function(){
		if(!this.cssfixedsupport){
			this.$control.css({opacity:0});
		}
		var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);
		if(typeof dest=="string"&&jQuery("#"+dest).length==1){
			dest=jQuery("#"+dest).offset().top;
		}else{
			dest=0;
		}
		this.$body.animate({scrollTop:dest},this.setting.scrollduration);
		$('.page-loadmore-wrapper').animate({scrollTop:dest},this.setting.scrollduration);
	},keepfixed:function(){
		var $window=jQuery(window);
		var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx;
		var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety;	
		this.$control.css({left:controlx+"px",top:controly+"px"});
	},togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop();
		if(!this.cssfixedsupport){
			this.keepfixed();
		}
		this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false;//距离顶部为0时，返回顶部 才消失
		if(this.state.shouldvisible&&!this.state.isvisible){
			this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]);
			this.state.isvisible=true;
		}else{
			if(this.state.shouldvisible==false&&this.state.isvisible){
				this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]);
				this.state.isvisible=false;
			}
		}
	},init:function(){
		jQuery(document).ready(function($) {
		    var mainobj = scrolltotop;
		    var iebrws = document.all;
		    mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
		    mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body,.page-loadmore-wrapper");
			
			mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + "</div>")
			.css({ position: mainobj.cssfixedsupport ? "fixed" : "relative", bottom: mainobj.controlattrs.offsety, 
					right: mainobj.controlattrs.offsetx, opacity: 0, "z-index": 1000, cursor: "pointer" })
			.attr({ title: "" }).click(function() { mainobj.scrollup(); 
				return false; })
			.appendTo(".route-wrapper");

		    if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") {
		        mainobj.$control.css({ width: mainobj.$control.width() });
		    }
		    mainobj.togglecontrol();
		    $('a[href="' + mainobj.anchorkeyword + '"]').click(function() { mainobj.scrollup();
		        return false; });
		    $(window).bind("scroll resize", function(e) { mainobj.togglecontrol(); });
		});

	},
	initPhone:function(){
		jQuery(document).ready(function($) {
		    var mainobj = scrolltotop;
		    var iebrws = document.all;
		    mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
		    mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body,.page-loadmore-wrapper");
		    mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTMLPhone + "</div>")
		        .css({ position: mainobj.cssfixedsupport ? "fixed" : "relative", bottom: mainobj.controlattrs.offsety, 
		        	    right: mainobj.controlattrs.offsetx, opacity: 0, "z-index": 1000, cursor: "pointer" })
		        .attr({ title: "" }).click(function() { mainobj.scrollup(); 
		            return false; })
		        .appendTo(".route-wrapper");
		    if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") {
		        mainobj.$control.css({ width: mainobj.$control.width() });
		    }
		    mainobj.togglecontrol();
		    $('a[href="' + mainobj.anchorkeyword + '"]').click(function() { mainobj.scrollup();
		        return false; });
		    $(window).bind("scroll resize", function(e) { mainobj.togglecontrol(); });
		});
	}

};



//判断是用手机还是电脑打开页面的
var system ={  
	win : false,  
	mac : false,  
	xll : false  
};  
//检测平台  
var p = navigator.platform;  
system.win = (p.indexOf("Win") == 0);  
system.mac = (p.indexOf("Mac") == 0);  
//跳转语句  手机端和电脑端的回到顶部大小不一样
if(system.win||system.mac){
	scrolltotop.init();
}else{ 
	scrolltotop.initPhone();
}


