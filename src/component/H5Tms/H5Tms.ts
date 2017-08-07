import * as Vue from 'vue';
import H5header from '../H5header/H5header';

import './H5Tms.css'


declare var $:any;

export default Vue.extend({
    template: require('./H5Tms.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }


        // controlHTML:'<img src="././src/img/top.gif" />'

    },
    
    data(){
        return{
           
        }
    },
    methods: {
    },
    components:{     
       'H5header': H5header
    }
})