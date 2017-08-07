import * as Vue from 'vue';


import './newsAdmin.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./newsAdmin.html'),
    mounted(){
        $('header').hide();
        $('.foot').hide();
        $('.ad-nav li').click(function(e){
            $(this).addClass('ad-active');
            $(this).siblings().removeClass('ad-active')
        })

        this['loadData'](adminService.transformTime(this['startTime']),adminService.transformTime(this['endTime']),this['title'],this['pageSize'],this['curPage']);


    },
    
    data(){
        return{
            
            startTime:"",
            endTime:"",
            title:"",
            
            pageSize:10,
            curPage:1,
            querying:false,
            newsList:[],
            total:0,
            dialogVisible:false,
            delId:""
        }
    },
    methods: {
        loadData(startTime,endTime,title,pageSize,curPage){
            this['querying']=true;
            adminService.news.getNewsList(startTime,endTime,title,pageSize,curPage).then(res=>{
                // console.log(res);
                this['querying']=false;
                let list=res.newsList;
                list.forEach((item,index) => {
                    item.index=index+pageSize*(curPage-1)+1;
                });
                this['newsList']=res.newsList;
                this['total']=res.totalCount;
            },rej=>{
                this['querying']=false;
            })
        },
        query(){
            // this['loadData']()
            this['loadData'](adminService.transformTime(this['startTime']),adminService.transformTime(this['endTime']),this['title'],this['pageSize'],this['curPage']);
        },
        handleSizeChange(pagesize){
            this['pageSize']=pagesize;
            this['query']();
        },
        handleCurrentChange(_curpage){
            // console.log('handleCurrentChange')
            this['curPage']=_curpage;
            this['query']();
        },
        handleEdit(id){
            // this.$router.push()
            this.$router.push({name:'editNews',query:{id:id}})  
        },
        handleDelete(id){
            this['delId']=id;
            this['$confirm']('确认删除此数据吗').then(result=>{
                adminService.news.delNews(this['delId']).then(res=>{
                    this['query']();
                },rej=>{})
            }).catch(e=>{})
        },
        
        handleAdd(){

        }
    },
    components:{     
      
    }
})