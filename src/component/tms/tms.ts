import * as Vue from 'vue';
import './tms.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import '../../../node_modules/islider.js/build/index.bundle.js';
import bottom from '../bottom/bottom';
import conHeader from '../conHeader/conHeader'

declare var $:any;

export default Vue.extend({
    template: require('./tms.html'),
    mounted:()=>{
        // //首页的滚屏
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        };
        //首页的底部蓝色往下翻
        $('.foot').hide();

        //头部
        // $('#header').hide();
        $('.content').css({top:"0"});
        
        // $(".headerIcon2").attr("href","/#csp");
        // $(".headerIcon3").attr("href","/#ccp");
        $('#weChat').css({height:"898px"});
        $('#sinoWeChat').css({height:"898px"});

        $("#myCarousel").carousel({interval:3000},'cycle');//每隔3秒自动轮播 
        // $('#ido').scrollTop(0);

    },
    components:{
        conHeader,
        bottom
    }
})
