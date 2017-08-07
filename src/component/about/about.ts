import * as Vue from 'vue';
import './about.css';
import './slide.css';
import './slide_to_show.css'
import bottom from '../bottom/bottom';
// import dataService from'./aboutJson';
import adminService from '../Admin/adminService';
import header from '../header/header';

declare var $:any;



export default Vue.extend({
    template: require('./about.html'),
    
    mounted: function(){
        // //首页的滚屏
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }; 

        $('.content').css({top:"0px"});
        //首页的底部蓝色往下翻     
        $('.foot').hide();

        // //跳转页面开场动画
        // $('.jumpLeft').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("left",$(window).width()).show();
        //     $("#open").animate({left:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });

        // $('.jumpRight').click(()=>{
        //     $("#open").attr('style',"");
        //     $('.content').css({opacity:0});
        //     $("#open").stop(false,true);
        //     $("#open").css("right",$(window).width()).show();
        //     $("#open").animate({right:0},800,'linear',()=>{
        //         $('.content').css({opacity:1});
        //     }).delay(500).fadeOut(800);
        // });
        

        // adminService.upload().then( (res)=> {
        //     this['newsData'] = res.news.reverse();  //将消息数组倒置过来，最新的消息在上面 
        //     console.log('dd',this['newsData'])
        // },  (rej)=> { alert(rej) });

        adminService.news.getAllNews().then(res=>{
                this['newsData']=res.newsList.reverse();
                this['newsData'].forEach(element=>{
                    element.createDateTime = adminService.transformTime(element.createDateTime);
                })
                console.log('dd1',this['newsData'])
            },rej=>{        
        });

        adminService.recruit.getAllRecruitsList().then(res=>{
            // this['recruitData'] = res.recruitList;
            console.log('job',this['recruitData']);
            if(res.totalCount<=4){
                this['nextShow']=false;
            }
            this['recruitData']=this['recruitData'].concat(res.recruitList.reverse())


            $('#sliderTV').css({'width':(res.recruitList.length*310)+'px'});

            

        })


        // 新闻中心
        // var newsLength = $('.aboutNews_list li').length;
        // $('.aboutNews_list').css({'height':(newsLength)*74+'px'})
        // this['newsMaxIndex'] = newsLength-5;
        


        //人才招聘
        // var listLength=$('.sliderTV__item').length;
        // $('#sliderTV').css({'width':(listLength*310)+'px'});
        // this['maxIndex']=listLength-4;


        //关于我们 头部背景图片轮播 目前未使用到
        this['screenWidth']=window.innerWidth||document.body.clientWidth;
        this['about_left_index']=0;
        this['about_top_item_num']=$('.about_top_element').length;
        $('.about_top_ele_box').css({'width':this['screenWidth']+'px'})
        window.onresize=(event)=>{
             this['screenWidth']=window.innerWidth||document.body.clientWidth;
            $('.about_top_ele_box').css({'width':this['screenWidth']+'px'})
            $('.about_top_container').css({'left':'0px'});      
        }

    },
    components:{
        'admin-header': header,
        bottom
    },
    data: ()=> {
        return{
            leftIndex:0,
            maxIndex:1,
            newsIndex:0,
            newsMaxIndex:1,

            about_left_index:0,
            screenWidth:1160,
            about_top_item_num:0,

            newsHistoryShow:false,
            newsData:[],
            newsDetailData:{
                text:"",
                imgs:""
            },
            recruitData:[],
            prevShow:false,
            nextShow:true,
            //一次获取条数
            // pageSize:10,
            //当前页数
            curPage:1,
            //图片路径
            imgSrc:""
            
        }
    },
    methods:{
        //商务洽谈 关闭div
        chatClosed(){
            $('.aboutOpen').slideUp(400)
        },
        //弹出div
        chatOpen(){
            $('.aboutOpen').slideDown(400);
        },

        //人才招聘
        next:function(){
            var listLength=$('.aboutJob_List li').length;
            $('#sliderTV').css({'width':(listLength*310)+'px'});
            this['maxIndex']=listLength-4;

            if(isNaN(this['leftIndex'])){
                this['leftIndex']=0;
            }
            if(this['leftIndex']>=this['maxIndex']){return}
            this['leftIndex']++;
            //判断左右翻的箭头显示还是隐藏
            if(this['leftIndex']>=this['maxIndex']){this['nextShow']= false}
            this['prevShow']=true;
            
            var left=278*this['leftIndex'];

           
            $('#sliderTV').animate({"left":-left+"px"},300);
            

        },
        prev:function(){
            if(isNaN(this['leftIndex'])){
                this['leftIndex']=0;
                return;
            }
            if(this['leftIndex']<=0){return};
            this['leftIndex']--;
            //判断左右翻的箭头显示还是隐藏
            if(this['leftIndex']<=0){
                this['prevShow']=false;
            }
            this['nextShow']=true;

            var left=278*this['leftIndex'];
            
            $('#sliderTV').animate({"left":-left+"px"},300)

        },
        //新闻中心
        //还有更多
        moreNews:function(){
            var newsLength = $('.aboutNews_list li').length;
            $('.aboutNews_list').css({'height':(newsLength)*74+'px'})
            this['newsMaxIndex'] = newsLength-5;

            if(isNaN(this['newsIndex'])){
                this['newsIndex']=0;
            }
            if(this['newsIndex']>=this['newsMaxIndex']){return}
            this['newsIndex']++; 
            //新闻中心 上翻按钮 显示
            this['newsHistoryShow'] = true;
            var height= 74*this['newsIndex'];
            $('.aboutNews_list').animate({"top":-height+'px'},300)
        },
        //上翻按钮
        aboutNewsHistory:function(){
            if(isNaN(this['newsIndex'])){
                this['newsIndex']=0;
                return;
            }
            if(this['newsIndex']<=0){   return; };
            this['newsIndex']--;  
            //翻到顶部就隐藏掉上翻按钮
            if(this['newsIndex']<=0) {
                this['newsHistoryShow'] = false;
            }
            var height=74*this['newsIndex'];    
            $('.aboutNews_list').animate({"top":-height+"px"},300)
        },

        //显示信息内容//展开新闻信息
        newsClick(data){
        adminService.news.getNewsDetail(data.id).then(res=>{
            console.log('id',data.id)
                this['newsDetailData'] = res;
                this['imgSrc']=adminService.getBaseUrl()+ '/ow/' + res.newImagePath;
                console.log('dd2',this['newsDetailData'])
            },rej=>{        
        })
            $('.aboutNews_details').slideDown(400);//show(0)
            $('.content_mark').slideDown(400);   
        },
        //关闭 展开的新闻信息
        newsClosed(){     
            $('.content_mark').slideUp(400);
            $('.aboutNews_details').slideUp(400);
        },

        //关于我们 头部背景图片轮播
        top_to_left:()=>{
            // alert('left')
            if(this['about_left_index']>=this['about_top_item_num']-1){return}
            this['about_left_index']++;
            
            var components=$('.about_top_container');
            components.animate({'left':-this['screenWidth']*this['about_left_index']+'px'},300);
            $('.about_top_container').animate({"background-image":"url('../../img/about_news.jpg')"})
            
        },
        top_to_right:()=>{
            if(this['about_left_index']<=0){return}
            this['about_left_index']--;
            $('.about_top_container').animate({'left':-this['screenWidth']*this['about_left_index']+'px'},600)
        },
    }
})