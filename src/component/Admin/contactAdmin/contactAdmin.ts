import * as Vue from 'vue';


import './contactAdmin.css';
import adminService from '../adminService';


declare var $:any;

export default Vue.extend({
    template: require('./contactAdmin.html'),
    mounted(){
        $('header').hide();
        $('footer').hide();
        $('.ad-nav li').click(function(e){
            $(this).addClass('ad-active');
            $(this).siblings().removeClass('ad-active')
        })

        this['loadData'](adminService.transformTime(this['startTime']),adminService.transformTime(this['endTime']),this['name'],this['phone'],this['pageSize'],this['curPage']);
       


    },
    
    data(){
        return{
            name:"",
            phone:"",
            startTime:"",
            endTime:"",
            title:"",
            
            // pageSize:10,
            // curPage:1,
            querying:false,
            tableData:[],
            total:0,
            dialogVisible:false,
            delId:"",
            // currentPage4:1,


            startDateTime:"",
            endDateTime:"",
            ContactsPerson:"",
            ContactsTelephone:"",
            pageSize:10,
            curPage:1

        }
    },
    methods: {
        //多加了个pageSize
        loadData(startDateTime,endDateTime,ContactsPerson,ContactsTelephone,pageSize,CurPage){
            this['querying']=true;
            //下一行改
            adminService.contact.getMessageList(startDateTime,endDateTime,ContactsPerson,ContactsTelephone,pageSize,CurPage).then(res=>{
                this['querying']=false;
                let list=res.messageList;
                list.forEach((item,index) => {
                    item.index=index+pageSize*(CurPage-1)+1;
                });
                //newlist改成了tableData  <el-table :data="tableData" border style="width: 100%">
                this['tableData']=list;
                this['total']=res.totalCount;
            },rej=>{
                this['querying']=false;
            })
        },
        query(){
            // this['loadData']()
            this['loadData'](adminService.transformTime(this['startTime']),adminService.transformTime(this['endTime']),this['name'],this['phone'],this['pageSize'],this['curPage']);
        },
        handleSizeChange(val){
            this['pageSize']=val;
            this['query']();
        },
        handleCurrentChange(val){
            this['curPage']=val;
            this['query']();
            
        },
        handleEdit(id){
            this.$router.push({name:"editContact",query:{id:id}})
        },
        handleDelete(id){
            this['$confirm']('确认删除该信息吗').then(confirm=>{
                adminService.contact.delMessage(id).then(res=>{
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