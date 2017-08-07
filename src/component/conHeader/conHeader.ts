import * as Vue from 'vue';
import './conHeader.css'

declare var $:any;

export default Vue.extend({
    template: require('./conHeader.html'),
    mounted(){
        // $('.conHeaderShowcartonl').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("left",$(window).width()).show();
        //     $("#open").animate({left:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });

        // $('.conHeaderShowcartonr').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("right",$(window).width()).show();
        //     $("#open").animate({right:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });

        if(this.$route.fullPath =='/tms'){
            $('.addHover').show();
            $('.addHover21').show();
            $('.addHover31').show();         
        }
        if(this.$route.fullPath=='/csp'){
            $(".headerIcon2").addClass('headerIconchange2');
            $('.addHover').show();
            $('.addHover22').show();
            $('.addHover32').show(); 
        }
        if(this.$route.fullPath=='/ccp'){
            $(".headerIcon3").addClass('headerIconchange3');
            $('.addHover').show();
            $('.addHover23').show();
            $('.addHover33').show(); 
        }
    },

    methods: {
    }
})