import * as Vue from 'vue';
import './ccp.css';
import bottom from '../bottom/bottom';


declare var $:any;


export default Vue.extend({
    template: require('./ccp.html'),
    mounted:()=>{
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        $('.content').css({top:"0"});

        
        // $(".headerIcon2").attr("href","/#tms");
        // $(".headerIcon3").removeClass('addHover3 headerIcon3').addClass('headerIconchange3');

        $('#weChat').css({height:"898px"});
        $('#sinoWeChat').css({height:"898px"});

        //隐藏滚动底部
        $('.foot').hide();
        
    },
    components:{
        bottom
    }
})