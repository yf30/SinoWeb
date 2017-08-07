import * as Vue from 'vue';
import H5header from '../H5header/H5header';
import H5bottom from '../H5Bottom/H5Bottom';
import H5Wei from '../H5Wei/H5Wei';
// import dataService from'../about/aboutJson';
import 'mint-ui/lib/style.css'

import adminService from '../Admin/adminService';



import { Loadmore,Spinner} from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);

import './H5News.css';
declare var $:any;

export default Vue.extend({
    template: require('./H5News.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        this['wrapperHeight'] = document.documentElement.clientHeight ;//- this.$refs['wrapper']['getBoundingClientRect']().top

        this['wrapperWidth'] = document.documentElement.clientWidth;

        $('html, body').animate({
            scrollTop:$("#H5header").offset().top
        }, 1000);
        
    }, 
    data(){
        return{
           newsData:[],
           allLoaded:false,
           bottomStatus:'' ,
           page:5,
           wrapperHeight:0,
           LiLength:0,
           selected:"1",
           wrapperWidth:0,
           pageSize:10,
           curPage:1,
           total:0,
           src:""
           
        }
    },

    methods: {
        todetail(id){
            this.$router.push({name:'H5NewsDetail',query:{articleId: id}});
        },
        handleBottomChange(status) {
            this['bottomStatus'] = status;
        },

        getList(pageSize,curPage){
            adminService.news.getNewsList("","","",pageSize,curPage).then((res)=>{
                this['total']=res.totalCount;
                console.log("total",this['total'])
                res.newsList.forEach(ele=>{
                    this['newsData'].push(ele);
                });
                console.log('d1',res.newsList);

                this['newsData'].forEach(element => {
                    element.createDateTime = adminService.transformTime(element.createDateTime);
                    element.newsContent = element.newsContent.substring(0,37)+"......";
                    element.src=adminService.getBaseUrl()+ '/ow/' +element.newImagePath;
                    
                });
            },rej=>{
                // this['newsData'].push(pageSize)
            })
            
        },
        // loadTop(){//顶部下拉刷新
        //     console.log('top')
        //     this['getList']();
        //     this.$refs['loadmore']['onTopLoaded']();
        // },
        loadBottom(){//底部
            this['getList'](this['pageSize'], this['curPage']);    
            this['curPage']=this['curPage']+1;
            // for (let i = this['pageSize']; i <= this['pageSize']+10; i++) {
            //     console.log("this['newsData']",this['newsData'])
               
            // }
        
            setTimeout(()=>{
                // for()
                if(this['newsData'].length + 5 < this['total']){
                    this['allLoaded'] = false;
                }else{
                    this['allLoaded'] = true;
                }
                this.$refs['loadmore']['onBottomLoaded']();
                         
            },1500);
             
        }
        },

    created() {
        //  this['getList'](this['pageSize'], this['curPage']);    
        //  this['curPage']=this['curPage']+1;
        //    for (let i = 1; i <= 10; i++) {
        //         this['newsData'].push(i);
        //     }
    },
    
    components:{     
       'H5header': H5header,
       'H5bottom': H5bottom,
       'H5Wei':H5Wei
    }
})