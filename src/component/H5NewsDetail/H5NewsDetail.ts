import * as Vue from 'vue';
import H5header from '../H5header/H5header';
import H5bottom from '../H5Bottom/H5Bottom';
import H5Wei from '../H5Wei/H5Wei';
import dataService from'../about/aboutJson';

import { Toast,Indicator,Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);


import adminService from '../Admin/adminService';


import './H5NewsDetail.css';
declare var $:any;

export default Vue.extend({
    template: require('./H5NewsDetail.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        this['id']= this.$route.query
        this['id']=this['id'].articleId
        // console.log('id',this['id'])
        adminService.news.getNewsDetail(this['id']).then( (res)=> {
            console.log('res',res)
            this['newsDetailDate'] = res; 
            res.createDateTime = adminService.transformTime(res.createDateTime);
            this['imgSrc']=adminService.getBaseUrl()+ '/ow/'+res.newImagePath;
            
        },  (rej)=> { alert(rej) });
     

    }, 
    data(){
        return{
            id:"",
            imgSrc:"",
            newsDetailDate:{
                title:"",
                date:"",
                content:"",
            }
            
        }
    },

    methods: {
    },
    
    components:{     
       'H5header': H5header,
       'H5bottom': H5bottom,
       'H5Wei':H5Wei
    }
})