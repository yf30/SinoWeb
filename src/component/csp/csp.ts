import * as Vue from 'vue';
import './csp.css';
import bottom from '../bottom/bottom'
import conHeader from '../conHeader/conHeader'

declare var $:any;

export default Vue.extend({
    template: require('./csp.html'),
    mounted(){

        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }
        //隐藏头部
        // $('#header').hide();
        $('.content').css({top:"0"});

        // $(".headerIcon2").removeClass('addHover2 headerIcon2').addClass('headerIconchange2');
        // $(".headerIcon3").attr("href","/#tms");

        $('#weChat').css({height:"898px"});
        $('#sinoWeChat').css({height:"898px"});

        //隐藏滚动底部
        $('.foot').hide();
    },
    components:{
        conHeader,
        bottom
    }
})