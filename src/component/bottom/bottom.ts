import * as Vue from 'vue';
import './bottom.css';

declare var $:any;

export default Vue.extend({
    template: require('./bottom.html'),
    mounted(){
        // $('.bottomLink').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("left",$(window).width()).show();
        //     $("#open").animate({left:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });

        $('#link1').hover(
            function(){
                $('#icon1').addClass('liIconChange');
            },
            function(){
                $('#icon1').removeClass('liIconChange');
            }
        );

        $('#link2').hover(
            function(){
                $('#icon2').addClass('liIconChange');
            },
            function(){
                $('#icon2').removeClass('liIconChange');
            }
        );
        $('#link3').hover(
            function(){
                $('#icon3').addClass('liIconChange');
            },
            function(){
                $('#icon3').removeClass('liIconChange');
            }
        );

        
    },
    methods: {
        openWeChat(){
            $('#weChat').css({height:'100%'}).slideDown("slow");
            $('#sinoWeChat').css({height:'100%'}).slideDown("fast");
        },
        openEmail(){
            $('#Email').css({height:'100%'}).slideDown("slow");
            $('#sinoEmail').css({height:'100%'}).slideDown("fast");
        },
        changeC(){
            // this.$router.push('/about');
            if(this.$route.fullPath == '/about'){
                $('html, body').animate({
                    scrollTop:$("#aboutCenter").offset().top
                }, 1000);
            }else{
                this.$router.push('/about');     
                setTimeout(this['gunC'],300);//进入about页面需要一些时间渲染出dom，再执行滚动
            }
            
        },
        changeZ(){
            this.$router.push('/about');     
            setTimeout(this['gunZ'],300);
        },
        gunC(){
            $('html, body').animate({
                scrollTop:$("#aboutCenter").offset().top
            }, 1000);
        },
        gunZ(){
            $('html, body').animate({
                scrollTop:$("#about_job").offset().top
            }, 1000);
        }
   
    }
})