import * as Vue from 'vue';
import './header.css'

declare var $:any;

export default Vue.extend({
    template: require('./header.html'),
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted(){
        if(this.$route.fullPath=="/about"){
            this['activeIndex'] ='5';
        }
        if(this.$route.fullPath=="/about#about_job"){
            this['activeIndex'] ='5';
        }
        if(this.$route.fullPath=="/about#aboutCenter"){
            this['activeIndex'] ='5';
        }
        if(this.$route.fullPath=="/"){
            this['activeIndex'] ='1';
        }
        if(this.$route.fullPath=="/csp"){
            this['activeIndex'] ='2';
        }
        if(this.$route.fullPath=="/tms"){
            this['activeIndex'] ='3';
        }
        if(this.$route.fullPath=="/ccp"){
            this['activeIndex'] ='4';
        }

        // $('.showOpencarton').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("left",$(window).width()).show();
        //     $("#open").animate({left:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });
            
    },
    watch:{
        "$route":{
            handler:function(){
                // console.log(this.$route.fullPath)
                if(this.$route.fullPath=="/"){
                    this['activeIndex'] ='1';
                }
                if(this.$route.fullPath=="/csp"){
                    this['activeIndex'] ='2';
                }
                if(this.$route.fullPath=="/tms"){
                    this['activeIndex'] ='3';
                }
                if(this.$route.fullPath=="/ccp"){
                    this['activeIndex'] ='4';
                }
                if(this.$route.fullPath=="/about"){
                    this['activeIndex'] ='5';
                }
                if(this.$route.fullPath=="/about#about_job"){
                    this['activeIndex'] ='5';
                }
                if(this.$route.fullPath=="/about#aboutCenter"){
                    this['activeIndex'] ='5';
                }
            }
        }
    },
    data(){
        return{
            activeIndex:'1'
        }
    }
})