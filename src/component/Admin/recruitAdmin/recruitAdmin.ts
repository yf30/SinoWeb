import * as Vue from 'vue';


import './recruitAdmin.css';
import adminService from '../adminService';


declare var $:any;

export default Vue.extend({
    template: require('./recruitAdmin.html'),
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
            recruitList:[],
            total:0,
            dialogVisible:false,
            delId:"",
            // currentPage4:1
        }
    },
    methods: {
        loadData(startTime,endTime,title,pageSize,curPage){
            this['querying']=true;
            adminService.recruit.getRecruitList(startTime,endTime,title,pageSize,curPage).then(res=>{
                // console.log(res);
                this['querying']=false;
                let list=res.recruitList;
                list.forEach((item,index) => {
                    item.index=index+pageSize*(curPage-1)+1;
                });
                this['recruitList']=list;
                this['total']=res.totalCount;
            },rej=>{
                this['querying']=false;
            })
        },
        query(){
            
            this['loadData'](adminService.transformTime(this['startTime']),adminService.transformTime(this['endTime']),this['title'],this['pageSize'],this['curPage']);
        },
        handleSizeChange(_pageSize){
            this['pageSize']=_pageSize;
            this['query']();
        },
        handleCurrentChange(val){
            this['curPage']=val;
            this['query']();
        },
        handleEdit(id){
            this.$router.push({name:'editRecruit',query:{id:id}})  

        },
        handleDelete(id){
            this['delId']=id;
            this['$confirm']('确认删除此数据吗').then(result=>{
                adminService.recruit.delRecruit(this['delId']).then(res=>{
                    this['query']();
                },rej=>{})
            })
        },
        handleAdd(){
            
        }
    },
    components:{     
      
    }
})