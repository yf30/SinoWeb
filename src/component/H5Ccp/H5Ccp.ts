import * as Vue from 'vue';
import H5header from '../H5header/H5header';

import './H5Ccp.css';


declare var $:any;

export default Vue.extend({
    template: require('./H5Ccp.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }


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