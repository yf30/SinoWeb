import * as Vue from 'vue';
import './error.css';
declare var $:any;

 export default Vue.extend({
    template: require('./error.html'),
    mounted: function(){
      // //首页的滚屏
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        };

        
        var heights=$(window).height()-40;
        $('.wscn-http404').css({height:heights+'px'})

        $('header').hide()
        //首页的底部蓝色往下翻     
        $('.foot').hide();
    }

})
