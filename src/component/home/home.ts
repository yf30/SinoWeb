import * as Vue from 'vue';
import header from '../header/header';
import tophome from '../tophome/tophome';
import tophomebg from '../tophomeBg/tophomeBg';
import showproject from '../showproject/showproject';
import advantages from '../advantages/advantages';
import partner from '../partner/partner';
import download from '../download/download';
import bottom from '../bottom/bottom';
import foot from '../footer/footer';

import './jquery.fullPage.css';
import './jquery.fullPage.js';

import './scrollTop.js'

import './home.css';

declare var $:any;

export default Vue.extend({
    template: require('./home.html'),
    mounted(){
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        //判断是用手机还是电脑打开页面的
        var system ={  
            win : false,  
            mac : false,  
            xll : false  
        };  
        //检测平台  
        var p = navigator.platform;  
        //alert(p);  
        
        /**var sUserAgent = navigator.userAgent.toLowerCase(); 
        alert(sUserAgent);*/  
        
        system.win = (p.indexOf("Win") == 0);  
        system.mac = (p.indexOf("Mac") == 0);  
        // system.xll = ((p == "X11") || (p.indexOf("Linux") == 0));  //Linux
        //跳转语句  
        if(system.win||system.mac){//||system.xll
            // console.log("win");
            this.$router.push('/');
        }else{ 
            //alert('ddd');
            this.$router.push('/H5home'); 
        }

        var BannerLoop=function(){
            var pics = $('div#tophomebg img');      
            var active = pics.filter(".actives").length ? pics.filter(".actives") : pics.first()  
            // console.log(active,'active');
            var next = active.next().length ? active.next() : pics.first();
            active.css({"z-index": 9}).animate({opacity:0},1080);//.removeClass('active').animate({opacity:0},1080);
            next.css({opacity: 0.7, "z-index": 10}).addClass('actives').animate({opacity:1.0},1080,()=>{
                //active.css({'z-index':8});
                active.removeClass('actives').css({"z-index": 8});
            });
        }

    var BannerLoop2=function(){//才出来的时候要隐藏第一张即将显示过去的图片的末尾动画
            $('#tophomepic3').hide();//opacity: 0.5会让图片显现出来
            var pics = $('div#tophomebg img');      
            var active = pics.filter(".actives").length ? pics.filter(".actives") : pics.first()  
            // console.log('active',active);
            var next = active.next().length ? active.next() : pics.first();
            active.css({"z-index": 9}).css({opacity:0});//.removeClass('active').animate({opacity:0},1080);
            next.css({opacity: 0.7, "z-index": 10}).addClass('actives').animate({opacity:1.0},1080,()=>{
                //active.css({'z-index':8});
                active.removeClass('actives').css({"z-index": 8});
                $('#tophomepic3').show();//将隐藏的图片显示出来
            });
    }

   

    if(!this['stop']){
         BannerLoop2();
         this['stop']=window.setInterval(BannerLoop,5880);
    }


    
        //console.log('this is ',this['index']);
        //初始化fullpage
        $('#home').fullpage({
            scrollOverflow:true,
            verticalCentered: false,
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: true,
            navigationTooltips: ['首页', '项目展示', '平台优势','战略伙伴','应用下载'],

            
            afterLoad: (anchorLink, index)=>{

                $('#topcontrol').css({cursor:"auto"})
                if(index == 1){ 
                    $('.foot').show();
                    this['index']=1;
                    
                    //console.log('this is ',this,this['index']);
                }
                if(index == 2){
                    var userAgent = navigator.userAgent;
                    if(userAgent.indexOf("Edge") > -1 || (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE")) || userAgent.indexOf("rv") > -1){
                        $('#spborder1').css({display:'block'}).addClass('changePath1');
                        $('#spborder2').css({display:'block',width:'235px',height:'135px'}).addClass('changePath1');
                        $('#spborder3').css({display:'block'}).addClass('changePath3');
                        $('#spborder4').css({display:'block'}).addClass('changePath3');
                        $('#spborder5').css({display:'block',height:'114px'}).addClass('changePath2');
                    }
                    $('#showproject img').addClass('showprojectImg');
                    $('.tms-pic img').addClass('showprojectImg');
                    $('.csp-pic img').addClass('showprojectImg2');
                    $('.ccp-pic img').addClass('showprojectImg3');

                    $('#showproject p').addClass('fonttrasition');
                    $('#showproject span').addClass('fonttrasition');
                    $('.arrow').addClass('arrowtransition1');
                    $('#pre').addClass('arrowtransition2');
                    
                    var char = 'http://www.w3.org/2000/svg',
                    path = $('path');
                    // console.log(path);
                    path.each((index,item)=>{
                        // console.log(item);
                        var len = item.getTotalLength();
                        item.style.strokeDasharray = len;
                        item.style.strokeDashoffset = len;
                        if(index == 2  || index == 3){
                            item.style.stroke = '#87CEFA';
                            item.style.animation = 'act 2s linear 1.5s forwards';
                        }else if(index == 4){
                            item.style.stroke = '#87CEFA';
                            $('.down-text').addClass('fontContent');
                            item.style.animation = 'act 1s linear 3.5s forwards';
                        }else{ 
                            item.style.animation = 'act 2s linear 1.5s forwards';
                        }
                        
                    });
                }

                if(index==3){
                    $('#advantages1').addClass('advantagesA');
                    $('#advantages2').addClass('advantagesB');
                    $('#advantages3').addClass('advantagesC');
                }
                if(index == 5){
                    $('.downl').addClass('downlshow');
                    $('.downc').addClass('downcshow');
                    $('.downr').addClass('downrshow');
                    // $('.downl').css({animation:'fadeInUp 1s ease-in-out 1 0.5s'});
                    // $('.downc').css({animation:'fadeInUp 1s ease-in-out 1 1s'});
                    // $('.downr').css({animation:'fadeInUp 1s ease-in-out 1 1.5s'});
                    // $('.downl').css({opacity:'1'});
                    // $('.downc').css({opacity:'1'});
                    // $('.downr').css({opacity:'1'});
                    // $('.downl').hover(
                    //     function(){
                    //         $('.downl').css({animation:''});
                    //     }
                    // );
                    // $('.downc').hover(
                    //     function(){
                    //         $('.downc').css({animation:''});
                    //     }
                    // );
                    // $('.downr').hover(
                    //     function(){
                    //         $('.downr').css({animation:''});
                    //     }
                    // );
                }
            },

            onLeave:(anchorLInk, index)=>{

                if(index!==1){
                    // $('div#tophomebg img').css({"z-index": 8}).first().css({"z-index": 9});
                     this['index']=0;
                     //console.log('this is ',this,this['index']);
                }
                if(index == 1){
                    //window.clearInterval(this['stop']);
                    // $('div#tophomebg img').removeClass('active');
                    // $("#tophomepic1").removeClass('active');
                    // $("#tophomepic2").removeClass('active');
                    // $("#tophomepic3").removeClass('active');
                }
                if(index == 2){
                    var userAgent = navigator.userAgent;
                    if(userAgent.indexOf("Edge") > -1 || (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE")) || userAgent.indexOf("rv") > -1){
                        $('#spborder1').css({display:'none'}).removeClass('changePath1');
                        $('#spborder2').css({display:'none'}).removeClass('changePath1');
                        $('#spborder3').css({display:'none'}).removeClass('changePath3');
                        $('#spborder4').css({display:'none'}).removeClass('changePath3');
                        $('#spborder5').css({display:'none'}).removeClass('changePath2');
                    }
                    $('#showproject img').removeClass('showprojectImg');
                    $('.tms-pic img').removeClass('showprojectImg');
                    $('.csp-pic img').removeClass('showprojectImg2');
                    $('.ccp-pic img').removeClass('showprojectImg3')
                    // $('#showproject img').removeClass('fadeInUp');
                    $('#showproject p').removeClass('fonttrasition');
                    $('#showproject span').removeClass('fonttrasition');
                    $('#showproject svg path').attr('style',"");
                    $('.down-text').removeClass('fontContent');
                    $('.arrow').removeClass('arrowtransition1');
                    $('#pre').removeClass('arrowtransition2');
                }

                if(index==3){
                    $('#advantages1').removeClass('advantagesA');
                    $('#advantages2').removeClass('advantagesB');
                    $('#advantages3').removeClass('advantagesC');
                }

                if(index == 5){
                    $('.foot').hide();
                    $('.downl').removeClass('downlshow');
                    $('.downc').removeClass('downcshow');
                    $('.downr').removeClass('downrshow');
                }

                if(index == 4 || index ==3 || index == 2 || index == 1){
                    $('.foot').show();
                }
            }

        
        });

        // $('#header').show();
        // $('.content').css({top:"92px"});

        $('#weChat').css({height:"858px"});
        $('#sinoWeChat').css({height:"858px"});

    },
    // data() {
    //     return {
    //         form: {
    //             name: '',
    //             region: '',
    //             date1: '',
    //             date2: '',
    //             delivery: false,
    //             type: [],
    //             resource: '',
    //             desc: ''
    //         }
    //     }
    // },
    beforeDestroy:function(){
        // console.log('离开首页')
        if(this.$route.fullPath == '/about' || this.$route.fullPath == '/csp' || this.$route.fullPath == '/ccp' || this.$route.fullPath == '/tms'){
            window.clearInterval(this['stop']);
            $('#topcontrol').css({cursor:"pointer"})        
        }
     },
    data(){
        return{
            index:1,
            stop:null
        }
    },
    methods: {
    },
    components:{
        'admin-header': header,
        tophome,
        tophomebg,
        showproject,
        advantages,
        partner,
        download,
        bottom,
        foot
        
    }
})